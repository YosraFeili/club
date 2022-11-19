<template>
  <div class="bg-popup">
    <div class="icon-cancel">
      <img src="../assets/icons/close.svg" class="cursor-pointer" @click="close">
    </div>
    <div class="card">
      <div class="card-header">خرید پکیج</div>
      <div class="card-body">
        <div v-for="pack in packageList" :key="pack.id" @click="selectPackage()">
          <div class="product-card" :class="{selected: product && pack.id === product.id}">
            <div class="">{{ pack.price }}</div>
            <div class="product-row space-x-3">
              <label :for="pack.id">{{ pack.title }}</label>
              <input :id="pack.id" type="radio" name="products" :value="pack" v-model="product">
            </div>
          </div>
        </div>
      </div>
      <div class="payment-section" id="paymentMethod" v-if="paymentSection">
        <div class="payment-title"> : انتخاب نحوه پرداخت</div>
        <div class="payment-option" v-for="mode in paymentModes" :key="mode.id">
          <div>{{mode.title}}</div>
        </div>
      </div>
      <div class="card-footer flex justify-center mt-5">
        <button class="btn">خرید اشتراک</button>
      </div>
    </div>
  </div>
</template>

<script>
import { packageList, paymentMode } from '@/index'

export default {
  name: 'PopUp',
  data () {
    return {
      product: '',
      packageList: packageList,
      paymentModes: paymentMode,
      paymentSection: false
    }
  },

  methods: {
    close () {
      this.$emit('closePopUp')
    },

    selectPackage () {
      this.paymentSection = true
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
  padding: 20px;
  height: 230px;
  overflow-y: scroll;
}

.card-body::-webkit-scrollbar {
  background: #ffffff;
  width: 3px;
}

.card-body::-webkit-scrollbar-thumb {
  background: #FDBF50FF;
  border-radius: 5px;
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
  margin-bottom: 5px;
}

.selected {
  border: 1px solid #FDBF50FF;
}

input[type='radio'] + label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  top: 10px;
  font-size: 13px;
  color: white;
}

input[type='radio'] {
  display: none !important;
  *display: inline;
}

.product-row {
  display: flex;
  align-items: center;
}

.payment-section {
  padding: 20px;
}

.payment-title {
  color: white;
  text-align: right;
  font-family: Yekan;
}

.payment-option {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 8px 5px 0 0;
  text-align: right;
  color: white;
  font-family: Yekan;
  font-size: 13px;
  cursor: pointer;
}

.btn {
  width: 250px;
  font-size: 16px;
  font-weight: 500;
  font-family: Yekan;
  text-align: center;
  padding: 11px 63px 10px 64px;
  border-radius: 24px;
  border: none;
  background-color: #FDBF50FF;
  color: white;
}
</style>
