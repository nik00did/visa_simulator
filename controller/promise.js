const randomTime = () =>{
    return Math.floor(Math.random() * (12000 - 1000) + 1000);
};

const checkPassportAge = person => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.age >= store.getValidator().manMinAge && person.age <= store.getValidator().manMaxAge) {
                    resolve('PassportAge')
                } else {
                    reject('PassportAge')
                }
            } else if (person.gender === 'female') {
                if (person.age >= store.getValidator().womanMinAge && person.age <= store.getValidator().womanMaxAge) {
                    resolve('PassportAge');
                } else {
                    reject('PassportAge');
                }
            }
        }, randomTime());
    })
};

const checkPassportHasPassport = person => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.hasPassport === true) {
                resolve('PassportHasPassport');
            } else {
                reject('PassportHasPassport');
            }
        }, randomTime());
    })
};

const checkHospitalHealth = person => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.health >= store.getValidator().manMinHealth && person.health <= store.getValidator().manMaxHealth) {
                    resolve('HospitalHealth');
                } else {
                    reject('HospitalHealth');
                }
            } else if (person.gender === 'female') {
                if (person.health >= store.getValidator().womanMinHealth && person.age <= store.getValidator().womanMaxHealth) {
                    resolve('HospitalHealth');
                } else {
                    reject('HospitalHealth');
                }
            }
        }, randomTime());
    })
};

const checkHospitalAge = person => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.age >= store.getValidator().manMinAge && person.age <= store.getValidator().manMaxAge) {
                    resolve('HospitalAge');
                } else {
                    reject('HospitalAge');
                }
            } else if (person.gender === 'female') {
                if (person.age >= store.getValidator().womanMinAge && person.age <= store.getValidator().womanMaxAge) {
                    resolve('HospitalAge');
                } else {
                    reject('HospitalAge');
                }
            }
        }, randomTime());
    })
};



const checkHospitalHasPassport = person => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.hasPassport) {
                resolve('HospitalHasPassport');
            } else {
                reject('HospitalHasPassport');
            }
        }, randomTime());
    })
};


const checkBankAge = person => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.age >= store.getValidator().manMinAge && person.age <= store.getValidator().manMaxAge) {
                    resolve('BankAge');
                } else {
                    reject('BankAge');
                }
            } else if (person.gender === 'female') {
                if (person.age >= store.getValidator().womanMinAge && person.age <= store.getValidator().womanMaxAge) {
                    resolve('BankAge');
                } else {
                    reject('BankAge');
                }
            }
        }, randomTime());
    })
};

const checkBankAmount = person => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.gender === 'male') {
                if (person.bankAccount >= store.getValidator().manMinBankAmount && person.age <= store.getValidator().manMaxBankAmount) {
                    resolve('BankAmount')
                } else {
                    reject('BankAmount')
                }
            } else if (person.gender === 'female') {
                if (person.bankAccount >= store.getValidator().womanMinBankAmount && person.age <= store.getValidator().womanMaxBankAmount) {
                    resolve( 'BankAmount')
                } else {
                    reject('BankAmount')
                }
            }
        }, randomTime());
    })
};

const checkBankHasPassport = person => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.hasPassport) {
                resolve('BankHasPassport')
            } else {
                reject('BankHasPassport')
            }
        }, randomTime());
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
                app.view.renderStatusRejected(person.id, error);
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
                app.view.renderStatusRejected(person.id, error);
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
                app.view.renderStatusRejected(person.id, error);
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
        .then(() => {
            if (!winner) {
                winner = person.id;
                app.view.renderWinner(winner)
            } else {
                app.view.renderRowApproved(person.id)
            }
        })
        .catch(() => app.view.renderRowReject(person.id));
};

const runСheck = () => {
    winner = null;

    for (let i = 0; i < store.getPersons().length; i++) {
        verifyAllPromise(store.getPersons()[i]);
    }
};