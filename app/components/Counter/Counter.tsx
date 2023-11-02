"use client";

import { useEffect, useState } from "react";
import styles from './Counter.module.scss'

export default function Counter({ selectedDate }: { selectedDate: Date }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const birthday = selectedDate;
      const difference = birthday.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.clockContainer}>
      <div className={styles.days}>{days}</div>
      <div className={styles.hours}>{hours}</div>
      <div className={styles.minutes}>{minutes}</div>
      <div className={styles.seconds}>{seconds}</div>
    </div>
  );
}
