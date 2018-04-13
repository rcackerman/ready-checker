import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createCOR: function() {
      var newCOR = this.store.createRecord('cor', {
        corReceivedDate: this.get('dateCORReceived'),
        nextCourtDate: this.get('nextCourtDate'),
        createdAt: new Date().getTime()
      });
      console.log(newCOR);
      newCOR.save();
    }
  }
});
