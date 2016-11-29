import { UserData } from '../models/user-data';
import { ProgressData } from '../models/progr-data';

export const USER_DATA: UserData = {
    user: {
        id: 2,
        username: "shaedi",
        firstName: "Shanika",
        lastName: "Ediriweera",
        email: "shaedi@abc.com",
        contactNumber: "011-121313222",
        password: "",
        active: true
    },
    playlists: [
        {
            id: 1,
            name: 'Playlist1',
            description: "Description of the plalist. Thit is about a general idea on what playlist is about. Things the titile can't describe can be included here.",
            videoList: [{ id: 1, title: "title1", description: "string", url: "http://somethi.com/13" },
            { id: 2, title: "title2", description: "string", url: "http://somethi.com/12" },
            { id: 123, title: "title3", description: "string", url: "http://somethi.com/3" }]
        },
        {
            id: 12,
            name: 'Playlist2',
            description: "Description of the plalist. Thit is about a general idea on what playlist is about. Things the titile can't describe can be included here.",
            videoList: [{ id: 3, title: "title1", description: "string", url: "http://somethi.com/123" },
            { id: 4, title: "title2", description: "string", url: "http://somethi.com/123" }]
        },
    ]
};

export const PROGR_DATA: ProgressData = {
    user: {
        id: 2,
        username: "shaedi",
        firstName: "Shanika",
        lastName: "Ediriweera",
        email: "shaedi@abc.com",
        contactNumber: "011-121313222",
        password: "",
        active: true
    },
    playlists: [
        {
            id: 1,
            name: 'Playlist1',
            description: "Description of the playlist. Thit is about a general idea on what playlist is about. Things the titile can't describe can be included here.",
            videoList: [{ id: 1, title: "title1", description: "string", url: "http://somethi.com/13", status: "Completed", percentage: 100 },
            { id: 2, title: "title2", description: "string", url: "http://somethi.com/12", status: "In Progress", percentage: 10 },
            { id: 123, title: "title3", description: "string", url: "http://somethi.com/3", status: "To Be", percentage: 0 }]
        },
        {
            id: 12,
            name: 'Playlist2',
            description: "Description of the playlist. Thit is about a general idea on what playlist is about. Things the titile can't describe can be included here.",
            videoList: [{ id: 3, title: "title1", description: "string", url: "http://somethi.com/123", status: "Completed", percentage: 100 },
            { id: 4, title: "title2", description: "string", url: "http://somethi.com/123", status: "Completed", percentage: 100 }]
        },
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
