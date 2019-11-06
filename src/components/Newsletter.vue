<template>
  <div class="newsletter">
    <div class="newsletter_wrapper">
      <div class="newsletter_content newsletter_header">
        <h3 class="title" v-html="content.title || capitalize"></h3>
        <div class="text" v-html="content.text"></div>
      </div>
      <div v-if="this.$slots.body" class="newsletter_content newsletter_body">
        <slot name="body"></slot>
      </div>
      <div class="newsletter_content newsletter_footer">
        <form class="form form--newsletter" @submit.prevent="handleSubscribe">
          <div class="form_field">
            <v-input
              placeholderTxt="Email Address"
              inputType="email"
              inputName="email"
              minlength="3"
              v-model="emailValue"
            />
          </div>
          <div class="form_control">
            <button type="submit" class="btn btn--primary">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput'
// import MailchimpService from '../api/newsletterService'

export default {
  name: 'Newsletter',
  data () {
    return {
      emailValue: ''
    }
  },
  filters: {
    capitalize: content => {
      return content.toUpperCase()
    }
  },
  props: {
    content: {
      type: Object
    }
  },
  components: {
    'v-input': BaseInput
  },
  methods: {
    handleSubscribe () {
      const api = 'https://mailinglist-257716.firebaseio.com/subscribers.json'

      const request = {
        method: 'POST',
        body: JSON.stringify({ email: this.emailValue })
      }

      fetch(api, request)
        .then(function (response) {
          response.text()
            .then(function (result) {
              console.log(result)
            })
        })
        .catch(function (err) { console.error(err) })
    }
  }
}
</script>

<style>
.newsletter {
  color: var(--color-navy);
  background-image: url('../assets/images/symbol-group-1.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 110%;
  padding: 3vw 60px;
  margin-bottom: 20px;
}
.newsletter_wrapper {
  max-width: 50%;
  margin: auto;
}
</style>
