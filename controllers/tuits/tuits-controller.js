import posts from "./tuits.js";
let tuits = posts;

const findTuits = (req, res) => {
    res.json(tuits);
}
const createTuit = (req, res) => {
    const tuitContent = req.body;
    tuitContent._id = (new Date()).getTime() + '';
    tuitContent.likes = "0";
    tuitContent.liked = false;
    tuits.push(tuitContent);
    res.json(tuitContent);
}
// in the json file, had to make id a string to get these working
// or dont use !== or === since != or ==
const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitIdToUpdate)
        tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}
const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
                             t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.get('/api/tuits', findTuits);
    app.post('/api/tuits', createTuit);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}