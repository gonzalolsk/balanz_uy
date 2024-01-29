'use client'
import styles from "./page.module.css";
import ControlledCarousel from "./ui/molecules/carousel/Carousel";
import HomeLinksSection from "./ui/organisms/homeLinksSection/HomeLinksSection";
import HomeSectionCardsCarousel from "./ui/organisms/homeSectionCardsCarousel/HomeSectionCardsCarousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <ControlledCarousel />
      <HomeLinksSection />
      <HomeSectionCardsCarousel />
    </main>
  );
}
