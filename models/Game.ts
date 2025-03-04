// TODO: Update this to reflect the necesseary format retieved from RAWG.io

import type { Platform } from "./Platform";

export interface Game {
    id: number;
    name: string;
    rating?: number;
    platforms: Platform[];   // More detailed platform information
    releaseDate: string;
    timeToBeat?: number
    imageUrl?: string;
}

export interface GameDetails {
    id: number;
    slug: string;
    name: string;
    metacritic?: number;
    released: string;
    tba: boolean;
    background_image: string;
    background_image_additional?: string;
    website?: string;
    playtime: number;
    parent_platforms: Platform[];
    platforms: GamePlatformDetails[];
    stores: StoreDetails[];
    developers: Developer[];
    genres: Genre[];
    tags: Tag[];
}


export interface GamePlatformDetails {
    platform: Platform;
    released_at: string;
    requirements?: Requirements;
}

export interface Requirements {
    minimum?: string;
    recommended?: string;
}
x
export interface StoreDetails {
    id: number;
    url: string;
    store: Store;
}

export interface Store {
    id: number;
    name: string;
    slug: string;
    domain?: string;
}

export interface Developer {
    id: number;
    name: string;
    slug: string
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

export interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
}