<template>
  <div class="container container--about">
    <div class="col" v-for="(block, index) in this.content" :key="index">
      <div class="row row--full" v-if="block['type']=='list_hero'">
        <v-hero :hero="block['content']" float="right" classes="">
        </v-hero>
      </div>
      <div class="row" v-if="block['type']=='list_paragraph'">
        <v-paragraph :paragraph="block['content']"/>
      </div>
      <div class="row" v-if="block['type']=='list_card'">
        <v-cards-list :list="block['content']" />
      </div>
      <div class="row" v-if="block['type']=='card_block'">
        <v-card-block :list="block['content']" />
      </div>
    </div>
  </div>
</template>

<script>
import contentService from '../api/contentService'
import Hero from '@/components/Hero'
import Paragraph from '@/components/Paragraph'
import CardList from '@/components/CardList'
import CardBlock from '@/components/CardBlock'

export default {
  name: 'Home',
  data () {
    return {
      content: []
    }
  },
  components: {
    'v-hero': Hero,
    'v-cards-list': CardList,
    'v-paragraph': Paragraph,
    'v-card-block': CardBlock
  },
  mounted: function () {
    contentService('home').then((response) => {
      this.content = response.data
    })
  }
}
</script>

<style>
</style>
