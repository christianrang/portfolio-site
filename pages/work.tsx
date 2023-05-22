import WorkIndex from "@/components/work/index";
import Layout from "../components/layout/layout";
import { useEffect } from "react";

export default function Work() {
    useEffect(() => {
        document.title = "Work | Rang Corp";
    }, []);

    return (
        <>
            <Layout>
            <WorkIndex />
            </Layout>
        </>
    );
}
