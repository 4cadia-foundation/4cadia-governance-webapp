<template>
  <div :class="['paragraph', paragraph.containerClass]">
    <div class="content-text">
      <h2 class="title" v-if="paragraph.title" v-html="paragraph.title"></h2>
      <p class="text" v-if="paragraph.text" v-html="paragraph.text"></p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  data () {
    return {}
  },
  props: {
    paragraph: {
      type: Object
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.paragraph {
  position: relative;
  margin: auto;
  padding: 10px 30px;
  align-items: center;
  float: none;
  clear: both;
  background-repeat: no-repeat;
  display: flex;
  background-size: contain;
}

.paragraph.text-left {
 /*float: left;*/
 text-align: left;
 justify-content: flex-start;
 background-image: url("../assets/images/symbol-group-a.svg");
 background-position: 115% center;

}

.paragraph .content-text {
  max-width: 52%;
}

.paragraph.text-right {
 /*float: right;*/
 text-align: right;
 justify-content: flex-end;
 background-image: url("../assets/images/symbol-group-c.svg");
 background-position: -8% center;
}

.paragraph.paragraph.text-left .content-text .title{
  color:#071D49;
}

.paragraph.paragraph.text-right .content-text .title{
  color:#0047BB;
}
</style>
