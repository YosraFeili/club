<template>
<div class="">
  <div class="side-bar">
    <div class="flex justify-center items-center p-16 cursor-pointer space-x-5">
      <div class="">
        <div class="text-xs text-green-400">0</div>
        <div class="text-xs">امتیازات من</div>
      </div>
      <div class="diamond">
        <img src="../assets/diamond.39dfd0f2.svg">
      </div>
    </div>
    <hr>
    <div class="p-5 cursor-pointer">کسب امتیاز</div>
    <hr>
    <div class="p-5 cursor-pointer">
    <router-link :to="{name: 'get-prize'}">دریافت جایزه</router-link>
    </div>
    <hr>
    <div class="p-5 cursor-pointer">
      <router-link :to="{name: 'lottery-history'}">تاریخچه قرعه کشی</router-link>
    </div>
    <hr>
    <div class="p-5 cursor-pointer">
      <router-link :to="{name:'score-history'}">تاریخچه امتیازات</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
.side-bar{
  background: rgba(49, 51, 72, 0.7);
  border-radius: 5px;
  text-align: right;
  color: white;
  font-family: Yekan;
  font-size: 18px;
}
.diamond{
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #C4C7C4FF;
}
</style>
