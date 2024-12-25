import { MouseEventHandler } from "react";
import { Frame, TitleBar } from "@react95/core";
import { CdMusic } from "@react95/icons";
import * as S from "@/components/LayoutStyles";

interface ModalProps {
  handleCloseModal: MouseEventHandler<HTMLElement>;
}

export function MusicModal({ handleCloseModal }: ModalProps) {
  return (
    <S.styledModal
      title={"Music"}
      titleBarOptions={[
        <S.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={handleCloseModal} key="close" />,
      ]}
      icon={<CdMusic variant="16x16_4" />}
      width="500px"
    >
      <Frame>
        <iframe
          src="https://open.spotify.com/embed/playlist/3IKtuffl6EoUbsZjfOe1mB?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Frame>
    </S.styledModal>
  );
}
