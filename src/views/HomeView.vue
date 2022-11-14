<template>
  <div class="flex justify-center space-x-20">
    <div class="w-1/3 mt-20">
      <CardSection/>
    </div>
    <div class="w-1/8 mt-20">
      <SideBar/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CardSection from '@/components/CardSection'
import SideBar from '@/components/SideBar'

export default {
  name: 'HomeView',
  components: { SideBar, CardSection }
}
</script>
