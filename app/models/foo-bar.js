import DS from 'ember-data';
import { attr } from '@ember-decorators/data'

const { Model, belongsTo, hasMany } = DS;

export default class FooBarModel extends Model {
  @attr('string', {defaultValue:'234'}) firstName;
}
