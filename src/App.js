import { useSelector } from "react-redux";
import { navSelector } from "./app/features/navigation/navigationSlice";
import About from "./app/components/About/About";
import ProjectPage from './app/components/ProjectPage/ProjectPage';
import Header from "./app/presentational/Header";
import "./App.css"

export default function App () {
  const { page } = useSelector(navSelector);

  return (
    <>
      <Header />
      { page === "Projects"
        ? <ProjectPage />
        : <About /> }
    </>
  );
};