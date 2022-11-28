<template>
  <div class="">
    <router-link :to="{name: 'qa' }">
      <div class="qa">
        <div class="space-y-2">
          <div class="mt-3">سوال وجواب</div>
          <div class="mt-3">.به سوال ها جواب بده و جایزه ببر</div>
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
  color: black;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}
</style>
