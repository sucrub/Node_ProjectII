const express = require('express')
const router = express.Router()
const { getHomepage, getAdminpage, 
    getTestpage, postCreateUser, 
    getCreatePage, getUpdatePage, 
    postUpdateUser, postDeleteUser,
    postRemoveUser } = require('../controllers/homeController')
// router.Method('route', handler)

router.get('/', getHomepage)

router.get('/admin', getAdminpage)

router.get('/testpage', getTestpage)

router.get('/create', getCreatePage)

router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)

router.post('/delete-user', postRemoveUser)

module.exports = router



