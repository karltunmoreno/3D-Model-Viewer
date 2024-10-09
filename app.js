// app.js
import { ModelController } from './controllers/modelController.js';
import '@google/model-viewer';

const controller = new ModelController();
const modelViewer = document.querySelector('#model-viewer');

window.onload = () => {
    const model = controller.getModelByName('Example Model');
    modelViewer.src = model.src;
    modelViewer.alt = model.alt;
};

