// Variable Global de debug (Elle peut être contenu dans un objet)
var DEBUG = true;

// Fonction custom de console.log
function _log(a, b, c, d) {
	var args        = (arguments.length === 1 ? arguments[0] : Array.apply(null, arguments)),
		e       = new Error(),
		_line   = e.stack,
		_lines  = _line.split("\n"),
	    	_trace  = _lines[2].substring(_lines[2].indexOf('('), _lines[2].lastIndexOf(')') + 1);

	return (DEBUG === true) ? console.log('CONSOLE =>', args, _trace) : null;
}
