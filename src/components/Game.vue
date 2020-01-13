<template>
    <main class="game" id="toggle">
        <div class="shape-container">
            <MovableShape v-show="!gameOverStatus" v-for="(shape, index) in movableShapes"
                        :shape="shape"
                        :index="index"
                        :timeOut="timeOut"
                        @move-end="onMoveEnd"
                        :key="shape.id">
            </MovableShape>
            <GameOver v-if="gameOverStatus"/>
        </div>
        <TeeterTotter v-show="!gameOverStatus" />
    </main>
</template>

<script>
    import TeeterTotter from './TeeterTotter'
    import MovableShape from './shape/MovableShape'
    import {mapActions, mapGetters} from 'vuex'
    import {GAME_CONFIGS} from './../js/game_configs'
    import GameOver from './info/GameOver'

    export default {
        name: "Game",
        components:{
            TeeterTotter,
            MovableShape,
            GameOver
        },
        data() {
            return {
                timeOut: 200,
                iterationCounter: 0
            }
        },
        watch: {
            rightShapes: {
                deep: true,
                handler(val){
                    //if right shapes count are increased then continue moving left shape
                    this.pause();
                    if(val.length > 0 && !this.gameOverStatus){
                        setTimeout(() => {
                            this.pause();
                        }, 100);
                    }
                }
            },
            currentShapeId: {
                deep: true,
                handler(val){
                    //if left shapes count are increased then auto player calculates and moves 
                    if(val.length > 0 && !this.gameOverStatus && this.isAutoPlayModeOn){
                        //first move shape to right corner to guaranteed it move 5 times because we do not know the position
                        for(let i = 0; i < 5; i++){
                            this.moveRight();
                        }
                        //shape is on the left corner
                        let difWeight = this.totalWeightOnLeft - this.totalWeightOnRight; //if negative then left is heavier
                        let currentShape = this.movableShapes[this.movableShapes.length - 1];
                        let newTotalLeftWeightArr = [];
                        for(let i = 5; i >= 1 ; i--){
                            let newTotalLeftWeight = this.totalWeightOnLeft + (currentShape.weight * i);
                            let newBending = newTotalLeftWeight > this.totalWeightOnRight ? (newTotalLeftWeight - this.totalWeightOnRight) / newTotalLeftWeight * -100 : (this.totalWeightOnRight - newTotalLeftWeight) / this.totalWeightOnRight * 100;
                            
                            if(Math.abs(newBending) < GAME_CONFIGS.BENDING && (Math.abs(newTotalLeftWeight - this.totalWeightOnRight) < 20)){
                                for(let j = 5; j >= i ; j--){
                                     setTimeout(() => {
                                        this.moveLeft();
                                    }, 200);
                                }
                                break;
                            }
                        }
                    }
                }
            }
        },
        computed: {
            ...mapGetters(['movableShapes', 'gameOverStatus', 'rightShapes', 'leftShapes', 'isAutoPlayModeOn','totalWeightOnLeft','totalWeightOnRight','currentShapeId'])
        },
        methods: {
            ...mapActions(
                [
                'createMovableShape',
                'moveRight',
                'moveLeft',
                'pause'
                ]
            ),
            onMoveEnd() {
                this.iterationCounter++;
                if (this.iterationCounter === 5) {
                    this.timeOut -= 50;
                    this.iterationCounter = 0;
                }
            },

        },
        mounted() {
            this.createMovableShape();
            window.addEventListener("keydown", e => {
                if(e.keyCode == 32) {
                    this.pause();
                }
                if (e.keyCode == 39) {
                    this.moveRight();
                }
                if (e.keyCode == 37){
                    this.moveLeft();
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    .shape-container {
        height: 70%;
        width: 100%;
        position: relative;
    }
    .game {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
    }
</style>