const express = require('express');
const router = express.Router();

const controllers = require('../classes');
const Pwa2Controller = controllers.Pwa2Controller;

router.get('/pwa2/lastVersion', function(req, res) {
	Pwa2Controller.getLastVersion().then(function(lastVersion) {
		res.json({
			success: true,
			result: lastVersion
		});
	}).catch(function() {
		res.json({
			success: false,
			message: 'Erreur : Impossible de récupérer la version !'
		});
	});
});

module.exports = router;