const jsdom = require('jsdom').JSDOM;

module.exports.getLastVersion = function() {
	return jsdom.fromURL('https://play.google.com/store/apps/details?id=fr.gouv.android.stopcovid&hl=fr&gl=US').then(function(dom) {
		return dom.window.document.getElementsByClassName('IxB2fe')[0].children[3].children[1].textContent;
	});
};