import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/landing/AboutSection";
import SkillsSection from "@/components/landing/SkillsSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import LeadershipSection from "@/components/landing/LeadershipSection";
import AchievementsSection from "@/components/landing/AchievementsSection";
import EducationSection from "@/components/landing/EducationSection";
import CertificationsSection from "@/components/landing/CertificationsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import ConstellationBG from "@/components/landing/ConstellationBG";

export default function Home() {
  return (
      <>
          <ConstellationBG /> {/* background canvas */}
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <LeadershipSection />
          <AchievementsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </>
  );
}
