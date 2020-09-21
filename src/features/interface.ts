/* an interface defines a set of properties and methods,
the structure of a specific object
*/

interface Vehicle {
  color: string;
  speed: number;
  released: Date;
  tag: string;

  report(): void;
}

const trabant: Vehicle = {
  color: 'white',
  speed: 60,
  tag: 'B1980',
  released: new Date('01/01/1960'),

  report(): void {
    console.log(this.tag);
  },
};

// instead a vehicle I can have an intrface that just satisfy my usecase and be reusable
interface Reportable {
  report(): void;
}

const stock: Vehicle[] = [trabant];

const reportCarsInStock = (cars: Reportable[]): void => {
  cars.forEach((c) => c.report());
};

reportCarsInStock(stock);
