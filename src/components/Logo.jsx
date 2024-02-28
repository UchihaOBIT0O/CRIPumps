import styles from "../styles/Logo.module.css";
export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src="public\assets\logo.png" alt="log" />;
    </div>
  );
}
