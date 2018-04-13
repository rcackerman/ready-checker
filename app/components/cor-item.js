import Component from '@ember/component';

export default Component.extend({
  peopleReady: true,

  actions: {
    setNotReady() {
      // TODO this should be a toggle
      this.set('peopleReady', false);
      debugger;
    },
    
    setReady() {
      this.set('peopleReady', true);
    }
  }
});
