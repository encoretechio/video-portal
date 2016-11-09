import { User } from '../models/user';
import { Playlist } from '../models/playlist';
export const USERS: User[] = [
  {id: 11, name: 'Me', username:'jana', password:'123'},
  {id: 12, name: 'Narco', username:'shani', password:'123'},
  {id: 13, name: 'Bombasto', username:'bibi', password:'123'}
];


export const PLAYLISTS:Playlist[] = [
  { id: 11, name: 'Playlist1' , description:"Desc",videoList:[ {  id: 123, title: "Video1", description:"string"},
                                                          {  id: 123, title: "Video3", description:"string"},
                                                          {  id: 123, title: "Video2", description:"string"} ] },
  { id: 12, name: 'Playlist2' , description:"Desc",videoList:[] },
  { id: 13, name: 'Playlist3' , description:"Desc",videoList:[] }
];
