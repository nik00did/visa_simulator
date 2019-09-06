const store = new Store();

class Persons {
    generatePersons(amount, settings) {
        const {
            manMinAge,
            manMaxAge,
            manMinBankAmount,
            manMaxBankAmount,
            manMinHealth,
            manMaxHealth,
            womanMinAge,
            womanMaxAge,
            womanMinBankAmount,
            womanMaxBankAmount,
            womanMinHealth,
            womanMaxHealth
        } = settings;

        let id, firstName, lastName, gender, age, health, bankAccount, hasPassport, newPerson;

        for (let i = 0; i < amount; i++) {
            id = faker.random.uuid();
            firstName = faker.fake('{{name.firstName}}');
            lastName = faker.fake('{{name.lastName}}');
            gender = Math.random() > 0.5 ? 'male' : 'female';
            hasPassport = Math.random() > 0.4;

            if (gender === 'male') {
                age = Math.floor(Math.random() * (manMaxAge - manMinAge) + manMinAge);
                bankAccount = Math.floor(Math.random() * (manMaxBankAmount - manMinBankAmount) + manMinBankAmount);
                health = Math.floor(Math.random() * (manMaxHealth - manMinHealth) + manMinHealth);
            } else {
                age = Math.floor(Math.random() * (womanMaxAge - womanMinAge) + womanMinAge);
                bankAccount = Math.floor(Math.random() * (womanMaxBankAmount - womanMinBankAmount) + womanMinBankAmount);
                health = Math.floor(Math.random() * (womanMaxHealth - womanMinHealth) + womanMinHealth);
            }

            newPerson = new Person(id, firstName, lastName, gender, age, health, bankAccount, hasPassport);

            store._persons.push(newPerson);
        }

        return store.getPersons();
    };

    createPersonByInput(obj) {
        let person = {};

        person.name = obj.name;
        person.gender = obj.gender;
        person.id = faker.random.uuid();
        person.age = obj.age;
        person.amount = obj.amount;
        person.health = obj.health;
        person.hasPassport = obj.hasPassport;

        return person;
    }
}