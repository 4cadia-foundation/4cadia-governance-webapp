<template>
  <div class="list-cards">
    <h2 class="list-title">{{list.title}}</h2>
      <ul :class="`list ${oddOrEven}`">
        <li :class="`item`" v-for="(item, index) in list.data" :key="index">
          <v-card ref="card" :cardType="list.type" class="teste">
            <template v-slot:header class="header_test">
              <img class="item_icon" v-if="item.icon" :src="item.icon">
            </template>

            <template v-slot:body>
              <h3 class="title" v-html="item.title || capitalize"></h3>
              <div class="text" v-html="item.text"></div>
            </template>
          </v-card>
        </li>
      </ul>
    </div>
</template>

<script>
import BaseCard from '@/components/BaseCard'

export default {
  name: 'CardBlock',
  data () {
    return {
      oddOrEven: this.list.data.length % 2 === 0 ? 'even' : 'odd'
    }
  },
  filters: {
    capitalize: item => {
      return item.toUpperCase()
    }
  },
  props: {
    list: {
      type: Object
    },
    cardStyle: {
      type: String
    }
  },
  components: {
    'v-card': BaseCard
  },
  mounted () {
  }
}
</script>
<style scoped>
/* img {
  width: 44vw;
  padding: 60px 47px;
} */

.header_test {
  width: 33%;
}

.header_test img {
    width: 30vw;
}

.teste {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 40px 50px;
}

.list {
  display: flex;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
}

.list-title {
  text-align: center;
  color: #071D49;
}

.list .item {
  max-width: 100%;
  margin: 20px 0;
}

.title, .text {
    text-align: left;
}

.title {
  margin: 0px;
  margin-bottom: 0.2em;
  color: #071D49;
  font-size: 35px;
}

.list.even {
  padding: 10px 30px;
}

.list.even .item {
  flex: 48%;
  max-width: 48%;
}

.item_icon {
  width: 6vw;
  height: 10vw;
  position: relative;
  width: 144px;
  vertical-align: middle;
  margin: 0px;
  padding-right: 30px;
}

@media (max-width: 768px) {
  .list {
    flex-direction: column;
  }

  .list .item {
    width: auto !important;
    margin-bottom: 10px;
    max-width: none;
  }
}
</style>
