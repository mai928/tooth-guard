
import Header from "@/components/Header";
import OurSerives from "@/components/OurSerives";
import Pannar from "@/components/Pannar";
import Services from "@/components/Service";
import ServicesSection from "@/components/ServicesSection";
export default function Home({params ,locale}) {
  return ( 
    <div>
      <Header />
      <ServicesSection params={params} />
      <Services />
      <OurSerives/>
      <Pannar />
    </div>
  );
}
