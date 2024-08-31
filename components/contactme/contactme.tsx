import styles from "@/styles/Contactme.module.css";

type ContactProps = {
    href: string;
    children?: React.ReactNode;
};

const Contact = ({ href, children }: ContactProps) => {
    return (
        <>
            <div className={styles.contact}>
                <a href={href}>{children}</a>
            </div>
        </>
    );
};

export type { ContactProps };
export default Contact;
