import styles from './styles.module.css';

export default function PopularCategories() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Популярні категорії</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.item_title}>Дитячі іграшки на день Дитини</h3>
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_title}>Декоративне освітлення</h3>
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_title}>Декоративна кераміка</h3>
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_title}>
            Декоративні <br /> свічки
          </h3>
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_title}>
            Вишиванки на день Незалежності України
          </h3>
        </li>
      </ul>
    </section>
  );
}
