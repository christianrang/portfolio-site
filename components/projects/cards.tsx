import styles from "@/styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export type ProjectInfo = {
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

type ProjectsCardTagProps = {
    tags: string[];
};

export const WorkCardTag = ({ tags }: ProjectsCardTagProps) => {
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

type ProjectsCardProps = {
    workInfo: ProjectInfo;
};

const ProjectsCard = ({ workInfo }: ProjectsCardProps) => {
    const router = useRouter();

    return (
        <div
            className={styles.contained}
            onClick={() => {
                router.push(workInfo.seeMoreLink);
            }}
        >
            <div className={styles.leftcontained}>
                <Image className={styles.imgcontained} src={workInfo.img} alt="Image missing" width="1920" height="1080" />
            </div>
            <div className={styles.rightcontained}>
                <h1 className={styles.header}>
                    <div>
                        <Link href={workInfo.seeMoreLink}>{workInfo.name}</Link>
                    </div>
                </h1>
                <div className={styles.footer}>
                    {workInfo.tags ? (
                        <WorkCardTag tags={workInfo.tags} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
