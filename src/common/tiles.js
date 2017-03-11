export const blank = { letter: '', value: 0 };
export const a = { letter: 'a', value: 1 };
export const b = { letter: 'b', value: 3 };
export const c = { letter: 'c', value: 3 };
export const d = { letter: 'd', value: 2 };
export const e = { letter: 'e', value: 1 };
export const f = { letter: 'f', value: 4 };
export const g = { letter: 'g', value: 2 };
export const h = { letter: 'h', value: 4 };
export const i = { letter: 'i', value: 1 };
export const j = { letter: 'j', value: 8 };
export const k = { letter: 'k', value: 5 };
export const l = { letter: 'l', value: 1 };
export const m = { letter: 'm', value: 3 };
export const n = { letter: 'n', value: 1 };
export const o = { letter: 'o', value: 1 };
export const p = { letter: 'p', value: 3 };
export const q = { letter: 'q', value: 10 };
export const r = { letter: 'r', value: 1 };
export const s = { letter: 's', value: 1 };
export const t = { letter: 't', value: 1 };
export const u = { letter: 'u', value: 1 };
export const v = { letter: 'v', value: 4 };
export const w = { letter: 'w', value: 4 };
export const x = { letter: 'x', value: 8 };
export const y = { letter: 'y', value: 4 };
export const z = { letter: 'z', value: 10 };

export const tiles = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

export const quantities = {
    a: 9,
    b: 2,
    c: 2,
    d: 4,
    e: 12,
    f: 2,
    g: 3,
    h: 2,
    i: 9,
    j: 1,
    k: 1,
    l: 4,
    m: 2,
    n: 6,
    o: 8,
    p: 2,
    r: 6,
    q: 1,
    s: 4,
    t: 6,
    u: 4,
    v: 2,
    w: 2,
    y: 2,
    x: 1,
    z: 1
};

export const compareTiles = (tile1, tile2) => tile1.letter === tile2.letter;

export const withoutTile = (tiles, tile) => {
    const index = tiles.findIndex(t => compareTiles(t, tile));
    return [...tiles.slice(0, index), ...tiles.slice(index + 1)];
}

export const withoutTiles = (tiles, unwanted) => {
    unwanted.forEach(t => {
        tiles = withoutTile(tiles, t);
    });

    return tiles;
}
