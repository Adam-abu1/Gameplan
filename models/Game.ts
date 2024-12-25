// TODO: Update this to reflect the necesseary format retieved from RAWG.io

import type { Platform } from "./Platform";

export interface Game {
    id: number;
    name: string;
    rating?: number;
    platforms: Platform[];   // More detailed platform information
    releaseDate: string;
    timeToBeat?: number
}