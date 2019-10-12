var database = [{
        username: 'Francis',
        password: '1234'
    },
    {
        username: 'Silas',
        password: 'silas'
    },
    {
        username: 'Blaise',
        password: 'blaise'
    },
    {
        username: 'Rita',
        password: 'rita'
    }
];

var user = prompt('Entrez un username');
var pass = prompt('Entrez un mot de passe');

function isValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}


function login(username, password) {
    if (isValid(username, password)) {
        console.log('Connected!!!');
    } else {
        alert('Wrong, username and password');
    }
}

login(user, pass);