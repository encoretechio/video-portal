import { User } from './user'
import { Video } from './video'

export class Comment {
  //name: string;
  //content: string;
  //imageUrl: string;
  author: User;
  video: number;
  text: string;
  //    datetime : sails -> createdAt
}
