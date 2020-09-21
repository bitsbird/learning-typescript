/**
 * type annoitations on function apply to parameters and return values
 * type inference works for functions as well but only applies to the return value, not the params
 */

const sum = (first: number, second: number): number => {
  return first + second;
};

/** there is a spacial return value which is never, it means that we are expecting to never return a value from
 * this function  as we will exit before we get to the end
 */

const throwError = (message: string): never => {
  throw new Error(message);
};

/** we can also annotate the return as void when we expect to not return any value at all */

const logger = (message: string): void => {
  console.log(message);
};

/*
the same way I can annotate object parameters
**/
const forecast = {
  weather: 'sunny',
  temp: 20,
};

const printForecast = ({
  weather, // destructuring
  temp,
}: {
  weather: string;
  temp: number;
}): void => {
  console.log(weather);
  console.log(temp);
};
