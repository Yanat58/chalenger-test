import styles from './styles.module.css';
import popImg1 from '../../images/popImg1.png';
import popImg2 from '../../images/popImg2.png';
import popImg3 from '../../images/popImg3.png';
import popImg4 from '../../images/popImg4.png';
import popImg5 from '../../images/popImg5.png';

export default function PopularCategories() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Популярні категорії</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.item_title}>Дитячі іграшки на день Дитини</h3>
          <img src={popImg1} alt="" className={styles.img1} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_title}>Декоративна кераміка</h3>
          <img src={popImg3} alt="" className={styles.img3} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_title}>Декоративне освітлення</h3>
          <img src={popImg2} alt="" className={styles.img2} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_title}>
            Декоративні <br /> свічки
          </h3>
          <img src={popImg4} alt="" className={styles.img4} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_title}>
            Вишиванки на день Незалежності України
          </h3>
          <img src={popImg5} alt="" className={styles.img5} />
        </li>
      </ul>
    </section>
  );
}
