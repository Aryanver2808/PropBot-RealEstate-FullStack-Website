import Hero from "../components/Hero";
import Features from "../components/Features";
import PropertyGrid from "../components/PropertyGrid";
import JourneyForm from "../components/JourneyForm";
import WhyChooseUs from "../components/WhyChooseUs";

import Card from "../components/Card";
import RentalHome from "../components/RentalHome";


export default function Home() {
 

  return (
    <>
      <Hero />
      <Card/>
      <Features />
      <PropertyGrid/>
      <RentalHome />
      <JourneyForm />
      <WhyChooseUs />
      
    </>
  );
}
