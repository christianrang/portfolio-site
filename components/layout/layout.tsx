import Navbar, { NavbarProps } from "@/components/navbar/navbar";
import styles from "@/styles/Layout.module.css";
import { ReactNode } from "react";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
  navbarProps?: NavbarProps;
};

const Layout = ({ children, navbarProps }: LayoutProps) => {
  return (
    <>
      <div className={styles.container}>
        <Navbar enabledRoutes={navbarProps?.enabledRoutes} />
        <div id="scroll-for-more-tracked" className={styles.contained}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export type { LayoutProps };
export default Layout;
