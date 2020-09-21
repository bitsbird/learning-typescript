/** */

const anotherPerson: {
  name: string;
  age: number;

  coord: {
    x: number;
    y: number;
  };
} = {
  name: 'john',
  age: 20,
  coord: { x: 30, y: 500 },
};

const {
  coord: { x: coordX, y: coordY },
} = anotherPerson;
