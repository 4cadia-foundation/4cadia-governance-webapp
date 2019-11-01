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
      <div class="row" v-if="block['type']=='newsletter'">
        <v-newsletter :content="block['content']" />
      </div>
      <div class="row" v-if="block['type']=='call_to_action'">
        <v-call-to-action :calltoaction="block['content']"/>
      </div>
      <div class="row" v-if="block['type']=='roadmap'">
        <v-roadmap :content="block['content']" />
      </div>
    </div>
  </div>
</template>

<script>
import contentService from '../api/contentService'
import Hero from '@/components/Hero'
import Paragraph from '@/components/Paragraph'
import CardList from '@/components/CardList'
import Newsletter from '@/components/Newsletter'
import Roadmap from '@/components/Roadmap'
import CallToAction from '@/components/CallToAction'

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
    'v-roadmap': Roadmap,
    'v-call-to-action': CallToAction,
    'v-newsletter': Newsletter
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
