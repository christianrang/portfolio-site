import Layout from "../components/layout/layout";
import Centered from "@/components/layout/helpers/centered";
import { useEffect } from "react";
import WorkIndex from "@/components/work/index";

export default function Home() {
    useEffect(() => {
        document.title = "Home | Rang Corp";
    }, []);

    return (
        <>
            <Layout>
                    <Centered>
                        <h1 className="intro">Hi! I&apos;m Christian Rang.</h1>
                        <h2 className="intro">I build effecient backends.</h2>
                        <p className="intro">
                            I&apos;m a software engineer with experience
                            building backend applications. I enjoy oppurtunies
                            to branch out my skill set into web and TUI
                            applications.
                        </p>
                    </Centered>
                <WorkIndex />
            </Layout>
        </>
    );
}
