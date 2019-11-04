<template>
  <div id="call-to-action">
    <div class="section-content">
      <h2 class="title" v-if="calltoaction.title" v-html="calltoaction.title"></h2>
      <p class="text" v-if="calltoaction.text" v-html="calltoaction.text"></p>

      <div>
        <v-modal></v-modal>
        <a href="https://github.com/orgs/4cadia-foundation/teams" target="_blank"><button id="btn-support" type="submit">Support Project</button></a>
      </div>
    </div>
    <img src="../assets/images/nodes.png" alt="node picture" />
  </div>
</template>

<script>
import Modal from '@/components/CallToActionModal'

export default {
  name: 'CallToAction',
  components: {
    'v-modal': Modal
  },
  props: {
    calltoaction: {
      type: Object
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
    display: list-item;
  }

  img {
    opacity: 0.1;
  }
}
</style>
