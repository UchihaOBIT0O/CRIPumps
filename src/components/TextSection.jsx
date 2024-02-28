import styles from "../styles/TextSection.module.css";

export default function TextSection() {
  return (
    <div className={styles.contentSection}>
      <p className={styles.heading}>
        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
        4th time.
      </p>
      <div className={styles.listSection}>
        <ol className={styles.list}>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ol>
      </div>
      <div className={styles.imageSection}>
        <img
          className={styles.awardImage}
          src="\src\assets\2.png"
          alt="award presenting"
        />
      </div>
      <div className={styles.lastTextSection}>
        <p>
          Government of India has awarded the{" "}
          <span style={{ fontWeight: "700" }}>
            "National Energy Conservation Award 2018"
          </span>
          . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
          the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
}
