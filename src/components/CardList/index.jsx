import { useState } from "react";
import style from "./styles.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function CardList() {
  const [favorite, setFavorite] = useState(false);
  return (
     <section className={style.container}>
      <h1 className={style.title}>VIP оголошення</h1>
      <ul className={style.list}>
      <li className={style.item}>
        <div className={style.img}></div>
        <div className={style.box_text}>
          <p className={style.text}>Лошадка коричневая</p>
          <p className={style.text}>850 грн</p>
        </div>
      </li>
      <li className={style.item}>
        <div className={style.img}></div>
        <div className={style.box_text}>
          <p className={style.text}>Лошадка коричневая</p>
          <p className={style.text}>850 грн</p>
        </div>
      </li>
      <li className={style.item}>
        <div className={style.img}></div>
        <div className={style.box_text}>
          <p className={style.text}>Лошадка коричневая</p>
          <p className={style.text}>850 грн</p>
        </div>
      </li>
      <li className={style.item}>
        <div className={style.img}></div>
        <div className={style.box_text}>
          <p className={style.text}>Лошадка коричневая</p>
          <p className={style.text}>850 грн</p>
        </div>
      </li>
      <li className={style.item}>
        <div className={style.img}></div>
        <div className={style.box_text}>
          <p className={style.text}>Лошадка коричневая</p>
          <p className={style.text}>850 грн</p>
        </div>
      </li>
      <li className={style.item}>
        <div className={style.img}></div>
        <div className={style.box_text}></div>
      </li>
      <li className={style.item}>
        <div className={style.img}></div>
        <div className={style.box_text}>
          <p className={style.text}>Лошадка коричневая</p>
          <p className={style.text}>850 грн</p>
        </div>
      </li>
      <li className={style.item}>
        <div className={style.img}></div>
        <div className={style.box_text}>
          <p className={style.text}>Лошадка коричневая</p>
          <p className={style.text}>850 грн</p>
        </div>
      </li>
      <li className={style.item}>
        <div className={style.img}></div>
        <button
          className={style.heart_btn}
          type="button"
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? <FaHeart  color="blue"/> : <FaRegHeart color="#fff"  />}
        </button>
        <div className={style.box_text}>
          <p className={style.text}>Лошадка коричневая</p>
          <p className={style.text}>850 грн</p>
        </div>
      </li>
    </ul>
    </section>
   
  );
}
