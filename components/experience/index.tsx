import ExperienceCard, { ExperienceInfo } from "./card";
import styles from "@/styles/Experience.module.css";

type ExperienceIndexProps = {
    header?: boolean;
};

export const experienceInfoList: ExperienceInfo[] = [
  {
    company: "Cyderes",
    jobTitle: "Software Engineer I - II",
    startDate: "Feb 2022",
    endDate: "Present",
    body: (
      <>
        <ul style={{ listStyleType: "circle" }}>
          <li>
            Reduced Google Software Development contract backlog by 100% in 6
            months. This recovered the contract to a healthy state from
            unwilling to resign.
          </li>
          <li>
            Designed and implemented Custom Operator to automate 40 hours per week of manual work
          </li>
        </ul>
      </>
    ),
    tags: ["Go", "K8s", "GCP", "Bash", "Python"],
  },
  {
    company: "SecDevOps Consultant",
    jobTitle: "SecDevOps Consultant",
    startDate: "Oct 2021",
    endDate: "Present",
    body: (
      <>
        <ul style={{ listStyleType: "circle" }}>
          <li>
            Developed Golang code for ingesting data using ETL into applications
            saving 1 hour of daily manual work
          </li>
          <li>
            Used network packet captures to reverse engineer SOAP API and
            automate configuration backups initially only available via Java GUI
            saving 1 hour of daily work
          </li>
          <li>
            Designed SharePoint page to bring paper employee handbooks, upcoming
            events and company news into a centralized web platform for all
            employees
          </li>
        </ul>
      </>
    ),
    tags: ["Go", "Python"],
  },
  {
    company: "Synovus",
    jobTitle: "Network Engineer",
    startDate: "Mar 2021",
    endDate: "Sep 2021",
    body: (
      <>
        <ul style={{ listStyleType: "circle" }}>
          <li>
            Created custom python / netmiko scripts to reduce time handling frequent tasks
          </li>
        </ul>
      </>
    ),
    tags: ["Python"],
  },
  {
    company: "Southern Fibernet",
    jobTitle: "NOC Engineer",
    startDate: "Oct 2018",
    endDate: "Feb 2021",
    body: (
      <>
        <ul style={{ listStyleType: "circle" }}>
          <li>
            Built and integrated a web dashboard and API for remote querying of logs reducing mean time to restore and troubleshooting
          </li>
        </ul>
      </>
    ),
    tags: ["Python", "Bash", "Javascript"],
  },
];

const ExperienceIndex = ({header}: ExperienceIndexProps) => {
  return (
    <>
    <div className={styles.bigcontainer}>
    <div id="experience" />
    {header && (
        <h2>/experience</h2>
    )}
        {experienceInfoList.map((experienceInfo, index) => {
          return (
            <>
              <ExperienceCard key={index} experienceInfo={experienceInfo} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ExperienceIndex;
