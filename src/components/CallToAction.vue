<template>
  <div id="call-to-action">
    <div class="section-content">
      <h2 class="title" v-if="calltoaction.title" v-html="calltoaction.title"></h2>
      <p class="text" v-if="calltoaction.text" v-html="calltoaction.text"></p>
      <!-- <img src="../assets/images/nodes.svg" alt="node picture" /> -->

      <div>
        <button id="btn-buy-token" type="submit">Buy 4GT Tokens</button>
        <button id="btn-support" type="submit">Support Project</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallToAction",
  data() {
    return {};
  },
  props: {
    calltoaction: {
      type: Object
    }
  }
};
</script>

<style scoped>
#call-to-action {
  height: 55vh;
  width: 100%;
  background: #071d49;
}

#call-to-action .section-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 120px;
  height: 100%;
  text-transform: uppercase;
}

img {
  display: flex;
  height: 700px;
  opacity: 0.4;
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
</style>
