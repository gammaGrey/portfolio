import { useDispatch, useSelector } from "react-redux";
import { navSelector, setPage } from "../../features/navigation/navigationSlice";
import styles from "./NavButton.module.css";

export default function NavButton ({ to }) {
  const { page } = useSelector(navSelector);
  const dispatch = useDispatch();
  
  function handleNavigation () {
    dispatch(setPage(to));
  };

  return (
    <div
      onClick={ handleNavigation }
      className={ `${styles.navButton} ${page === to ? styles.active : ""}` }
    >
      { to }
    </div>
  )
}