// controllers/modelController.js
import { modelData } from '../models/modelData.js';

export class ModelController {
    constructor() {
        this.models = modelData;
    }

    getModelByName(name) {
        return this.models.find(model => model.name === name);
    }

    getAllModels() {
        return this.models;
    }
}

