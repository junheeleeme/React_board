// types.js -> actions.js -> index.js

import { TOGGLE_LOADER, TOGGLE_MOUNT } from "./types";

export const toggleLoader = (bool) => ({
    type : TOGGLE_LOADER,
    data : bool
});

export const toggleMount = (bool) => ({
    type : TOGGLE_MOUNT,
    data : bool
});