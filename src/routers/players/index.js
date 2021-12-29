import express from 'express';
import { getAllPlayers } from "./controller.js";
import { getPlayersById } from "./controller.js";
import { deletePlayerById } from "./controller.js";
import { updatePlayer } from "./controller.js";
import { createPlayer } from "./controller.js";

const router = express.Router();
// get all players

router.get('/all', getAllPlayers);

// get player by id
router.get('/:id',getPlayersById);
// update player by id
router.put('/:id',updatePlayer);
// delete player
router.delete('/:id', deletePlayerById);
// create a player
router.post('/',createPlayer);



export default router;