import { MouseEventHandler } from "react";
import { TitleBar, Cursor } from "@react95/core";
import { Notepad1 } from "@react95/icons";

import * as S from "@/components/LayoutStyles";

interface ModalProps {
  handleCloseModal: MouseEventHandler<HTMLElement>;
}

export function AboutModal({ handleCloseModal }: ModalProps) {
  return (
    <S.styledModal
      icon={<Notepad1 variant="16x16_4" />}
      title={"Welcome.txt"}
      titleBarOptions={[
        <S.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={handleCloseModal} key="close" />,
      ]}
      width="500px"
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h1>Hi there!</h1>
        <p>
          I'm Bernie, a software engineer. Throughout my career, I've worked in
          various roles in software development—spanning frontend, backend,
          DevOps, documentation, automation, SEO, and management. I've also been
          involved in a wide range of projects, such as landing pages,
          e-commerce sites, and internal dashboards. You could say that I'm
          versatile, but what I love most is still my original passion—software
          development, coding, and tinkering with things.
        </p>
        <p>
          This portfolio was built with Vite and{" "}
          <a
            href="https://github.com/React95/React95"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            React95
          </a>
          , an open-source Windows95 component library for React. Many thanks to
          the contributors of the React95 library! ❤️
        </p>
      </S.styledModalFrame>
    </S.styledModal>
  );
}
