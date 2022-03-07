import React from "react";
import MusicCard from "../MusicCard";
import { IMusicData } from "../../../@types/interfaces";
import { MusicsContainer } from "./styles";
import { MotiView } from "moti";

export interface IMusicSectionProps {
  content: IMusicData[];
}

const MusicSection: React.FC<IMusicSectionProps> = ({ content }) => {
  return (
    <MusicsContainer>
      {content.map((music, index) => (
        <MotiView
          key={index}
          from={{
            opacity: 0,
            translateX: -100,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          delay={50 + index * 50}
          transition={{
            type: "timing",
            duration: 500,
          }}
        >
          <MusicCard music={music} />
        </MotiView>
      ))}
    </MusicsContainer>
  );
};

export default MusicSection;
