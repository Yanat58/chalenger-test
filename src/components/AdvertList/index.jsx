import { useState } from "react";
import style from "./styles.module.css";
import {advers} from "./advers";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import photoAlternate from '../../images/not-found.png'


export default function AdvertList() {
  const [favorite, setFavorite] = useState(false);
   

  return (
     <section className={style.container}>
      <h2 className={style.title}>VIP оголошення</h2>
      <ul className={style.list}>
         {advers?.map((item, index) => (
        <li className={style.item} key={index} >
          <img className={style.img} src={item.img ? item.img : photoAlternate} alt="" />
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
        </li>))}      
       </ul>  
       
    </section>
   
  );
}
