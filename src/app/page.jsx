import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "../components/featured/Featured";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "../components/cardList/CardList";
import Menu from "../components/Menu/Menu";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/navbar/footer/Footer";
export default function Home() {
  return (

    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
