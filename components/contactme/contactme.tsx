import Image from "next/image";
import styles from "@/styles/Contactme.module.css";

type ContactProps = {
  src: string;
  alt: string;
  href: string;
};

const Contact = ({ src, alt, href }: ContactProps) => {
  return (
    <>
      <div className={styles.contact}>
        <a href={href}>
          <Image src={src} width={150} height={100} alt={alt} />
        </a>
      </div>
    </>
  );
};

export type { ContactProps };
export default Contact;
