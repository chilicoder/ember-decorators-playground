import DS from 'ember-data';

export default DS.Model.extend({
  belongsTo: DS.attr('foo-bar')
});
