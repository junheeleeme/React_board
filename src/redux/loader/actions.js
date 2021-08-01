// types.js -> actions.js -> index.js

import { TOGGLE_LOADER, } from "./types";

export const toggleLoader = (bool) => ({
    type : TOGGLE_LOADER,
    data : bool
});