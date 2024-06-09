import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
  savedVideos: [],
  addVideoToSaved: () => {},
  removeVideoFromSaved: () => {},
})

export default NxtWatchContext
