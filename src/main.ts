let array: string[] = [];

const numbers: ReadonlyArray<Number> = [1, 2, 3, 4, 5];
array.push("hello");

type TypeArray = [number, string, null];

const newArray: TypeArray = [1, "2", null];
console.log(array[0]);
