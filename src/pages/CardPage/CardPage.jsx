import CardList from "../../components/CardList/CardList";
import style from "./CardPage.module.css";

export default function CardPage() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>VIP оголошення</h1>
      <CardList />
    </div>
  );
}
