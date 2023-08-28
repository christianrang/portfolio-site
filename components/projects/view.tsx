import { ProjectInfo } from "./cards";
import Link from "next/link";
import styles from "@/styles/Projects.module.css";
import ReactMarkdown from "react-markdown";

type ProjectsViewProps = {
    projectInfo?: ProjectInfo;
};

const ProjectsView = ({ projectInfo: workInfo }: ProjectsViewProps) => {
    return (
        <>
            {workInfo ? (
                <>
                    <h1 className={styles.header}>{workInfo.name}</h1>
                    <div className={styles.viewdate}>{workInfo.date}</div>
                    <div className={styles.viewlinks}>
                        {workInfo.github !== "" && (
                            <Link
                                className={styles.viewcodelink}
                                href={workInfo.github}
                            >
                                View Code
                            </Link>
                        )}
                        {workInfo.pageUrl !== "" && (
                            <Link
                                className={styles.viewpagelink}
                                href={workInfo.pageUrl}
                            >
                                Visit Page
                            </Link>
                        )}
                    </div>
                    <div className={styles.viewbody}>
                        <ReactMarkdown>{workInfo.body}</ReactMarkdown>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default ProjectsView;
