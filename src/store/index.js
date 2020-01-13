import Vue from 'vue'
import Vuex from 'vuex'
import {GAME_CONFIGS} from '../js/game_configs'
import {createShape, calculateTotalF} from '../js/utils'
import {v4} from 'uuid'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        leftShapes: [],
        rightShapes: [],
        movableShapes: [],
        isPaused: true,
        isAutoPlayModeOn: GAME_CONFIGS.AUTO_PLAY,
        currentShapeId: -1
    },
    mutations: {
        pause(state) { //action
            state.isPaused = !state.isPaused
        },
        addShapeToRight(state) { //action
            const shape = createShape(v4());
            state.rightShapes.push(shape)
        },
        addShapeToLeft(state) {
            const shape = state.movableShapes.shift();
            state.leftShapes.push(shape);
        },
        createMovableShape(state){ //action
            state.movableShapes = [];
            const shape = createShape(v4());
            state.movableShapes.push(shape);
            state.currentShapeId = shape.id;
        },
        addMovableShape(state){
            const shape = createShape(v4());
            state.movableShapes.push(shape);
            state.currentShapeId = shape.id;
        },
        moveRight(state){ //action
            if (state.isPaused || state.movableShapes[0].position - 1 <= 0) return;
            state.movableShapes[0].position -= 1;
        },
        moveLeft(state){ //action
            if (state.isPaused || state.movableShapes[0].position + 1 > 5) return;
            state.movableShapes[0].position += 1;
        },
        init(state) {
            state.isPaused = true;
            state.leftShapes = [];
            state.rightShapes = [];
            state.movableShapes = [];
        }
    },
    actions: {
        moveEnd({commit, state, getters, dispatch}) {
            commit('addShapeToLeft');
            commit('addMovableShape');
            if (state.leftShapes.length && state.leftShapes.length === state.rightShapes.length)
                commit('addShapeToRight');
        },
        startNewGame({commit}){
            commit('init');
            commit('addShapeToRight');
            commit('createMovableShape');
        },
        moveLeft({commit}){
            commit('moveLeft');
        },
        moveRight({commit}){
            commit('moveRight');
        },
        createMovableShape({commit}){
            commit('createMovableShape');
        },
        addShapeToRight({commit}){
            commit('addShapeToRight');
        },
        pause({commit}){
            commit('pause');
        },
    },
    getters: {
        totalWeightOnLeft(state) {
            return calculateTotalF(state.leftShapes)
        },
        totalWeightOnRight(state) {
            return calculateTotalF(state.rightShapes)
        },
        bending(state, getters) {
            const {totalWeightOnLeft, totalWeightOnRight} = getters;
            if (!totalWeightOnLeft) return GAME_CONFIGS.BENDING;
            if (totalWeightOnLeft === totalWeightOnRight) return 0;
            return totalWeightOnLeft > totalWeightOnRight ? (totalWeightOnLeft - totalWeightOnRight) / totalWeightOnLeft * -100 : (totalWeightOnRight - totalWeightOnLeft) / totalWeightOnRight * 100
        },
        gameOverStatus(state, getters) {
            const {totalWeightOnLeft, totalWeightOnRight, bending} = getters;
            //If there is extra 20kgm(10kg * 2m) on the one side, simulation ends immediately.
            //The maximum bending percentage is %30, if it exceeds this limit, simulation ends.
            return Math.abs(totalWeightOnLeft - totalWeightOnRight) > 20 || bending > GAME_CONFIGS.BENDING || bending < (-1 * GAME_CONFIGS.BENDING)
        },
        isPaused(state) {
            return state.isPaused;
        },
        leftShapes(state) {
            return state.leftShapes;
        },
        rightShapes(state) {
            return state.rightShapes;
        },
        movableShapes(state) {
            return state.movableShapes;
        },
        isAutoPlayModeOn(state) {
            return state.isAutoPlayModeOn;
        },
        currentShapeId(state) {
            return state.currentShapeId;
        }
    }
})
