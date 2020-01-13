import {GAME_CONFIGS} from './game_configs'

export function createShape(id) {
    let type = Math.floor(Math.random() * 3);
    let weight = Math.floor(Math.random() * 10) + 1;
    let position = Math.floor(Math.random() * GAME_CONFIGS.TEETER_TOTTER_WIDTH / 2) + 1;
    let height = weight * 8;

    return {
        id: "shape_" + id,
        type,
        weight,
        position,
        height
    }
}

export function calculateTotalF(shapes) {
    return shapes.reduce((acc, shape) => {
        return acc += shape.weight * shape.position
    }, 0)
}