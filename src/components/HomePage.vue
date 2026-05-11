<template>
  <div class="container">
    <div class="hr">
      <span class="hr-icon">|</span>
      <span class="hr-text">日常测量</span>
    </div>

    <div class="body">
      <div class="hang">
        <div class="message">
          <div class="message-left">
            <img src="../assets/tiwen.png" alt="体温测量" class="img">
            <span>体温测量</span>
          </div>
          <div class="message-right">
            <span>{{ Temp }}°C</span>
          </div>
        </div>
        <div class="message">
          <div class="message-left">
            <img src="../assets/xinlv.png" alt="心率检测" class="img">
            <span>心率检测</span>
          </div>
          <div class="message-right">
            <span>{{ Pulse }}次/分</span>
          </div>
        </div>
      </div>
      <div class="hang">
        <div class="message">
          <div class="message-left">
            <img src="../assets/xueyang.png" alt="血氧检测" class="img">
            <span>血氧检测</span>
          </div>
          <div class="message-right">
            <span>{{ Sao2 }}%</span>
          </div>
        </div>
        <div class="message">
          <div class="message-left">
            <img src="../assets/room.png" alt="房间定位" class="img">
            <span>房间定位</span>
          </div>
          <div class="message-right">
            <span>1001号</span>
          </div>
        </div>
      </div>
    </div>

    <div class="item">
      <button type="primary" class="btn-primary" @click="goToHistory">查看历史数据</button>
    </div>

    <div class="tips">
      <p>&emsp;&emsp;血氧饱和度:</p>
      <p>&emsp;Sao2是血液中氧合血蛋白 (HbO2) 的容量占全部血红蛋白的百分比，是维持人体正常机能的重要生理参数。</p>
      <p>&emsp;血氧饱和度在95%-100%属于正常状态，小于90%是缺氧状态，小于80%属于严重缺氧，小于70%则会有生命危险。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      Temp: '~',
      Pulse: '~',
      Sao2: '~'
    }
  },
  methods: {
    goToHistory() {
      this.$router.push('/history')
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  padding-top: 10px;
}

.hr {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: white;
  margin-top: 10px;
  border-bottom: 1px solid #eee;
}

.hr-icon {
  color: orange;
  font-weight: bold;
  margin-right: 5px;
}

.hr-text {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.body {
  padding: 15px;
  background-color: #f5f5f5;
}

.hang {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.message {
  background-color: white;
  width: 48%;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.img {
  width: 75px;
  height: 75px;
}

.message-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.message-left img {
  margin-bottom: 8px;
}

.message-right {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.item {
  padding: 20px 15px;
  background-color: #f5f5f5;
}

.btn-primary {
  width: 100%;
  height: 48px;
  background-color: #4cd964;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.btn-primary:active {
  background-color: #3bc954;
}

.tips {
  padding: 20px 15px;
  background-color: white;
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.8;
  color: #666;
}

.tips p {
  margin: 5px 0;
}
</style>
