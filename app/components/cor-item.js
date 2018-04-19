import Component from '@ember/component';

export default Component.extend({
  peopleReady: true,

  actions: {
    setNotReady() {
      // TODO this should be a toggle
      this.set('peopleReady', false);
      this.$('li').set()
    },
    
    setReady() {
      this.set('peopleReady', true);
    }
  }
});
