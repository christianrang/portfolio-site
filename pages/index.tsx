import Layout from "../components/layout/layout";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Home | Rang Corp";
    }, []);

    return (
        <>
            <Layout>
                <div className="intro">
                    <h1 className="intro">Hi! I&apos;m Christian Rang.</h1>
                    <h2 className="intro">I build effecient backends.</h2>
                    <p className="intro">I&apos;m a software engineer with experience building backend applications. I enjoy oppurtunies to branch out my skill set into web and TUI applications.</p>
                </div>
            </Layout>
        </>
    );
}
