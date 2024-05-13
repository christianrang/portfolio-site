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
              <p>
                  Reduced Google Software Development contract backlog by 100% in 6
                  months. This recovered the contract to a healthy state from
                  unwilling to resign.
              </p>
          </li>
          <li>
              <p>
                  Designed and implemented Custom Operator to automate 40 hours per week of manual work
              </p>
          </li>
        </ul>
      </>
    ),
    tags: ["Go", "K8s", "GCP", "Bash", "Python"],
  },
  {
    company: "Freelance",
    jobTitle: "SecDevOps Consultant",
    startDate: "Oct 2021",
    endDate: "Present",
    body: (
      <>
        <ul style={{ listStyleType: "circle" }}>
          <li>
            <p>
                Developed Golang code for ingesting data using ETL into applications
                saving 1 hour of daily manual work
            </p>
          </li>
          <li>
              <p>
                  Used network packet captures to reverse engineer SOAP API and
                  automate configuration backups initially only available via Java GUI
                  saving 1 hour of daily work
              </p>
          </li>
          <li>
              <p>
                  Designed SharePoint page to bring paper employee handbooks, upcoming
                  events and company news into a centralized web platform for all
                  employees
              </p>
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
              <p>
                  Created custom python / netmiko scripts to reduce time handling frequent tasks
              </p>
          </li>
        </ul>
      </>
    ),
    tags: ["Python"],
  },
  {
    company: "Southern Fibernet",
    jobTitle: "Linux SysAdmin",
    startDate: "Oct 2018",
    endDate: "Feb 2021",
    body: (
      <>
        <ul style={{ listStyleType: "circle" }}>
          <li>
              <p>
                  Built and integrated a web dashboard and API for remote querying of logs reducing mean time to restore and troubleshooting
              </p>
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
        <h2>Experience</h2>
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
