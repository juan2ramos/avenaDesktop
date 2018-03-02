<template>
    <main class="container columns">
        <div class="column is-half is-offset-one-quarter">
            <div class="field">
                <label class="label">E-mail</label>
                <div class="control">
                    <input class="input" type="email" placeholder="E-mail">
                </div>
            </div>
            <div class="field">
                <label class="label">Contraseña</label>
                <div class="control">
                    <input class="input" type="password" placeholder="Contraseña">
                </div>
            </div>
        </div>
    </main>
</template>
<script>
  import datas from '@/services/DB'

  export default {
    data () {
      return {
        products: ''
      }
    },
    created () {
      datas.data.then((data) => {
        this.products = data
      })
    }
  }
</script>


<style lang="scss" scoped>
    #wrapper {
        background-color: red;
    }

</style>
