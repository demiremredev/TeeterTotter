<template>
    <section class="teeter-totter">
        <div class="bar" :style="transform">
            <Shape v-for="shape in leftShapes"
                :shape="shape"
                :key="shape.id"/>
            <Shape v-for="shape in rightShapes"
                :shape="shape"
                :side="true"
                :key="shape.id"/>
        </div>    
        <div class="middle-triangle"></div>
    </section>
</template>

<script>
    import Shape from './shape/Shape'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "TeeterTotter",
        components: {
            Shape
        },
        computed: {
            ...mapGetters([
                'rightShapes',
                'leftShapes',
                'bending'
            ]),
            transform() {
                return {
                    transform: `rotate(${this.bending / 2}deg)`
                }
            }
        },
        methods: {
            ...mapActions(['addShapeToRight'])
        },
        beforeMount() {
            this.addShapeToRight()
        }
    }
</script>

<style lang="scss" scoped>
    .teeter-totter{
        height: 30%;
        width: 100%;
    }
    .middle-triangle {
        width: 0;
        height: 0;
        margin: 0 auto;
        border-style: solid;
        border-width: 0 60px 180px 60px;
        border-color: transparent transparent #666666 transparent; //the color in pdf
    }
    .bar {
        width: 100%;
        height: 0.2rem;
        background-color: #CC4125;
        position: relative;
        transform: rotate(0deg);
        transition: transform 0.4s ease-in-out;
    }
</style>