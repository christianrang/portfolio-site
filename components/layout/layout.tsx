import Navbar, { NavItems } from "@/components/navbar/navbar";
import styles from "@/styles/Layout.module.css";
import { ReactNode } from "react";
import Footer from "./footer";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className={styles.container}>
                <Navbar navbarItems={NavItems} />
                <div className={styles.contained}>{children}</div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
