import "reflect-metadata";
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
// import { container } from "tsyringe";
// import { Twitch } from "./libs/Twitch";
// import { Configs } from "./domain/configs";
// import { OBS } from "./libs/OBS";
// container.resolve(Configs).init();
// container.resolve(Twitch).connect();
// container.resolve(OBS).connect();

const root = createRoot(document.body);
root.render(<App />);

