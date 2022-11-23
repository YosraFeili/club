<template>
  <div class="">
    <div class="mobile-view">
      <ClubHome class="w-full"/>
      <CardSection class="w-full p-5"/>
    </div>
    <div class="web-view flex justify-center items-center space-x-24">
      <CardSection class="w-3/5"/>
      <ClubHome class="w-1/5"/>
    </div>
  </div>
</template>

<script>
import CardSection from '@/components/cards/CardSection'
import ClubHome from '@/views/club/Club'

export default {
  name: 'HomeView',
  components: { ClubHome, CardSection }
}
</script>
