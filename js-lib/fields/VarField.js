import js0 from "js0";
import Field from "./Field";
import VarDefinition from "../definitions/VarDefinition";

export default class VarField extends Field {
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

    constructor(definition, keys) { super(definition, keys);
        js0.args(arguments, VarDefinition, Array);

        this._value = undefined;
    }

}