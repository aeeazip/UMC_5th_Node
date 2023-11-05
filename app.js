const express = require("express");
const app = express();
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const logger = require("morgan");
const routes = require("./config/express");

class App {
  constructor() {
    this.app = express();
    dotenv.config();
    this.setMiddleWare();
    this.getRouting();
  }

  setMiddleWare() {
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(methodOverride());
  }

  getRouting() {
    this.app.use(routes);
  }
}

module.exports = new App().app;
