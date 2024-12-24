import { Cursor, List, TaskBar } from "@react95/core";
import {
  Awfxcg321303,
  Explorer103,
  Progman34,
  Shell3236,
  Textchat,
  User,
} from "@react95/icons";
import { MouseEventHandler } from "react";

const socialMedia = [
  {
    id: 0,
    name: "LinkedIn",
    url: "https://www.linkedin.com/feed/",
  },
  {
    id: 1,
    name: "Github",
    url: "https://github.com/berniesonsahagun/",
  },
  {
    id: 2,
    name: "Email me",
    url: "mailto:berniesonsahagun@gmail.com",
  },
];

interface TaskbarProps {
  handleOpenCVModal: MouseEventHandler<HTMLElement>;
  handleOpenPortfolioModal: MouseEventHandler<HTMLElement>;
  handleOpenPhotoModal: MouseEventHandler<HTMLElement>;
  handleOpenSkillsModal: MouseEventHandler<HTMLElement>;
  handleOpenAboutModal: MouseEventHandler<HTMLElement>;
}

export default function Taskbar({
  handleOpenCVModal,
  handleOpenPortfolioModal,
  handleOpenPhotoModal,
  handleOpenSkillsModal,
  handleOpenAboutModal,
}: TaskbarProps) {
  return (
    <TaskBar
      list={
        <List width={"200px"}>
          <List.Item
            className="listLink"
            icon={<Progman34 variant="32x32_4" />}
          >
            Socials
            <List width={"120px"}>
              {socialMedia.map(({ id, name, url }) => (
                <a className="listLink" target="_blank" href={url} key={id}>
                  <List.Item className={`${Cursor.Pointer} listLink`}>
                    {name}
                  </List.Item>
                </a>
              ))}
            </List>
          </List.Item>

          <List.Item
            icon={<Awfxcg321303 variant="32x32_4" />}
            onClick={handleOpenCVModal}
            className="listLink"
          >
            CV
          </List.Item>

          <List.Item
            icon={<Explorer103 variant="32x32_4" />}
            onClick={handleOpenPortfolioModal}
            className="listLink"
          >
            My Projects
          </List.Item>

          <List.Item
            icon={<User variant="32x32_4" />}
            onClick={handleOpenPhotoModal}
            className="listLink"
          >
            Who's Bernie?
          </List.Item>

          <List.Item
            icon={<Shell3236 variant="32x32_4" />}
            onClick={handleOpenSkillsModal}
            className="listLink"
          >
            Skills
          </List.Item>

          <List.Divider />

          <List.Item
            icon={<Textchat variant="32x32_4" />}
            onClick={handleOpenAboutModal}
            className="listLink"
          >
            About Me
          </List.Item>
        </List>
      }
    />
  );
}
