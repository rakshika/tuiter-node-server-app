// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js'

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.topic = "Space";
    newTuit.time = "now";
    newTuit.liked = false;
    newTuit.likes = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    newTuit.handle = "@nasa";
    newTuit.userName = "NASA";
    newTuit.image = "nasa.png";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);
}

export default (app) => {
    app.get('/api/tuits', findTuits);
    app.post('/api/tuits', createTuit);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}