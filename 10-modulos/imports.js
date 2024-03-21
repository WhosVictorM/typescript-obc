"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var xwing = {
    name: "X-Wing",
    pilot: "Luke Skywalker",
    speed: 50,
    weapons: 4
};
console.log(lodash.camelCase(xwing.pilot));
console.log(lodash.kebabCase(xwing.pilot));
