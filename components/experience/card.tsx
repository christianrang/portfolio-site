import styles from "@/styles/Experience.module.css";
import exp from "constants";

type ExperienceCardProps = {
    experienceInfo?: ExperienceInfo;
};

export type ExperienceInfo = {
    company: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    body: string;
    tags: string[];
};

type CardTagsProps = {
    tags?: string[];
};

const CardTags = ({ tags }: CardTagsProps) => {
    return (
        <>
            <div className={styles.cardtagscontainer}>
                {tags?.map(
                    (tag, index) => {
                        return (
                        <>
                            <div key={index} className={styles.cardtag}>{tag}</div>
                        </>
                        );
                    }
                )}
            </div>
        </>
    );
};

const ExperienceCard = ({ experienceInfo }: ExperienceCardProps) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.leftcard}>
                        {experienceInfo?.startDate}-{experienceInfo?.endDate}
                    </div>
                    <div className={styles.rightcard}>
                        <div className={styles.cardheader}>
                            {experienceInfo?.company}
                        </div>
                        <div className={styles.cardsubheader}>
                            {experienceInfo?.jobTitle}
                        </div>
                        <div className={styles.cardbody}>
                            {experienceInfo?.body}
                        </div>
                        <CardTags tags={experienceInfo?.tags} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperienceCard;
