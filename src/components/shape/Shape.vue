<template>
    <div :class="classComp"
         :style="styleComp"
         :ref="'shape'">
        {{ shape.weight }}
    </div>
</template>

<script>
    export default {
        name: "Shape",
        data() {
            return {
                colors: [     
                    "#EEE8AA",
                    "#FFA07A",
                    "#2E8B57",
                    "#90EE90",
                    "#FF0000",
                    "#00008B",
                    "#C71585",
                    "#4169E1",
                    "#006400",
                    "#708090"
                ]
            }
        },
        props: {
            shape: {
                type: Object,
                required: true
            },
            side: {
                type: Boolean
            },
            top: {
                type: Number
            }
        },
        methods: {
            roundUp(number) {
                return Math.round(number * 100) / 100
            },
            getLowerPos() {
                const shapeEl = this.$refs.shape;
                return shapeEl.getBoundingClientRect().bottom;
            }
        },
        computed: {
            classComp() {
                const {type} = this.shape;

                switch (type) {
                    case 0:
                        return 'shape circle';
                    case 1:
                        return 'shape triangle';
                    case 2:
                        return 'shape rectangle'
                }
            },
            styleComp() {
                const {position, type, height} = this.shape;
                const {side, roundUp, top} = this;

                let roundedHeight = roundUp(height);
                const topOffset = top || 0;
                const leftOffset = side ? 50 + position * 10 : 50 - position * 10;

                let shapeH;

                if(type !== 1){
                    shapeH = 
                    {
                        height: `${roundedHeight}px`,
                        width: `${roundedHeight}px`,
                        lineHeight: `${roundedHeight}px`
                    }
                }
                else{
                    shapeH =
                    {
                        borderWidth: `0 ${roundedHeight}px ${roundedHeight}px ${roundedHeight}px`,
                        lineHeight: `${roundUp(height * 1.2)}px`
                    };
                }
                return {
                    top: `${topOffset}px`,
                    left: `${leftOffset}%`,
                    ...shapeH
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .shape {
        position: absolute;
        transform: translate(-50%, -100%);
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        font-weight: 500;
        color: white;
    }
    .circle {
        background-color: #000000;
        border-radius: 50%;
    }
    .triangle {
        width: 0;
        height: 0;
        line-height: 4rem;
        border-style: solid;
        border-color: transparent transparent #000000 transparent;
        margin-right: 1px;
    }
    .rectangle {
        background-color: #000000;
    }
</style>