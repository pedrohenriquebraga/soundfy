import React, { useMemo } from "react";
import PresentationHeader from "../PresentationHeader";
import { SectionTitle } from "./styles";
import { Feather } from "@expo/vector-icons";
import { usePlayer } from "../../../contexts/player";
import { FlatList } from "react-native";
import MusicCard from "../MusicCard";
import MusicSection from "../MusicSection";

interface IPageSection {
  key: string;
  isTitle?: boolean;
  render: () => JSX.Element;
}

const Main: React.FC = () => {
  const { allMusics, recentListenMusics, currentMusic, getMoreMusics } = usePlayer();

  const { data, indices } = useMemo(() => {
    const data: IPageSection[] = [
      {
        key: "HEADER",
        render: () => <PresentationHeader />
      },
      {
        key: "RECENT_LISTEN",
        isTitle: true,
        render: () => (
          <SectionTitle>
            <Feather name="clock" size={16} /> Tocadas recentemente
          </SectionTitle>
        ),
      },
      {
        key: "RECENT_LISTEN_LIST",
        render: () => <MusicSection content={recentListenMusics} />,
      },
      {
        key: "ALL_MUSICS",
        isTitle: true,
        render: () => (
          <SectionTitle>
            <Feather name="list" size={16} /> Todas as músicas
          </SectionTitle>
        ),
      },
      {
        key: "ALL_MUSICS_LIST",
        render: () => <MusicSection content={allMusics} />,
      },
    ];
    const indices = [];

    data.map((item, index) => item.isTitle && indices.push(index));

    return {
      data,
      indices,
    };
  }, [allMusics, recentListenMusics]);

  return (
    <FlatList
      data={data}
      stickyHeaderIndices={indices}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: currentMusic ? 90 : 0 }}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => item.render()}
      onEndReachedThreshold={0.7}
      onEndReached={getMoreMusics}
      removeClippedSubviews
    />
  );
};

export default Main;
