import styles from "@/styles/Work.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export type WorkInfo = {
    name: string;
    github: string;
    seeMoreLink: string;
    img: string;
    body: string;
    pageUrl: string;
    date: string;
};

type WorkCardProps = {
    workInfo: WorkInfo;
};

function truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

const WorkCard = ({ workInfo }: WorkCardProps) => {
    const router = useRouter();

    return (
        <div className={styles.contained} onClick={() => {router.push(workInfo.seeMoreLink)}}>
            <div className={styles.leftcontained}>
                <img className={styles.imgcontained} src={workInfo.img}></img>
            </div>
            <div className={styles.rightcontained}>
                <h1 className={styles.header}>
                    <div>
                        <Link href={workInfo.seeMoreLink}>{workInfo.name}</Link>
                    </div>
                </h1>
                {truncate(workInfo.body, 145)}
                <div className={styles.footer}></div>
            </div>
        </div>
    );
};

export default WorkCard;
