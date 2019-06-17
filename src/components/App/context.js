import React from "react";

const UnsplashContext = React.createContext();
export default UnsplashContext;
export const PhotoProvider = UnsplashContext.Provider;
export const PhotoConsumer = UnsplashContext.Consumer;
