// Q2. Multi-Type Data Summary

// Declare variables of different data types
const stringVar = "This is a string";
const numberVar = 42;
const booleanVar = true;
const arrayVar = [1, 2, 3, 4, 5];
const objectVar = { name: "Jyotsana", age: 21 };
const nullVar = null;
const undefinedVar = undefined;

// Identify each type and print a formatted report
console.table([
  { label: "stringVar", value: stringVar, type: typeof stringVar },
  { label: "numberVar", value: numberVar, type: typeof numberVar },
  { label: "booleanVar", value: booleanVar, type: typeof booleanVar },
  { label: "arrayVar", value: arrayVar, type: Array.isArray(arrayVar) ? "array" : typeof arrayVar },
  { label: "objectVar", value: objectVar, type: typeof objectVar },
  { label: "nullVar", value: nullVar, type: typeof nullVar },
  { label: "undefinedVar", value: undefinedVar, type: typeof undefinedVar },
]);
