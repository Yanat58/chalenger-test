import { useState } from "react";
import style from "./styles.module.css";
import { advers } from "./advers";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import photoAlternate from '../../images/not-found.png'


export default function AdvertList() {
  const [favorite, setFavorite] = useState(false);
  console.log(advers)

  return (
    <section className={style.container}>
      <h2 className={style.title}>VIP оголошення</h2>
      <ul className={style.list}>
        {advers?.map((item, index) => (
          <li className={style.item} key={index} >
            <p className={style.category}>VIP-оголошення</p>
            <img className={style.img} src={item.img ? item.img : photoAlternate} alt="" />
            <button
              className={style.heart_btn}
              type="button"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? <FaHeart color="blue" /> : <FaRegHeart color="#000" />}
            </button>
            <div className={style.box_text}>
              <p className={style.span}><span>Опубліковано: 12.07.2024</span></p>
              <p className={style.text}>Українська традиційна вишиванка жіночка Львівська</p>
              <p className={style.span}><span>Lara_Sylwer25</span></p>
              <p className={style.price}>850 грн</p>
            </div>
          </li>))}
      </ul>

    </section>

  );
}
