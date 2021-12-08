export const Parseplaylist = ({ top_playlists }) => {
  return top_playlists;
};

export const ParseImage = ({ image }) => ({
    low: image
        .replace(/d{1,3}xd{1,3}/, "75x75")
        .replace(/d{1,3}xd{1,3}_d{1,3}xd{1,3}/, "75x75"),
    medium: image
        .replace(/d{1,3}xd{1,3}/, "250x250")
        .replace(/d{1,3}xd{1,3}_d{1,3}xd{1,3}/, "250x250"),
    high: image
        .replace(/d{1,3}xd{1,3}/, "500x500")
        .replace(/d{1,3}xd{1,3}_d{1,3}xd{1,3}/, "500x500"),
});
