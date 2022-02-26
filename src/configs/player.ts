import TrackPlayer, {
  Capability,
  MetadataOptions,
} from "react-native-track-player";

const capabilities = [
  Capability.Play,
  Capability.Pause,
  Capability.SkipToNext,
  Capability.SkipToPrevious,
  Capability.SeekTo,
];

export const updateConfigs: MetadataOptions = {
  stopWithApp: true,
  alwaysPauseOnInterruption: true,
  playIcon: require("../assets/play-icon.png"),
  pauseIcon: require("../assets/pause-icon.png"),
  previousIcon: require("../assets/skip-prev-icon.png"),
  nextIcon: require("../assets/skip-next-icon.png"),
  compactCapabilities: capabilities,
  capabilities,
};
