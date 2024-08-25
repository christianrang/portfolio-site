import styles from "@/styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export type ProjectInfo = {
    name: string;
    github?: string;
    seeMoreLink?: string;
    img: string;
    tldr: string;
    body: string;
    pageUrl?: string;
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
    const iconHeight = 20;

    return (
        <>
            <div
                className={styles.contained}
            >
                <div className={styles.leftcontained}>
                    <Image
                        className={styles.imgcontained}
                        src={workInfo.img}
                        alt="Image missing"
                        width="1920"
                        height="1080"
                    />
                </div>
                <div className={styles.rightcontained}>
                    <p className={styles.header}>{workInfo.name}</p>
                    <div className={styles.cardtagscontainer}>
                        {workInfo.tags ? (
                            <WorkCardTag tags={workInfo.tags} />
                        ) : null}
                    </div>
                    <div className={styles.links}>
                            {workInfo.pageUrl ? (
                                <div className={styles.link}>
                                <Link href={workInfo.pageUrl}>
                                    <Image
                                        src="/external-link-svgrepo-com.svg"
                                        alt=""
                                        width={iconHeight}
                                        height={iconHeight}
                                    />
                                </Link>
                                </div>
                            ) : null}
                            {workInfo.github ? (
                            <div className={styles.link}>
                            <Link href={workInfo.github}>
                                <Image
                                    src="/github-mark-white.svg"
                                    alt=""
                                    width={iconHeight}
                                    height={iconHeight}
                                />
                            </Link>
                            </div>
                            ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsCard;
