import faker from 'faker';
import { User } from './User';

const myuser = new User(faker.name.firstName(), faker.name.lastName());
console.log(myuser);
