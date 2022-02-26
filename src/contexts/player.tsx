import React, { createContext, useContext, useEffect, useState } from "react";
import { IMusicData } from "../@types/interfaces";
import * as MediaLibrary from "expo-media-library";
import TrackPlayer, { Event, Capability, useProgress } from "react-native-track-player";
import * as configs from "../configs/player"

interface IPlayerContext {
  allMusics: IMusicData[];
  isPlaying: boolean;
  isMuted: boolean;
  isLooped: boolean;
  currentMusic: IMusicData;
  useProgress: typeof useProgress;
  playAndPauseMusic: () => void;
  handlePrevMusic: () => void;
  handleNextMusic: () => void;
  handleMute: () => void;
  handleLoop: () => void;
  handleSeek: (position: number) => void;
  handleSelectMusic: (trackIndex: number) => void;
}

const PlayerContext = createContext<IPlayerContext>({} as IPlayerContext);

const PlayerProvider: React.FC = ({ children }) => {
  const [allMusics, setAllMusics] = useState<IMusicData[]>([]);
  const [currentMusic, setCurrentMusic] = useState<IMusicData>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooped, setIsLooped] = useState(false)

  useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer({
        autoUpdateMetadata: true,        
      });
      await TrackPlayer.updateOptions(configs.updateConfigs)

      const assets = await MediaLibrary.getAssetsAsync({
        mediaType: "audio",
        first: 50,
      });

      const musics = assets.assets.map((a, index) => {
        return {
          index,
          name: a.filename,
          path: a.uri,
          duration: a.duration,
          albumId: a.albumId,
          contentType: a.mediaType,
        };
      });

      await TrackPlayer.add(
        musics.map((music) => {
          return {
            url: music.path,
            title: music.name,
            contentType: music.contentType,
            duration: music.duration,
            album: music.albumId
          };
        })
      );

      setAllMusics(musics);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      TrackPlayer.addEventListener(Event.RemoteNext, async () => {
        handleNextMusic()
      })
      TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
        handlePrevMusic()
      })

    })();
  }, []);

  const playAndPauseMusic = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else {
      const currentTrack = allMusics[await TrackPlayer.getCurrentTrack()];
      await TrackPlayer.play();
      setCurrentMusic(currentTrack);
      setIsPlaying(true);
    }
  };

  const handlePrevMusic = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack <= 0) return;

    await TrackPlayer.skipToPrevious();
    await TrackPlayer.play();

    setCurrentMusic(allMusics[currentTrack - 1]);
    setIsPlaying(true);
  };

  const handleNextMusic = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack >= allMusics.length) return;

    await TrackPlayer.skipToNext();
    await TrackPlayer.play();

    setCurrentMusic(allMusics[currentTrack + 1]);
    setIsPlaying(true);
  };

  const handleMute = async () => {
    await TrackPlayer.setVolume(isMuted ? 1 : 0)
    setIsMuted(old => !old)
  }

  const handleLoop = async () => {
    setIsLooped(old => !old)
  }

  const handleSelectMusic = async (trackIndex: number) => {
    setCurrentMusic(allMusics[trackIndex])

    await TrackPlayer.skip(trackIndex)
    await TrackPlayer.play()

    setIsPlaying(true)
  }

  const handleSeek = async (position: number) => {
    await TrackPlayer.seekTo(position)
  }

  return (
    <PlayerContext.Provider
      value={{
        allMusics,
        playAndPauseMusic,
        handlePrevMusic,
        handleNextMusic,
        handleMute,
        handleLoop,
        handleSeek,
        handleSelectMusic,
        useProgress,
        currentMusic,
        isPlaying,
        isMuted,
        isLooped
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayer = () => useContext(PlayerContext);

export { PlayerProvider, usePlayer };
