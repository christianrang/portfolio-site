import Centered from "@/components/layout/helpers/centered";
import Layout from "@/components/layout/layout";
import { NavbarProps } from "@/components/navbar/navbar";

type Custom404Props = {
  navbarProps?: NavbarProps;
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

const Custom404 = ({navbarProps}: Custom404Props) => {
  return (
    <Layout navbarProps={navbarProps}>
      <Centered>Uhhhh... I think you are lost. This is 404 Avenue.</Centered>
    </Layout>
  );
};

export default Custom404;
