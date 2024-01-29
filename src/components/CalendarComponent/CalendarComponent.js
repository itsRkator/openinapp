import styles from "./CalendarComponent.module.css";

const CalendarComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarHeader}>
          <h1>Calendar</h1>
        </div>
        <div className={styles.calendarBody}>
          <p>This is the calendar component</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
