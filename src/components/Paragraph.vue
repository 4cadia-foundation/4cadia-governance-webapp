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
  padding: 100px 150px;
  align-items: center;
  float: none;
  clear: both;
  display: flex;
}

.paragraph .content-text {
  max-width: 50%;
}

.paragraph:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  height: 100%;
  width: 40%;
  background-repeat: no-repeat;
  background-size: contain;
}

.paragraph.text-left:before {
 background-image: url("../assets/images/symbol-group-a.svg");
 right: -100px;
 background-position: 100%;
}

.paragraph.text-right:before {
 background-image: url("../assets/images/symbol-group-c.svg");
 left: -100px;
 background-position: 0;
}

.paragraph.text-left {
 text-align: left;
 justify-content: flex-start;
}

.paragraph.text-right {
 text-align: right;
 justify-content: flex-end;
}

.paragraph.paragraph.text-left .content-text .title{
  color:#071D49;
}

.paragraph.paragraph.text-right .content-text .title{
  color:#0047BB;
}

@media (max-width: 768px) {
  .paragraph {
    padding: 0 60px;
  }

  .paragraph .content-text {
    max-width: 100%;
  }

  .paragraph:before {
    width: 120%;
    z-index: -1;
    opacity: .3;
  }
}
</style>
