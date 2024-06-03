import Layout, { LayoutProps } from "../components/layout/layout";
import Centered from "@/components/layout/helpers/centered";
import { useEffect, useState } from "react";
import ExperienceIndex from "@/components/experience";
import styles from "@/styles/Layout.module.css";
import Image from "next/image";
import ProjectsIndex from "@/components/projects";

type HomeProps = {
  layoutProps: LayoutProps;
  isProjectsEnabled: boolean;
};

export async function getStaticProps() {
  const isProjectsEnabled = (process.env.NAVBAR_ENABLED_PROJECTS === "true");

  return {
    props: {
      isProjectsEnabled: isProjectsEnabled,
      layoutProps: {
        navbarProps: {
          enabledRoutes: {
            projects: isProjectsEnabled,
          },
        },
      },
    },
  };
}

export default function Home({ layoutProps, isProjectsEnabled }: HomeProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);
  const arrowHeight = 20;

  useEffect(() => {
    var element = window.document.querySelector("#scroll-for-more-tracked");
    element?.addEventListener("scroll", listenToScroll);
    return () => element?.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    var winScroll = window.document.querySelector("#scroll-for-more-tracked")
      ?.scrollTop;
    if (winScroll === undefined) {
      winScroll = 0;
    }
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <>
      <Layout navbarProps={layoutProps.navbarProps}>
      <div id="about" />
      <Centered>
          <header>
          <div>
          <h1 className="intro">Hi! I&apos;m <strong>Christian Rang.</strong></h1>
          <h2 className="intro">I build efficient backends.</h2>
          </div>
          <p className="intro">
              With 6+ years of experience, I have a 
              passion for writing scalable, efficient, and maintainable code.
              I specialize in kubernetes, Go, and cloud-native technologies. I
              have worked with clients including Google and Southern Fibernet.
          </p>
          </header>
      </Centered>
        <div className={styles.footercontainer}>
          <div className={styles.footerinnercontainer}>
            {isVisible && (
              <div id="hide">
                Scroll for more
                <div className={styles.footerinnercontainer}>
                  <Image
                    src="/down-arrow.svg"
                    alt=""
                    width={arrowHeight}
                    height={arrowHeight}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {isProjectsEnabled && <ProjectsIndex header />}
        <ExperienceIndex header />
      </Layout>
    </>
  );
}
