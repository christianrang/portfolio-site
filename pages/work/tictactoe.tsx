import WorkView from "@/components/work/view";
import { workInfoList } from "@/components/work/index";
import Layout from "@/components/layout/layout";
import { useEffect } from "react";

export default function TicTacToe() {
    useEffect(() => {
        document.title = "TicTacToe | Rang Corp";
    }, []);

    let workInfo = workInfoList.get("tictactoe")

    return (
        <>
            <Layout>
            <WorkView workInfo={workInfo} />
            </Layout>
        </>
    );
}
