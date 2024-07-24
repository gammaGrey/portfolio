import GithubLogo from "../../presentational/SVG/githubLogo";
import ExternalLink from "../../presentational/SVG/externalLink";
import styles from "./Project.module.css";

export default function Project ({ project }) {
  function handleDescription (paragraphLine, i) {
    if (i === project.description.length - 1) {
      return paragraphLine;

    } else {
      return (
        <span key={i}>
          { paragraphLine }
          <br></br>
          <br></br>
        </span>
      );
    };
  };

  return (
    <div className={ styles.projectContainer }>

      <div className={ styles.projectHeader }>
        <h3 className={ styles.projectName }>{ project.name }</h3>
        <h4>{ project.type }</h4>
      </div>

      <div className={styles.projectContent}>
        { project.thumbnail &&
          <img
            className={ styles.projectScreenshot }
            src={ project.thumbnail }
            alt={ project.altText }
          /> }

        <div className={ styles.descriptionContainer }>
          <p>
            { project.description.map(handleDescription) }
          </p>

          <div className={ styles.projectLinks }>
            { project.url &&
              <a className={ styles.buttons } href={ project.url } target="_blank" rel="noreferrer" aria-label={ `project site for ${project.name}` }>
                  <span>app</span>
                  <ExternalLink fill="white"/>
              </a>
            }

            <a className={ styles.buttons } href={ project.repo } target="_blank" rel="noreferrer" aria-label={ `GitHub repository for ${project.name}` }>
                <span>repo</span>
                <GithubLogo />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}