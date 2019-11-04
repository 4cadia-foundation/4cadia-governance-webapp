<template>
  <div id="call-to-action">

    <div class="section-content">
      <h2 class="title" v-if="calltoaction.title" v-html="calltoaction.title"></h2>
      <p class="text" v-if="calltoaction.text" v-html="calltoaction.text"></p>

      <div>
        <button @click="callContract" id="btn-buy-token" type="button">Buy 4GT Tokens</button>
        <button   id="btn-support" type="submit">Support Project</button>
      </div>
    </div>
        <img src="../assets/images/nodes.png" alt="node picture" />

  </div>
</template>

<script>
import {mapState} from 'vuex'
import contract from '../../contract.json'
import {ethers} from 'ethers'

export default {
  name: 'CallToAction',
  props: {
    calltoaction: {
      type: Object
    }
  },
  data () {
    return {
      wallet: ''
    }
  },
  mounted () {
    this.wallet = ''
  },
  computed: {
    ...mapState({
      address: state => state.w3.address,
      w3: state => state.w3.instance

    })
  },
  methods: {
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

<style scoped>
#call-to-action {
  height: 55vh;
  width: 100%;
  background: #071d49;
  display: flex;
}

#call-to-action .section-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 120px;
  height: 100%;
  text-transform: uppercase;
}

img {
  opacity: 0.4;
  height: 55vh;
  position: absolute;
  right: 0px;
}

h2 {
  text-align: left;
  color: #ffffff;
  font-size: 4em;
  margin-top: 0px;
}

p {
  font-size: 25px;
  color: #6ad1e3;
}

#btn-buy-token {
  margin-right: 20px;
  background: #009cde;
  border: none;
}

#btn-support {
  background: transparent;
  border: 2px solid #6ad1e3;
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

@media (max-width: 768px) {
#call-to-action .section-content {
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
p {
  font-size: 0.55em;
  text-align: center;
}

button {
  font-size: 0.8em;
  width: 340px;
  height: 55px;
  margin-bottom: 20px;
  display:list-item;
}

img {
  opacity: 0.1;
}
}
</style>
