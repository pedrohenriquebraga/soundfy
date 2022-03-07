import React from "react";
import { IMusicData } from "../../../@types/interfaces";
import { Feather } from "@expo/vector-icons";
import { SectionContainer, SectionTitle, MusicsContainer } from "./styles";
import MusicCard from "../MusicCard";
import { MotiView } from "moti";

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
        {content.map((music, index) => (
          <MotiView
            key={index}
            from={{
              opacity: 0,
              translateX: -100
            }}
            animate={{
              opacity: 1,
              translateX: 0
            }}
            delay={50 + (index * 50)}
            transition={{
              type: "timing",
              duration: 500
            }}
          >
            <MusicCard music={music} />
          </MotiView>
        ))}
      </MusicsContainer>
    </SectionContainer>
  );
};

export default MusicSection;
