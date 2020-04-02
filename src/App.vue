<template lang="pug">
#app
  .card
    img.logo(alt="Vue logo" src="./assets/VendoorFULL.png")
    .block.text-center.mt-12
      h1.text-3xl.font-bold Coming soon...
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
#app
  @apply flex justify-center items-center
  font-family 'Montserrat', sans-serif
  font-size 16px
  height 100vh
  width 100vw
  background-color #D2DBDD
.card
  @apply p-12
  background-color #FFF
  border-radius 15px
  box-shadow 0px 13px 10px -7px rgba(0, 0, 0,0.1)
  transition all .4s cubic-bezier(0.175, 0.885, 0, 1)
  &:hover
    box-shadow 0px 30px 18px -8px rgba(0, 0, 0,0.1)
    transform scale(1.10, 1.10)

  .logo
    width 25rem
</style>
