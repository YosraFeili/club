<template>
  <div class="">
    <router-link :to="{name: 'qa' }">
      <div class="qa">
        <div class="space-y-2">
          <div class="text-lg mt-3 cursor-pointer">سوال وجواب</div>
          <div class="text-sm mt-3 cursor-pointer">به سوال ها جواب بده و جایزه ببر</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'QaCard'
}
</script>

<style scoped>
.qa {
  height: 120px;
  display: flex;
  justify-content: end;
  background: #73ff9a url("http://preproduction.lenz.ir/img/qa-bg.eacebe19.svg") no-repeat;
  border-radius: 5px;
  padding: 1.25rem 1.25rem 1.25rem 0;
  text-align: right;
  color: white;
  font-family: Yekan;
}
</style>
