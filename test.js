import test from 'ava';

var fakeEvent = require('./');

test('merge provided object', t => {
    var evt = fakeEvent({target: {name:'name', value:'Hello World'}});
    t.is(evt.target.name, "name");
    t.is(evt.target.value, "Hello World");
    t.truthy(evt.preventDefault);
});

test('without custom object', t =>{
    var evt = fakeEvent();
    t.truthy(evt.preventDefault);
    t.truthy(evt.stopImmediatePropagation);
    t.truthy(evt.stopPropagation);
    t.truthy(evt.composedPath);
});

test('when array is provided', t =>{
    var evt = fakeEvent([1,2,3]);
    t.truthy(evt.preventDefault);
    t.truthy(evt.stopImmediatePropagation);
    t.truthy(evt.stopPropagation);
    t.truthy(evt.composedPath);
});