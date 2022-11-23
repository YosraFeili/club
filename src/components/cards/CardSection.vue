<template>
  <div class="">
    <div class="mobile-view">
        <PurchasCard class="mt-3"/>
        <MarathonCard class="mt-3"/>
        <FootballCard class="mt-3"/>
        <QaCard class="mt-3"/>
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
