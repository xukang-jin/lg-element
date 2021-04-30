import LgInput from '../'
export default {
  title: 'LgInput',
  component: LgInput
}

export const Text = () => ({
  components: { LgInput },
  template: '<lg-input v-modal="value"></lg-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LgInput },
  template: '<lg-input type="password" v-modal="value"></lg-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})