const API = 'https://6adf31a48e42963c8d5d931e.mockapi.io';

// const GET = {
//     method: 'GET'
// };

// // // GET

// fetch(`${API}/Person`, GET)
//     .then(response => console.log(response.json()));

// // POST

// const personData = {
//     firstName: "Mykola",
//     lastName: "Koval",
//     items: []
// };

// fetch(`${API}/Person`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(personData)
// })
//     .then(response => console.log(response.json()));

function getPersons() {
    fetch(`${API}/Person`)
        .then(response => response.json())
        .then(data => console.log(data));
}

function createPerson() {
    const firstname = document.getElementById('firstName').value;
    const lastname = document.getElementById('lastName').value;
    const personData = {
        firstName: firstname,
        lastName: lastname
    };
    fetch(`${API}/Person`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personData),
    })
        .then(console.log('Person created successfully', personData));
}