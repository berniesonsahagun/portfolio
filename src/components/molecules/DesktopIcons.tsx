import { Cursor } from "@react95/core";
import { CdMusic, Explorer103, Mail, Mspaint, Notepad1 } from "@react95/icons";
import { MouseEventHandler } from "react";

const iconsList = [
  {
    icon: (
      <Notepad1 variant="32x32_4" style={{ marginLeft: 32, marginTop: 15 }} />
    ),
    title: "About Me",
    type: "modal",
  },
  {
    icon: (
      <Explorer103
        variant="32x32_4"
        style={{ marginLeft: 32, marginTop: 15 }}
      />
    ),
    title: "Portfolio",
    type: "modal",
  },
  {
    icon: (
      <Mspaint variant="32x32_4" style={{ marginLeft: 32, marginTop: 15 }} />
    ),
    title: "Paint",
    type: "modal",
  },
  {
    icon: (
      <CdMusic variant="32x32_4" style={{ marginLeft: 32, marginTop: 15 }} />
    ),
    title: "Music",
    type: "modal",
  },

  {
    icon: <Mail variant="32x32_4" style={{ marginLeft: 32, marginTop: 15 }} />,
    title: "Get in Touch",
    type: "link",
    url: "mailto:berniesonsahagun@gmail.com",
  },
];

interface DesktopIconsProps {
  openEventHandlers: Array<MouseEventHandler>;
}

export default function DesktopIcons({ openEventHandlers }: DesktopIconsProps) {
  return iconsList.map((item, index) => {
    const iconId = `DesktopIcon-${item.title}-${index}`;

    if (item.type === "link") {
      return (
        <a
          key={iconId}
          className={`${Cursor.Pointer} desktop-icon-link`}
          href={item.url}
        >
          {item.icon}
          <p
            style={{
              fontFamily: "MS Sans Serif",
              fontSize: 13,
              justifyContent: "center",
              marginTop: 5,
              width: 100,
              textAlign: "center",
              color: "white",
            }}
          >
            {item.title}
          </p>
        </a>
      );
    }

    return (
      <div
        key={iconId}
        className={Cursor.Pointer}
        onClick={openEventHandlers.at(index)}
      >
        {item.icon}
        <p
          style={{
            fontFamily: "MS Sans Serif",
            fontSize: 13,
            justifyContent: "center",
            marginTop: 5,
            width: 100,
            textAlign: "center",
            color: "white",
          }}
        >
          {item.title}
        </p>
      </div>
    );
  });
}
