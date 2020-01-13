<template>
    <div class="row">
        <div class="col-md-2 no-float">
            <InfoBox/>
        </div>
        <div class="col-md-10 no-float">
            <Game id="gamebox"/>
        </div>
    </div>
</template>

<script>
    import InfoBox from './components/info/InfoBox'
    import Game from './components/Game'

    export default {
        name: 'app',
        components: {
            InfoBox,
            Game
        }
    }
</script>

<style lang="scss">
    html,body,.container {
        height:100%;
        overflow: hidden;
    }
    .container {
        display:table;
        width: 100%;
        margin-top: -50px;
        padding: 50px 0 0 0; 
        box-sizing: border-box;
    }
    .row {
        height: 100%;
        display: table-row;
    }
    .row .no-float {
        display: table-cell;
        float: none;
    }
    .root{
        overflow: hidden;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
</style>
