import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foo/bar-baz', 'Integration | Component | foo/bar baz', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foo/bar-baz}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foo/bar-baz}}
      template block text
    {{/foo/bar-baz}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
