import styles from "@/styles/Work.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export type WorkInfo = {
    name: string;
    github: string;
    seeMoreLink: string;
    img: string;
    tldr: string;
    body: string;
    pageUrl: string;
    date: string;
    tags?: string[];
};

type WorkCardTagProps = {
    tags: string[];
};

export const WorkCardTag = ({ tags }: WorkCardTagProps) => {
    return (
        <>
            {tags.map((value: string, index: number) => {
                return (
                    <span key={index} className={styles.tag}>
                        {value}
                    </span>
                );
            })}
        </>
    );
};

type WorkCardProps = {
    workInfo: WorkInfo;
};

const WorkCard = ({ workInfo }: WorkCardProps) => {
    const router = useRouter();

    return (
        <div
            className={styles.contained}
            onClick={() => {
                router.push(workInfo.seeMoreLink);
            }}
        >
            <div className={styles.leftcontained}>
                <img className={styles.imgcontained} src={workInfo.img}></img>
            </div>
            <div className={styles.rightcontained}>
                <h1 className={styles.header}>
                    <div>
                        <Link href={workInfo.seeMoreLink}>{workInfo.name}</Link>
                    </div>
                </h1>
                {workInfo.tldr}
                <div className={styles.footer}>
                    {workInfo.tags ? (
                        <WorkCardTag tags={workInfo.tags}></WorkCardTag>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
