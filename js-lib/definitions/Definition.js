import js0 from "js0"

export default class Definition {
    get listeners() {
        return this._listeners;
    }


    constructor() {
        this._listeners = [];
    }

    addListener(listener) {
        js0.args(arguments, 'object');

        this._listeners.push(listener);
    }


    create(keys = [], root = null, fieldName = null) { js0.virtual(this); }
}