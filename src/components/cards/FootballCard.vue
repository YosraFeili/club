<template>
  <div class="">
    <router-link :to="{name: 'football-home' }">
      <div class="football">
        <div class="space-y-2">
          <div class="text-lg mt-3">پیش بینی بازی فوتبال</div>
          <div class="text-sm mt-3">.بازی را پیش بینی کنید و جایزه بگیرید</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FootballCard'
}
</script>

<style scoped>
.football {
  height: 120px;
  display: flex;
  justify-content: end;
  background: #ffd500 url("http://preproduction.lenz.ir/img/football-bet-bg.2c6ac4f1.svg") no-repeat;
  border-radius: 5px;
  padding: 1.25rem 1.25rem 1.25rem 0;
  text-align: right;
  color: black;
  font-family: Yekan;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
}
</style>
