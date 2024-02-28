import TextSection from "./TextSection";
import styles from "../styles/MainSection.module.css";
export default function MainSection() {
  return (
    <div className={styles.mainSection}>
      <div className={styles.imageSection}>
        <img
          className={styles.awardImage}
          src="\src\assets\1.png"
          alt="awardImage"
        />
      </div>
      <TextSection className={styles.text} />
    </div>
  );
}
