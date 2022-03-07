import React, { useMemo } from "react";
import MusicSection, { IMusicSectionProps } from "../MusicSection";
import { usePlayer } from "../../../contexts/player";

import { SectionsContainer } from "./styles";

interface IPageSection extends IMusicSectionProps {}

const Main: React.FC = () => {
  const { allMusics, recentListenMusics } = usePlayer();

  const PAGE_SECTIONS = useMemo<IPageSection[]>(() => {
    return [
      {
        title: "Tocadas recentemente",
        iconName: "clock",
        content: recentListenMusics,
      },
      {
        title: "Todas as músicas",
        iconName: "list",
        content: allMusics,
      },
    ];
  }, [allMusics, recentListenMusics]);

  return (
    <SectionsContainer>
      {PAGE_SECTIONS.map((ps, index) => (
        <MusicSection
          key={index}
          title={ps.title}
          content={ps.content}
          iconName={ps.iconName}
        />
      ))}
    </SectionsContainer>
  );
};

export default Main;
