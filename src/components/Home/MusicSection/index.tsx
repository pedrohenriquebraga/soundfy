import React from "react";
import { IMusicData } from "../../../@types/interfaces";
import { Feather } from "@expo/vector-icons";
import { SectionContainer, SectionTitle, MusicsContainer } from "./styles";
import MusicCard from "../MusicCard";

export interface IMusicSectionProps {
  title: string;
  iconName: keyof typeof Feather.glyphMap;
  content: IMusicData[];
}

const MusicSection: React.FC<IMusicSectionProps> = ({
  title,
  iconName,
  content,
}) => {
  return (
    <SectionContainer>
      <SectionTitle>
        <Feather name={iconName} size={18} /> {title}
      </SectionTitle>
      <MusicsContainer>
        {content.map((music) => (
          <MusicCard music={music} />
        ))}
      </MusicsContainer>
    </SectionContainer>
  );
};

export default MusicSection;
