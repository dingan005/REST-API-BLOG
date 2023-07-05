const getblogs = "SELECT * FROM blogs";

const getblogById = "SELECT * FROM blogs WHERE id = $1";

const addBlog = "INSERT INTO blogs (title, content, author) VALUES ($1, $2, $3)";

const removeBlog = "REMOVE FROM blogs WHERE  id = $1";


const updateblog = "UPDATE blogs SET title = $1 WHERE id = $2";




module.exports = {
    getblogs,
    getblogById,
    addBlog,
    removeBlog,
    updateblog,
};