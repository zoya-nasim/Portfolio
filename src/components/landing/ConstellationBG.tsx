"use client";

import React, { useEffect, useRef } from "react";

type Node = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    glow: number; // 0..1
};

type Signal = {
    a: number; // index of from node
    b: number; // index of to node
    t: number; // progress 0..1
    speed: number;
    life: number; // fades out
};

export default function ConstellationBG() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        const DPR = Math.min(window.devicePixelRatio || 1, 2);

        let w = 0;
        let h = 0;

        const resize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = Math.floor(w * DPR);
            canvas.height = Math.floor(h * DPR);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        // ===== CONFIG =====
        const NODE_COUNT = Math.floor(Math.min(190, (w * h) / 9500)); // adaptive
        const LINK_DIST = 170; // max connection distance
        const SPEED = 0.22; // node drift speed
        const BASE_NODE_ALPHA = 0.55;

        // Purple theme
        const PURPLE = "168,85,247"; // tailwind purple-500
        const BLUE = "56,189,248";   // sky-ish highlight

        // Create nodes
        // ===== GRID + JITTER DISTRIBUTION =====
// Controls how evenly spaced the pattern is
        const GRID_CELL = 95; // smaller => more nodes (denser), larger => fewer nodes
        const JITTER = 0.45;  // 0..1 (how "random" within the grid cell)

// Build grid
        const cols = Math.floor(w / GRID_CELL);
        const rows = Math.floor(h / GRID_CELL);

// ensure full coverage
        const cellW = w / cols;
        const cellH = h / rows;

        const nodes: Node[] = [];

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const cx = (x + 0.5) * cellW;
                const cy = (y + 0.5) * cellH;

                // jitter inside each grid cell (keeps it organic but still evenly distributed)
                const jx = (Math.random() - 0.5) * cellW * JITTER;
                const jy = (Math.random() - 0.5) * cellH * JITTER;

                nodes.push({
                    x: cx + jx,
                    y: cy + jy,
                    vx: (Math.random() - 0.5) * SPEED,
                    vy: (Math.random() - 0.5) * SPEED,
                    r: 1.4 + Math.random() * 1.3,
                    glow: 0,
                });
            }
        }

// If you still want to cap the node count like your NODE_COUNT, slice it:
        if (nodes.length > NODE_COUNT) nodes.length = NODE_COUNT;


        let signals: Signal[] = [];

        const dist = (a: Node, b: Node) => {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            return Math.sqrt(dx * dx + dy * dy);
        };

        // pick nearest neighbor for a node
        const nearestNeighbor = (idx: number) => {
            const A = nodes[idx];
            let best = -1;
            let bestD = Infinity;
            for (let j = 0; j < nodes.length; j++) {
                if (j === idx) continue;
                const d = dist(A, nodes[j]);
                if (d < bestD) {
                    bestD = d;
                    best = j;
                }
            }
            return best;
        };

        // spawn a traveling signal
        const spawnSignal = () => {
            const a = Math.floor(Math.random() * nodes.length);
            const b = nearestNeighbor(a);
            if (b === -1) return;

            signals.push({
                a,
                b,
                t: 0,
                speed: 0.010 + Math.random() * 0.012, // speed of travel
                life: 1,
            });
        };

        // spawn periodically
        let lastSpawn = 0;

        const tick = (time: number) => {
            // soft clear for subtle trails
            ctx.fillStyle = "rgba(0,0,0,0.30)";
            ctx.fillRect(0, 0, w, h);

            // move nodes
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;

                // gentle bounce
                if (n.x < 0 || n.x > w) n.vx *= -1;
                if (n.y < 0 || n.y > h) n.vy *= -1;

                n.x = Math.max(0, Math.min(w, n.x));
                n.y = Math.max(0, Math.min(h, n.y));

                // glow decay
                n.glow *= 0.93;
            }

            // draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const A = nodes[i];
                    const B = nodes[j];
                    const d = dist(A, B);
                    if (d > LINK_DIST) continue;

                    const a = 1 - d / LINK_DIST;
                    const alpha = Math.pow(a, 1.7) * 0.35;

                    ctx.strokeStyle = `rgba(${PURPLE},${alpha})`;
                    ctx.lineWidth = 1;

                    ctx.beginPath();
                    ctx.moveTo(A.x, A.y);
                    ctx.lineTo(B.x, B.y);
                    ctx.stroke();
                }
            }

            // spawn signals
            if (time - lastSpawn > 520) {
                lastSpawn = time;
                spawnSignal();
                if (Math.random() > 0.55) spawnSignal(); // sometimes double
            }

            // update and draw signals
            const nextSignals: Signal[] = [];
            for (const s of signals) {
                const A = nodes[s.a];
                const B = nodes[s.b];

                s.t += s.speed;
                s.life *= 0.988;

                const x = A.x + (B.x - A.x) * s.t;
                const y = A.y + (B.y - A.y) * s.t;

                // glowing dot (signal head)
                ctx.beginPath();
                ctx.fillStyle = `rgba(${BLUE},${0.9 * s.life})`;
                ctx.shadowColor = `rgba(${BLUE},${0.9 * s.life})`;
                ctx.shadowBlur = 18;
                ctx.arc(x, y, 2.2, 0, Math.PI * 2);
                ctx.fill();

                // glow up nodes when signal hits end
                if (s.t >= 1) {
                    nodes[s.b].glow = 1;
                    // chain reaction: continue to another neighbor
                    const next = nearestNeighbor(s.b);
                    if (next !== -1 && Math.random() > 0.2) {
                        nextSignals.push({
                            a: s.b,
                            b: next,
                            t: 0,
                            speed: s.speed * (0.9 + Math.random() * 0.4),
                            life: 1,
                        });
                    }
                    continue;
                }

                if (s.life > 0.08) nextSignals.push(s);
            }
            signals = nextSignals;

            // draw nodes (after lines for crispness)
            ctx.shadowBlur = 0;
            for (const n of nodes) {
                const glowAlpha = n.glow * 0.85;

                // glow
                if (glowAlpha > 0.01) {
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(${PURPLE},${glowAlpha})`;
                    ctx.shadowColor = `rgba(${PURPLE},${glowAlpha})`;
                    ctx.shadowBlur = 22;
                    ctx.arc(n.x, n.y, n.r + 1.2, 0, Math.PI * 2);
                    ctx.fill();
                }

                // core dot
                ctx.beginPath();
                ctx.shadowBlur = 0;
                ctx.fillStyle = `rgba(255,255,255,${BASE_NODE_ALPHA + n.glow * 0.5})`;
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("resize", resize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
            aria-hidden="true"
        />
    );
}
