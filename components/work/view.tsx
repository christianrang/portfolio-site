import { WorkInfo } from "./cards";
import Link from "next/link";
import styles from "@/styles/Work.module.css";

type WorkViewProps = {
    workInfo?: WorkInfo;
};

const WorkView = ({ workInfo }: WorkViewProps) => {
    return (
        <>
            {workInfo ? (
            <>
            <h1 className={styles.header}>{workInfo.name}</h1>
            <div className={styles.viewdate}>{workInfo.date}</div>
            <div className={styles.viewlinks}>
                <Link className={styles.viewcodelink} href={workInfo.github}>View Code</Link>
                <Link className={styles.viewpagelink} href={workInfo.pageUrl}>
                    Visit Page
                </Link>
            </div>
            <div className={styles.viewbody}>
                {workInfo.body}
            </div>
            </>
            ): null }
        </>
    );
};

export default WorkView;
