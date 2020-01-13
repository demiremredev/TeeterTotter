
<template>
    <div id="tudo">
        <div class="gameover">
        <p> GAME </p>
        <p> OVER </p>
        </div>

        <div class="continue"> <p> CONTINUE? </p> </div>

        <div class="opcoes">
            <div class="yes"> <a @click="startNewGame()"> YES </a> </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
    export default {
        name: 'GameOver',
        computed: {
        },
        methods: {
            ...mapActions(["startNewGame"])
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    
@-webkit-keyframes animacao1 { 0% {background: #D62623;}
							   50% {background: #EE3430;}
							   100% {background: #FB3733;} }

@-moz-keyframes animacao1 { 0% {background: #D62623;}
							50% {background: #EE3430;}
							100% {background: #FB3733;} }

@keyframes animacao1 { 0% {background: #D62623;}
							   50% {background: #EE3430;}
							   100% {background: #FB3733;} }

body {background: #B0E0E6;}

#tudo {width: 750px;
		height: 580px;
		margin: auto;
		margin-top: 20px;
    	border-radius: 40px;
    	-webkit-animation-name: animacao1;
		-webkit-animation-duration: 1s;
		-webkit-animation-timing-function:  linear;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: alternate;

		-moz-animation-name: animacao1;
		-moz-animation-duration: 1s;
		-moz-animation-timing-function:  linear;
		-moz-animation-iteration-count: infinite;
		-moz-animation-direction: alternate; 

		animation-name: animacao1;
		animation-duration: 1s;
		animation-timing-function:  linear;
		animation-iteration-count: infinite;
		animation-direction: alternate;}


.gameover {width:750px;
			height: auto;
			padding-top: 60px;
			background: none;}

.gameover p {margin-top: 0px;
			margin-bottom: 0px;
			font-size: 160px;
			font-family: 'Black Ops One', cursive;
			line-height: 120px;
			text-align: center;
			text-shadow: 5px 5px #000000;
			color: #ffffff;}

.continue	{width: 750px;
			height: auto;
			padding-top: 40px;}

.continue p {margin-top: 0px;
			margin-bottom: 0px;
			text-align: center;
			font-size: 40px;
			font-weight: bold;
			font-family: corbel;
			color: #ffffff;
			text-shadow: 2.5px 2.5px #000000;}

.opcoes {width: 550px;
		height: auto;
		padding-top: 50px;
		margin: auto;}

.yes a {text-align: center;
		font-size: 30px;
		font-weight: bold;
		font-family: corbel;
		color: #ffffff;
		text-decoration: none;
		text-shadow: 2.5px 2.5px #000000;
		padding: 25px 250px 25px 250px;
    border: 1px solid #000000;
		border-radius: 20px;
		background: #006400;
		margin-right: 30px;
		float: left;
        cursor: pointer;}



@-webkit-keyframes animacao2 { from {-webkit-transform: scale(1);} 
								to {-webkit-transform: scale(1.2);} }

@-moz-keyframes animacao2 { from {-moz-transform: scale(1);} 
								to {-moz-transform: scale(1.1);} }

@keyframes animacao2 { from {transform: scale(1);} 
								to {transform: scale(1.1);} }


.yes a:hover {-webkit-animation-name: animacao2;
		-webkit-animation-duration: 0.8s;
		-webkit-animation-timing-function:  linear;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-direction: alternate;

		-moz-animation-name: animacao2;
		-moz-animation-duration: 0.8s;
		-moz-animation-timing-function:  linear;
		-moz-animation-iteration-count: infinite;
		-moz-animation-direction: alternate;

		animation-name: animacao2;
		animation-duration: 0.8s;
		animation-timing-function:  linear;
		animation-iteration-count: infinite;
		animation-direction: alternate;}


</style>
