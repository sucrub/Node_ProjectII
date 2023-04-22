const connection = require('../config/database')
const {getAllUser, getUserById, updateUserById, createNewUser, deleteUser} = require('../services/CRUDServices')


const getHomepage = async (req, res) => {
    // // res.render('sample.ejs')
    // let users = [];
    // connection.query(
    //     'SELECT * FROM `user`',
    //     function(err, results, fields) {
    //         users = results
    //         console.log(users);
    //         res.send(JSON.stringify(users))
    //     }
    // )
    let results = await getAllUser();
    // console.log(results);
    return res.render('home.ejs', {listUsers: results})
    // return res.send(results);
    
}

const getAdminpage = (req, res) => {
    res.send('Hi');
}

const getTestpage = (req, res) => {
    res.send('<h1>Test</h1>')
}

const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id; 

    let user = await getUserById(userId);

    return res.render('edit.ejs', {userEdit: user})
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let address = req.body.address;
    // connection.query (
    //     'INSERT INTO `user` (name, email, address) VALUES (?, ?, ?)',
    //     [name, email, address],
    //     function(err, results) {
    //         console.log(results);
    //         res.send("create new user success")
    //     }
    // );
    await createNewUser(email, name, address);

    // console.log(">>> check results", results);
    // res.send("create new user success")
    res.redirect('/');
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let address = req.body.address;
    let userId = req.body.userId;

    await updateUserById(email, address, name, userId);

    // console.log("email: ", email, "name: ", name, "address: ", address, "id: ", userId);
    // res.send("update user success")
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id; 

    let user = await getUserById(userId);
    res.render('delete.ejs', {userEdit: user})
}

const postRemoveUser = async (req, res) => {
    const id =  req.body.userId;
    await deleteUser(id);
    res.redirect('/');
}

module.exports = {
    getHomepage,
    getAdminpage,
    getTestpage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postRemoveUser
}