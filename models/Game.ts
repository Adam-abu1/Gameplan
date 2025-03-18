// TODO: Update this to reflect the necessary format retieved from RAWG.io

import type { Platform } from "./Platform";

export interface TransformedGame {
    id: number;
    name: string;
    rating?: number;
    platforms: Platform[];   // More detailed platform information
    releaseDate: string;
    timeToBeat?: number
    imageUrl?: string;
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