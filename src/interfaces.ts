export interface IEpisode {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  summary: string;
  season: number;
  number: number;
  airdate: string;
  url: string;
}

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<any>;
}

export interface IAction {
  type: string;
  payload: any;
}
