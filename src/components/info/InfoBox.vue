<template>
    <div class="info-box">
        <div class="row justify-content-md-center">
            <div class="col-md-10">
                <GameTitle/>
            </div>
            <div class="col-md-10">
                <StateList/>
            </div>
            <div class="col-md-10">
                <AnimatedText/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import GameTitle from './GameTitle'
    import StateList from './StateList'
    import AnimatedText from './AnimatedText'

    export default {
        name: 'InfoBox',
        components: {
            GameTitle,
            StateList,
            AnimatedText
        },
        computed: {
            ...mapGetters(['isPaused'])
        },
        methods: {
            ...mapActions(['pause'])
        },
    }
</script>

<style scoped lang="scss">
    .info-box {
        width: 100%;
        height: 100%;
        background-color: #cccccc;
        color: #ffffff;
    }
</style>
