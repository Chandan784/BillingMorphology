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

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto ">
        {/* HERO */}
        <Hero />

        {/* TRUSTED BY */}
        <section className="mt-12">
          <TrustedBy />
        </section>

        <TrainingSuccess />
        {/* <CareerVideoSection /> */}

        {/* Video Section */}

        {/* Testimonials */}
        <section className="mt-12">
          <Testimonials />
        </section>
        <section className="mt-12">
          <CourseLevelsSection />
        </section>
      </main>
    </>
  );
}
