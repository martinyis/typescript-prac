type TypeChannel = {
  name: string;
  count: number;
};

const getChannel = (name: string): TypeChannel => {
  const channel: TypeChannel = {
    name: "Joe",
    count: 5,
  };
  return channel;
};

const getNumbers = (...numbers: number[]): number[] => {
  return [5];
};

//Overloading
