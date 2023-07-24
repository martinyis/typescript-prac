import * as fs from "fs";

type TypeUser = {
  name: string;
  age: number;
  address: string;
};

type TypeAddress = {
  city: string;
  country: string;
};

const user: TypeUser = {
  address: "55 mopnroep derov",
  age: 5,
  name: "joe",
};

const address: TypeAddress = {
  city: "London",
  country: "UK",
};
