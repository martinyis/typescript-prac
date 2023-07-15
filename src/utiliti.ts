interface ICar {
  id: number;
  name: string;
  price: number;
  yearBuikd: number;
}

interface ICarCreate extends Omit<ICar, "id"> {}
