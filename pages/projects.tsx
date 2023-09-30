import Layout, { LayoutProps } from "../components/layout/layout";
import { useEffect } from "react";
import ProjectsIndex from "@/components/projects";

type ProjectsProps  = {
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

export default function Projects({layoutProps}: ProjectsProps) {
    useEffect(() => {
        document.title = "Projects | Rang Corp";
    }, []);

    return (
        <>
            <Layout navbarProps={layoutProps.navbarProps}>
            <ProjectsIndex />
            </Layout>
        </>
    );
}
