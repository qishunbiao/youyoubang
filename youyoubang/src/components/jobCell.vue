<template>
                <div class="jobs">
                    <div class="jobsBaseInfo clear">
                        <span class="jobsName">{{job.title}}</span>
                        <span class="jobPay"><span class="iconfont icon-jiageprice1 icons"/><span>{{job.money}}/天</span></span>
                    </div>
                    <div class="jobsDetailInfo clear">
                        <div class="leftInfo">
                            <div class="jobPlace clear"><span><span class="iconfont icon-icon- icons"/><span>{{job.addr}}</span></span></div>
                            <span class="requirement"><span class="iconfont icon-xiaoxi icons"></span>{{job.depict}}</span>
                        </div>
                        <div class='rightInfo'>
                            <div class="number"><span class="iconfont icon-weibiaoti-_huabanfuben icons"/><span>{{job.peopleNum}}</span></div>
                            <span class="release-date"><span class="iconfont icon-icon icons"/><span>{{createTime}}</span></span>
                        </div>
                    </div>
                        <button type="primary" class="apply-btn">申请</button>                        
                </div>
</template>
<script>
export default {
  mounted () { console.log(this) },
  data () {
    return {
      createTime: this.format(this.job.createTime)
    }
  },
  props: ['job', 'formatTime'],
  methods: {
    format: function formatTime (date) {
      let DATE = new Date(date)
      function formatNumber (n) {
        const str = n.toString()
        return str[1] ? str : `0${str}`
      }

      const year = DATE.getFullYear()
      const month = DATE.getMonth() + 1
      const day = DATE.getDate()

      const t1 = [year, month, day].map(formatNumber).join('/')

      return `${t1}`
    }
  }
}
</script>
<style scoped>
@import url('../shared/iconfont.css');

.icons {
    padding-right: 10rpx;
}

.jobs {
    width: 100%;
}

.jobsBaseInfo {
    display: flex;
    justify-content: space-between;
}

.jobsName {
    font-weight: bold;
}

.jobPay {
    color: #5b5b5b;
    font-size: 18px; 
}

.jobsDetailInfo {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #5b5b5b ;
    margin: 50rpx 0 20rpx 0;
}

.leftInfo {
    max-width: 60%;
}

.requirement {
    display: block;
     overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 20rpx;
}

.rightInfo {
    text-align: right;
}

.release-date {
    display: block;
    margin-top: 20rpx;
    white-space: nowrap;
}

.apply-btn {
    float: right;
    width: 180rpx;
    height: 70rpx;
    font-size: 14px;
    background-color: rgb(72,118,255);
    margin-top: 20rpx;
}
</style>


