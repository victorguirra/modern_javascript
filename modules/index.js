/*
    Common JS:

    const sayHello = require('./sayHello);
*/

// ESModules:

import userName, { sayHello as newName } from './sayHello.js';

newName(userName)