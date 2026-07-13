import Definition from "./definitions/Definition";
import Field from "./fields/Field";

import ListDefinition from "./definitions/ListDefinition";
import ListField from "./fields/ListField";

import ObjectDefinition from "./definitions/ObjectDefinition";
import ObjectField from "./fields/ObjectField";

import VarDefinition from "./definitions/VarDefinition";
import VarField from "./fields/VarField";

class abFields_Class {
    get Definition() {
        return Definition;
    }
    get Field() {
        return Field;
    }

    get ListDefinition() {
        return ListDefinition;
    }
    get ListField() {
        return ListField;
    }

    get ObjectDefinition() {
        return ObjectDefinition;
    }
    get ObjectField() {
        return ObjectField;
    }

    get VarDefinition() {
        return VarDefinition;
    }
    get VarField() {
        return VarField;
    }

    get debug() {
        return this._debug;
    }


    constructor() {
        this._debug = false;
    }

    define() {
        return new ObjectDefinition();
    }

    setDebug(debug) {
        this._debug = debug;
    }
}
const abFields = new abFields_Class();
export default abFields;