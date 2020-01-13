<template>
    <div>
        <table class="table">
            <tbody>
                <tr>
                    <th scope="row">Game Status</th>
                    <td>{{isPaused ? 'Paused' : 'Started'}}</td>
                </tr>
                <tr>
                    <th scope="row">Is auto play mode on?</th>
                    <td>{{isAutoPlayModeOn ? 'Yes' : 'No'}}</td>
                </tr>
                <tr>
                    <th scope="row">Right Side Weight</th>
                    <td>{{totalWeightOnRight}}</td>
                </tr>
                <tr>
                    <th scope="row">Left Side Weight</th>
                    <td>{{totalWeightOnLeft}}</td>
                </tr>
                <tr>
                    <th scope="row">Bending</th>
                    <td>{{bending}}</td>
                </tr>
                <tr>
                    <th scope="row">Last Coming Shape (Right)</th>
                    <td>Position: {{lastRightShape.position}}, Weight: {{lastRightShape.weight}}, Total: {{lastRightShape.position * lastRightShape.weight}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {GAME_CONFIGS} from '../../js/game_configs'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'GameTitle',
        computed: {
            ...mapGetters(['isPaused', 'totalWeightOnRight', 'totalWeightOnLeft', 'bending', 'rightShapes', 'isAutoPlayModeOn']),
            lastRightShape(){
                if(this.rightShapes && this.rightShapes.length)
                    return this.rightShapes[this.rightShapes.length - 1];
                return {position: -1, weight: -1}
            }
        },
        data() {
            return {
                gameTitle: GAME_CONFIGS.GAME_TITLE
            }
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
</style>
