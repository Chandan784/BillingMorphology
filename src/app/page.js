// src/app/page.js
import Header from "./components/Header";
import Footer from "./components/Footer";
import TrustedBy from "./components/TrustedBy";
import FeatureCards from "./components/FeatureCard";

import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import TrainingSuccess from "./components/TrainingSucess";
import CareerVideoSection from "./components/CareerVideoSection";
import CourseLevelsSection from "./components/CourseLevelSection";
import AboutUsSection from "./components/TeamSection";
import { Contact } from "lucide-react";
import ContactUsSection from "./components/CotactusSection";
import JobOpportunities from "./components/JobOppertunities";
import TargetAudience from "./components/TargetAudience";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto ">
        {/* HERO */}
        <Hero />

        {/* TRUSTED BY */}
        <TrustedBy />
        <CareerVideoSection />
        <TrainingSuccess />
        {/* <CareerVideoSection /> */}

        {/* Video Section */}

        {/* Testimonials */}

        <Testimonials />

        <CourseLevelsSection />

        <JobOpportunities />
        <TargetAudience />
        <AboutUsSection />
        <ContactUsSection />
      </main>
    </>
  );
}
