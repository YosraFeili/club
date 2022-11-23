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
      <div class="card-footer flex justify-center mt-5 p-5 ">
        <button class="buy-btn">خرید اشتراک</button>
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
</style>
