import Layout, { LayoutProps } from "../components/layout/layout";
import { useEffect } from "react";
import Centered from "@/components/layout/helpers/centered";
import Contact from "@/components/contactme/contactme";

type ContactMeProps = {
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

export default function ContactMe({ layoutProps }: ContactMeProps) {
  useEffect(() => {
    document.title = "Projects | Rang Corp";
  }, []);

  return (
    <>
      <Layout navbarProps={layoutProps.navbarProps}>
        <Centered>
          <Contact
            href="https://www.linkedin.com/in/christian-rang"
            src="/linkedin.png"
            alt="Linkedin"
          />
          <Contact
            src="/github-mark-white.svg"
            alt="Github"
            href="https://github.com/christianrang"
          />
        </Centered>
      </Layout>
    </>
  );
}
