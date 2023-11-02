import styles from "./page.module.scss";
import { Counter } from "./components";
import { useBirthday } from "./hooks";

export default function Home() {
  // TODO Create birthday logic

  return (
    <main className={styles.main}>
      <h1 className={styles.mainText}>A very epic day is coming soon...</h1>
      <h1 className={styles.daysRemaining}>
        {/* Get next year's date */}
        <Counter selectedDate={new Date(new Date().getFullYear() + 1, 1, 7)} /> 
      </h1>
    </main>
  );
}
