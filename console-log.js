// Variable Global de debug (Elle peut être contenu dans un objet)
var DEBUG = true;

// On met à jour un numéro de version pour le cache navigateur
console.log('-- Version cache form control 1.' + Math.floor(Math.random() * Math.floor(1000)) + ' --');

// Fonction custom de console.log
function _log(a, b, c, d) {
	var _args = (arguments.length === 1 ? arguments[0] : Array.apply(null, arguments)),
		_e = new Error(),
		_line = _e.stack,
		_lines = (_line != null) ? _line.split("\n") : null,
		_trace = (_lines != null) ? _lines[2].substring(_lines[2].indexOf('('), _lines[2].lastIndexOf(')') + 1) : null;

	return (DEBUG === true && _trace != null) ? console.log('CONSOLE =>', _args, _trace) : null;
}
