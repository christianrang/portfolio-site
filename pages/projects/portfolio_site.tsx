import { projectsInfoList } from "@/components/projects/list";
import ProjectsView from "@/components/projects/view";
import Layout from "@/components/layout/layout";
import { useEffect } from "react";

export default function PortfolioSiteWork() {
  useEffect(() => {
    document.title = "Portfolio Site | Rang Corp";
  }, []);

  let projectInfo = projectsInfoList.get("portfolio_site");

  return (
    <>
      <Layout>
        <ProjectsView projectInfo={projectInfo} />
      </Layout>
    </>
  );
}
