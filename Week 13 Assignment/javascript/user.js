/* First, lets implementnt user sessions. */
var localStorage = window.localStorage;

/* register form elements */
var registerEmailField     = $('#registerEmailField');
var registerPasswordField  = $('#registerPasswordField');
var registerStreetField    = $('#registerStreetField');
var registerZipcodeField   = $('#registerZipcodeField');
var registerIsNewsOptIn    = $('#registerIsNewsOptIn');
var registerInterestsField = $('#registerInterestsField');
var registerGenderMale     = $('#registerGenderMale');
var registerGenderFemale   = $('#registerGenderFemale');
var registerCitiesField    = $('#registerCitiesField');

/* login form elements */
var loginEmailField    = $('#loginEmailField');
var loginPasswordField = $('#loginPasswordField');

/* top page nav elements */
var loginPageButton    = $('.loginPageButton');
var registerPageButton = $('.registerPageButton');
var logoutButton       = $('.logoutButton');

/* fetchMenu.html */
var vehiclesNameDiv = $('#vehicleNamesDiv');
/* end */


/* form methods */
function goHome() {
    window.location.href = 'index.html'
}

// shows logout if necessary
function checkForSession() {
    let hasSession = localStorage.getItem('session');

    if (hasSession) {
        // Hide login and register, replace with logout
        loginPageButton.hide();
        registerPageButton.hide();
    } else {
        // user isnt in a session, hide logout
        logoutButton.hide();
    }
}

function login() {
    let email    = loginEmailField.val();
    let password = loginPasswordField.val();
    let accountData  = localStorage.getItem(email); // returns a account table {email, password, ...}
    
    /* access local account database */
    if (accountData) {
        let account = JSON.parse(accountData); // Convert string back to object
        if (account.password === password) {   // Use .password instead of [1]
            localStorage.setItem('session', email);
            return true;
        }
    }
    return false;
}

function logout() {
    localStorage.removeItem('session');
}

function register() {
    console.log('hi')
    let email          = registerEmailField.val();
    let password       = registerPasswordField.val();
    let street         = registerStreetField.val();
    let zipcode        = registerZipcodeField.val();
    let isNewsOptIn    = registerIsNewsOptIn.prop('checked');
    let interests      = registerInterestsField.val();
    let citiesField    = registerCitiesField.val();
    let isGenderMale   = registerGenderMale.prop('checked');
    let isGenderFemale = registerGenderFemale.prop('checked');
    let gender;

    if (!email || !password || !street || !zipcode || !isNewsOptIn || !interests || !citiesField) {
        window.alert('Please complete the fields.');
        return false;
    }

    if (isGenderMale) {
        gender = 'Male';
    } else if (isGenderFemale) {
        gender = 'Female';
    } else {
        // nothing is selected
        window.alert('Please select a gender.');
        return false;
    }

    localStorage.setItem('email', localStorage.setItem(email, JSON.stringify({
        email, password, street, zipcode, isNewsOptIn, interests, citiesField, gender
    })));
    localStorage.setItem('session', email);

    return true;

}

/* connections */

$(document).ready(function() {
    $('#registerButton').click(function () {
        if (register()) {
            goHome();
        }
    });

    $('#loginButton').click(function() {
        if (login()) {
            goHome();
        } else {
            window.alert('Incorrect username or password!');
        }
    });

    $('.logoutButton').click(function() {
        event.preventDefault();

        logout();
        goHome();
    })
});

/* fetch api */
// https://swapi.tech/api/vehicles/

function fetchVehicles() {

    fetch('https://swapi.tech/api/vehicles/')
    .then(function(response) {
        return response.json();
    })
    .then(function(results) {
        let listString = '';
    
        for (let vehicleData of results.results) {
            listString += `<h4>${vehicleData.name}<h4><br>`
        }
        console.log(listString);
        vehiclesNameDiv.html(listString);
    })
    .catch((error) => {
        vehiclesNameDiv.html(error);
    });
}

/* init basically for the logout button visibility */
checkForSession();