<template>
  <div class="container">
    <div class="header">
      <button class="back-btn" @click="goBack">← 返回</button>
      <span class="title">历史数据</span>
      <span class="placeholder"></span>
    </div>

    <div class="tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.key" 
        :class="['tab-btn', { active: activeTab === tab.key }]"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="history-list">
      <div v-if="filteredData.length === 0" class="empty">
        <p>暂无数据</p>
      </div>
      <div v-else v-for="(item, index) in filteredData" :key="index" class="history-item">
        <div class="item-date">{{ item.date }}</div>
        <div class="item-time">{{ item.time }}</div>
        <div class="item-content">
          <div v-if="activeTab === 'all'" class="data-row">
            <span class="label">体温</span>
            <span class="value">{{ item.temp }}°C</span>
          </div>
          <div v-if="activeTab === 'all' || activeTab === 'pulse'" class="data-row">
            <span class="label">心率</span>
            <span class="value">{{ item.pulse }}次/分</span>
          </div>
          <div v-if="activeTab === 'all' || activeTab === 'sao2'" class="data-row">
            <span class="label">血氧</span>
            <span class="value">{{ item.sao2 }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryPage',
  data() {
    return {
      activeTab: 'all',
      tabs: [
        { key: 'all', label: '全部' },
        { key: 'pulse', label: '心率' },
        { key: 'sao2', label: '血氧' }
      ],
      historyData: [
        { date: '2026-04-19', time: '09:30', temp: 36.5, pulse: 72, sao2: 98 },
        { date: '2026-04-19', time: '14:20', temp: 36.3, pulse: 68, sao2: 97 },
        { date: '2026-04-18', time: '10:15', temp: 36.7, pulse: 75, sao2: 99 },
        { date: '2026-04-18', time: '16:45', temp: 36.4, pulse: 70, sao2: 98 },
        { date: '2026-04-17', time: '08:00', temp: 36.2, pulse: 73, sao2: 96 },
        { date: '2026-04-17', time: '15:30', temp: 36.6, pulse: 69, sao2: 98 },
        { date: '2026-04-16', time: '11:20', temp: 36.5, pulse: 71, sao2: 97 },
        { date: '2026-04-16', time: '19:00', temp: 36.3, pulse: 74, sao2: 99 },
        { date: '2026-04-15', time: '09:45', temp: 36.8, pulse: 76, sao2: 98 },
        { date: '2026-04-15', time: '14:10', temp: 36.4, pulse: 70, sao2: 97 }
      ]
    }
  },
  computed: {
    filteredData() {
      return this.historyData
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-bottom: 1px solid #eee;
}

.back-btn {
  width: 60px;
  height: 36px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

.back-btn:active {
  background-color: #e0e0e0;
}

.title {
  font-size: 17px;
  font-weight: 600;
  color: #333;
}

.placeholder {
  width: 60px;
}

.tabs {
  display: flex;
  background-color: white;
  padding: 10px 15px;
  gap: 10px;
  border-bottom: 1px solid #eee;
}

.tab-btn {
  flex: 1;
  height: 36px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn.active {
  background-color: #4cd964;
  color: white;
}

.history-list {
  padding: 15px;
}

.empty {
  text-align: center;
  padding: 40px;
  color: #999;
}

.history-item {
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.item-date {
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
}

.item-time {
  font-size: 12px;
  color: #ccc;
  margin-bottom: 12px;
}

.item-content {
  border-top: 1px solid #f0f0f0;
  padding-top: 12px;
}

.data-row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
}

.data-row .label {
  font-size: 14px;
  color: #666;
}

.data-row .value {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
</style>
