<template>
  <div class="modal">
    <button @click="modalAction()" id="btn-buy-token" type="submit">Buy 4GT Tokens</button>

    <transition name="fade">
      <div v-if="modal" class="modal-action">
        <div class="modal-wrapper">
          <div class="box-modal">
            <button class="btn--icon btn--close" @click="modalAction()"></button>
            <h2>
              One step
              <span>closer</span> to be part of 4cadia Governance!
            </h2>
            <p>
              Price quotations
              <strong>ETH/USD</strong> U$186,73
            </p>
            <div class="modal-input">
              <div>
                <div class="input-title">
                  <img src="../assets/images/4GTCoin2.png" />
                  <label for="token-amount">Tokens Amount</label>
                </div>
                <input id="token-amount" type="number" placeholder="e.g: 11" />
              </div>

              <div>
                <div class="input-title">
                  <img src="../assets/images/ethereum.png" />
                  <label for="contribution-value">Contribution Value</label>
                </div>
                <input id="contribution-value" type="number" step="0.10" placeholder="e.g: 110 ETH" />
              </div>
            </div>
            <button class="btn-modal" @click="callContract()">Start Transaction</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import contract from '../../contract.json'
import {ethers} from 'ethers'

export default {
  name: 'CallToActionModal',
  components: {},
  data () {
    return {
      modal: false
    }
  },
  computed: {
    ...mapState({
      address: state => state.w3.address,
      w3: state => state.w3.instance

    })
  },
  methods: {
    modalAction () {
      this.modal = !this.modal
    },
    quotationTotal () {
      var token = document.getElementById('token-amount').value
      var amount = document.getElementById('contribution-value').value
      var total = token * amount
      console.log(total)
    },
    callContract () {
      console.log()
      let provider = new ethers.providers.Web3Provider(this.w3().currentProvider)
      let signer = provider.getSigner(0)
      let contractInstance = new ethers.Contract(contract.address, contract.abi, signer)
      var sendTransactionPromise = contractInstance.set(123)
      sendTransactionPromise.then(function (tx) {
        console.log(tx)
      })
    }
  }
}
</script>

<style>
.modal {
  display: inline-block;
}

.modal-action {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.box-modal {
  width: 40%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "Noto Sans", Arial, sans-serif;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: #071d49;
}

h2 span {
  color: #009cde;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-input {
  display: flex;
}

.modal-input div {
  text-align: center;
  justify-content: center;
  align-items: center;
}

.modal-input label {
  margin-left: 10px;
}

.input-title {
  display: flex;
}

input {
  height: 2rem;
  font-size: 1.5rem;
  width: 65%;
  margin-top: 0.5rem;
  padding: 1.25rem;
  background: #ffffff;
  border: 1px solid #c6cacc;
  box-sizing: border-box;
  border-radius: 4px;
}

input::placeholder {
  color: #919699;
}

.btn-modal {
  background: #2eaa36;
  border-radius: 4px;
  font-size: 22px;
  line-height: 19px;
  letter-spacing: 0.75px;
  height: 80px;
  width: 90%;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

#btn-buy-token {
  margin-right: 20px;
  background: #009cde;
  border: none;
}

button {
  font-size: 22px;
  height: 70px;
  width: 300px;
  border-radius: 15px;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
