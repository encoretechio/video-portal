import { UserData } from '../models/user-data';

export const USER_DATA:UserData = {
    user:{  id: 2,
      username:"shaedi",
      firstName: "Shanika",
      lastName: "Ediriweera",
      email:"shaedi@abc.com",
      contactNumber:"011-121313222",
      password:"",
      active:true},
    playlists:[
        {
        id: 1,
        name: 'Playlist1' ,
        description:"Desc",
        videoList:[ {id: 1, title: "title1", description:"string", url:"http://somethi.com/13"},
                    {  id: 2, title: "title2", description:"string", url:"http://somethi.com/12"},
                    {  id: 123, title: "title3", description:"string", url:"http://somethi.com/3"} ] },
        {
        id: 12,
        name: 'Playlist2' ,
        description:"Desc",
        videoList:[ {id: 3, title: "title1", description:"string", url:"http://somethi.com/123"},
                    {  id: 4, title: "title2", description:"string", url:"http://somethi.com/123"} ] },
    ]
};

// Old data
// export const USERS: User[] = [
//   {id: 11, name: 'Me', username:'jana', password:'123'},
//   {id: 12, name: 'Narco', username:'shani', password:'123'},
//   {id: 13, name: 'Bombasto', username:'bibi', password:'123'}
// ];
//
//
// export const PLAYLISTS:Playlist[] = [
//   { id: 11, name: 'Playlist1' , description:"Desc",videoList:[ {  id: 123, title: "Video1", description:"string"},
//                                                           {  id: 123, title: "Video3", description:"string"},
//                                                           {  id: 123, title: "Video2", description:"string"} ] },
//   { id: 12, name: 'Playlist2' , description:"Desc",videoList:[] },
//   { id: 13, name: 'Playlist3' , description:"Desc",videoList:[] }
// ];
