import { MouseEventHandler } from "react";
import { TitleBar } from "@react95/core";
import { Explorer103 } from "@react95/icons";
import * as S from "@/components/LayoutStyles";

interface ModalProps {
  handleCloseModal: MouseEventHandler<HTMLElement>;
}

export function PortfolioModal({ handleCloseModal }: ModalProps) {
  return (
    <S.styledModal
      title="Portfolio.txt"
      titleBarOptions={[
        <S.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={handleCloseModal} key="close" />,
      ]}
      height="100%"
      icon={<Explorer103 variant="16x16_4" />}
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h1>Short Portfolio</h1>
        <p>
          This is a shortened, non-visual version of my portfolio without
          detailed information on the projects I have been working on. If you
          are interested in hitting me up for a job, just contact me!
        </p>

        <h2>SaaS Applications</h2>

        <h3>Togather</h3>
        <span className="role">Role: Software Engineer</span>

        <h4>Description</h4>
        <p>
          Togather is a leading event booking platform in the UK. My role in
          this project was to create reusable components exactly as the design
          provided. Moreover, I integrated these components with their backend,
          ensuring performance and functionality is up to the coding standards.
        </p>

        <p>
          View the website here:{" "}
          <a href="https://togather.com/" target="_blank">
            https://togather.com/
          </a>
        </p>

        <hr />

        <h3>Killington Ski Resort (Mono-repo Multi-website Deploy)</h3>
        <span className="role">Role: Software Engineer</span>

        <h4>Description</h4>
        <p>
          Killington Ski Resort is a Mono-repo Multi-website Deployment using
          Gatsby and GraphQL. My role was to convert an existing Angular
          codebase repository into the new Gatsby and GraphQL setup. There were
          10+ websites within the same repository. I also maintained and managed
          the components afterwards, ensuring that the transition was seamlesss.
        </p>

        <p>
          View the website here:{" "}
          <a href="https://www.killington.com/" target="_blank">
            https://www.killington.com/
          </a>
        </p>

        <hr />

        <h3>Merk</h3>
        <span className="role">Role: Hobbyist</span>
        <h4>Background</h4>
        <p>
          I'm from the Philippines, where finding skilled blue-collar workers
          for home repairs and construction—like plumbing and electrical
          work—can be challenging. Having faced this struggle myself, I also
          learned that many workers experience unstable income due to irregular
          job opportunities. This inspired me to create a SaaS platform that
          connects homeowners with trusted blue-collar workers, making it easier
          to find reliable help while providing workers with steady job
          opportunities.
        </p>

        <h4>Solution</h4>
        <p>
          I'm building an app using Next.js for a robust and high-performance
          frontend, paired with .NET Framework for a code-first backend
          approach. This project not only delivers a scalable platform but also
          helps me enhance my skills in both frontend and backend development.
        </p>

        <hr />

        <h2>Internal Automation Tools for Website Maintenance</h2>
        <h3>Visual Integrity Checker</h3>
        <span className="role">Role: Software Engineer</span>
        <h4>Background</h4>
        <p>
          Managing multiple websites across platforms like WordPress, Webflow,
          Wix, and static sites can be a nightmare, especially when caches fail
          to update properly, causing broken styles. This experience inspired me
          to develop a tool that simplifies monitoring and maintenance, ensuring
          websites remain stable and visually intact.
        </p>

        <h4>Solution</h4>
        <p>
          Using Playwright and some CRON Job, I built a script that would take
          screenshots of the websites periodically. These screenshots would be
          compared to a baseline screenshot. If a significant change was
          detected, a report would be sent to me indicating a problem.
        </p>

        <hr />

        <h2>Talent Portfolio Website</h2>
        <h3>Hush Management</h3>
        <span className="role">Role: Sole Developer</span>

        <h4>Description</h4>
        <p>
          Built with NextJS, TailwindCSS, and Contentful, this website is a
          modern revamp of the client's previous website. The design was
          implemented in great detail, and a CMS was setup using Contentful for
          the client to update their content hassle-free. It features
          interactive elements and a slick user-experience that NextJS provides.
        </p>

        <p>
          View the website here:{" "}
          <a href="https://hushmanagement.co.uk/" target="_blank">
            https://hushmanagement.co.uk/
          </a>
        </p>

        <hr />

        <h3>ROOT Management</h3>
        <span className="role">Role: Sole Developer</span>

        <h4>Description</h4>
        <p>
          Built with NextJS, TailwindCSS, and Contentful, this website is a
          modern revamp of the client's previous website—similar to Hush
          Management. The design was implemented in great detail, and a CMS was
          setup using Contentful for the client to update their content
          hassle-free. It features interactive elements and a slick
          user-experience that NextJS provides.
        </p>

        <p>
          View the website here:{" "}
          <a href="https://root-mgmt.com/" target="_blank">
            https://root-mgmt.com/
          </a>
        </p>
      </S.styledModalFrame>
    </S.styledModal>
  );
}
