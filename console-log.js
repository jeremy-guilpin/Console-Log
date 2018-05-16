// Variable Global de debug (Elle peut être contenu dans un objet)
var DEBUG = true;

// Fonction custom de console.log
function _log(a, b, c, d) {
	var _args      = (arguments.length === 1 ? arguments[0] : Array.apply(null, arguments)),
		_e     = new Error(),
		_line  = _e.stack,
		_lines = _line.split("\n"),
		_trace = _lines[2].substring(_lines[2].indexOf('('), _lines[2].lastIndexOf(')') + 1);

	return (DEBUG === true) ? console.log('CONSOLE =>', _args, _trace) : null;
}
