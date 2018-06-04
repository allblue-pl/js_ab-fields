'use strict';

const
    ListDefinition = require('./definitions/ListDefinition'),
    ListField = require('./fields/ListField'),

    ObjectDefinition = require('./definitions/ObjectDefinition'),
    ObjectField = require('./fields/ObjectField'),

    VarDefinition = require('./definitions/VarDefinition'),
    VarField = require('./fields/VarField')
;

module.exports.debug = false;
function setDebug(debug) {
    module.exports.debug = debug;
}

function define() {
    return new ObjectDefinition();
}

module.exports.ListDefinition = ListDefinition;
module.exports.ListField = ListField;

module.exports.ObjectDefinition = ObjectDefinition;
module.exports.ObjectField = ObjectField;

module.exports.VarDefinition = VarDefinition;
module.exports.VarField = VarField;

module.exports.setDebug = setDebug;
module.exports.define = define;