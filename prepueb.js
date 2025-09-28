const a = {
	frz: ["à"],
	dt: ["an", "in", "nach", "zu"],
};
const en = {
	frz: ["en"],
	dt: ["nach", "in"],
};
const pour = {
	frz: ["pour"],
	dt: ["nach"],
};
const de = {
	frz: ["de"],
	dt: ["aus", "von"],
};
const par = {
	frz: ["par"],
	dt: ["durch", "hindurch"],
};
const vers = {
	frz: ["vers"],
	dt: ["in Richtung", "nach zu"],
};
const chez = {
	frz: ["chez"],
	dt: ["bei", "zu"],
};
const dans = {
	frz: ["dans"],
	dt: ["in", "in ... hinein"],
};
const en_face_de = {
	frz: ["en face de"],
	dt: ["gegenüber"],
};
const a_cote_de = {
	frz: ["à côte de"],
	dt: ["neben"],
};
const entre = {
	frz: ["entre"],
	dt: ["zwischen"],
};
const au_bout_de = {
	frz: ["au bout de"],
	dt: ["am Ende von"],
};
const pres_de = {
	frz: ["près de"],
	dt: ["nahe von"],
};
const loin_de = {
	frz: ["loin de"],
	dt: ["weit von"],
};
const sous = {
	frz: ["sous"],
	dt: ["unter"],
};
const sur = {
	frz: ["sur"],
	dt: ["über"],
};
const a_droite_de = {
	frz: ["à droite de"],
	dt: ["rechts von"],
};
const a_gauche_de = {
	frz: ["à gauche de"],
	dt: ["links von"],
};
const derriere = {
	frz: ["derrière"],
	dt: ["hinter"],
};
const devant = {
	frz: ["devant"],
	dt: ["vor"],
};
const au_fond_de = {
	frz: ["au fond de"],
	dt: ["hinten in"],
};

function liste() {
	document.getElementById("f1").innerHTML = a.frz[0];
	document.getElementById("f3").innerHTML = en.frz[0];
	document.getElementById("f5").innerHTML = pour.frz[0];
	document.getElementById("f7").innerHTML = de.frz[0];
	document.getElementById("f9").innerHTML = par.frz[0];
	document.getElementById("f11").innerHTML = vers.frz[0];
	document.getElementById("f13").innerHTML = chez.frz[0];
	document.getElementById("f15").innerHTML = dans.frz[0];
	document.getElementById("f17").innerHTML = en_face_de.frz[0];
	document.getElementById("f19").innerHTML = a_cote_de.frz[0];
	document.getElementById("f21").innerHTML = entre.frz[0];
	document.getElementById("f23").innerHTML = au_bout_de.frz[0];
	document.getElementById("f25").innerHTML = pres_de.frz[0];
	document.getElementById("f27").innerHTML = loin_de.frz[0];
	document.getElementById("f29").innerHTML = sous.frz[0];
	document.getElementById("f31").innerHTML = sur.frz[0];
	document.getElementById("f33").innerHTML = a_droite_de.frz[0];
	document.getElementById("f35").innerHTML = a_gauche_de.frz[0];
	document.getElementById("f37").innerHTML = derriere.frz[0];
	document.getElementById("f39").innerHTML = devant.frz[0];
	document.getElementById("f41").innerHTML = au_fond_de.frz[0];
	z1();
}
function dl(n) {
	switch (n) {
		case 0:
			document.getElementById("dl").innerHTML = a.frz[0];
			setTimeout(df1Anz, zeit);
			break;
		case 1:
			document.getElementById("dl").innerHTML = en.frz[0];
			setTimeout(df3Anz, zeit);
			break;
		case 2:
			document.getElementById("dl").innerHTML = pour.frz[0];
			setTimeout(df5Anz, zeit);
			break;
		case 3:
			document.getElementById("dl").innerHTML = de.frz[0];
			setTimeout(df7Anz, zeit);
			break;
		case 4:
			document.getElementById("dl").innerHTML = par.frz[0];
			setTimeout(df9Anz, zeit);
			break;
		case 5:
			document.getElementById("dl").innerHTML = vers.frz[0];
			setTimeout(df11Anz, zeit);
			break;
		case 6:
			document.getElementById("dl").innerHTML = chez.frz[0];
			setTimeout(df13Anz, zeit);
			break;
		case 7:
			document.getElementById("dl").innerHTML = dans.frz[0];
			setTimeout(df15Anz, zeit);
			break;
		case 8:
			document.getElementById("dl").innerHTML = en_face_de.frz[0];
			setTimeout(df17Anz, zeit);
			break;
		case 9:
			document.getElementById("dl").innerHTML = a_cote_de.frz[0];
			setTimeout(df19Anz, zeit);
			break;
		case 10:
			document.getElementById("dl").innerHTML = entre.frz[0];
			setTimeout(df21Anz, zeit);
			break;
		case 11:
			document.getElementById("dl").innerHTML = au_bout_de.frz[0];
			setTimeout(df23Anz, zeit);
			break;
		case 12:
			document.getElementById("dl").innerHTML = pres_de.frz[0];
			setTimeout(df25Anz, zeit);
			break;
		case 13:
			document.getElementById("dl").innerHTML = loin_de.frz[0];
			setTimeout(df27Anz, zeit);
			break;
		case 14:
			document.getElementById("dl").innerHTML = sous.frz[0];
			setTimeout(df29Anz, zeit);
			break;
		case 15:
			document.getElementById("dl").innerHTML = sur.frz[0];
			setTimeout(df31Anz, zeit);
			break;
		case 16:
			document.getElementById("dl").innerHTML = a_droite_de.frz[0];
			setTimeout(df33Anz, zeit);
			break;
		case 17:
			document.getElementById("dl").innerHTML = a_gauche_de.frz[0];
			setTimeout(df35Anz, zeit);
			break;
		case 18:
			document.getElementById("dl").innerHTML = derriere.frz[0];
			setTimeout(df37Anz, zeit);
			break;
		case 19:
			document.getElementById("dl").innerHTML = devant.frz[0];
			setTimeout(df39Anz, zeit);
			break;
		case 20:
			document.getElementById("dl").innerHTML = au_fond_de.frz[0];
			setTimeout(df41Anz, zeit);
			break;
		default:
			break;
	}
}
function df1Anz() {
	document.getElementById("dlDt").innerHTML =
		a.dt[0] + ", " + a.dt[1] + ", " + a.dt[2] + ", " + a.dt[3];
	document.getElementById("dlDt").style.opacity = "1";
}
function df3Anz() {
	document.getElementById("dlDt").innerHTML = en.dt[0] + ", " + en.dt[1];
	document.getElementById("dlDt").style.opacity = "1";
}
function df5Anz() {
	document.getElementById("dlDt").innerHTML = pour.dt[0];
	document.getElementById("dlDt").style.opacity = "1";
}
function df7Anz() {
	document.getElementById("dlDt").innerHTML = de.dt[0] + ", " + de.dt[1];
}
function df9Anz() {
	document.getElementById("dlDt").innerHTML = par.dt[0] + ", " + par.dt[1];
}
function df11Anz() {
	document.getElementById("dlDt").innerHTML = vers.dt[0] + ", " + vers.dt[1];
}
function df13Anz() {
	document.getElementById("dlDt").innerHTML = chez.dt[0] + ", " + chez.dt[1];
}
function df15Anz() {
	document.getElementById("dlDt").innerHTML = dans.dt[0] + ", " + dans.dt[1];
}
function df17Anz() {
	document.getElementById("dlDt").innerHTML = en_face_de.dt[0];
}
function df19Anz() {
	document.getElementById("dlDt").innerHTML = a_cote_de.dt[0];
}
function df21Anz() {
	document.getElementById("dlDt").innerHTML = entre.dt[0];
}
function df23Anz() {
	document.getElementById("dlDt").innerHTML = au_bout_de.dt[0];
}
function df25Anz() {
	document.getElementById("dlDt").innerHTML = pres_de.dt[0];
}
function df27Anz() {
	document.getElementById("dlDt").innerHTML = loin_de.dt[0];
}
function df29Anz() {
	document.getElementById("dlDt").innerHTML = sous.dt[0];
}
function df31Anz() {
	document.getElementById("dlDt").innerHTML = sur.dt[0];
}
function df33Anz() {
	document.getElementById("dlDt").innerHTML = a_droite_de.dt[0];
}
function df35Anz() {
	document.getElementById("dlDt").innerHTML = a_gauche_de.dt[0];
}
function df37Anz() {
	document.getElementById("dlDt").innerHTML = derriere.dt[0];
}
function df39Anz() {
	document.getElementById("dlDt").innerHTML = devant.dt[0];
}
function df41Anz() {
	document.getElementById("dlDt").innerHTML = au_fond_de.dt[0];
}

function f1() {
	document.getElementById("f2").innerHTML =
		a.dt[0] + ", " + a.dt[1] + ", " + a.dt[2] + ", " + a.dt[3];
}
function f3() {
	document.getElementById("f4").innerHTML = en.dt[0] + ", " + en.dt[1];
}
function f5() {
	document.getElementById("f6").innerHTML = pour.dt[0];
}
function f7() {
	document.getElementById("f8").innerHTML = de.dt[0] + ", " + de.dt[1];
}
function f9() {
	document.getElementById("f10").innerHTML = par.dt[0] + ", " + par.dt[1];
}
function f11() {
	document.getElementById("f12").innerHTML = vers.dt[0] + ", " + vers.dt[1];
}
function f13() {
	document.getElementById("f14").innerHTML = document.getElementById(
		"f14"
	).innerHTML = chez.dt[0] + ", " + chez.dt[1];
}
function f15() {
	document.getElementById("f16").innerHTML = dans.dt[0] + ", " + dans.dt[1];
}
function f17() {
	document.getElementById("f18").innerHTML = en_face_de.dt[0];
}
function f19() {
	document.getElementById("f20").innerHTML = a_cote_de.dt[0];
}
function f21() {
	document.getElementById("f22").innerHTML = entre.dt[0];
}
function f23() {
	document.getElementById("f24").innerHTML = au_bout_de.dt[0];
}
function f25() {
	document.getElementById("f26").innerHTML = pres_de.dt[0];
}
function f27() {
	document.getElementById("f28").innerHTML = loin_de.dt[0];
}
function f29() {
	document.getElementById("f30").innerHTML = sous.dt[0];
}
function f31() {
	document.getElementById("f32").innerHTML = sur.dt[0];
}
function f33() {
	document.getElementById("f34").innerHTML = a_droite_de.dt[0];
}
function f35() {
	document.getElementById("f36").innerHTML = a_gauche_de.dt[0];
}
function f37() {
	document.getElementById("f38").innerHTML = derriere.dt[0];
}
function f39() {
	document.getElementById("f40").innerHTML = devant.dt[0];
}
function f41() {
	document.getElementById("f42").innerHTML = au_fond_de.dt[0];
}

const array2 = [];
var dlDtva = "";
function z1() {
	var dlDtva = document.getElementById("dlDt").innerHTML;
	if (dlDtva != "") {
		const array1 = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		];
		const shuffledArray = array1.sort((a, b) => 0.5 - Math.random());
		// zahl = Math.floor(Math.random() * 3);
		zahl = shuffledArray[shuffledArray.length - 19];
		array2.push(zahl);
		document.getElementById("array-2").innerHTML = array2;
	}
	var opt1 = document.getElementById("opt_1");
	var opt2 = document.getElementById("opt_2");
	var opt3 = document.getElementById("opt_3");
	if (opt1.checked == true) {
		zeit = opt1.value;
	} else if (opt2.checked == true) {
		zeit = opt2.value;
	} else if (opt3.checked == true) {
		zeit = opt3.value;
	}
	if (dlDtva != "") {
		dl(zahl);
		document.getElementById("dlDt").innerHTML = "";
	}
	tabAusbl();
}

function tabAusbl() {
	var opt4 = document.getElementById("opt_4");
	var opt5 = document.getElementById("opt_5");
	if (opt4.checked == true) {
		document.getElementById("tabelle-1").style.visibility = "visible";
	} else if (opt5.checked == true) {
		document.getElementById("tabelle-1").style.visibility = "hidden";
	}
}
