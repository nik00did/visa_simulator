const defaultSettings =  {
    manMinAge: 21,
    manMaxAge: 96,
    manMinBankAmount: 500,
    manMaxBankAmount:3000,
    manMinHealth: 40,
    manMaxHealth: 100,
    womanMinAge: 16,
    womanMaxAge: 96,
    womanMinBankAmount: 600,
    womanMaxBankAmount: 3500,
    womanMinHealth: 40,
    womanMaxHealth: 100
};

class Store {
    constructor () {
        this._persons = [];
        this._settings = defaultSettings;
        this._validator = defaultSettings;
    }

    getPersons() {
        return this._persons;
    }

    setPersons(arr) {
        this._persons = arr;
    }

    addPersonByInput(person) {
        this._persons.push(person);
    }

    setSettings(obj) {
        this._settings = obj;
    }

    getSettings() {
        return this._settings;
    }

    setValidator(obj) {
        this._validator = Object.create(obj);
    }

    getValidator() {
        return this._validator;
    }

    clearStore() {
        this._persons = [];
    }
}