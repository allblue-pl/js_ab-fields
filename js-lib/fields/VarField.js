'use strict';

const
    js0 = require('js0'),

    Field = require('./Field')
;

class VarField extends Field
{

    get $value() {
        return this._value;
    }
    set $value(value) {
        this._value = value;

        for (let listener of this.__definition.listeners) {
            if ('change' in listener)
                listener.change(value, this.__keys);
        }
    }

    constructor(definition, keys)
    { super(definition, keys);
        js0.args(arguments, require('../definitions/VarDefinition'), Array);

        this._value = undefined;
    }

}
module.exports = VarField;