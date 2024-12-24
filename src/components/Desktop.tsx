import "./styles.scss";
import useModal from "@/hooks/useModal";

import Taskbar from "@/components/organisms/Taskbar";
import DesktopIcons from "@/components/molecules/DesktopIcons";

import * as S from "@/components/LayoutStyles";

import {
  AboutModal,
  CVModal,
  MusicModal,
  PaintModal,
  PhotoModal,
  PortfolioModal,
  RecentWorksModal,
  SkillsModal,
} from "@/components/modals";

function Desktop() {
  const [showAboutModal, handleOpenAboutModal, handleCloseAboutModal] =
    useModal(true);
  const [showSkillsModal, handleOpenSkillsModal, handleCloseSkillsModal] =
    useModal(false);
  const [showPhotoModal, handleOpenPhotoModal, handleClosePhotoModal] =
    useModal(false);
  const [
    showPortfolioModal,
    handleOpenPortfolioModal,
    handleClosePortfolioModal,
  ] = useModal(false);
  const [showCVModal, handleOpenCVModal, handleCloseCVModal] = useModal(false);
  const [showPaintModal, handleOpenPaintModal, handleClosePaintModal] =
    useModal(false);
  const [showMusicModal, handleOpenMusicModal, handleCloseMusicModal] =
    useModal(false);
  const [
    showRecentWorksModal,
    handleOpenRecentWorksModal,
    handleCloseRecentWorksModal,
  ] = useModal(false);

  return (
    <>
      <S.DesktopGrid>
        <S.DesktopItemsContainer>
          <S.DesktopTexture></S.DesktopTexture>
          <DesktopIcons
            openEventHandlers={[
              handleOpenAboutModal,
              handleOpenPortfolioModal,
              handleOpenPaintModal,
              handleOpenMusicModal,
              handleOpenRecentWorksModal,
            ]}
          />

          {showAboutModal && (
            <AboutModal handleCloseModal={handleCloseAboutModal} />
          )}

          {showSkillsModal && (
            <SkillsModal handleCloseModal={handleCloseSkillsModal} />
          )}

          {showPhotoModal && (
            <PhotoModal handleCloseModal={handleClosePhotoModal} />
          )}

          {showPortfolioModal && (
            <PortfolioModal handleCloseModal={handleClosePortfolioModal} />
          )}

          {showCVModal && <CVModal handleCloseModal={handleCloseCVModal} />}

          {showPaintModal && (
            <PaintModal handleCloseModal={handleClosePaintModal} />
          )}

          {showMusicModal && (
            <MusicModal handleCloseModal={handleCloseMusicModal} />
          )}

          {showRecentWorksModal && (
            <RecentWorksModal handleCloseModal={handleCloseRecentWorksModal} />
          )}
        </S.DesktopItemsContainer>

        <Taskbar
          handleOpenAboutModal={handleOpenAboutModal}
          handleOpenCVModal={handleOpenCVModal}
          handleOpenPhotoModal={handleOpenPhotoModal}
          handleOpenPortfolioModal={handleOpenPortfolioModal}
          handleOpenSkillsModal={handleOpenSkillsModal}
        />
      </S.DesktopGrid>
    </>
  );
}

export default Desktop;
