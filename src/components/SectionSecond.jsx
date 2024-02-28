import styles from "../styles/SectionSecond.module.css";

const text = [
  "CHEMICALS & PROCESS",
  "POWER",
  "WATER & WASTE WATER",
  "OILS & GAS",
  "PHARMA",
  "SUGARS & DISTILLERIES",
  "PAPER & PULP",
  "MARINE & DEFENCE",
  "METAL & MINING",
  "FOOD & BEVERAGE",
  "PETROCHEMICAL & REFINERIES",
  "SOLAR",
  "BUILDING",
  "HVAC",
  "FIRE FIGHTING",
  "AGRICULTURE & RESIDENTIAL",
];

export default function SectionSecond() {
  return (
    <>
      <div className={styles.secondOne}>
        <div className={styles.secondSection}>
          <p className={styles.text}>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <img
            className={styles.motorImage}
            src="\src\assets\3.png"
            alt="motors"
          />
          <p className={styles.bottomText}>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
      </div>
      <div className={styles.secondTwo}>
        <div className={styles.footerSection}>
          <div className={styles.textSecond}>
            <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          </div>
          <div className={styles.textThird}>
            {text.map((el) => (
              <span className={styles.element}>{el}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.secondThree}>
        <div className={styles.footerSecond}>
          <span>
            <img src="\src\assets\phone.svg" alt="phone" />
            Tollfree 1800 200 1234
          </span>
          <span>
            <img src="\src\assets\facebook.svg" alt="facebook" />
            <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
          </span>
          <span>
            <img src="\src\assets\web.svg" alt="web" />
            <a href="www.crigroups.com">www.crigroups.com</a>
          </span>
        </div>
      </div>
    </>
  );
}
