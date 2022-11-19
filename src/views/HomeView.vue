<template>
  <div class="card-home flex justify-center space-x-20">
    <div class="w-1/2 mt-20">
      <CardSection/>
    </div>
    <div class="w-1/6 mt-20">
      <SideBar/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CardSection from '@/components/cards/CardSection'
import SideBar from '@/components/SideBar'

export default {
  name: 'HomeView',
  components: { SideBar, CardSection }
}
</script>
