import Layout from "../components/layout/layout";
import { useEffect } from "react";
import ProjectsIndex from "@/components/projects";

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | Rang Corp";
    }, []);

    return (
        <>
            <Layout>
            <ProjectsIndex />
            </Layout>
        </>
    );
}
