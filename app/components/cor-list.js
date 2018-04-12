import Component from '@ember/component';

export default Component.extend({
  anyPNR: false,

  actions: {
    toggleAnyPNR() {
      console.info('toggled');
      return true;
    }
  }
});
