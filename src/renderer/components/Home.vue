<template>

    <main>
        <div class="columns is-mobile is-centered">
            <div class="column  is-narrow">
                <h1 class="has-text-centered title">Sistema de inventarios de Avena Cubana</h1>
                <div class="left-side">
                    <ol>
                        <li>Conectarse a la base de datos, en la pestaña de configuración</li>
                        <li>Debe loguearse con su usuario y contraeña suministrada por el administrador</li>
                        <li>Enviar el invetario al finalizar el día</li>
                    </ol>

                </div>
            </div>
        </div>
    </main>

</template>

<script>
  // import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    // components: {SystemInformation},
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
</style>
