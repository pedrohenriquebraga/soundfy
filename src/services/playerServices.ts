import TrackPlayer from "../services/trackPlayer"
import { Event, useProgress } from "react-native-track-player"
import { usePlayer } from "../contexts/player";

module.exports = async function () {


  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemoteNext, async () => {
    await TrackPlayer.skipToNext();
    await TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack - 1 < 0)
      return;

    await TrackPlayer.skipToPrevious();
    await TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemoteSeek, data => TrackPlayer.seekTo(data.position))
};
