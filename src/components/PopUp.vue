<template>
  <div class="bg-popup">
    <div class="icon-cancel">
      <img src="../assets/icons/close.svg" @click="close">
    </div>
    <div class="card">
      <div class="card-header">خرید پکیج</div>
      <div class="card-body" v-for="pack in packageList" :key="pack.id">
        <div class="product-card" :class="{selected}">
          <div class="">{{ pack.price }}</div>
          <div class="product-row space-x-3">
            <label for="product.id">{{ pack.title }}</label>
            <input id="product.id" type="radio" name="products" value="product" v-model="selected">
          </div>
        </div>
      </div>
      <div class="card-footer flex justify-center">
        <button class="btn">خرید اشتراک</button>
      </div>
    </div>
  </div>
</template>

<script>
import { packageList } from '@/index'

export default {
  name: 'PopUp',
  data () {
    return {
      selected: '',
      packageList: packageList
    }
  },

  methods: {
    close () {
      this.$emit('closePopUp')
    }
  }
}
</script>

<style scoped>
.bg-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(42, 44, 65, 0.49);
  overflow: hidden;
  display: block;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  backdrop-filter: blur(5px);
  z-index: 100;
}

.icon-cancel {
  position: relative;
  top: 50px;
  left: 50px;
  cursor: pointer;
}

.card {
  position: relative;
  top: 12.5%;
  left: 25%;
  background: #2A2C41FF;
  width: 50%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

.card-header {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background: #1c1d32;
  text-align: center;
  color: white;
  padding: 20px;
  font-family: Yekan;
  font-size: 18px;
}

.card-body {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.product-card {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #FFFFFF33;
  padding: 20px;
  color: white;
  font-family: Yekan;
}

/*input[type='radio'] + label {*/
/*  display: inline-block;*/
/*  cursor: pointer;*/
/*  position: relative;*/
/*  padding-right: 30px;*/
/*  font-size: 13px;*/
/*  color: white;*/
/*}*/
/*.selected {*/
/*   border: 1px solid #fdbf50;*/
/* }*/
/*input[type='radio'] {*/
/*  display: none !important;*/
/*  *display: inline;*/
/*}*/
.product-row {
  display: flex;
  align-items: center;
}

.btn {
  width: 150px;
  border-radius: 30px;
  padding: 5px;
  color: white;
  background: #fdbf50;
  font-family: Yekan;
  font-size: 18px;
}
</style>
