import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type NavItem = {
  name: string;
  href: string;
  enabled: boolean;
  type: NavItemType;
};

enum NavItemType {
    Route,
    Anchor,
}

type EnabledRoutes = {
  projects: boolean;
};

type NavbarProps = {
  enabledRoutes?: EnabledRoutes;
};

const Navbar = ({ enabledRoutes }: NavbarProps) => {
  const router = useRouter();

  const navbarItems: NavItem[] = [
    {
      name: "/about",
      href: "#about",
      enabled: true,
      type: NavItemType.Anchor,
    },
    {
      name: "/experience",
      href: "#experience",
      enabled: true,
      type: NavItemType.Anchor,
    },
    {
      name: "/projects",
      href: "#projects",
      enabled: enabledRoutes?.projects || false,
      type: NavItemType.Anchor,
    }
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbarcontainer}>
          <>
            {navbarItems.map(({ name, href: route, enabled, type }, index) => {
              if (enabled) {
                if (type === NavItemType.Anchor) {
                  return (
                    <div
                      key={index}
                      className={styles.navbaritem}
                    >

                    <Link key={index} href={route} scroll={true}>
                      {name}
                    </Link>
                    </div>
                  );
                }
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
