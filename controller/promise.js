const validator = store.getValidator();
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
} = validator;

const randomTime = () =>{
    return Math.floor(Math.random() * (12000 - 1000) + 1000);
}

const checkPassportAge = person => {

    return new Promise((resolve, reject) => {
        //console.log('start checkPassportAge' + person.id)

        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.age >= manMinAge && person.age <= manMaxAge) {
                    resolve('PassportAge')
                } else {
                    reject('PassportAge')
                }
            } else if (person.gender === 'female') {
                if (person.age >= womanMinAge && person.age <= womanMaxAge) {
                    resolve('PassportAge')
                } else {
                    reject('PassportAge')
                }
            }
        }, randomTime())
    })
};


const checkPassportHasPassport = person => {
    //console.log('start checkPassportHasPassport' + person.id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.hasPassport === true) {
                resolve('PassportHasPassport')
            } else {
                reject('PassportHasPassport')
            }
        }, randomTime())
    })
};


const checkHospitalHealth = person => {
    //console.log('start checkHospitalHealth' + person.id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.health >= manMinHealth && person.health <= manMaxHealth) {
                    resolve('HospitalHealth')
                } else {
                    reject('HospitalHealth')
                }
            } else if (person.gender === 'female') {
                if (person.health >= womanMinHealth && person.age <= womanMaxHealth) {
                    resolve('HospitalHealth')
                } else {
                    reject('HospitalHealth')
                }
            }
        }, randomTime())
    })
};




const checkHospitalAge = person => {

    return new Promise((resolve, reject) => {
        //console.log('start checkHospitalAge' + person.id)
        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.age >= manMinAge && person.age <= manMaxAge) {
                    resolve('HospitalAge')
                } else {
                    reject('HospitalAge')
                }
            } else if (person.gender === 'female') {
                if (person.age >= womanMinAge && person.age <= womanMaxAge) {
                    resolve('HospitalAge')
                } else {
                    reject(person.id, 'HospitalAge')
                }
            }
        }, randomTime())
    })
};



const checkHospitalHasPassport = person => {
    //console.log('start checkHospitalHasPassport' + person.id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.hasPassport === true) {
                resolve('HospitalHasPassport')
            } else {
                reject('HospitalHasPassport')
            }
        }, randomTime())
    })
};


const checkBankAge = person => {

    return new Promise((resolve, reject) => {
        //console.log('start checkBankAge' + person.id)
        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.age >= manMinAge && person.age <= manMaxAge) {
                    resolve('BankAge')
                } else {
                    reject('BankAge')
                }
            } else if (person.gender === 'female') {
                if (person.age >= womanMinAge && person.age <= womanMaxAge) {
                    resolve('BankAge')
                } else {
                    reject('BankAge')
                }
            }
        }, randomTime())
    })
};



const checkBankAmount = person => {

    return new Promise((resolve, reject) => {
        //console.log('start checkBankAmount' + person.id)
        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.bankAccount >= manMinBankAmount && person.age <= manMaxBankAmount) {
                    resolve('BankAmount')
                } else {
                    reject('BankAmount')
                }
            } else if (person.gender === 'female') {
                if (person.bankAccount >= womanMinBankAmount && person.age <= womanMaxBankAmount) {
                    resolve( 'BankAmount')
                } else {
                    reject('BankAmount')
                }
            }
        }, randomTime())
    })
};


const checkBankHasPassport = person => {
    // console.log('start checkBankHasPassport' + person.id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.hasPassport === true) {
                resolve('BankHasPassport')
            } else {
                reject('BankHasPassport')
            }
        }, randomTime())
    })
};


const verifyPassportPromise = person => {
    return new Promise((resolve, reject) => {
        checkPassportAge(person)
            .then(response => app.view.renderStatusApproved(person.id, response))
            .then(response => checkPassportHasPassport(person))
            .then(response => app.view.renderStatusApproved(person.id, response))
            .then(response => resolve(person.id))
            .catch(error => {
                app.view.renderStatusRejected(person.id, error)
                reject(person.id + error);
            });
    })
};

const verifyHospitalPromise = person => {
    return new Promise((resolve, reject) => {
        checkHospitalHealth(person)
            .then(response => app.view.renderStatusApproved(person.id, response))
            .then(response => checkHospitalAge(person))
            .then(response => app.view.renderStatusApproved(person.id, response))
            .then(response => checkHospitalHasPassport(person))
            .then(response => app.view.renderStatusApproved(person.id, response))
            .then(response => resolve(person.id))
            .catch(error => {
                app.view.renderStatusRejected(person.id, error)
                reject(person.id + error);
            });
    })
};

const verifyBankPromise = person => {
    return new Promise((resolve, reject) => {
        checkBankAge(person)
            .then(response => app.view.renderStatusApproved(person.id, response))
            .then(response => checkBankAmount(person))
            .then(response => app.view.renderStatusApproved(person.id, response))
            .then(response => checkBankHasPassport(person))
            .then(response => app.view.renderStatusApproved(person.id, response))
            .then(response => resolve(person.id))
            .catch(error => {
                app.view.renderStatusRejected(person.id, error)
                reject(person.id);
            });
    })
};

let winner = null;

const verifyAllPromise = person => {
    Promise.all([
        verifyPassportPromise(person),
        verifyHospitalPromise(person),
        verifyBankPromise(person)

    ])
        .then((response) => {
            app.view.renderRowApproved(person.id);

        })
        .catch(() => app.view.renderRowReject(person.id))
};



const runСheck = () => {
    winner = null;
    for (let i = 0; i < store.getPersons().length; i++) {
        let first = [];
        first.push(verifyAllPromise(store.getPersons()[i]));

        //Promise.race()

        // console.log("////", store.getPersons()[i])
        //app.view.renderWinner(person.id)
    }
};

// {name: "sdfs sfs", gender: "man", id: "751299c6-5404-4ae6-a51d-0b96184d7274", age: "26", amount: "1000", hasPassport: true}




// let person = {name: "sdfs sfs", gender: "female", id: "751299c6-5404-4ae6-a51d-0b96184d7274", age: "50", amount: "100", hasPassport: true, health: 20};
// let person2 = {name: "sdfs sfs", gender: "female", id: "751299c6-5404-4ae6-a51d-0b96184d7274", age: "50", amount: "1000", hasPassport: false, health: 20};
// checkBankHasPassport(person).then(res => console.log('+', res)).catch(err =>  console.log('-', err));
// checkBankHasPassport(person2).then(res => console.log('+', res)).catch(err =>  console.log('-', err));


// checkPassportAge(store.getPersons()[0])
// .then(response => {
//     console.log(response)
// })
// .catch(error => {
//     console.log('error')
// });