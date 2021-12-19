import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Parser } from "../parser/index.js";

export const Images = new GraphQLObjectType({
  name: "Images",
  description: "An object Containing images with multiple resolutions",
  fields: () => ({
    low: {
      type: GraphQLString,
    },
    medium: {
      type: GraphQLString,
    },
    high: {
      type: GraphQLString,
    },
  }),
});
export const Album = new GraphQLObjectType({
  name: "Album",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Unique Identifier",
    },
    title: {
      type: GraphQLString,
      description: "Title of the Song",
    },
    subtitle: {
      type: GraphQLString,
      description: "Subtitle of the Song",
    },
    image: {
      type: GraphQLString,
      description: "Original Link for thumbnail",
    },
    images: {
      type: Images,
      description: "Thumbnail Images with different resulution",
      resolve: (res) => Parser.images(res),
    },
    token: {
      type: GraphQLString,
      description:
        "Token of the playlist which can be used to retreive more information about this playlist",
      resolve: (res) => res.perma_url.split("/").pop(),
    },
    hasLyrics: {
      type: GraphQLBoolean,
      resolve: (res) => res.more_info.has_lyrics === "true",
    },
    musicBy: {
      type: GraphQLString,
      resolve: ({ more_info }) => more_info.music,
    },
    mediaURL: {
      type: GraphQLString,
      resolve: ({ more_info }) => more_info.encrypted_media_url,
    },
    type: {
      type: GraphQLString,
    },
  }),
});
export const Playlist = new GraphQLObjectType({
  name: "Playlist",
  description: "An array of songs",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Unique Identifier",
    },
    title: {
      type: GraphQLString,
      description: "Title of the Song",
    },
    subtitle: {
      type: GraphQLString,
      description: "Subtitle of the Song",
    },
    image: {
      type: GraphQLString,
      description: "Original Link for thumbnail",
    },
    images: {
      type: Images,
      description: "Thumbnail Images with different resulution",
      resolve: (res) => Parser.images(res),
    },
    totalSong: {
      type: GraphQLInt,
      description: "Total Number of songs present in this playlist",
      resolve: (res) => res.more_info.song_count,
    },
    token: {
      type: GraphQLString,
      description:
        "Token of the playlist which can be used to retreive more information about this playlist",
      resolve: (res) => res.perma_url.split("/").pop(),
    },
  }),
});

export const InitialData = new GraphQLObjectType({
  name: "InitialData",
  description: "Initial Data required for the App to function",
  fields: () => ({
    greeting: {
      type: GraphQLString,
      description: "A common greeting for the users of the App",
    },
    topPlaylist: {
      type: GraphQLList(Playlist),
      description: "A list of Top Trending Playlist all over the country",
      resolve: (apiData) => apiData.top_playlists,
    },
    newAlbums: {
      type: GraphQLList(Album),
      description: "A list of New Trending Albums all over the country",
      resolve: (apiData) => apiData.new_albums,
    },
  }),
});
