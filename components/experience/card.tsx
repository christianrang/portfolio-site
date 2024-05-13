import styles from "@/styles/Experience.module.css";
import { ReactNode } from "react";

type ExperienceCardProps = {
    experienceInfo?: ExperienceInfo;
};

export type ExperienceInfo = {
    company: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    body: ReactNode;
    tags: string[];
};

type CardTagsProps = {
    tags?: string[];
};

const CardTags = ({ tags }: CardTagsProps) => {
    return (
        <>
            <div className={styles.cardtagscontainer}>
                TECHNOLOGIES: {tags?.map(
                    (tag, index) => {
                        return (
                        <>
                            <div key={index} className={styles.cardtag}>{tag.toUpperCase()}</div>
                        </>
                        );
                    }
                )}
            </div>
        </>
    );
};

const ExperienceCard = ({ experienceInfo }: ExperienceCardProps) => {
    if (!experienceInfo) {
        return null;
    }

    const startDate = experienceInfo?.startDate === "Present" ? new Date() : new Date(experienceInfo?.startDate);
    const endDate = experienceInfo?.endDate === "Present" ? new Date() : new Date(experienceInfo?.endDate);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.leftcard}>
                        <p><strong>{experienceInfo?.jobTitle.toUpperCase()}</strong></p>
                        <p>/{experienceInfo?.company}</p>
                        <small>{startDate.getFullYear()}-{endDate.getFullYear()}</small>
                    </div>
                    <div className={styles.rightcard}>
                        <div className={styles.cardheader}>
                            <strong>
                                <CardTags tags={experienceInfo?.tags} />
                            </strong>
                        </div>
                        <div className={styles.cardbody}>
                            {experienceInfo?.body}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperienceCard;
