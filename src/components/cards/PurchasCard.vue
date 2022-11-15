<template>
  <div class="">
      <div class="purchase" @click="purchasePopUp=true">
        <div class="space-y-2">
          <div class="text-lg mt-6">خرید امتیاز</div>
        </div>
      </div>
    <div class="">
      <PopUp v-if="purchasePopUp" @closePopUp="close"/>
    </div>
  </div>
</template>

<script>
import PopUp from '@/components/PopUp'
export default {
  name: 'PurchaseCard',
  components: { PopUp },
  data () {
    return {
      purchasePopUp: false
    }
  },
  methods: {
    close () {
      this.purchasePopUp = false
    }
  }
}
</script>

<style scoped>
.purchase {
  height: 120px;
  display: flex;
  justify-content: end;
  background: #ffae73 url("http://preproduction.lenz.ir/img/buy-score.3b6c764e.svg") no-repeat;
  border-radius: 5px;
  padding: 1.25rem 1.25rem 1.25rem 0;
  color: white;
  font-family: Yekan;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
}
</style>
