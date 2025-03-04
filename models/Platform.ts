// TODO: Update this to reflect the necesseary format retieved from RAWG.io
export interface Platform {
    id: number;
    name: string;
    gamesCount?: number;
    imageBackground?: string;
    yearStart?: number | null;
    yearEnd?: number | null;
    image?: string | null;
}

export const platformMapping = {
    PC: { platformNames: ['PC', 'Linux', 'MacOS', "Classic Macintosh", "Apple II"], parentIcon: 'icons-pc-logo'},
    Playstation: { platformNames: ['PlayStation','PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'PSP', 'PS Vita'], parentIcon: 'i-cib-playstation' },
    Xbox: { platformNames: ['Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series S/X'], parentIcon: 'i-cib-xbox' },
    Nintendo: { platformNames: ['Nintendo DS', 'Wii', 'Nintendo Switch', 'Wii U', 'Nintendo 3DS', "Nintendo DSi", 'Gamecube', 'Nintendo 64', "Game Boy Advance", "Game Boy Color", "SNES", "Game Boy", "NES"], parentIcon: 'icons-nintendo' },
    Mobile: { platformNames: ['Mobile', 'Android', 'Windows Phone OS', 'iOS'], parentIcon: 'icons-mobile-logo' }
}