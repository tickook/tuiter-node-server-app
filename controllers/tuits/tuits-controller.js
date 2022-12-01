// import posts from "./tuits.js";
import * as tuitsDao from './tuits-dao.js'
// let tuits = posts;

const createTuit = async (req, res) => {
    // const newTuit = tuits[0];
    const newTuit = req.body;
    // console.log(req.body);
    // newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.comments = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.liked = false;
    newTuit.logoImage="https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs.jpg"
    newTuit.handle = "kartiktickoo";
    newTuit.userName = "KartikTickoo"
    // tuits.push(newTuit);
    console.log("create");
    console.log(newTuit);
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    console.log("pop1")
    const tuits = await tuitsDao.findTuits()
    console.log("res")
    console.log(tuits)
    res.json(tuits);
}


const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    console.log(status);
    res.json(status);
}


const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    res.json(status);
}



export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}