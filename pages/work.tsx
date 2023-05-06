import WorkView from "@/components/work/work";
import Layout from "../components/layout/layout";
import { useEffect } from "react";

export default function Work() {
    useEffect(() => {
        document.title = "Home | Rang Corp";
    }, []);

    return (
        <>
            <Layout>
            <WorkView />
            </Layout>
        </>
    );
}
