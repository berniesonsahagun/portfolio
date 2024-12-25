import { MouseEventHandler } from "react";
import { TitleBar } from "@react95/core";
import { Shell32133 } from "@react95/icons";
import * as S from "@/components/LayoutStyles";

interface ModalProps {
  handleCloseModal: MouseEventHandler<HTMLElement>;
}

export function CVModal({ handleCloseModal }: ModalProps) {
  return (
    <S.styledModal
      icon={<Shell32133 variant="16x16_4" />}
      title={"CV.txt"}
      titleBarOptions={[
        <S.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={handleCloseModal} key="close" />,
      ]}
      height="100%"
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h1>Curriculum Vitae</h1>
        <p>
          A Software Engineer with expertise in developing scalable, responsive
          web solutions using modern frameworks like NextJS, React, and Webflow.
          Proven track record of managing end-to-end development, maintaining
          high-quality standards across multiple platforms. Passionate about
          leveraging technology to create seamless user experiences and
          committed to continuous learning.
        </p>
        <hr color="gray" />
        <h2>Work History</h2>
        <h3>Software Engineer</h3>
        <span>
          Contact Agency Ltd – London, England <em>(Feb 2024 – Present)</em>
        </span>
        <p>
          At Contact Agency, I develop and deploy brand websites using Webflow,
          NextJS, and/or Contentful, ensuring that the websites is pixel-perfect
          to the designs and responsive on different screens. I focus on
          creating reusable components with NextJS and TailwindCSS, making sure
          that what I did yesterday, was something that can still be useful
          today.
        </p>

        <h3>Assistant Head of Web and MarTech</h3>
        <span>
          <em>
            IMPACT! Brands and Communications – Singapore (Apr 2022 – Present)
          </em>
        </span>
        <p>
          As the Assistant Head of Web and MarTech, I oversee core development
          strategies, quality control, and project timelines. In my first year,
          I successfully delivered and deployed five projects, all of which were
          retained for ongoing maintenance. I manage shared hosting accounts,
          ensuring compliance with client security policies, resolving bugs, and
          optimizing website performance. I also lead the adoption of new
          technologies, including ReactJS, Supabase, GSAP, and Webflow, to
          enhance development processes and improve the quality of deliverables.
        </p>

        <h3>Web Developer</h3>
        <span>
          IMPACT! Brands and Communications – Singapore{" "}
          <em>(Jul 2021 – Apr 2022)</em>
        </span>
        <p>
          Starting as a Web Developer, I built responsive websites from design
          files using Figma, Photoshop, and Adobe XD. I used platforms like
          Webflow, WordPress, Wix, and Unbounce, to develop websites that are
          true to their designs down to the last pixel.
        </p>

        <h3>React Developer (Project-Based)</h3>
        <span>
          Hoorooh Digital – Colorado, USA <em>(Oct 2022 – Jan 2023)</em>
        </span>
        <p>
          I migrated a legacy portfolio website to the latest ReactJS framework,
          enhancing performance and maintainability. I collaborated with the
          development team to create a multi-website repository utilizing React,
          Gatsby, and GraphQL.
        </p>

        <h3>Sole Web Developer</h3>
        <span>
          Razza Consulting Group, Inc. – Quezon City, PH{" "}
          <em>(Jul 2020 – Jul 2021)</em>
        </span>
        <p>
          As the sole Web Developer at Razza Consulting Group, I managed all
          technical deliverables, including website development using WordPress,
          AWS hosting, and domain management. I implemented security policies,
          maintained backups, and ensured the reliability and data integrity of
          client websites.
        </p>

        <h3>Android Developer Intern</h3>
        <span>
          Samsung R&D Institute Philippines – Taguig, NCR, PH{" "}
          <em>(Jun 2017 – Aug 2017)</em>
        </span>
        <p>
          As an Android Developer Intern, I collaborated within an agile
          development team to design and deliver a functional news application
          prototype within one month, which we successfully presented to
          management. The internship provided hands-on experience in Android
          development, system requirements specification, and agile
          methodologies. I focused on implementing features and adapting to new
          programming languages and frameworks, allowing me to quickly learn and
          apply unfamiliar technologies. Despite tight timelines, our team
          effectively delivered a working application, showcasing our ability to
          work cohesively and meet project goals.
        </p>

        <hr color="gray" />

        <h2>Education</h2>
        <h3>BS Computer Science – Honor Roll</h3>
        <span>University of the Philippines - Los Baños</span>
        <p>
          My Bachelor's Thesis in computer science handled the issues faced by a
          non-profit organization in handling their translation for the internal
          dashboard they created. The process flow on handling the translation
          since they were using i18n package from Angular. Not all the content
          in the dashboard was tagged with the i18n tags, so first I had to
          parse the codebase and directly output the existing translations into
          the platform that I developed. Then I invited the translators to the
          platform to edit the translations. Lastly, the translations inside the
          platform was integrated back to the Angular codebase.
        </p>

        <hr color="gray" />

        <h2>Interests</h2>

        <ul>
          <li>Cycling and Running</li>
          <li>Webtoons</li>
          <li>DevOps and SRE</li>
          <li>Automation</li>
          <li>Exploring New Tech Stack</li>
        </ul>
      </S.styledModalFrame>
    </S.styledModal>
  );
}
