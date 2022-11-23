<template>
  <div class="">
    <div>
      <ClubHome class="w-full"/>
      <CardSection class="w-full p-5"/>
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
