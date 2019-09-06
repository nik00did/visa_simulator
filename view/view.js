class View {
    constructor() {
        //Buttons
        this.addPerson = document.getElementById('addPerson');
        this.addPersonByInput = document.getElementById('addPersonByInput');
        this.generatePersons = document.getElementById('generateBtn');
        this.clearPersons = document.getElementById('clearBtn');
        this.startCheck = document.getElementById('startBtn');
        this.quantityOfPersons = document.getElementById('quantityOfPersons');

        this.firstNameInput = document.getElementById('firstNameInput');
        this.lastNameInput = document.getElementById('lastNameInput');
        this.genderInputMale = document.getElementById('genderInputMale');
        this.genderInputFemale = document.getElementById('genderInputFemale');
        this.ageInput = document.getElementById('ageInput');
        this.bankAmountInput = document.getElementById('bankAmountInput');
        this.healthInput = document.getElementById('healthInput');
        this.hasPassportInput = document.getElementById('hasPassportInput');

        this.manMinAgeInput = document.getElementById('manMinAgeInput');
        this.manMaxAgeInput = document.getElementById('manMaxAgeInput');
        this.manMinBankAmountInput = document.getElementById('manMinBankAmountInput');
        this.manMaxBankAmountInput = document.getElementById('manMaxBankAmountInput');
        this.manMinHealthInput = document.getElementById('manMinHealthInput');
        this.manMaxHealthInput = document.getElementById('manMaxHealthInput');

        this.womanMinAgeInput = document.getElementById('womanMinAgeInput');
        this.womanMaxAgeInput = document.getElementById('womanMaxAgeInput');
        this.womanMinBankAmountInput = document.getElementById('womanMinBankAmountInput');
        this.womanMaxBankAmountInput = document.getElementById('womanMaxBankAmountInput');
        this.womanMinHealthInput = document.getElementById('womanMinHealthInput');
        this.womanMaxHealthInput = document.getElementById('womanMaxHealthInput');

        this.manMinAgeValidator = document.getElementById('manMinAgeValidator');
        this.manMaxAgeValidator = document.getElementById('manMaxAgeValidator');
        this.manMinBankAmountValidator = document.getElementById('manMinBankAmountValidator');
        this.manMaxBankAmountValidator = document.getElementById('manMaxBankAmountValidator');
        this.manMinHealthValidator = document.getElementById('manMinHealthValidator');
        this.manMaxHealthValidator = document.getElementById('manMaxHealthValidator');

        this.womanMinAgeValidator = document.getElementById('womanMinAgeValidator');
        this.womanMaxAgeValidator = document.getElementById('womanMaxAgeValidator');
        this.womanMinBankAmountValidator = document.getElementById('womanMinBankAmountValidator');
        this.womanMaxBankAmountValidator = document.getElementById('womanMaxBankAmountValidator');
        this.womanMinHealthValidator = document.getElementById('womanMinHealthValidator');
        this.womanMaxHealthValidator = document.getElementById('womanMaxHealthValidator');
        this.personData = document.getElementsByClassName("person-data")

        this.tableBody = document.getElementById('content');
        this.top = 0;
    }

    renderCheckTableRow(person) {
        if (person.gender === 'female') {
            return `<section class="person-data" id="${person.id}">
        <div class="person-id person-id_woman">
            <img src="../img/avatarWoman.png" alt="" class="img man">
            <span class="person-id__name">Name: ${person.firstName}</span> <br>
            <span class="person-id__last-name">Last name: ${person.lastName}</span> <br>            
            <span class="person-id__age">Age: ${person.age}</span><br>
            <span class="person-id__bank-account">Bank account: ${person.bankAccount}</span><br>
            <span class ="person-id__Health">Health: ${person.health}</span><br>            
            <span class="person-id__pasport person-id__gender">Has Pasport: ${person.gender}</span><br>
            <span class="person-id__id">ID: ${person.id}</span>
        </div>
        <div class="person-data__block">
            <div class="title">Pasport</div>
            <div class="chekpoint ">
                <div id="PassportAge${person.id}">Age</div>
                <div id="PassportHasPassport${person.id}">Has passport</div>
            </div>
        </div>
        <div class="person-data__block">
            <div class="title">Hospital</div>
            <div class="chekpoint">
                <div id ="HospitalHealth${person.id}">Health</div>
                <div id ="HospitalAge${person.id}">Age</div>
                <div id ="HospitalHasPassport${person.id}">Has passport</div>
            </div>
        </div>
        <div class="person-data__block">
            <div class="title">Bank</div>
            <div class="chekpoint">
                <div id="BankAge${person.id}">Age</div>
                <div id="BankAmount${person.id}">Bank amount</div>
                <div id="BankHasPassport${person.id}">Has passport</div>
            </div>
        </div>
            </section>`
        } else {
            return `<section class="person-data" id="${person.id}">
        <div class="person-id person-id_man">
            <img src="../img/avatarMan.png" alt="" class="img man">
           <span class="person-id__name">Name: ${person.firstName}</span> <br>
            <span class="person-id__last-name">Last name: ${person.lastName}</span> <br>           
            <span class="person-id__age">Age: ${person.age}</span><br>
            <span class="person-id__bank-account">Bank account: ${person.bankAccount}</span><br>
            <span class ="person-id__Health">Health: ${person.health}</span><br>            
            <span class="person-id__pasport person-id__gender">Has Pasport: ${person.gender}</span><br>
            <span class="person-id__id">ID: ${person.id}</span>
        </div>
        <div class="person-data__block">
            <div class="title">Pasport</div>
             <div class="chekpoint ">
                <div id="PassportAge${person.id}">Age</div>
                <div id="PassportHasPassport${person.id}">Has passport</div>
            </div>
        </div>
        <div class="person-data__block">
            <div class="title">Hospital</div>
            <div class="chekpoint">
                <div id ="HospitalHealth${person.id}">Health</div>
                <div id ="HospitalAge${person.id}">Age</div>
                <div id ="HospitalHasPassport${person.id}">Has passport</div>
            </div>
        </div>
        <div class="person-data__block">
            <div class="title">Bank</div>
            <div class="chekpoint">
                <div id="BankAge${person.id}">Age</div>
                <div id="BankAmount${person.id}">Bank amount</div>
                <div id="BankHasPassport${person.id}">Has passport</div>
            </div>
        </div>
            </section>`
        }
    }

    renderCheckTable(storePersons) {
        this.tableBody.innerHTML = storePersons.map(person => this.renderCheckTableRow(person)).join(`</br>`);
    }

    renderStatusApproved(id, type) {
        let field = document.getElementById(`${type}${id}`);
        field.classList.toggle("chek");
    }

    renderStatusRejected(id, type) {
        let field= document.getElementById(`${type}${id}`);
        field.className = "unchek";
    }

    renderRowApproved(id) {
        let row = document.getElementById(`${id}`);
        row.classList.toggle("person-data_chek");
    }

    renderRowReject(id) {

    }

    renderWinner(id) {

    }
}