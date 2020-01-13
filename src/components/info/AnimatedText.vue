<template>
    <div class="container">
        <div id="movetxt">To Continue or Pause Click Space...</div>
    </div>
</template>

<script>
    import {GAME_CONFIGS} from '../../js/game_configs'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'AnimatedText',
        computed: {
            ...mapGetters(['isPaused'])
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">

.container {
  padding: 10px;
  width: 80%;
  position: relative;
  overflow: hidden;
  height: 1em;
}

#movetxt {
  animation: moving 3s infinite linear alternate;
  position: initial;
  white-space: nowrap;
  color: black;
}

@keyframes moving {
    from {
      transform: translateX(10%);
      right: 10%;
      }
    to {
      transform: translateX(-10%);
      right: -10%;
      }
}
</style>
