import Layout from "../components/layout/layout";
import { useEffect } from "react";

export default function Work() {
    useEffect(() => {
        document.title = "About | Rang Corp";
    }, []);

    return (
        <>
            <Layout>
            </Layout>
        </>
    );
}
