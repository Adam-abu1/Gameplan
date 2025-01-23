// TODO: Update this to reflect the necesseary format retieved from RAWG.io
export interface Platform {
    id: number;
    name: string;
    gamesCount?: number;
    imageBackground?: string;
    yearStart?: number | null;
    yearEnd?: number | null;
}

export const platformMapping = {
    PC: { platformNames: ['PC', 'Linux', 'MacOS', "Classic Macintosh", "Apple II"], parentIcon: ''},
    Playstation: { platformNames: ['PlayStation','PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'PSP', 'PS Vita'], parentIcon: '' },
    Xbox: { platformNames: ['Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series S/X'], parentIcon: '' },
    Nintendo: { platformNames: ['Nintendo DS', 'Wii', 'Nintendo Switch', 'Wii U', 'Nintendo 3DS', "Nintendo DSi", 'Gamecube', 'Nintendo 64', "Game Boy Advance", "Game Boy Color", "SNES", "Game Boy", "NES"], parentIcon: '' },
    Mobile: { platformNames: ['Mobile', 'Android', 'Windows Phone OS', 'iOS'], parentIcon: '' }
}