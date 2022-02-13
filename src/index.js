// const greet = (name) => {
//     console.log(`hello ${name}`);
// }

// greet('mario');
// greet('luigi');
// greet('michel4');

import { styleBody, addTitle, contact } from './dom';
import users from './data';

console.log('index file');
addTitle('test2');
styleBody();
console.log(contact);
console.log(users);