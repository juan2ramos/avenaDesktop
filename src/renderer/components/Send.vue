<template>
    <div id="wrapper">
        <pm-notification v-show="showNotification" :typeMessage="typeMessage">
            <span slot="body"> </span>
        </pm-notification>
        <main>
            <ul>
                <li v-for="product in products">{{product.name}}</li>
            </ul>
        </main>
    </div>
</template>

<script>
  import DB from '@/services/DB'
  import PmNotification from '@/components/shared/Notification.vue'
  export default {
    components: {PmNotification},
    data () {
      return {
        products: [],
        showNotification: false,
        typeMessage: {}
      }
    },
    watch: {
      showNotification () {
        if (this.showNotification) {
          setTimeout(() => {
            this.showNotification = false
          }, 3000)
        }
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      setNotification (res) {
        this.showNotification = true
        if (res) {
          this.typeMessage = {
            'class': 'notification is-success',
            'message': ' pidiendo elementos a la base de datos '
          }
        } else {
          this.typeMessage = {
            'class': 'notification is-danger',
            'message': `Error de conección`
          }
        }
      }
    },
    created () {
      DB.check().then((p) => {
        this.products = p
        this.setNotification(true)
      }).catch(() => {
        this.setNotification(false)
      })
    }
  }
</script>

<style>
</style>
