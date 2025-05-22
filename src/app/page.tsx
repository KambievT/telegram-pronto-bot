import FirstSection from "@/sections/firstSection";
import ShortDescription from "@/sections/shortDescription";
import PopularProducts from "@/sections/popularProducts";
import { AppRoot } from "@telegram-apps/telegram-ui";

export default function Home() {
  return (
    <>
      <FirstSection />
      <ShortDescription />
      <PopularProducts />
    </>
  );
}
