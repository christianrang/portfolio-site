import ExperienceCard, { ExperienceInfo } from "./card";
import styles from "@/styles/Experience.module.css";

type ExperienceIndexProps = {};

export const experienceInfoList: ExperienceInfo[] = [
    {
        company: "Cyderes",
        jobTitle: "Software Engineer I - II",
        startDate: "Feb 2022",
        endDate: "Present",
        body: "- Reduced Google Software Development contract backlog by 100% in 6 months",
        tags: ["Go", "K8s", "GCP"],
    },
    {
        company: "SecDevOps Consultant",
        jobTitle: "SecDevOps Consultant",
        startDate: "Oct 2021",
        endDate: "Present",
        body: "testing",
        tags: ["Go"],
    },
];

const ExperienceIndex = ({}: ExperienceIndexProps) => {
    return (
        <>
            <div className={styles.bigcontainer}>
                {experienceInfoList.map(
                    (experienceInfo, index) => {
                        return (
                        <>
                            <ExperienceCard
                                key={index}
                                experienceInfo={experienceInfo}
                            />
                        </>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default ExperienceIndex;
