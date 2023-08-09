const express = require("express");
const app = express();
const port = 5173;
const {faker} = require('@faker-js/faker');

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});
app.get('/api/user/new', (req, res) => {
    res.json({newFakePerson})
});
app.get('/api/company/new', (req, res) => {
    res.json({newFakeCompany})
});
app.get('/api/user/company', (req, res) => {
    res.json({newFakePerson, newFakeCompany})
});


const createUser = () => {
    const newUser = {
        //First Name
        firstName: faker.person.firstName(),
        //Last Name
        lastName: faker.person.lastName(),
        //ID
        id: faker.number.binary(),
        //email
        email: faker.internet.email(),
        //phonenumber
        Phone: faker.phone.number(),
        //password
        password: faker.internet.password()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        //Id
        id: faker.number.binary(),
        //Name
        name: faker.company.name(),
        //Address - city,street,state,zip,country
        address: [
            faker.location.city(),
            faker.location.street(),
            faker.location.state(),
            faker.location.zipCode(),
            faker.location.country()
        ]
    };
    return newCompany;
};

const newFakePerson = createUser();
console.log(newFakePerson);
const newFakeCompany = createCompany();
console.log(newFakeCompany)


app.listen( port, () => console.log(`Listening on port: ${port}`) );