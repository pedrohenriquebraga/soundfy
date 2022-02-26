import React, { createContext, useContext, useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { IMusicData } from "../@types/interfaces";

interface IPlayerContext {
  allMusics: IMusicData[];
}

const PlayerContext = createContext<IPlayerContext>({} as IPlayerContext);

const PlayerProvider: React.FC = ({ children }) => {
  const [allMusics, setAllMusics] = useState<IMusicData[]>([]);

  useEffect(() => {
    (async () => {
      const assets = await MediaLibrary.getAssetsAsync({
        mediaType: "audio",
      });

      const musics = assets.assets.map((a) => {
        return {
          name: a.filename,
          path: a.uri,
          duration: a.duration,
          albumId: a.albumId,
        };
      });

      setAllMusics(musics);
    })();
  }, []);

  return (
    <PlayerContext.Provider value={{ allMusics }}>
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayer = () => useContext(PlayerContext);

export { PlayerProvider, usePlayer };
