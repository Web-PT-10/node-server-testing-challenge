const express = require('express');
const Hobbits = require('./hobbits-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await Hobbits.getAll());
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const hobbit = await Hobbits.insert(req.body);
		res.status(201).json(hobbit);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
