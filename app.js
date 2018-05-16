// Variable Global de debug (Elle peut être contenu dans un objet)
var DEBUG = true;

// Fonction custom de console.log
function _log(_var) {
	var e = new Error(_var),
		line = e.stack,
		lines = line.split("\n");

	return (DEBUG === true) ? console.log(_var, lines[2].substring(lines[2].indexOf('('), lines[2].lastIndexOf(')') + 1)) : null;
}
