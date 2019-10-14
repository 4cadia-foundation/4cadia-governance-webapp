<template>
  <div class="list-cards">
    <h2 class="list-title">{{list.title}}</h2>
    <div>
      <!-- <img class="list-background-image" src="../assets/images/rectangle_card.png" /> -->
      <ul :class="`list ${oddOrEven}`">
        <li :class="`item`" v-for="(item, index) in list.data" :key="index">
          <v-card ref="card" :cardType="list.type">
            <template v-slot:header>
              <img class="item_icon" v-if="item.icon" :src="item.icon">
              <h3 class="title" v-html="item.title || capitalize"></h3>
            </template>

            <template v-slot:body>
              <div class="text" v-html="item.text"></div>
            </template>
          </v-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard'

export default {
  name: 'CardList',
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
/* .item_icon item.icon:hover path {
    fill: #fce57e;
} */
.list-cards {
  max-width: 80%;
  margin: auto;
}

li:hover {
  color: #FFF;
}

.list {
  display: flex;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  background-image: url("../assets/images/rectangle_card.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 100px 0;
}

.list-title {
  text-align: center;
  color: #071D49;
}

.list-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 86vw;
}

.list .item {
  flex: 31%;
  max-width: 31%;
  margin: 20px 0;
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
  height: 6vw;
  position: relative;
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
