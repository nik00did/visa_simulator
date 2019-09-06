class App {
    constructor() {
        this.persons = new Persons();
        this.view = new View();
    }

    init() {
        const validInputs = () => {
            for (let i = 0; i < this.view.dataInput.length; i++) {
                this.view.dataInput[i].setAttribute("oninput", `validity.valid||(value='')`);
            }
        };

        validInputs();

        const settings = store.getSettings();
        const validator = store.getValidator();
        const method = event => {
            switch(event.target.id) {
                case 'generateBtn':
                    let newSettings = {
                        manMinAge: parseInt(this.view.manMinAgeInput.value),
                        manMaxAge: parseInt(this.view.manMaxAgeInput.value),
                        manMinBankAmount: parseInt(this.view.manMinBankAmountInput.value),
                        manMaxBankAmount: parseInt(this.view.manMaxBankAmountInput.value),
                        manMinHealth: parseInt(this.view.manMinHealthInput.value),
                        manMaxHealth: parseInt(this.view.manMaxHealthInput.value),
                        womanMinAge: parseInt(this.view.womanMinAgeInput.value),
                        womanMaxAge: parseInt(this.view.womanMaxAgeInput.value),
                        womanMinBankAmount: parseInt(this.view.womanMinBankAmountInput.value),
                        womanMaxBankAmount: parseInt(this.view.womanMaxBankAmountInput.value),
                        womanMinHealth: parseInt(this.view.womanMinHealthInput.value),
                        womanMaxHealth: parseInt(this.view.womanMaxHealthInput.value)
                    };

                    store.setSettings(newSettings);

                    let settings = store.getSettings();
                    let newPersons = this.persons.generatePersons(this.view.quantityOfPersons.value, settings);

                    store.setPersons(newPersons);
                    this.view.renderCheckTable(newPersons);
                break;
                case 'addPersonByInput':
                    let gender = this.view.genderInputMale.checked ? "male" : "female";
                    let person = new Person(faker.random.uuid(), this.view.firstNameInput.value, this.view.lastNameInput.value, gender, this.view.ageInput.value, this.view.bankAmountInput.value, this.view.healthInput.value, this.view.hasPassportInput.checked === true)

                    store.addPersonByInput(person);

                    let persons = store.getPersons();

                    this.view.renderCheckTable(persons);
                break;
                case 'startBtn':
                    let newValidator = {
                        manMinAge: this.view.manMinAgeValidator.value,
                        manMaxAge: this.view.manMaxAgeValidator.value,
                        manMinBankAmount: this.view.manMinBankAmountValidator.value,
                        manMaxBankAmount: this.view.manMaxBankAmountValidator.value,
                        manMinHealth: this.view.manMinHealthValidator.value,
                        manMaxHealth: this.view.manMaxHealthValidator.value,
                        womanMinAge: this.view.womanMinAgeValidator.value,
                        womanMaxAge: this.view.womanMaxAgeValidator.value,
                        womanMinBankAmount: this.view.womanMinBankAmountValidator.value,
                        womanMaxBankAmount: this.view.womanMaxBankAmountValidator.value,
                        womanMinHealth: this.view.womanMinHealthValidator.value,
                        womanMaxHealth: this.view.womanMaxHealthValidator.value
                    };
                    store.setValidator(newValidator);
                    store.getValidator();

                    runСheck();
                    break;
                case 'clearBtn':
                    this.view.tableBody.innerHTML="";
                    store.clearStore();
                break;
                default:
                    return;
            }
        };

        document.addEventListener('click', method);

        this.view.manMinAgeInput.value = settings.manMinAge;
        this.view.manMaxAgeInput.value = settings.manMaxAge;
        this.view.manMinBankAmountInput.value = settings.manMinBankAmount;
        this.view.manMaxBankAmountInput.value = settings.manMaxBankAmount;
        this.view.manMinHealthInput.value = settings.manMinHealth;
        this.view.manMaxHealthInput.value = settings.manMaxHealth;

        this.view.womanMinAgeInput.value = settings.womanMinAge;
        this.view.womanMaxAgeInput.value = settings.womanMaxAge;
        this.view.womanMinBankAmountInput.value = settings.womanMinBankAmount;
        this.view.womanMaxBankAmountInput.value = settings.womanMaxBankAmount;
        this.view.womanMinHealthInput.value = settings.womanMinHealth;
        this.view.womanMaxHealthInput.value = settings.womanMaxHealth;

        this.view.manMinAgeValidator.value = validator.manMinAge;
        this.view.manMaxAgeValidator.value = validator.manMaxAge;
        this.view.manMinBankAmountValidator.value = validator.manMinBankAmount;
        this.view.manMaxBankAmountValidator.value = validator.manMaxBankAmount;
        this.view.manMinHealthValidator.value = validator.manMinHealth;
        this.view.manMaxHealthValidator.value = validator.manMaxHealth;

        this.view.womanMinAgeValidator.value = validator.womanMinAge;
        this.view.womanMaxAgeValidator.value = validator.womanMaxAge;
        this.view.womanMinBankAmountValidator.value = validator.womanMinBankAmount;
        this.view.womanMaxBankAmountValidator.value = validator.womanMaxBankAmount;
        this.view.womanMinHealthValidator.value = validator.womanMinHealth;
        this.view.womanMaxHealthValidator.value = validator.womanMaxHealth

    }
}

const app = new App;
app.init();