import Component from '@ember/component';

export default Component.extend({
  peopleReady: true,

  actions: {
    setNotReady() {
      let promise = this.get('togglePNR')();
      console.info(promise)
      promise.then(() => {
        this.set('peopleReady', false);
      });
    }
  }
});
