import { useDispatch, useSelector } from "react-redux";import Project from "../Project/Project";
import { hover, projectsSelector } from "../../features/projects/projectsSlice";
import projectList from "../../resources/projectList";
import styles from "./ProjectPage.module.css";
import ExternalLink from "../../presentational/SVG/externalLink";

export default function ProjectPage () {
  const { isThisHovered } = useSelector(projectsSelector);
  const dispatch = useDispatch();
  const portfolioRepo = "https://github.com/gammaGrey/portfolio-website";

  function handleMouseOver () {
    dispatch(hover());
  };

  return (
    <>
      <div id={ styles.mainGrid }>
        <h2 id={ styles.title }>Projects
          <span id={ styles.aside }> aside from <a id={ styles.thisSite } href={ portfolioRepo } target="blank" rel="noreferrer" onMouseOver={ handleMouseOver } onMouseOut={ handleMouseOver }>this site</a>
          
          { isThisHovered &&
            <ExternalLink fill="var(--color3)" id={ styles.externalLink }/> }
          </span>
        </h2>
        { projectList.map((project, i) => (
            <Project project={ project } key={i} />
          )) }
      </div>
    </>
  );
}