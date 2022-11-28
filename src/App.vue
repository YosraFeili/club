<template>
  <div id="app">
    <MobileDashboard class="mobile-view"/>
    <WebDashboard class="web-view flex justify-end mt-5 mr-28"/>
    <router-view/>
  </div>
</template>

<style>
</style>
<script>
import MobileDashboard from '@/components/dashboard/MobileDashboard'
import WebDashboard from '@/components/dashboard/WebDashboard'
export default {
  components: { WebDashboard, MobileDashboard }
}
</script>
