import * as tiles from '../tiles';
import { compareTiles, withoutTile, withoutTiles } from '../tiles';
import deepFreeze from 'deep-freeze';

describe('when comparing tiles', () => {
    it('should return true when they match', () => {
        const result = compareTiles(tiles.a, tiles.a);
        expect(result).toEqual(true);
    });

    it('should return false when they differ', () => {
        const result = compareTiles(tiles.a, tiles.b);
        expect(result).toEqual(false);
    });
});

describe('when removing a tile', () => {
    describe('should return a new version of the input without the specified tile', () => {
        it('when it is the only tile in the input', () => {
            const input = [tiles.a];
            deepFreeze(input);

            const result = withoutTile(input, tiles.a);
            const expected = [];
            expect(result).toEqual(expected);
        });

        it('when there are repeated tiles in the input', () => {
            const input = [tiles.a, tiles.a, tiles.a, tiles.a];
            deepFreeze(input);

            const result = withoutTile(input, tiles.a);
            const expected = [tiles.a, tiles.a, tiles.a];
            expect(result).toEqual(expected);
        });

        it('when it is the first tile in the input', () => {
            const input = [tiles.a, tiles.b, tiles.c, tiles.d];
            deepFreeze(input);

            const result = withoutTile(input, tiles.a);
            const expected = [tiles.b, tiles.c, tiles.d];
            expect(result).toEqual(expected);
        });

        it('when it is the last tile in the input', () => {
            const input = [tiles.a, tiles.b, tiles.c, tiles.d];
            deepFreeze(input);

            const result = withoutTile(input, tiles.d);
            const expected = [tiles.a, tiles.b, tiles.c];
            expect(result).toEqual(expected);
        });

        it('when it is a middle tile in the input', () => {
            const input = [tiles.a, tiles.b, tiles.c, tiles.d];
            deepFreeze(input);

            const result = withoutTile(input, tiles.c);
            const expected = [tiles.a, tiles.b, tiles.d];
            expect(result).toEqual(expected);
        });
    });
});

describe('when removing multiple tiles', () => {
    describe('should return a new version of the input without the specified tiles', () => {
        it('when only one tile should be removed', () => {
            const input = [tiles.a, tiles.a];
            deepFreeze(input);

            const result = withoutTiles(input, [tiles.a]);
            const expected = [tiles.a];
            expect(result).toEqual(expected);
        });

        it('when multiple tiles should be removed', () => {
            const input = [tiles.a, tiles.b, tiles.c, tiles.d, tiles.e, tiles.f];
            deepFreeze(input);

            const result = withoutTiles(input, [tiles.a, tiles.c, tiles.e]);
            const expected = [tiles.b, tiles.d, tiles.f];
            expect(result).toEqual(expected);
        });

        it('when repeated tiles should be removed', () => {
            const input = [tiles.a, tiles.a, tiles.a, tiles.b, tiles.b, tiles.b];
            deepFreeze(input);

            const result = withoutTiles(input, [tiles.a, tiles.a, tiles.b]);
            const expected = [tiles.a, tiles.b, tiles.b];
            expect(result).toEqual(expected);
        });
    });
});
