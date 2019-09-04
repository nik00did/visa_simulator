describe.only('Store parameters', () => {
    let store = new Store();

    beforeEach(() => {
        store.clearStore();
    });

    it('Check getPersons', () => {
        assert.equal(store.getPersons().length, 0);

        store.setPersons("222");
        assert.equal(store.getPersons().length, 1);

        store.setPersons(null);
        assert.equal(store.getPersons().length, 2);

        store.setPersons(undefined);
        assert.equal(store.getPersons().length, 3);

        store.setPersons(-1);
        assert.equal(store.getPersons().length, 4);

        store.setPersons('Ivan');
        assert.equal(store.getPersons().length, 5);

        store.setPersons(-2);
        assert.equal(store.getPersons().length, 6);
    });

    it('Check setPersons', () => {
        assert.equal(store.getPersons().length, 0);
        assert.equal(store.getPersons()[0], undefined);

        store.setPersons("Ivan");
        assert.equal(store.getPersons()[0], "Ivan");

        store.setPersons(null);
        assert.equal(store.getPersons()[1], null);

        store.setPersons(undefined);
        assert.equal(store.getPersons()[2], undefined);

        store.setPersons(-1);
        assert.equal(store.getPersons()[3], -1);

        store.setPersons(-2);
        assert.equal(store.getPersons()[4], -2);
    });

    it('Check addPersonByInput', () => {
        assert.equal(store.getPersons().length, 0);

        store.addPersonByInput("Ivan");
        assert.equal(store.getPersons()[0], "Ivan");

        store.addPersonByInput(null);
        assert.equal(store.getPersons()[1], null);

        store.addPersonByInput(undefined);
        assert.equal(store.getPersons()[2], undefined);

        store.addPersonByInput(-1);
        assert.equal(store.getPersons()[3], -1);

        store.addPersonByInput(-2);
        assert.equal(store.getPersons()[4], -2);
    });

    it('Check setSettingsManMinAge', () => {
        store.setSettingsManMinAge(21);
        assert.equal(store._settings.manMinAge, 21);

        store.setSettingsManMinAge(96);
        assert.equal(store._settings.manMinAge, 96);

        store.setSettingsManMinAge(-1);
        assert.equal(store._settings.manMinAge, -1);

        store.setSettingsManMinAge(-0.5);
        assert.equal(store._settings.manMinAge, -0.5);

        store.setSettingsManMinAge(null);
        assert.equal(store._settings.manMinAge, null);

        store.setSettingsManMinAge(undefined);
        assert.equal(store._settings.manMinAge, undefined);
    });

    it('Check setSettingsManMaxAge', () => {
        store.setSettingsManMaxAge(21);
        assert.equal(store._settings.manMaxAge, 21);

        store.setSettingsManMaxAge(96);
        assert.equal(store._settings.manMaxAge, 96);

        store.setSettingsManMaxAge(-1);
        assert.equal(store._settings.manMaxAge, -1);

        store.setSettingsManMaxAge(-0.5);
        assert.equal(store._settings.manMaxAge, -0.5);

        store.setSettingsManMaxAge(null);
        assert.equal(store._settings.manMaxAge, null);

        store.setSettingsManMaxAge(undefined);
        assert.equal(store._settings.manMaxAge, undefined);

        store.setSettingsManMaxAge(999999999999999);
        assert.equal(store._settings.manMaxAge, 999999999999999);
    });

    it('Check setSettingsManMinBankAmount', () => {
        store.setSettingsManMinBankAmount(800);
        assert.equal(store._settings.manMinBankAmount, 800);

        store.setSettingsManMinBankAmount(500.0);
        assert.equal(store._settings.manMinBankAmount, 500.0);

        store.setSettingsManMinBankAmount(-1);
        assert.equal(store._settings.manMinBankAmount, -1);

        store.setSettingsManMinBankAmount(-0.5);
        assert.equal(store._settings.manMinBankAmount, -0.5);

        store.setSettingsManMinBankAmount(null);
        assert.equal(store._settings.manMinBankAmount, null);

        store.setSettingsManMinBankAmount(undefined);
        assert.equal(store._settings.manMinBankAmount, undefined);

        store.setSettingsManMinBankAmount(999999999999999);
        assert.equal(store._settings.manMinBankAmount, 999999999999999);
    });

    it('Check setSettingsManMaxBankAmount', () => {
        store.setSettingsManMaxBankAmount(999999999999999);
        assert.equal(store._settings.manMinBankAmount, 999999999999999);

        store.setSettingsManMaxBankAmount(96);
        assert.equal(store._settings.manMinBankAmount, 96);

        store.setSettingsManMaxBankAmount(-1);
        assert.equal(store._settings.manMinBankAmount, -1);

        store.setSettingsManMaxBankAmount(-0.5);
        assert.equal(store._settings.manMinBankAmount, -0.5);

        store.setSettingsManMaxBankAmount(null);
        assert.equal(store._settings.manMinBankAmount, null);

        store.setSettingsManMaxBankAmount(undefined);
        assert.equal(store._settings.manMinBankAmount, undefined);

        store.setSettingsManMaxBankAmount(999999999999999);
        assert.equal(store._settings.manMinBankAmount, 999999999999999);
    });

    it('Check setSettingsManMinHealth', () => {
        store.setSettingsManMinHealth(21);
        assert.equal(store._settings.manMinHealth, 21);

        store.setSettingsManMinHealth(96);
        assert.equal(store._settings.manMinHealth, 96);

        store.setSettingsManMinHealth(-1);
        assert.equal(store._settings.manMinHealth, -1);

        store.setSettingsManMinHealth(-0.5);
        assert.equal(store._settings.manMinHealth, -0.5);

        store.setSettingsManMinHealth(null);
        assert.equal(store._settings.manMinHealth, null);

        store.setSettingsManMinHealth(undefined);
        assert.equal(store._settings.manMinHealth, undefined);

        store.setSettingsManMinHealth(999999999999999);
        assert.equal(store._settings.manMinHealth, 999999999999999);
    });

    it('Check setSettingsManMaxHealth', () => {
        store.setSettingsManMaxHealth(21);
        assert.equal(store._settings.manMaxHealth, 21);

        store.setSettingsManMaxHealth(96);
        assert.equal(store._settings.manMaxHealth, 96);

        store.setSettingsManMaxHealth(-1);
        assert.equal(store._settings.manMaxHealth, -1);

        store.setSettingsManMaxHealth(-0.5);
        assert.equal(store._settings.manMaxHealth, -0.5);

        store.setSettingsManMaxHealth(null);
        assert.equal(store._settings.manMaxHealth, null);

        store.setSettingsManMaxHealth(undefined);
        assert.equal(store._settings.manMaxHealth, undefined);

        store.setSettingsManMaxHealth(999999999999999);
        assert.equal(store._settings.manMaxHealth, 999999999999999);
    });

    it('Check setSettingsWomanMinAge', () => {
        store.setSettingsWomanMinAge(21);
        assert.equal(store._settings.womanMinAge, 21);

        store.setSettingsWomanMinAge(96);
        assert.equal(store._settings.womanMinAge, 96);

        store.setSettingsWomanMinAge(-1);
        assert.equal(store._settings.womanMinAge, -1);

        store.setSettingsWomanMinAge(-0.5);
        assert.equal(store._settings.womanMinAge, -0.5);

        store.setSettingsWomanMinAge(null);
        assert.equal(store._settings.womanMinAge, null);

        store.setSettingsWomanMinAge(undefined);
        assert.equal(store._settings.womanMinAge, undefined);

        store.setSettingsWomanMinAge(999999999999999);
        assert.equal(store._settings.womanMinAge, 999999999999999);
    });

    it('Check setSettingsWomanMaxAge', () => {
        store.setSettingsManMaxAge(21);
        assert.equal(store._settings.womanMaxAge, 21);

        store.setSettingsWomanMaxAge(96);
        assert.equal(store._settings.womanMaxAge, 96);

        store.setSettingsWomanMaxAge(-1);
        assert.equal(store._settings.womanMaxAge, -1);

        store.setSettingsWomanMaxAge(-0.5);
        assert.equal(store._settings.womanMaxAge, -0.5);

        store.setSettingsWomanMaxAge(null);
        assert.equal(store._settings.womanMaxAge, null);

        store.setSettingsWomanMaxAge(undefined);
        assert.equal(store._settings.womanMaxAge, undefined);

        store.setSettingsWomanMaxAge(999999999999999);
        assert.equal(store._settings.womanMaxAge, 999999999999999);
    });

    it('Check setSettingsWomanMinBankAmount', () => {
        store.setSettingsWomanMinBankAmount(21);
        assert.equal(store._settings.womanMinBankAmount, 21);

        store.setSettingsWomanMinBankAmount(96);
        assert.equal(store._settings.womanMinBankAmount, 96);

        store.setSettingsWomanMinBankAmount(-1);
        assert.equal(store._settings.womanMinBankAmount, -1);

        store.setSettingsWomanMinBankAmount(-0.5);
        assert.equal(store._settings.womanMinBankAmount, -0.5);

        store.setSettingsWomanMinBankAmount(null);
        assert.equal(store._settings.womanMinBankAmount, null);

        store.setSettingsWomanMinBankAmount(undefined);
        assert.equal(store._settings.womanMinBankAmount, undefined);

        store.setSettingsWomanMinBankAmount(999999999999999);
        assert.equal(store._settings.manMaxAge, 999999999999999);
    });
    it('Check setSettingsWomanMaxBankAmount', () => {
        store.setSettingsWomanMaxBankAmount(21);
        assert.equal(store._settings.womanMaxBankAmount, 21);

        store.setSettingsWomanMaxBankAmount(96);
        assert.equal(store._settings.womanMaxBankAmount, 96);

        store.setSettingsWomanMaxBankAmount(-1);
        assert.equal(store._settings.womanMaxBankAmount, -1);

        store.setSettingsWomanMaxBankAmount(-0.5);
        assert.equal(store._settings.womanMaxBankAmount, -0.5);

        store.setSettingsWomanMaxBankAmount(null);
        assert.equal(store._settings.womanMaxBankAmount, null);

        store.setSettingsWomanMaxBankAmount(undefined);
        assert.equal(store._settings.womanMaxBankAmount, undefined);

        store.setSettingsWomanMaxBankAmount(999999999999999);
        assert.equal(store._settings.womanMaxBankAmount, 999999999999999);
    });

    it('Check setSettingsWomanMinHealth', () => {
        store.setSettingsWomanMinHealth(21);
        assert.equal(store._settings.womanMinHealthInput, 21);

        store.setSettingsWomanMinHealth(96);
        assert.equal(store._settings.womanMinHealthInput, 96);

        store.setSettingsWomanMinHealth(-1);
        assert.equal(store._settings.womanMinHealthInput, -1);

        store.setSettingsWomanMinHealth(-0.5);
        assert.equal(store._settings.womanMinHealthInput, -0.5);

        store.setSettingsWomanMinHealth(null);
        assert.equal(store._settings.womanMinHealthInput, null);

        store.setSettingsWomanMinHealth(undefined);
        assert.equal(store._settings.womanMinHealthInput, undefined);

        store.setSettingsWomanMinHealth(999999999999999);
        assert.equal(store._settings.womanMinHealthInput, 999999999999999);
    });
    it('Check setSettingsWomanMaxHealth', () => {
        store.setSettingsWomanMaxHealth(21);
        assert.equal(store._settings.womanMaxHealth, 21);

        store.setSettingsWomanMaxHealth(96);
        assert.equal(store._settings.womanMaxHealth, 96);

        store.setSettingsWomanMaxHealth(-1);
        assert.equal(store._settings.womanMaxHealth, -1);

        store.setSettingsWomanMaxHealth(-0.5);
        assert.equal(store._settings.womanMaxHealth, -0.5);

        store.setSettingsWomanMaxHealth(null);
        assert.equal(store._settings.womanMaxHealth, null);

        store.setSettingsWomanMaxHealth(undefined);
        assert.equal(store._settings.womanMaxHealth, undefined);

        store.setSettingsWomanMaxHealth(999999999999999);
        assert.equal(store._settings.womanMaxHealth, 999999999999999);
    });

    it('Check setValidatorManMinAge', () => {
        store.setValidatorManMinAge(21);
        assert.equal(store._settings.manMinAge, 21);

        store.setValidatorManMinAge(96);
        assert.equal(store._settings.manMinAge, 96);

        store.setValidatorManMinAge(-1);
        assert.equal(store._settings.manMinAge, -1);

        store.setValidatorManMinAge(-0.5);
        assert.equal(store._settings.manMinAge, -0.5);

        store.setValidatorManMinAge(null);
        assert.equal(store._settings.manMinAge, null);

        store.setValidatorManMinAge(undefined);
        assert.equal(store._settings.manMinAge, undefined);

        store.setValidatorManMinAge(999999999999999);
        assert.equal(store._settings.manMinAge, 999999999999999);
    });
    it('Check setValidatorManMaxAge', () => {
        store.setValidatorManMaxAge(21);
        assert.equal(store._settings.manMaxAge, 21);

        store.setValidatorManMaxAge(96);
        assert.equal(store._settings.manMaxAge, 96);

        store.setValidatorManMaxAge(-1);
        assert.equal(store._settings.manMaxAge, -1);

        store.setValidatorManMaxAge(-0.5);
        assert.equal(store._settings.manMaxAge, -0.5);

        store.setValidatorManMaxAge(null);
        assert.equal(store._settings.manMaxAge, null);

        store.setValidatorManMaxAge(undefined);
        assert.equal(store._settings.manMaxAge, undefined);

        store.setValidatorManMaxAge(999999999999999);
        assert.equal(store._settings.manMaxAge, 999999999999999);
    });

    it('Check setValidatorManMinBankAmount', () => {
        store.setValidatorManMinBankAmount(21);
        assert.equal(store._settings.manMinBankAmount, 21);

        store.setValidatorManMinBankAmount(96);
        assert.equal(store._settings.manMinBankAmount, 96);

        store.setValidatorManMinBankAmount(-1);
        assert.equal(store._settings.manMinBankAmount, -1);

        store.setValidatorManMinBankAmount(-0.5);
        assert.equal(store._settings.manMinBankAmount, -0.5);

        store.setValidatorManMinBankAmount(null);
        assert.equal(store._settings.manMinBankAmount, null);

        store.setValidatorManMinBankAmount(undefined);
        assert.equal(store._settings.manMinBankAmount, undefined);

        store.setValidatorManMinBankAmount(999999999999999);
        assert.equal(store._settings.manMinBankAmount, 999999999999999);
    });

    it('Check setValidatorManMaxHealth', () => {
        store.setValidatorManMaxHealth(21);
        assert.equal(store._settings.manMaxHealth, 21);

        store.setValidatorManMaxHealth(96);
        assert.equal(store._settings.manMaxHealth, 96);

        store.setValidatorManMaxHealth(-1);
        assert.equal(store._settings.manMaxHealth, -1);

        store.setValidatorManMaxHealth(-0.5);
        assert.equal(store._settings.manMaxHealth, -0.5);

        store.setValidatorManMaxHealth(null);
        assert.equal(store._settings.manMaxHealth, null);

        store.setValidatorManMaxHealth(undefined);
        assert.equal(store._settings.manMaxHealth, undefined);

        store.setValidatorManMaxHealth(999999999999999);
        assert.equal(store._settings.manMaxHealth, 999999999999999);
    });

    it('Check setValidatorWomanMinAge', () => {
        store.setValidatorWomanMinAge(21);
        assert.equal(store._settings.womanMinAgeInput, 21);

        store.setValidatorWomanMinAge(96);
        assert.equal(store._settings.womanMinAgeInput, 96);

        store.setValidatorWomanMinAge(-1);
        assert.equal(store._settings.womanMinAgeInput, -1);

        store.setValidatorWomanMinAge(-0.5);
        assert.equal(store._settings.womanMinAgeInput, -0.5);

        store.setValidatorWomanMinAge(null);
        assert.equal(store._settings.womanMinAgeInput, null);

        store.setValidatorWomanMinAge(undefined);
        assert.equal(store._settings.womanMinAgeInput, undefined);

        store.setValidatorWomanMinAge(999999999999999);
        assert.equal(store._settings.womanMinAgeInput, 999999999999999);
    });

    it('Check setValidatorWomanMinBankAmount', () => {
        store.setValidatorWomanMinBankAmount(21);
        assert.equal(store._settings.womanMinBankAmount, 21);

        store.setValidatorWomanMinBankAmount(96);
        assert.equal(store._settings.womanMinBankAmount, 96);

        store.setValidatorWomanMinBankAmount(-1);
        assert.equal(store._settings.womanMinBankAmount, -1);

        store.setValidatorWomanMinBankAmount(-0.5);
        assert.equal(store._settings.womanMinBankAmount, -0.5);

        store.setValidatorWomanMinBankAmount(null);
        assert.equal(store._settings.womanMinBankAmount, null);

        store.setValidatorWomanMinBankAmount(undefined);
        assert.equal(store._settings.womanMinBankAmount, undefined);

        store.setValidatorWomanMinBankAmount(999999999999999);
        assert.equal(store._settings.womanMinBankAmount, 999999999999999);
    });

    it('Check setValidatorWomanMaxBankAmount', () => {
        store.setValidatorWomanMaxBankAmount(21);
        assert.equal(store._settings.womanMaxBankAmount, 21);

        store.setValidatorWomanMaxBankAmount(96);
        assert.equal(store._settings.womanMaxBankAmount, 96);

        store.setValidatorWomanMaxBankAmount(-1);
        assert.equal(store._settings.womanMaxBankAmount, -1);

        store.setValidatorWomanMaxBankAmount(-0.5);
        assert.equal(store._settings.womanMaxBankAmount, -0.5);

        store.setValidatorWomanMaxBankAmount(null);
        assert.equal(store._settings.womanMaxBankAmount, null);

        store.setValidatorWomanMaxBankAmount(undefined);
        assert.equal(store._settings.womanMaxBankAmount, undefined);

        store.setValidatorWomanMaxBankAmount(999999999999999);
        assert.equal(store._settings.womanMaxBankAmount, 999999999999999);
    });

    it('Check setValidatorWomanMinHealth', () => {
        store.setValidatorWomanMinHealth(21);
        assert.equal(store._settings.womanMinHealthInput, 40);

        store.setValidatorWomanMinHealth(96);
        assert.equal(store._settings.womanMinHealthInput, 40);

        store.setValidatorWomanMinHealth(-1);
        assert.equal(store._settings.womanMinHealthInput, 40);

        store.setValidatorWomanMinHealth(-0.5);
        assert.equal(store._settings.womanMinHealthInput, 40);

        store.setValidatorWomanMinHealth(null);
        assert.equal(store._settings.womanMinHealthInput, 40);

        store.setValidatorWomanMinHealth(undefined);
        assert.equal(store._settings.womanMinHealthInput, 40);

        store.setValidatorWomanMinHealth(999999999999999);
        assert.equal(store._settings.womanMinHealthInput, 40);
    });

    it('Check setValidatorWomanMaxHealth', () => {
        store.setValidatorWomanMaxHealth(21);
        assert.equal(store._settings.womanMaxHealth, 21);

        store.setValidatorWomanMaxHealth(96);
        assert.equal(store._settings.womanMaxHealth, 96);

        store.setValidatorWomanMaxHealth(-1);
        assert.equal(store._settings.womanMaxHealth, -1);

        store.setValidatorWomanMaxHealth(-0.5);
        assert.equal(store._settings.womanMaxHealth, -0.5);

        store.setValidatorWomanMaxHealth(null);
        assert.equal(store._settings.womanMaxHealth, null);

        store.setValidatorWomanMaxHealth(undefined);
        assert.equal(store._settings.womanMaxHealth, undefined);

        store.setValidatorWomanMaxHealth(999999999999999);
        assert.equal(store._settings.womanMaxHealth, 999999999999999);
    });


});