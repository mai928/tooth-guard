'use client'
import Header from "@/components/Header";
import OurSerives from "@/components/OurSerives";
import Pannar from "@/components/Pannar";
import Services from "@/components/Service";
import ServicesSection from "@/components/ServicesSection";
export default function Home() {
  return ( 
    <div>
      <Header />
      <ServicesSection />
      <Services />
      <OurSerives />
      <Pannar />
    </div>
  );
}
