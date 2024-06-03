import ProjectsCard from "./cards";
import styles from "@/styles/Projects.module.css";
import { projectsInfoList } from "./list";
import Centered from "@/components/layout/helpers/centered";

type ProjectsIndexProps = {
    header?: boolean;
};

const ProjectsIndex = ({ header }: ProjectsIndexProps) => {
    return (
        <>
                <div id="projects" />
                <Centered>
                <div className={styles.bigcontainer}>
                    {header && <h2>/projects</h2>}
                    <div className={styles.index}>
                        {Array.from(projectsInfoList.values()).map(
                            (projectsInfo, index) => {
                                return (
                                    <ProjectsCard
                                        key={index}
                                        workInfo={projectsInfo}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
                    </Centered>
        </>
    );
};

export default ProjectsIndex;
