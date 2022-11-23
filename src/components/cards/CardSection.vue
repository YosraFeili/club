<template>
  <div class="">
    <div class="mobile-view space-y-3">
        <PurchasCard class=""/>
        <MarathonCard class=""/>
        <FootballCard class=""/>
        <QaCard class=""/>
    </div>
    <div class="web-view flex justify-center space-x-3">
      <div class="w-full space-y-3">
        <PurchasCard class=""/>
        <MarathonCard class=""/>
      </div>
      <div class="w-full space-y-3">
        <FootballCard class=""/>
        <QaCard class=""/>
      </div>
    </div>
  </div>
</template>

<script>
import FootballCard from '@/components/cards/FootballCard'
import QaCard from '@/components/cards/QaCard'
import PurchasCard from '@/components/cards/PurchasCard'
import MarathonCard from '@/components/cards/MarathonCard'
export default {
  name: 'CardSection',
  components: { MarathonCard, PurchasCard, QaCard, FootballCard }
}
</script>

<style lang="scss" scoped>

</style>
