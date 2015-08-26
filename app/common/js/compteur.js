function modifier(increment,div) {
	var valeur=parseInt(document.getElementById(div).value);
	valeur+=increment;
	document.getElementById(div).value=valeur;
}
