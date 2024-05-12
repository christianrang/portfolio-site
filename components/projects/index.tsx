import ProjectsCard from "./cards";
import styles from "@/styles/Projects.module.css";
import { projectsInfoList } from "./list";

type ProjectsIndexProps = {
    header?: boolean;
};

const ProjectsIndex = ({header}: ProjectsIndexProps) => {
    return (
        <>
        <div className={styles.bigcontainer}>
        <div id="projects" />
        {header && (
            <h2>Projects</h2>
        )
        }
                {Array.from(projectsInfoList.values()).map((projectsInfo, index) => {
                    return <ProjectsCard key={index} workInfo={projectsInfo} />;
                })}
            </div>
        </>
    );
};

export default ProjectsIndex;
