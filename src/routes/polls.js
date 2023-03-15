const express = require('express');
const pollsController = require('../controllers/polls');

const router = express.Router();

router.get('/polls', pollsController.getPolls);
router.get('/polls/:id', pollsController.getPoll);
router.post('/polls/', pollsController.createPoll);
router.put('/polls/:id', pollsController.updatePoll);
router.delete('/polls/:id', pollsController.deletePoll);

module.exports = router;
