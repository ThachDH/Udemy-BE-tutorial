
const getHomepage = (req, res) => {
    // process data
    // call model
    res.send('Hello World! Work hard in silient!')
}

const getTest = (req, res) => {
    res.send('<h1>22 Age </h1>');
}

const getEjs = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,
    getTest,
    getEjs,

}
