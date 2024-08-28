import Centered from "@/components/layout/helpers/centered";
import Layout, { LayoutProps } from "../components/layout/layout";

type Custom404Props = {
  layoutProps?: LayoutProps;
}

export async function getStaticProps() {
  const isProjectsEnabled = process.env.NAVBAR_ENABLED_PROJECTS;

  return {
    props: {
      navbarProps: {
        enabledRoutes: {
          projects: isProjectsEnabled,
        }
      }
    },
  };
}

const Custom404 = ({layoutProps}: Custom404Props) => {
  return (
    <Layout navbarProps={layoutProps?.navbarProps}>
      <Centered>Uhhhh... I think you are lost. This is 404 Avenue.</Centered>
    </Layout>
  );
};

export default Custom404;
