<template>
<div class="">
  <MobileDashboard class="mobile-view"/>
    <WebDashboard class="web-view flex justify-end mt-5 mr-28"/>
  <div class="web-view flex justify-center space-x-3 -mt-96 mr-48">
    <div class="w-1/4 space-y-3 mt-3">
      <PurchaseCard/>
      <MarathonCard/>
    </div>
    <div class="w-1/4 space-y-3 mt-3">
      <FootballCard/>
      <QaCard/>
    </div>
  </div>
  <div class="mobile-view m-5 space-y-3">
    <FootballCard/>
    <QaCard/>
    <PurchaseCard/>
    <MarathonCard/>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import MobileDashboard from '@/components/dashboard/MobileDashboard'
import WebDashboard from '@/components/dashboard/WebDashboard'
import FootballCard from '@/components/cards/FootballCard'
import MarathonCard from '@/components/cards/MarathonCard'
import PurchaseCard from '@/components/cards/PurchasCard'
import QaCard from '@/components/cards/QaCard'
export default {
  name: 'ClubHome',
  components: { QaCard, PurchaseCard, MarathonCard, FootballCard, WebDashboard, MobileDashboard }
}
</script>

<style scoped>

</style>
