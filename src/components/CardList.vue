<template>
  <div :class="`list-cards ${this.list.type}`">
    <h2 class="list-title">{{list.title}}</h2>
      <ul :class="`list ${oddOrEven}`">
        <li :class="`item `" v-for="(item, index) in list.data" :key="index">
          <v-card ref="card" class="card-block">
            <template v-slot:header>
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
    },
    cardType: {
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
.list-cards {
  max-width: 80%;
  margin: 2vw auto 12vw;
}

li:hover {
  color: #FFF;
}

.card:hover {
  background: #071D49;
  color: white;
  cursor: pointer;
}

.card h3 {
  font-size: 35px;
}

.card:hover h3 {
  color: #FFF;
  cursor: pointer;
}

.card:hover img {
  filter: brightness(100);
}

.list {
  display: flex;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  margin-top: 6vw;
}

.list::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transform: matrix(-0.99, 0.18, -0.16, -0.98, 0, 0);
  background: linear-gradient(90deg, #5BD0E4 0%, #255FAA 100%);
  border-radius: 50px;
  background-size: contain;
}

.list-title {
  text-align: center;
  color: #071D49;
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
  height: 8vw;
  position: relative;
}

.list-cards.full .item_icon {
  height: 8vw;
  position: relative;
  padding-right: 35px;
}

.list-cards.full .card_header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-cards.full .card-block {
  display: flex;
  flex-direction: row;
  padding: 40px 50px;
  border-radius: 10px;
}

.list-cards.full .item {
  flex: 100%;
  max-width: 100%;
  margin: 20px 0;
}

.list-cards.full .card h3 {
  margin: 0;
  margin-bottom: 0.4em;
  font-size: 35px;
}

.list-cards.full .title,
.list-cards.full .text {
    text-align: left;
}

.list-cards.full .card:hover {
  background: white;
  color: black;
  cursor: pointer;
}

.list-cards.full .card:hover h3 {
  color: #071D49;
  cursor: pointer;
}

.list-cards.full  .card:hover img {
  filter: brightness();
}

.list-cards.full .list:before {
  background: none;
}

@media (max-width: 768px) {
  .list-cards {
    margin: 0;
    max-width: 100%;
  }

  .list {
    flex-direction: column;
    padding: 6vw 10vw;
  }

  .list::before {
    transform: none;
    left: 0;
    bottom: 0;
    border-radius: 0;
    height: 80%;
    margin: auto;
  }

  .list .item {
    width: auto !important;
    margin-bottom: 10px;
    max-width: none;
  }

  .list-cards.full .card-block {
    flex-direction: column;
    text-align: center;
  }
}
</style>
