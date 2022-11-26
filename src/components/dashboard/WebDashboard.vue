<template>
  <div>
    <div class="web-dashboard">
      <div class="web-dashboard-header space-x-6">
        <div class="dashboard-text">
          <div class="mt-5 text-white">امتیازات من</div>
          <div class="mt-1">0</div>
        </div>
        <div class="diamond">
          <img src="../../assets/diamond.39dfd0f2.svg">
        </div>
      </div>
      <div class="web-dashboard-body">
        <hr>
        <div class="text-white text-center p-5 cursor-pointer">
          <router-link :to="{name: 'club'}">داشبورد</router-link>
        </div>
        <hr>
        <div class="text-white text-center p-5 cursor-pointer">
          <router-link :to="{name: 'get-prize'}">دریافت جایزه</router-link>
        </div>
        <hr>
        <div class="text-white text-center p-5 cursor-pointer">
          <router-link :to="{name: 'lottery-history'}">تاریخچه قرعه کشی</router-link>
        </div>
        <hr>
        <div class="text-white text-center p-5 cursor-pointer">
          <router-link :to="{name:'score-history'}">تاریخچه امتیازات</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebDashboard'
}
</script>

<style scoped>

</style>
