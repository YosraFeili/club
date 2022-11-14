<template>
  <div class="flex justify-end space-x-4">
    <div class="w-full space-y-4">
      <CardClub title="خرید امتیاز" type="prize"/>
      <CardClub  sub-title="ماراتنی وجود ندارد" type="marathon"/>
    </div>
    <div class="w-full space-y-4">
      <CardClub title="پیش بینی بازی فوتبال" sub-title="بازی را پیش بینی کنید و جایزه بگیرید" type="footballCard"/>
      <CardClub title="سوال وجواب" sub-title="به سوال ها جواب بده و جایزه ببر" type="qa"/>
    </div>
  </div>
</template>

<script>
import CardClub from '@/components/CardClub'
export default {
  name: 'CardSection',
  components: { CardClub }
}
</script>

<style scoped>

</style>
