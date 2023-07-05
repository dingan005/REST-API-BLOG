const pool = require('../../db');
const queries = require('./queries');



//get blogs

const getblogs = (req, res) => {
    pool.query(queries.getblogs, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


//getblogs by id

const getblogById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getblogById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};



// add blog to db

const addBlog = (req, res) => {
    const { title, content, author } = req.body;

    pool.query(
        queries.addBlog,
        [title, content, author],
        (error, results) => {
            if (error) throw error;
            res.status(201).send("blog created sucessfully");
        }
    );
};




//delete blog

const removeBlog = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getblogById, [id], (error, results) => {
        const noblogfound = !results.rows.length;
        if (noblogfound) {
            res.send("blog doesnot existin the database");
        }
        pool.query(queries.removeBlog, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("blog deleted successfully.");
        });

    });
};



//update blog

const updateblog = (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;

    pool.query(queries.getblogById, [id], (error, results) => {
        const noblogfound = !results.rows.length;
        if (noblogfound) {
            res.send("blog doesnot existin the database");
        }
        pool.query(queries.updateblog, [title, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("blog updated successfully.");
        });
    });
};






module.exports = {
    getblogs,
    getblogById,
    addBlog,
    removeBlog,
    updateblog
};