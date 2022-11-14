<template>
  <div class="">
    <router-link :to="{name: 'purchase' }">
      <div class="purchase">
        <div class="space-y-2">
          <div class="text-lg mt-3 cursor-pointer">خرید امتیاز</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PurchaseCard'
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
}
</style>
