<template>
    <main class="container columns">
        <form @submit.prevent="save" class="column is-half is-offset-one-quarter">
            <h1 class="title">Configuración</h1>
            <p>Ingresa los campos para registrar la base de datos </p>
            <div class="field">
                <label class="label">Usuario</label>
                <div class="control">
                    <input class="input" v-model="form.user" type="text" placeholder="Usuario">
                </div>
            </div>
            <div class="field">
                <label class="label">Host</label>
                <div class="control">
                    <input class="input" v-model="form.host" type="text" placeholder="Host">
                </div>
            </div>
            <div class="field">
                <label class="label">Base de datos</label>
                <div class="control">
                    <input class="input" v-model="form.db" type="text" placeholder="Base de datos">
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" v-model="form.pass" type="text" placeholder="Password">
                </div>
            </div>
            <div class="field">
                <label class="label">Port</label>
                <div class="control">
                    <input class="input" v-model="form.port" type="text" placeholder="Port">
                </div>
            </div>

            <button class="button is-info is-outlined">Registrar</button>
        </form>

    </main>
</template>
<script>
  import DB from '@/services/DB'

  export default {
    data () {
      return {
        form: {
          user: '',
          host: '',
          db: '',
          pass: '',
          port: ''
        }
      }
    },
    methods: {
      save () {
        DB.setData(this.form)
          .then(() => {
            console.log('a')
          })
          .catch(() => {
            console.log('b')
          })
      }
    }
  }
</script>


<style lang="scss" scoped>
    h1 {
        margin-bottom: 0 !important;
    }

    p, button {
        margin-bottom: 30px;
        width: 100%;
    }

    .column .field:nth-child(7) {
        margin-bottom: 30px;
    }

</style>
