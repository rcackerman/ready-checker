import DS from 'ember-data';

export default DS.Model.extend({
  corReceivedDate: DS.attr('string'),
  nextCourtDate: DS.attr('string'),
  peopleReady: DS.attr('boolean'),
  createdAt: DS.attr('number')
});
