module.exports = {
    getDashboard: async (req,res) => {
        try {
            res.render('dashboard.ejs', { user: req.user })
        } catch(err){
            console.log(err)
        }
    },
    getCompanies: async (req,res) => {        
        try {
            res.render('companies.ejs')
        } catch(err){
            console.log(err)
        }
    },
    getPeople: async (req,res) => {
        try {
            res.render('people.ejs', { user: req.user })
        } catch(err){
            console.log(err)
        }
    },
    getPickups: async (req,res) => {
        try {
            res.render('pickups.ejs', { user: req.user })
        } catch(err){
            console.log(err)
        }
    },
    getCollection: async (req,res) => {
        try {
            res.render('collection.ejs', { user: req.user })
        } catch(err){
            console.log(err)
        }
    }
}