

function getDashboard(req, res) {
    res.render('login', { username: "mustafa" });
}

module.exports={getDashboard}