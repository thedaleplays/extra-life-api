"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
index_1.getTeamDonations(39065, 50)
    .then((data) => {
    console.log(data);
})
    .catch((e) => {
    console.log(e);
});