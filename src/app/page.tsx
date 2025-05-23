import FirstSection from "@/sections/firstSection";
import ShortDescription from "@/sections/shortDescription";
import PopularProducts from "@/sections/popularProducts";
import Features from "@/sections/features";
import CTA from "@/sections/cta";

export default function Home() {
  return (
    <>
      <FirstSection />
      <ShortDescription />
      <PopularProducts />
      <Features />
      <CTA />
    </>
  );
}
