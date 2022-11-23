<template>
<div class="">
  <MobileDashboard class="mobile-view"/>
  <WebDashboard class="web-view"/>
  <router-view></router-view>
</div>
</template>

<script>
import MobileDashboard from '@/components/dashboard/MobileDashboard'
import WebDashboard from '@/components/dashboard/WebDashboard'
export default {
  name: 'ClubHome',
  components: { WebDashboard, MobileDashboard }
}
</script>

<style scoped>

</style>
