import Layout, { LayoutProps } from "../components/layout/layout";
import Centered from "@/components/layout/helpers/centered";
import { useEffect, useState } from "react";
import ExperienceIndex from "@/components/experience";
import styles from "@/styles/Layout.module.css";
import Image from "next/image";

type HomeProps = {
  layoutProps: LayoutProps;
};

export async function getStaticProps() {
  const isProjectsEnabled = process.env.NAVBAR_ENABLED_PROJECTS;

  return {
    props: {
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

export default function Home({ layoutProps }: HomeProps) {
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
        <Centered>
          <h1 className="intro">Hi! I&apos;m Christian Rang.</h1>
          <h2 className="intro">I build effecient backends.</h2>
          <p className="intro">
            I&apos;m a software engineer with experience building backend
            applications. I enjoy oppurtunies to branch out my skill set into
            web and TUI applications.
          </p>
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
        <ExperienceIndex />
      </Layout>
    </>
  );
}
