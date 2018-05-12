<template>
  <div class="jobsContainer">
      <div class="jobs" v-for="(job,index) in jobs" :key="index">
        <jobCell :job="job"/>
      </div>
    </div>	
    
</template>
<script>
import jobCell from '@/components/jobCell'
export default {
  props: {
    jobs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    jobCell
  }
}
</script>
<style scoped>
.jobs {
   width: 100%;
    box-sizing: border-box;
    background-color: #f1eff1;
    color: #3c3c3c;
    margin-top: 20rpx;
    padding: 20px;
    display: flex;
    justify-content: space-between  
}
</style>

