<template>
    <div id="wrapper">

        <main>
            <ul>
                <li v-for="product in products">{{product.name}}</li>
            </ul>
        </main>
    </div>
</template>

<script>
  import DB from '@/services/DB'

  export default {
    data () {
      return {
        products: []
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    },
    created () {
      DB.check().then((p) => {
        this.products = p
      })
    }
  }
</script>

<style>
</style>
