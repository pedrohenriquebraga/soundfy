import React, { createContext, useContext, useEffect } from "react";
import { getAllFiles, getFileType } from "../utils/files";
import * as mime from 'react-native-mime-types'

interface IMusic {
  name: string;
  path: string;
}

interface IPlayerContext {}

const PlayerContext = createContext<IPlayerContext>({});

const PlayerProvider: React.FC = ({ children }) => {

  useEffect(() => {
    (async () => {
      
    })()
  }, [])

  return (
    <PlayerContext.Provider 
      value={{

      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayer = () => useContext(PlayerContext);

export { PlayerProvider, usePlayer };
