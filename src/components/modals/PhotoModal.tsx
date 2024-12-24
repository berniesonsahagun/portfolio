import { MouseEventHandler } from "react";
import { TitleBar, Frame } from "@react95/core";
import { User } from "@react95/icons";
import * as S from "@/components/LayoutStyles";
import BerniePic from "@/assets/bernie-me.jpg";

interface ModalProps {
  handleCloseModal: MouseEventHandler<HTMLElement>;
}

export function PhotoModal({ handleCloseModal }: ModalProps) {
  return (
    <S.styledModal
      title={"Bernie_as_a_lifeform.jpg"}
      titleBarOptions={
        <TitleBar.Close onClick={handleCloseModal} key="close" />
      }
      icon={<User variant="16x16_4" />}
    >
      <Frame boxShadow="none" className="fullWidthImage">
        <img
          src={BerniePic}
          aria-hidden
          alt="Bernie at his peak"
          className="fullWidthImage"
        ></img>
      </Frame>
    </S.styledModal>
  );
}
