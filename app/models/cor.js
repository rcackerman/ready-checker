import DS from 'ember-data';

export default DS.Model.extend({
  corReceivedDate: DS.attr('date'),
  nextCourtDate: DS.attr('date'),
  peopleReady: DS.attr('boolean')
});
