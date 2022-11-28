<template>
  <div class="">
    <div class="mobile-view">
      <div class="mobile-dashboard">
        <div class="header-dashboard">
          <div class="text-lg">
            <router-link :to="{name: 'club'}">داشبورد</router-link>
          </div>
          <div class="flex justify-center items-center space-x-6 text-right">
            <div class="dashboard-text mt-4">
              <h1 class="text-white">امتیازات من</h1>
              <h1 class="mt-2 font-bold">174</h1>
            </div>
            <div class="icon-row">
              <img src="../../assets/icons/diamond.39dfd0f2.svg" class="diamond-icon">
            </div>
          </div>
        </div>
        <div class="body-dashboard">
          <router-link :to="{name: 'get-prize'}">دریافت جایزه</router-link>
          <router-link :to="{name: 'lottery-history'}">تاریخچه قرعه کشی</router-link>
          <router-link :to="{name:'score-history'}">تاریخچه امتیازات</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MobileDashboard'
}
</script>

<style scoped>
</style>
