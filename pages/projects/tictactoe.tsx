import ProjectsView from "@/components/projects/view";
import { projectsInfoList } from "@/components/projects/list";
import Layout from "@/components/layout/layout";
import { useEffect } from "react";

export default function TicTacToe() {
  useEffect(() => {
    document.title = "TicTacToe | Rang Corp";
  }, []);

  let projectsInfo = projectsInfoList.get("tictactoe");

  return (
    <>
      <Layout>
        <ProjectsView projectInfo={projectsInfo} />
      </Layout>
    </>
  );
}
