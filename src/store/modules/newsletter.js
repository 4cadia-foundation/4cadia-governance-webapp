import axios from 'axios'

// initial state
const state = {
  mailchimpIsAuthenticated: false,
  mailchimpAuthToken: '',
  mailchimpContactPath: '/lists/{list_id}/members/'
}

// getters
const getters = {}

// actions
const actions = {
  logoutMailchimp ({ commit }) {
    commit('setMailchimpAuthentication', { status: false, token: '' })
  },
  async oauthMailchimp (context, payload) {
    axios.post(process.env.MAILCHIMP_BASE_URI, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YXBwOmFwcA=='
      }
    })
      .then((response) => {
        localStorage.setItem('mailchimpAuthorization', JSON.stringify(response.body.access_token))
        context.commit('setMailchimpAuthentication', { status: true, token: response.body.access_token })
      }, (err) => {
        console.error('[oauthMailchimp] Error from backend requisition ', err)
      })
  },
  async addMailchimpSubscriber (context, payload) {
    console.log(payload)
    let path = context.state.mailchimpContactPath.replace('{list_id}', process.env.MAILCHIMP_LIST_ID)
    console.log(path)
    axios.get(process.env.MAILCHIMP_API_URI)
      .then((response) => {
        console.log(response.data)
      }, (err) => {
        console.error('[addMailchimpSubscriber] erro vindo do backend ', err)
      })

    // axios.post(process.env.MAILCHIMP_API_URI + mailchimpContactPath, {
    //   'email_address': payload.email,
    //   'status': 'subscribed'
    // })
    //   .then((response) => {
    //     console.log(response.data)
    //   // commit('setAuthentication', { status: true, token: event.response })
    //   }, (err) => {
    //     console.error('[addMailchimpSubscriber] erro vindo do backend ', err)
    //   })
  }
}

// mutations
const mutations = {
  setMailchimpAuthentication (state, payload) {
    // console.log(state, payload)
    state.isAuthenticated = payload.status
    let mailchimpToken = 'mailchimpToken=' + payload.token
    state.authToken = mailchimpToken
    document.cookie = mailchimpToken
    state.authProvider = payload.provider
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
