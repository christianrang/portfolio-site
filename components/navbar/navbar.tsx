import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type NavItem = {
  name: string;
  route: string;
  enabled: boolean;
};

type EnabledRoutes = {
  projects: string;
};

type NavbarProps = {
  enabledRoutes?: EnabledRoutes;
};

const StringToBoolean = (value: string) => {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
  }

  return false;
};

const Navbar = ({ enabledRoutes }: NavbarProps) => {
  const router = useRouter();

  const isProjectsEnabled =
    enabledRoutes?.projects === undefined
      ? false
      : StringToBoolean(enabledRoutes?.projects);

  const navbarItems: NavItem[] = [
    {
      name: "Home",
      route: "/",
      enabled: true,
    },
    {
      name: "Projects",
      route: "/projects",
      enabled: isProjectsEnabled,
    },
  ];

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
