import NavButton from "../components/NavButton/NavButton";
import styles from "./Header.module.css";

export default function Header () {

  return (
    <header id={ styles.headerContainer } >
      <div id={ styles.headerFlex }>
        <h1 id={ styles.title }>Tom Juzonis</h1>

        <nav id={ styles.headerNav }>
          <NavButton to="Projects" />
          <NavButton to="About" />
        </nav>
      </div>
    </header>
  )
};