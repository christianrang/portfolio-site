import WorkCard, { WorkInfo } from "./cards";

type WorkProps = {};

const workInfoList: WorkInfo[] = [
    {
        name: "Portfolio Site",
        github: "https://github.com/",
        seeMoreLink: "/work/asdf",
        img: "http://via.placeholder.com/1920x1080",
    },
];

const WorkView = ({}: WorkProps) => {
    return (
        <>
            <WorkCard workInfo={workInfoList[0]} />
            <WorkCard workInfo={workInfoList[0]} />
            <WorkCard workInfo={workInfoList[0]} />
        </>
    );
};

export default WorkView;
