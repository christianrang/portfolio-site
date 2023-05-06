import styles from "@/styles/Work.module.css";

export type WorkInfo = {
    name: string;
    github: string;
    seeMoreLink: string;
    img: string;
};

type WorkCardProps = {
    workInfo: WorkInfo;
};

const WorkCard = ({ workInfo }: WorkCardProps) => {
    return (
        <div className={styles.contained}>
            <div className={styles.leftcontained}>
                <img className={styles.imgcontained} src={workInfo.img}></img>
            </div>
            <div className={styles.rightcontained}>
                <h1>{workInfo.name}</h1>
                <p></p>
                <div className={styles.footer}>
                asdf
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
