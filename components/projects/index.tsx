import ProjectsCard from "./cards";
import styles from "@/styles/Projects.module.css";
import { projectsInfoList } from "./list";

type ProjectsIndexProps = {};

const ProjectsIndex = ({}: ProjectsIndexProps) => {
    return (
        <>
            <div className={styles.workindexcontainer}>
                {Array.from(projectsInfoList.values()).map((projectsInfo, index) => {
                    return <ProjectsCard key={index} workInfo={projectsInfo} />;
                })}
            </div>
        </>
    );
};

export default ProjectsIndex;
