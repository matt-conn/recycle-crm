const Person = require("../models/Person");

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
            res.render('companies.ejs', { user: req.user });
        } catch(err){
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