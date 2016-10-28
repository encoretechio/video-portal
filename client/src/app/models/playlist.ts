import { Video } from './video'

export class Playlist {
  id: number;
  name: string;
  description:string = "";
  videoList:Video[];
}
