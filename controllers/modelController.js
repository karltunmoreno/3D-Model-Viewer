// controllers/modelController.js
import { modelData } from "../models/modelData.js";

//work here
export class ModelController {
  constructor() {
    this.models = modelData;
  }

  getModelByName(name) {
    return this.models.find((model) => model.name === name);
  }

  getAllModels() {
    return this.models;
  }
}
