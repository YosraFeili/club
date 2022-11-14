<template>
  <div class="flex justify-end space-x-4">
    <div class="w-full space-y-4">
      <PurchasCard/>
      <MarathonCard/>
    </div>
    <div class="w-full space-y-4">
      <FootballCard/>
      <QaCard/>
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

<style scoped>

</style>
