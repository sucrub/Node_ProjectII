const connection = require('../config/database')

const getAllUser = async () => {
    let [results, fileds] = await connection.query('SELECT * FROM user');
    return results
}

const getUserById = async (userId) => {
    let [results, fileds] = await connection.query('SELECT * FROM user WHERE id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (email, address, name, userId) => {
    let [results, fields] = await connection.query(
        `
            UPDATE user
            SET email = ?, address = ?, name = ?
            WHERE id = ?
        `, [email, address, name, userId]
    );
}

const createNewUser = async (email, name, address) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `user` (name, email, address) VALUES (?, ?, ?)', [name, email, address]
    );
}

const deleteUser = async (id) => {
    let [results, fields] = await connection.query(
        `
            DELETE FROM user WHERE id = ?
        `, [id]
    );
}

module.exports = {
    getAllUser, 
    getUserById,
    updateUserById,
    createNewUser,
    deleteUser
}