<template>
<div class="">
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
import FootballCard from '@/components/cards/FootballCard'
import MarathonCard from '@/components/cards/MarathonCard'
import PurchaseCard from '@/components/cards/PurchasCard'
import QaCard from '@/components/cards/QaCard'
export default {
  name: 'ClubHome',
  components: { QaCard, PurchaseCard, MarathonCard, FootballCard }
}
</script>

<style scoped>

</style>
