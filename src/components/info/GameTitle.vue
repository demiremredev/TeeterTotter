<template>
    <div class="game-title">
        <h2>{{gameTitle}}</h2>
    </div>
</template>

<script>
    import {GAME_CONFIGS} from '../../js/game_configs'
    export default {
        name: 'GameTitle',
        computed: {
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
    .game-title {
        width: 100%;
        height: 100%;
        background-color: #cccccc;
        color: #ffffff;
        max-height: 100px;
        text-align: center;
    }
        
    h2 {
        text-shadow: 0px 5px 5px rgba(0,0,0,0.3)
    }
</style>
