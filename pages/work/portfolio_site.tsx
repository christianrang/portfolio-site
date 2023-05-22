import WorkView from "@/components/work/view";
import { workInfoList } from "@/components/work/index";
import Layout from "@/components/layout/layout";
import { useEffect } from "react";

export default function PortfolioSiteWork() {
    useEffect(() => {
        document.title = "Portfolio Site | Rang Corp";
    }, []);

    let workInfo = workInfoList.get("portfolio_site")

    return (
        <>
            <Layout>
            <WorkView workInfo={workInfo} />
            </Layout>
        </>
    );
}
