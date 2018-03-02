<template>
    <div id="app" class="container">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <figure>
                        <router-link to="/"><img id="logo" src="~@/assets/images/logo.png" alt="electron-vue">
                        </router-link>
                    </figure>
                </div>
            </div>
            <div class="level-right">
                <template v-if="auth">
                    <p class="level-item"><a><strong>
                        <router-link to="/send">Inventario</router-link>
                    </strong></a></p>
                    <p class="level-item"><a>Cerrar sesión</a></p>
                    <p class="level-item">
                        <a class="button">
                            <router-link to="/config">Configuración</router-link>
                        </a>
                    </p>
                </template>
                <template v-else>
                    <p class="level-item">
                        <a class="button is-success">

                        </a>
                    </p>
                    <p class="level-item">
                        <a class="button">
                            <router-link to="/config">Configuración</router-link>
                        </a>
                    </p>

                </template>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'avenavue',
    data () {
      return {
        isAuth: ''
      }
    },
    computed: mapState({
      auth: state => state.Auth.auth
    }),
    created () {
      console.log(this.$store._modules)
    }
  }
</script>

<style>
    @import '~bulma/css/bulma.css';

    .is-success a {
        color: white;
    }
</style>
