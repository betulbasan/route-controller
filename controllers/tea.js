// newTea function for post tea route
const newTea = (req,res,next) => {
    res.json(
        {message: "POST new tea"}
    );
};
const getAllTea = (req,res,next) => {
    res.json(
        {message: "GET all tea"}
    );
};
const deleteAllTea = (req,res,next) => {
    res.json(
        {message: "DELETE all tea"}
    );
};

const newComment = (req,res,next) => {
    res.json(
        {message: "POST new comment"}
    );
};
const getOneTea = (req,res,next) => {
    res.json(
        {message: "GET one tea"}
    );
};
const deleteOneTea = (req,res,next) => {
    res.json(
        {message: "DELETE one tea"}
    );
};
// we export this function so we can import it to our routes/tea.js
module.exports = {newTea, getAllTea, deleteAllTea, newComment, getOneTea, deleteOneTea}; 