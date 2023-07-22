import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type NavItem = {
    name: string;
    route: string;
    enabled: boolean;
};

type NavbarProps = {
    navbarItems: NavItem[];
};

export const NavItems: NavItem[] = [
    {
        name: "Home",
        route: "/",
        enabled: true,
    },
    {
        name: "Work",
        route: "/work",
        enabled: true,
    },
    {
        name: "About",
        route: "/about",
        enabled: true,
    },
];

const Navbar = ({ navbarItems }: NavbarProps) => {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.navbarcontainer}>
                    <>
                        {navbarItems.map(({ name, route, enabled }, index) => {
                            if (enabled) {
                                return (
                                    <div
                                        key={index}
                                        className={styles.navbaritem}
                                        onClick={() => {
                                            router.push(route);
                                        }}
                                    >
                                        <Link key={index} href={route}>
                                            {name}
                                        </Link>
                                    </div>
                                );
                            }
                        })}
                    </>
                </div>
            </div>
        </>
    );
};

export type { NavbarProps };
export default Navbar;
