const Person = require("../models/Person");
const Company = require("../models/Company");

module.exports = {
    getDashboard: async (req,res) => {
        try {
            res.render('dashboard.ejs', { user: req.user });
        } catch(err){
            console.log(err);
        }
    },
    getCompanies: async (req,res) => {        
        try {
            const companies = await Company.find({ user: req.user.id })
            res.render('companies.ejs', { companies: companies, user: req.user });
        } catch(err){
            console.log(err);
        }
    },
    createCompany: async (req, res) => {
        try {
            await Company.create({
                company: req.body.company,
                website: req.body.website,
                phone: req.body.phone,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                user: req.user.id
            });
            console.log("Company has been added!");
            res.redirect("/dashboard/companies");
        } catch (err) {
            console.log(err);
        }
    },
    getPeople: async (req,res) => {
        try {
            const people = await Person.find({ user: req.user.id });
            res.render('people.ejs', { people: people, user: req.user });
        } catch(err){
            console.log(err);
        }
    },
    createPerson: async (req, res) => {
        try {
            await Person.create({
                firstName: req.body.first,
                lastName: req.body.last,
                company: req.body.company,
                jobTitle: req.body.title,
                email: req.body.email,
                phone: req.body.phone,
                user: req.user.id
            });
            console.log("Person has been added!");
            res.redirect("/dashboard/people");
        } catch (err) {
            console.log(err);
        }
    },
    getPickups: async (req,res) => {
        try {
            res.render('pickups.ejs', { user: req.user });
        } catch(err){
            console.log(err);
        }
    },
    getCollection: async (req,res) => {
        try {
            res.render('collection.ejs', { user: req.user });
        } catch(err){
            console.log(err);
        }
    }
}