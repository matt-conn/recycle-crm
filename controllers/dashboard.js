const Person = require("../models/Person");
const Company = require("../models/Company");
const Ticket = require("../models/Ticket");

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
    getTickets: async (req,res) => {
        try {
            const tickets = await Ticket.find({ user: req.user.id })
            res.render('tickets.ejs', { tickets: tickets, user: req.user });
        } catch(err){
            console.log(err);
        }
    },
    createTicket: async (req, res) => {
        try {
            await Ticket.create({
                company: req.body.company,
                date: req.body.date,
                status: req.body.status,
                region: req.body.region,
                notes: req.body.notes,
                user: req.user.id
            });
            console.log("Ticket has been added!");
            res.redirect("/dashboard/tickets");
        } catch (err) {
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