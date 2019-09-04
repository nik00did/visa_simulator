class Store {
    constructor () {
        this._persons = [];
        this._settings = {
            manMinAge: 21,
            manMaxAge: 96,
            manMinBankAmount: 500,
            manMaxBankAmount:3000,
            manMinHealth: 40,
            manMaxHealth: 100,
            womanMinAgeInput: 16,
            womanMaxAgeInput: 96,
            womanMinBankAmount: 600,
            womanMaxBankAmount: 3500,
            womanMinHealthInput: 40,
            womanMaxHealth: 100
        };

        this._validator = {
            manMinAge: 21,
            manMaxAge: 96,
            manMinBankAmount: 500,
            manMaxBankAmount:3000,
            manMinHealth: 40,
            manMaxHealth: 100,
            womanMinAgeInput: 16,
            womanMaxAgeInput: 96,
            womanMinBankAmount: 600,
            womanMaxBankAmount: 3500,
            womanMinHealthInput: 40,
            womanMaxHealth: 100
        }
    }

    getPersons() {
        return this._persons;
    }

    setPersons(arr) {
        this._persons.push(arr);
    }

    addPersonByInput(person) {
        this._persons.push(person);
    }

    setSettingsManMinAge(value) {
        this._settings.manMinAge = value;
    }

    setSettingsManMaxAge(value) {
        this._settings.manMaxAge = value;
    }

    setSettingsManMinBankAmount(value) {
        this._settings.manMinBankAmount = value;
    }

    setSettingsManMaxBankAmount(value) {
        this._settings.manMaxBankAmount = value;
    }

    setSettingsManMinHealth(value) {
        this._settings.manMinHealth = value;
    }

    setSettingsManMaxHealth(value) {
        this._settings.manMaxHealth = value;
    }

    setSettingsWomanMinAge(value) {
        this._settings.womanMinAge = value;
    }

    setSettingsWomanMaxAge(value) {
        this._settings.womanMaxAge = value;
    }

    setSettingsWomanMinBankAmount(value) {
        this._settings.womanMinBankAmount = value;
    }

    setSettingsWomanMaxBankAmount(value) {
        this._settings.womanMaxBankAmount = value;
    }

    setSettingsWomanMinHealth(value) {
        this._settings.womanMinHealth = value;
    }

    setSettingsWomanMaxHealth(value) {
        this._settings.womanMaxHealth = value;
    }

    clearStore() {
        this._persons = [];
        this._settings = {
            manMinAge: 21,
            manMaxAge: 96,
            manMinBankAmount: 500,
            manMaxBankAmount:3000,
            manMinHealth: 40,
            manMaxHealth: 100,
            womanMinAgeInput: 16,
            womanMaxAgeInput: 96,
            womanMinBankAmount: 600,
            womanMaxBankAmount: 3500,
            womanMinHealthInput: 40,
            womanMaxHealth: 100
        };
    }

    setValidatorManMinAge(value) {
        this._settings.manMinAge = value;
    }

    setValidatorManMaxAge(value) {
        this._settings.manMaxAge = value;
    }

    setValidatorManMinBankAmount(value) {
        this._settings.manMinBankAmount = value;
    }

    setValidatorManMaxBankAmount(value) {
        this._settings.manMaxBankAmount = value;
    }

    setValidatorManMinHealth(value) {
        this._settings.manMinHealth = value;
    }

    setValidatorManMaxHealth(value) {
        this._settings.manMaxHealth = value;
    }

    setValidatorWomanMinAge(value) {
        this._settings.womanMinAge = value;
    }

    setValidatorWomanMaxAge(value) {
        this._settings.womanMaxAge = value;
    }

    setValidatorWomanMinBankAmount(value) {
        this._settings.womanMinBankAmount = value;
    }

    setValidatorWomanMaxBankAmount(value) {
        this._settings.womanMaxBankAmount = value;
    }

    setValidatorWomanMinHealth(value) {
        this._settings.womanMinHealth = value;
    }

    setValidatorWomanMaxHealth(value) {
        this._settings.womanMaxHealth = value;
    }


    getSettingsManMinAge() {
        return this._validator.manMinAge;
    }

    getSettingsManMaxAge() {
        return this._validator.manMaxAge;
    }

    getSettingsManMinBankAmount() {
        return this._validator.manMinBankAmount;
    }

    getSettingsManMaxBankAmount() {
        return this._validator.manMaxBankAmount;
    }

    getSettingsManMinHealth() {
        return this._validator.manMinHealth;
    }

    getSettingsManMaxHealth() {
        return this._validator.manMaxHealth;
    }

    getSettingsWomanMinAge() {
        return this._validator.womanMinAge;
    }

    getSettingsWomanMaxAge() {
        return this._validator.womanMaxAge;
    }

    getSettingsWomanMinBankAmount() {
        return this._validator.womanMinBankAmount;
    }

    getSettingsWomanMaxBankAmount() {
        return this._validator.womanMaxBankAmount;
    }

    getSettingsWomanMinHealth() {
        return this._validator.womanMinHealth;
    }

    getSettingsWomanMaxHealth() {
        return this._validator.womanMaxHealth;
    }

    getValidatorManMinAge() {
        return this._settings.manMinAge;
    }

    getValidatorManMaxAge() {
        return this._validator.manMaxAge;
    }

    getValidatorManMinBankAmount() {
        return this._validator.manMinBankAmount;
    }

    getValidatorManMaxBankAmount() {
        return this._validator.manMaxBankAmount;
    }

    getValidatorManMinHealth() {
        return this._validator.manMinHealth;
    }

    getValidatorManMaxHealth() {
        return this._validator.manMaxHealth;
    }

    getValidatorWomanMinAge() {
        return this._validator.womanMinAge;
    }

    getValidatorWomanMaxAge() {
        return this._validator.womanMaxAge;
    }

    getValidatorWomanMinBankAmount() {
        return this._validator.womanMinBankAmount;
    }

    getValidatorWomanMaxBankAmount() {
        return this._validator.womanMaxBankAmount;
    }

    getValidatorWomanMinHealth() {
        return this._validator.womanMinHealth;
    }

    getValidatorWomanMaxHealth() {
        return this._validator.womanMaxHealth;
    }
}



