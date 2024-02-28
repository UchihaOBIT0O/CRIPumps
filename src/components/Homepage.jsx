import Logo from "./Logo";
import MainSection from "./MainSection";
import styles from "../styles/Homepage.module.css";
import SectionSecond from "./SectionSecond";
export default function Homepage() {
  return (
    <div className={styles.mainContainer}>
      <Logo />
      <MainSection />
      <SectionSecond className={styles.second} />
    </div>
  );
}
