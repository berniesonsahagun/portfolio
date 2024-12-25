import { MouseEventHandler } from "react";
import { TitleBar, ProgressBar } from "@react95/core";
import { Shell3236 } from "@react95/icons";
import * as S from "@/components/LayoutStyles";

interface ModalProps {
  handleCloseModal: MouseEventHandler<HTMLElement>;
}

export function SkillsModal({ handleCloseModal }: ModalProps) {
  return (
    <S.styledModal
      className="styledModal"
      title={"Skills.txt"}
      titleBarOptions={[
        <S.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={handleCloseModal} key="close" />,
      ]}
      icon={<Shell3236 variant="16x16_4" />}
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h1>Some of my skills</h1>
        <p>
          I am versatile. I can be your jack-of-all-trades but I don't want to
          be a master of none. I'll show you here what I think is my level right
          now, and I'll tell myself to update this in the future. This ain't
          bragging, but this is my humble journey.
        </p>

        <p>Let me show you what I have, of course, in numbers.</p>

        <h2>Frontend Development</h2>
        <h4>React</h4>
        <ProgressBar width={250} percent={95} />
        <h4>NextJS</h4>
        <ProgressBar width={250} percent={75} />
        <h4>HTML</h4>
        <ProgressBar width={250} percent={99} />
        <h4>CSS</h4>
        <ProgressBar width={250} percent={99} />
        <h4>Typescript</h4>
        <ProgressBar width={250} percent={80} />
        <h4>Angular</h4>
        <ProgressBar width={250} percent={60} />

        <div style={{ margin: "8px" }} />

        <h2>Backend Development</h2>
        <h4>NodeJS</h4>
        <ProgressBar width={250} percent={80} />
        <h4>.NET Framework</h4>
        <ProgressBar width={250} percent={35} />
        <h4>Python (Flask and FastAPI)</h4>
        <ProgressBar width={250} percent={25} />
        <h4>Databases</h4>
        <ProgressBar width={250} percent={75} />

        <div style={{ margin: "8px" }} />

        <h2>DevOpsSec</h2>
        <h4>Git / Github / Gitlab</h4>
        <ProgressBar width={250} percent={55} />
        <h4>AWS Server</h4>
        <ProgressBar width={250} percent={35} />
        <h4>Docker</h4>
        <ProgressBar width={250} percent={15} />
        <h4>Kubernetes</h4>
        <ProgressBar width={250} percent={5} />
        <h4>Automation</h4>
        <ProgressBar width={250} percent={40} />
        <h4>Testing</h4>
        <ProgressBar width={250} percent={15} />
        <h4>Security</h4>
        <ProgressBar width={250} percent={25} />

        <div style={{ margin: "8px" }} />

        <h2>SEO &amp; Marketing</h2>
        <h4>Google Analytics</h4>
        <ProgressBar width={250} percent={35} />
        <h4>Google Tag Manager</h4>
        <ProgressBar width={250} percent={35} />
        <h4>Google Ads</h4>
        <ProgressBar width={250} percent={20} />
        <h4>Google Looker Studio</h4>
        <ProgressBar width={250} percent={55} />
        <h4>Google Search Console</h4>
        <ProgressBar width={250} percent={30} />
        <h4>SEO</h4>
        <ProgressBar width={250} percent={25} />

        <div style={{ margin: "8px" }} />

        <h2>Soft Skills</h2>
        <ul>
          <li>Project Management</li>
          <li>Timeboxing</li>
          <li>Agile Methodology</li>
          <li>Reporting</li>
          <li>Communication</li>
        </ul>
      </S.styledModalFrame>
    </S.styledModal>
  );
}
