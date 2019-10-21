<template >
  <div class="roadmap">
    <h2 class="roadmap-title">{{content.title}}</h2>
    <h3 class="roadmap-text" v-if="content.text" v-html="content.text"></h3>
    <img src="/static/images/Timeline.png" alt="Time Line">
    <ul :class="`list`">
      <li :class="`item`" v-for="(item, index) in content.list.data" :key="index">
        <h3 class="title" v-html="item.title || capitalize"></h3>
        <div class="text" v-html="item.text"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard'
import CardList from '@/components/CardList'

export default {
  name: 'Roadmap',
  data () {
    return {

    }
  },
  props: {
    content: {
      type: Object
    }
  },
  mounted () {
  },
  components: {
    'v-card': BaseCard,
    'v-cards-list': CardList
  }
}
</script>
<style scoped>
.roadmap {
  display: inline-block;
}
.roadmap-title {
  color:#071D49;
}
.item {
  display: inline-table;
  margin: 1.5em;
  max-width: 15.5%;
  text-align: left;
}
.title{
  font-size: 1.2em;
}
.item:nth-child(odd) {
    color:#0047BB;
}
.item:nth-child(even) {
    color:#071D49;
}
.text {
  color: black;
}
</style>
