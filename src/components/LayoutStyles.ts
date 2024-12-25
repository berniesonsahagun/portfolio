import styled from "styled-components";
import { Modal } from "@react95/core";
import DesktopTextureBG from "@/assets/desktop-texture.webp";

const breakpoints = {
  mobile: "325px",
  tablet: "768px",
  laptop: "1024px",
};

export const device = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
};

export const styledModal = styled(Modal)`
  max-height: 80vh;
  @media ${device.mobile} {
    margin: 5px;
    top: 0;
    max-width: 100%;
  }
  @media ${device.tablet} {
    max-width: 600px;
    left: 80px;
    top: 80px;
  }
`;

export const styledModalFrame = styled(Modal.Content)`
  padding: 16px;
  overflow-y: auto;
`;

export const DesktopGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #0301ae 2.73%,
    rgba(180, 180, 230, 0.96) 28.68%,
    rgba(255, 255, 255, 0.84) 51.75%,
    rgba(202, 202, 231, 0.74) 63.18%,
    #0301ae 93.41%
  );
`;

export const DesktopItemsContainer = styled.div`
  position: relative;
`;

export const DesktopTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${DesktopTextureBG});
  opacity: 0.6;
  z-index: -1;
`;

export const DesktopIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100%;
`;
