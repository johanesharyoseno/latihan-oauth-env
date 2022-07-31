
const loginPage = (req,res)=>{
    let messages = ""
    if(req.session){
    if(req.session.message){
        messages = req.session.messages(0);

        req.session.message = []
    }
}
return res.render('login')
}


module.exports = {
    loginPage,
}