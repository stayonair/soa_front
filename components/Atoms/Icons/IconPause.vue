<template>
  <svg
    :class="getClasses"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 -25 50 60"
  >
    <path
      class="icon--pause"
      d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"
    />
    <path
      d="M0 0h48v48H0z"
      fill="none"
    />
  </svg>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    getClasses() {
      return this.className
    }
  }
}
</script>

<style scoped lang="scss">
// .icon--pause {
//   fill: $color-white;
// }
.icon_pause {
  fill: $color-white;
}
</style>
