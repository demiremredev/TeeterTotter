<template>
    <div>
        <Shape :shape="shape"
               :top="shapeHeight"
               :ref="'shape'"
               :index="index"
               :isPaused="isPaused"
        />
    </div>
</template>

<script>
    import Shape from './Shape'
    import {GAME_CONFIGS} from '../../js/game_configs'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "MovableShape",
        props: {
            timeOut: {
                type: Number
            },
            shape: {
                type: Object,
                required: true
            },
            index: {
                type: Number
            }
        },
        components: {
            Shape
        },
        data() {
            return {
                shapeB: 0,
                shapeHeight: this.shape.height,
                timer: 0
            }
        },
        computed: {
            ...mapGetters(['isPaused', 'bending']),
            shapeFitCoord() {
                const {top, bottom} = this.getSwingCoords();
                return this.bending >= 0 ? top + ((bottom - top) / 2) * (1 - this.shape.position / (GAME_CONFIGS.TEETER_TOTTER_WIDTH / 2))
                    : bottom - ((bottom - top) / 2) * (1 - this.shape.position / (GAME_CONFIGS.TEETER_TOTTER_WIDTH / 2))
            }
        },
        methods: {
            ...mapActions(['moveEnd']),
            getSwingCoords() {
                const {top, bottom} = document.querySelector('.bar').getBoundingClientRect();
                return {
                    top, bottom
                }
            },
            increaseH() {
                this.shapeHeight += 20;
            }
        },
        updated() {
            if (this.isPaused) return clearTimeout(this.timer);
            if (this.index !== 0) return;

            this.shapeB = this.$refs.shape.getLowerPos();
            this.timer = setTimeout(() => {
                if (this.shapeB >= this.shapeFitCoord - 20) {
                    clearTimeout(this.timer);
                    this.moveEnd();
                    this.$emit('move-end');
                    return;
                }
                this.increaseH();
            }, this.timeOut)
        }
    }
</script>

<style lang="scss" scoped>

</style>