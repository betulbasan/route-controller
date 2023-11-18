// newTea function for post tea route
const newTea = (req,res,next) => {
    res.json(
        {message: "POST new tea"}
    );
};
// we export this function so we can import it to our routes/tea.js
module.exports = {newTea}; 