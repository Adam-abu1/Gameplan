// TODO: Update this to reflect the necesseary format retieved from RAWG.io

import { Platform } from "./Platform";

export interface Game {
    id: number;
    name: string;
    metacritic?: number;
    platforms: Platform[];   // More detailed platform information
    releaseDate: string;
}