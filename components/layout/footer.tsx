import styles from "@/styles/Layout.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const githubHeight = 20;
    return (
        <>
            <div className={styles.footer}>
                    <Link href="https://github.com/christianrang/portfolio-site">
                        <Image
                            src="/github-mark-white.svg"
                            alt=""
                            width={githubHeight}
                            height={githubHeight}
                        />
                    </Link>
            </div>
        </>
    );
};

export default Footer;
