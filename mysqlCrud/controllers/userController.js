const UserModel = require('../models/userModel');

class UserController {
    constructor() {
        this.userModel = new UserModel();
    }

    index(req, res) {
        this.userModel.getAll((err, rows) => {
            if (err) {
                console.log(err);
            } else {
                res.render('index', { users: rows });
            }
        });
    }

    show(req, res) {
        this.userModel.getById(req.params.id, (err, row) => {
            if (err) {
                console.log(err);
            } else {
                //console.log(row);
                res.render('show', { user: row });
            }
        });
    }

    create(req, res) {
        res.render('create');
    }

    store(req, res) {
        const data = req.body;
        this.userModel.create(data, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    }

    edit(req, res) {
        this.userModel.getById(req.params.id, (err, row) => {
            if (err) {
                console.log(err);
            } else {
                res.render('edit', { user: row });
            }
        });
    }

    update(req, res) {
        const id = req.params.id;
        const data = req.body;
        this.userModel.update(id, data
            , (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            });
    }

    delete(req, res) {
        const id = req.params.id;
        this.userModel.delete(id, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    }
}

module.exports = UserController;