/**
 * A decorator in Typescript is a function that applies transformations to fields and methods of a class.
 * It just works with classes, it's being executed once per class, not on the instance.
 *
 * in order to chage a proeprty or method behaviour we need to access his property descriptor and make changes through it
 */

@classDecorator
class Boat {
  @testPropDecorator
  private color: string = 'red';

  get boatColor(): string {
    return `${this.color} is my boat color`;
  }

  start(): void {
    console.log('engine starts');
  }

  changeSpeed(@parameterDecorator speed: number): void {
    console.log(`new speed ${speed}`);
  }

  @logCustomError('I cannot beep')
  beep(): void {
    throw new Error('clacson failure!');
  }
}

/**
 * wrapper function that catch an error and print it on the console
 * @param target
 * @param key
 * @param desc
 */
function logError(target: any, key: string, desc: PropertyDescriptor) {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (error) {
      console.log(error.message);
    }
  };
}

/**
 * decorator factory, it accept a parameter that let me customise an error message and reatur a decorator function
 * @param message
 */
function logCustomError(message: string) {
  const decorator = function (
    target: any,
    key: string,
    desc: PropertyDescriptor
  ) {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(message);
      }
    };
  };

  return decorator;
}

/**
 * note that there is a different signature
 * @param target
 * @param key
 */
function testPropDecorator(target: any, key: string) {
  /* this will print undefined.
    target is a reference to the object's proptotype. Since the prototype of an object only stores 
    the methods, the instance properties which are defined in the contructor function (string, boolean, arrays ..)
    are not accessible here.

    the only use I can make out of a decorator on a property, is to have a feedback of the definition of a property on the class.
    Since decorators are called only once per class, hence before an istance is even produced,
    I can't access and modify a proeprty which belongs to the instance.
  */
  console.log('\n property-decorator');
  console.log('prototype prop', target.value);
}

/**
 * I can use a decorator on a method parameter
 * @param target
 * @param key
 * @param index
 */
function parameterDecorator(target: any, key: string, index: number) {
  console.log('\n parameter-decorator');
  console.log('key', key);
  console.log('index', index);
}

/**
 *
 * @param constructor i can specify typeof which is a reference to the constructor function
 */

function classDecorator(constructor: typeof Boat) {
  console.log('\n class-decorator');
  console.log('constructor', constructor);
}
console.log('\n \n');
const boat = new Boat();

boat.beep();
