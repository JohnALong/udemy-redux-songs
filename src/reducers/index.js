import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "3:45" },
    { title: "Bartender Song", duration: "4:20" },
    { title: "Everything's Gonna be All Right", duration: "3:15" },
    { title: "Stairway To Heaven", duration: "7:11" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
