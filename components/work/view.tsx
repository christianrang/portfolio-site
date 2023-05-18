import { WorkInfo } from "./cards";
import Link from "next/link";
import styles from "@/styles/Work.module.css";

type WorkViewProps = {
    workInfo?: WorkInfo;
};

const WorkView = ({ workInfo }: WorkViewProps) => {
    return (
        <>
            <h1 className={styles.header}>{workInfo.name}</h1>
            <div className={styles.viewdate}>{workInfo.date}</div>
            <div className={styles.viewlinks}>
                <Link href={workInfo.github}>View Code</Link>
                <Link className={styles.viewpagelink} href={workInfo.pageUrl}>
                    Visit Page
                </Link>
            </div>
            {workInfo.body}
        </>
    );
};

export default WorkView;
