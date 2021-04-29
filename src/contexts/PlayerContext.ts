import { createContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: Boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: Boolean) => void;
  togglePlay: () => void
}

export const PlayerContext = createContext( {} as PlayerContextData)