import js0 from "js0";
import Definition from "../definitions/Definition";

export default class Field {
    get $value() { js0.virtual(this); }
    set $value(value) { js0.virtual(this); }


    constructor(definition, keys) {
        js0.args(arguments, Definition, Array);

        this.__definition = definition;
        this.__keys = keys;
    }
}