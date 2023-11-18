const { first, last, chunk, myColorToString, myColorJoin } = require('./exo2'); 
describe('first function', () => {
    it('should return the first n elements of an array', () => {
        const array = [1, 2, 3, 4, 5];
        const n = 3;

        const result = first(array, n);

        expect(result).toEqual([1, 2, 3]);
    });
});

describe('last function', () => {
    it('should return the last n elements of an array', () => {
        const array = [1, 2, 3, 4, 5];
        const n = 2;

        const result = last(array, n);

        expect(result).toEqual([4, 5]);
    });
});

describe('chunk function', () => {
    it('should split an array into chunks of a specified size', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        const size = 3;

        const result = chunk(array, size);

        expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });
});

describe('myColorToString function', () => {
    it('should convert the array to a comma-separated string', () => {
        const myColor = ["Red", "Green", "White", "Black"];
        const result = myColorToString(myColor);

        expect(result).toEqual("Red,Green,White,Black");
    });
});

describe('myColorJoin function', () => {
    it('should join the array elements into a string with no separator', () => {
        const myColor = ["Red", "Green", "White", "Black"];
        const result = myColorJoin(myColor);

        expect(result).toEqual("RedGreenWhiteBlack");
    });

    it('should join the array elements into a string with a specified separator', () => {
        const myColor = ["Red", "Green", "White", "Black"];
        const separator = '-';
        const result = myColorJoin(myColor, separator);

        expect(result).toEqual("Red-Green-White-Black");
    });
});
