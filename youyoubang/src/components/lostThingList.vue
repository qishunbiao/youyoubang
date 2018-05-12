<template>
  <div class="lostThingContainer">
       <lostThingCell v-for="(lostThing, index) in lostThings" :key="index" :lostThing="lostThing" :list="lostThing.images"/>
  </div>
</template>
<script>
import lostThingCell from '@/components/lostThingCell'
export default {
  props: {
    'lostThings': {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    lostThingCell
  }
}
</script>
<style scoped>
.lostThingContainer {
  width: 100%;
}
</style>

