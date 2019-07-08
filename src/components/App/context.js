import React from "react";

const UnsplashContext = React.createContext();
export default UnsplashContext;
export const ProviderA = UnsplashContext.Provider;
export const Consumer = UnsplashContext.Consumer;
