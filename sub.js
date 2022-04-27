function asdert(x,y) {

	var get = document.getElementById("source").value
	var code = document.getElementById("status-verification-code").innerHTML
	var status = document.getElementById("status-in-out").innerHTML

	var saya = get.substring(x,y)
	
	var kamu;
	if ((code == "111111")&&(status == "IN")) {
		if (saya == 'a') {kamu = 'y'}
		if (saya == 'b') {kamu = 'D'}
		if (saya == 'c') {kamu = 'e'}
		if (saya == 'd') {kamu = 'f'}
		if (saya == 'e') {kamu = '3'}
		if (saya == 'f') {kamu = 'C'}
		if (saya == 'g') {kamu = '8'}
		if (saya == 'h') {kamu = 'q'}
		if (saya == 'i') {kamu = 'A'}
		if (saya == 'j') {kamu = 'c'}
		if (saya == 'k') {kamu = '2'}
		if (saya == 'l') {kamu = 'Z'}
		if (saya == 'm') {kamu = 'a'}
		if (saya == 'n') {kamu = ' '}
		if (saya == 'o') {kamu = 'v'}
		if (saya == 'p') {kamu = 'r'}
		if (saya == 'q') {kamu = '4'}
		if (saya == 'r') {kamu = 'o'}
		if (saya == 's') {kamu = 'V'}
		if (saya == 't') {kamu = 'Q'}
		if (saya == 'u') {kamu = '0'}
		if (saya == 'v') {kamu = 'X'}
		if (saya == 'w') {kamu = 'O'}
		if (saya == 'x') {kamu = 'z'}
		if (saya == 'y') {kamu = 'P'}
		if (saya == 'z') {kamu = 'S'}
		if (saya == 'A') {kamu = 'x'}
		if (saya == 'B') {kamu = 'h'}
		if (saya == 'C') {kamu = 'M'}
		if (saya == 'D') {kamu = '6'}
		if (saya == 'E') {kamu = 'p'}
		if (saya == 'F') {kamu = 'I'}
		if (saya == 'G') {kamu = 'l'}
		if (saya == 'H') {kamu = 'k'}
		if (saya == 'I') {kamu = 'F'}
		if (saya == 'J') {kamu = '5'}
		if (saya == 'K') {kamu = 'U'}
		if (saya == 'L') {kamu = 'g'}
		if (saya == 'M') {kamu = 'J'}
		if (saya == 'N') {kamu = 'H'}
		if (saya == 'O') {kamu = '9'}
		if (saya == 'P') {kamu = 'E'}
		if (saya == 'Q') {kamu = 'N'}
		if (saya == 'R') {kamu = 'R'}
		if (saya == 'S') {kamu = 'n'}
		if (saya == 'T') {kamu = 'd'}
		if (saya == 'U') {kamu = '7'}
		if (saya == 'V') {kamu = 'K'}
		if (saya == 'W') {kamu = 'W'}
		if (saya == 'X') {kamu = 'T'}
		if (saya == 'Y') {kamu = 'G'}
		if (saya == 'Z') {kamu = 't'}
		if (saya == '1') {kamu = 'i'}
		if (saya == '2') {kamu = 'L'}
		if (saya == '3') {kamu = 's'}
		if (saya == '4') {kamu = 'm'}
		if (saya == '5') {kamu = '1'}
		if (saya == '6') {kamu = 'B'}
		if (saya == '7') {kamu = 'w'}
		if (saya == '8') {kamu = 'Y'}
		if (saya == '9') {kamu = 'u'}
		if (saya == '0') {kamu = 'j'}
		if (saya == ' ') {kamu = 'b'}
		if (saya == '') {kamu = ''}
	}
		
	if ((code == "111111")&&(status == "OUT")) {
		if (saya == 'y') {kamu = 'a'}
		if (saya == 'D') {kamu = 'b'}
		if (saya == 'e') {kamu = 'c'}
		if (saya == 'f') {kamu = 'd'}
		if (saya == '3') {kamu = 'e'}
		if (saya == 'C') {kamu = 'f'}
		if (saya == '8') {kamu = 'g'}
		if (saya == 'q') {kamu = 'h'}
		if (saya == 'A') {kamu = 'i'}
		if (saya == 'c') {kamu = 'j'}
		if (saya == '2') {kamu = 'k'}
		if (saya == 'Z') {kamu = 'l'}
		if (saya == 'a') {kamu = 'm'}
		if (saya == ' ') {kamu = 'n'}
		if (saya == 'v') {kamu = 'o'}
		if (saya == 'r') {kamu = 'p'}
		if (saya == '4') {kamu = 'q'}
		if (saya == 'o') {kamu = 'r'}
		if (saya == 'V') {kamu = 's'}
		if (saya == 'Q') {kamu = 't'}
		if (saya == '0') {kamu = 'u'}
		if (saya == 'X') {kamu = 'v'}
		if (saya == 'O') {kamu = 'w'}
		if (saya == 'z') {kamu = 'x'}
		if (saya == 'P') {kamu = 'y'}
		if (saya == 'S') {kamu = 'z'}
		if (saya == 'x') {kamu = 'A'}
		if (saya == 'h') {kamu = 'B'}
		if (saya == 'M') {kamu = 'C'}
		if (saya == '6') {kamu = 'D'}
		if (saya == 'p') {kamu = 'E'}
		if (saya == 'I') {kamu = 'F'}
		if (saya == 'l') {kamu = 'G'}
		if (saya == 'k') {kamu = 'H'}
		if (saya == 'F') {kamu = 'I'}
		if (saya == '5') {kamu = 'J'}
		if (saya == 'U') {kamu = 'K'}
		if (saya == 'g') {kamu = 'L'}
		if (saya == 'J') {kamu = 'M'}
		if (saya == 'H') {kamu = 'N'}
		if (saya == '9') {kamu = 'O'}
		if (saya == 'E') {kamu = 'P'}
		if (saya == 'N') {kamu = 'Q'}
		if (saya == 'R') {kamu = 'R'}
		if (saya == 'n') {kamu = 'S'}
		if (saya == 'd') {kamu = 'T'}
		if (saya == '7') {kamu = 'U'}
		if (saya == 'K') {kamu = 'V'}
		if (saya == 'W') {kamu = 'W'}
		if (saya == 'T') {kamu = 'X'}
		if (saya == 'G') {kamu = 'Y'}
		if (saya == 't') {kamu = 'Z'}
		if (saya == 'i') {kamu = '1'}
		if (saya == 'L') {kamu = '2'}
		if (saya == 's') {kamu = '3'}
		if (saya == 'm') {kamu = '4'}
		if (saya == '1') {kamu = '5'}
		if (saya == 'B') {kamu = '6'}
		if (saya == 'w') {kamu = '7'}
		if (saya == 'Y') {kamu = '8'}
		if (saya == 'u') {kamu = '9'}
		if (saya == 'j') {kamu = '0'}
		if (saya == 'b') {kamu = ' '}
		if (saya == '') {kamu = ''}
	}
	
	if ((code == "135246")&&(status == "IN")) {
		if (saya == 'a') {kamu = 'c'}
		if (saya == 'b') {kamu = 'C'}
		if (saya == 'c') {kamu = 'Z'}
		if (saya == 'd') {kamu = '5'}
		if (saya == 'e') {kamu = 'K'}
		if (saya == 'f') {kamu = 'x'}
		if (saya == 'g') {kamu = 'u'}
		if (saya == 'h') {kamu = 'w'}
		if (saya == 'i') {kamu = '1'}
		if (saya == 'j') {kamu = 'N'}
		if (saya == 'k') {kamu = 'B'}
		if (saya == 'l') {kamu = 'v'}
		if (saya == 'm') {kamu = 'U'}
		if (saya == 'n') {kamu = 'E'}
		if (saya == 'o') {kamu = 'X'}
		if (saya == 'p') {kamu = 'q'}
		if (saya == 'q') {kamu = 'W'}
		if (saya == 'r') {kamu = '2'}
		if (saya == 's') {kamu = 'R'}
		if (saya == 't') {kamu = 'p'}
		if (saya == 'u') {kamu = 'D'}
		if (saya == 'v') {kamu = 'h'}
		if (saya == 'w') {kamu = 'n'}
		if (saya == 'x') {kamu = 'y'}
		if (saya == 'y') {kamu = '8'}
		if (saya == 'z') {kamu = 'L'}
		if (saya == 'A') {kamu = 'Q'}
		if (saya == 'B') {kamu = 't'}
		if (saya == 'C') {kamu = 'b'}
		if (saya == 'D') {kamu = 'M'}
		if (saya == 'E') {kamu = 'P'}
		if (saya == 'F') {kamu = 'T'}
		if (saya == 'G') {kamu = '7'}
		if (saya == 'H') {kamu = 'G'}
		if (saya == 'I') {kamu = 'o'}
		if (saya == 'J') {kamu = 'a'}
		if (saya == 'K') {kamu = 'H'}
		if (saya == 'L') {kamu = ' '}
		if (saya == 'M') {kamu = 'f'}
		if (saya == 'N') {kamu = 'O'}
		if (saya == 'O') {kamu = 'A'}
		if (saya == 'P') {kamu = 'z'}
		if (saya == 'Q') {kamu = '0'}
		if (saya == 'R') {kamu = 'j'}
		if (saya == 'S') {kamu = '4'}
		if (saya == 'T') {kamu = 'r'}
		if (saya == 'U') {kamu = 'V'}
		if (saya == 'V') {kamu = 'Y'}
		if (saya == 'W') {kamu = 'e'}
		if (saya == 'X') {kamu = 'm'}
		if (saya == 'Y') {kamu = '9'}
		if (saya == 'Z') {kamu = '6'}
		if (saya == '1') {kamu = 'i'}
		if (saya == '2') {kamu = '3'}
		if (saya == '3') {kamu = 'F'}
		if (saya == '4') {kamu = 'k'}
		if (saya == '5') {kamu = 'J'}
		if (saya == '6') {kamu = 'l'}
		if (saya == '7') {kamu = 'S'}
		if (saya == '8') {kamu = 'g'}
		if (saya == '9') {kamu = 'I'}
		if (saya == '0') {kamu = 'd'}
		if (saya == ' ') {kamu = 's'}
		if (saya == '') {kamu = ''}
	}

	if ((code == "135246")&&(status == "OUT")) {
		if (saya == 'c') {kamu = 'a'}
		if (saya == 'C') {kamu = 'b'}
		if (saya == 'Z') {kamu = 'c'}
		if (saya == '5') {kamu = 'd'}
		if (saya == 'K') {kamu = 'e'}
		if (saya == 'x') {kamu = 'f'}
		if (saya == 'u') {kamu = 'g'}
		if (saya == 'w') {kamu = 'h'}
		if (saya == '1') {kamu = 'i'}
		if (saya == 'N') {kamu = 'j'}
		if (saya == 'B') {kamu = 'k'}
		if (saya == 'v') {kamu = 'l'}
		if (saya == 'U') {kamu = 'm'}
		if (saya == 'E') {kamu = 'n'}
		if (saya == 'X') {kamu = 'o'}
		if (saya == 'q') {kamu = 'p'}
		if (saya == 'W') {kamu = 'q'}
		if (saya == '2') {kamu = 'r'}
		if (saya == 'R') {kamu = 's'}
		if (saya == 'p') {kamu = 't'}
		if (saya == 'D') {kamu = 'u'}
		if (saya == 'h') {kamu = 'v'}
		if (saya == 'n') {kamu = 'w'}
		if (saya == 'y') {kamu = 'x'}
		if (saya == '8') {kamu = 'y'}
		if (saya == 'L') {kamu = 'z'}
		if (saya == 'Q') {kamu = 'A'}
		if (saya == 't') {kamu = 'B'}
		if (saya == 'b') {kamu = 'C'}
		if (saya == 'M') {kamu = 'D'}
		if (saya == 'P') {kamu = 'E'}
		if (saya == 'T') {kamu = 'F'}
		if (saya == '7') {kamu = 'G'}
		if (saya == 'G') {kamu = 'H'}
		if (saya == 'o') {kamu = 'I'}
		if (saya == 'a') {kamu = 'J'}
		if (saya == 'H') {kamu = 'K'}
		if (saya == ' ') {kamu = 'L'}
		if (saya == 'f') {kamu = 'M'}
		if (saya == 'O') {kamu = 'N'}
		if (saya == 'A') {kamu = 'O'}
		if (saya == 'z') {kamu = 'P'}
		if (saya == '0') {kamu = 'Q'}
		if (saya == 'j') {kamu = 'R'}
		if (saya == '4') {kamu = 'S'}
		if (saya == 'r') {kamu = 'T'}
		if (saya == 'V') {kamu = 'U'}
		if (saya == 'Y') {kamu = 'V'}
		if (saya == 'e') {kamu = 'W'}
		if (saya == 'm') {kamu = 'X'}
		if (saya == '9') {kamu = 'Y'}
		if (saya == '6') {kamu = 'Z'}
		if (saya == 'i') {kamu = '1'}
		if (saya == '3') {kamu = '2'}
		if (saya == 'F') {kamu = '3'}
		if (saya == 'k') {kamu = '4'}
		if (saya == 'J') {kamu = '5'}
		if (saya == 'l') {kamu = '6'}
		if (saya == 'S') {kamu = '7'}
		if (saya == 'g') {kamu = '8'}
		if (saya == 'I') {kamu = '9'}
		if (saya == 'd') {kamu = '0'}
		if (saya == 's') {kamu = ' '}
		if (saya == '') {kamu = ''}
	}
	if ((code == "111223")&&(status == "IN")) {
		if (saya == 'a') {kamu = 'c'}
		if (saya == 'b') {kamu = 'C'}
		if (saya == 'c') {kamu = 'Z'}
		if (saya == 'd') {kamu = '5'}
		if (saya == 'e') {kamu = 'K'}
		if (saya == 'f') {kamu = 'x'}
		if (saya == 'g') {kamu = 'u'}
		if (saya == 'h') {kamu = 'w'}
		if (saya == 'i') {kamu = '1'}
		if (saya == 'j') {kamu = 'N'}
		if (saya == 'k') {kamu = 'B'}
		if (saya == 'l') {kamu = 'v'}
		if (saya == 'm') {kamu = 'U'}
		if (saya == 'n') {kamu = 'E'}
		if (saya == 'o') {kamu = 'X'}
		if (saya == 'p') {kamu = 'q'}
		if (saya == 'q') {kamu = 'W'}
		if (saya == 'r') {kamu = '2'}
		if (saya == 's') {kamu = 'R'}
		if (saya == 't') {kamu = 'p'}
		if (saya == 'u') {kamu = 'D'}
		if (saya == 'v') {kamu = 'h'}
		if (saya == 'w') {kamu = 'n'}
		if (saya == 'x') {kamu = 'y'}
		if (saya == 'y') {kamu = '8'}
		if (saya == 'z') {kamu = 'L'}
		if (saya == 'A') {kamu = 'Q'}
		if (saya == 'B') {kamu = 't'}
		if (saya == 'C') {kamu = 'b'}
		if (saya == 'D') {kamu = 'M'}
		if (saya == 'E') {kamu = 'P'}
		if (saya == 'F') {kamu = 'T'}
		if (saya == 'G') {kamu = '7'}
		if (saya == 'H') {kamu = 'G'}
		if (saya == 'I') {kamu = 'o'}
		if (saya == 'J') {kamu = 'a'}
		if (saya == 'K') {kamu = 'H'}
		if (saya == 'L') {kamu = ' '}
		if (saya == 'M') {kamu = 'f'}
		if (saya == 'N') {kamu = 'O'}
		if (saya == 'O') {kamu = 'A'}
		if (saya == 'P') {kamu = 'z'}
		if (saya == 'Q') {kamu = '0'}
		if (saya == 'R') {kamu = 'j'}
		if (saya == 'S') {kamu = '4'}
		if (saya == 'T') {kamu = 'r'}
		if (saya == 'U') {kamu = 'V'}
		if (saya == 'V') {kamu = 'Y'}
		if (saya == 'W') {kamu = 'e'}
		if (saya == 'X') {kamu = 'm'}
		if (saya == 'Y') {kamu = '9'}
		if (saya == 'Z') {kamu = '6'}
		if (saya == '1') {kamu = 'i'}
		if (saya == '2') {kamu = '3'}
		if (saya == '3') {kamu = 'F'}
		if (saya == '4') {kamu = 'k'}
		if (saya == '5') {kamu = 'J'}
		if (saya == '6') {kamu = 'l'}
		if (saya == '7') {kamu = 'S'}
		if (saya == '8') {kamu = 'g'}
		if (saya == '9') {kamu = 'I'}
		if (saya == '0') {kamu = 'd'}
		if (saya == ' ') {kamu = 's'}
		if (saya == '') {kamu = ''}
	}

	if ((code == "111223")&&(status == "OUT")) {
		if (saya == 'c') {kamu = 'a'}
		if (saya == 'C') {kamu = 'b'}
		if (saya == 'Z') {kamu = 'c'}
		if (saya == '5') {kamu = 'd'}
		if (saya == 'K') {kamu = 'e'}
		if (saya == 'x') {kamu = 'f'}
		if (saya == 'u') {kamu = 'g'}
		if (saya == 'w') {kamu = 'h'}
		if (saya == '1') {kamu = 'i'}
		if (saya == 'N') {kamu = 'j'}
		if (saya == 'B') {kamu = 'k'}
		if (saya == 'v') {kamu = 'l'}
		if (saya == 'U') {kamu = 'm'}
		if (saya == 'E') {kamu = 'n'}
		if (saya == 'X') {kamu = 'o'}
		if (saya == 'q') {kamu = 'p'}
		if (saya == 'W') {kamu = 'q'}
		if (saya == '2') {kamu = 'r'}
		if (saya == 'R') {kamu = 's'}
		if (saya == 'p') {kamu = 't'}
		if (saya == 'D') {kamu = 'u'}
		if (saya == 'h') {kamu = 'v'}
		if (saya == 'n') {kamu = 'w'}
		if (saya == 'y') {kamu = 'x'}
		if (saya == '8') {kamu = 'y'}
		if (saya == 'L') {kamu = 'z'}
		if (saya == 'Q') {kamu = 'A'}
		if (saya == 't') {kamu = 'B'}
		if (saya == 'b') {kamu = 'C'}
		if (saya == 'M') {kamu = 'D'}
		if (saya == 'P') {kamu = 'E'}
		if (saya == 'T') {kamu = 'F'}
		if (saya == '7') {kamu = 'G'}
		if (saya == 'G') {kamu = 'H'}
		if (saya == 'o') {kamu = 'I'}
		if (saya == 'a') {kamu = 'J'}
		if (saya == 'H') {kamu = 'K'}
		if (saya == ' ') {kamu = 'L'}
		if (saya == 'f') {kamu = 'M'}
		if (saya == 'O') {kamu = 'N'}
		if (saya == 'A') {kamu = 'O'}
		if (saya == 'z') {kamu = 'P'}
		if (saya == '0') {kamu = 'Q'}
		if (saya == 'j') {kamu = 'R'}
		if (saya == '4') {kamu = 'S'}
		if (saya == 'r') {kamu = 'T'}
		if (saya == 'V') {kamu = 'U'}
		if (saya == 'Y') {kamu = 'V'}
		if (saya == 'e') {kamu = 'W'}
		if (saya == 'm') {kamu = 'X'}
		if (saya == '9') {kamu = 'Y'}
		if (saya == '6') {kamu = 'Z'}
		if (saya == 'i') {kamu = '1'}
		if (saya == '3') {kamu = '2'}
		if (saya == 'F') {kamu = '3'}
		if (saya == 'k') {kamu = '4'}
		if (saya == 'J') {kamu = '5'}
		if (saya == 'l') {kamu = '6'}
		if (saya == 'S') {kamu = '7'}
		if (saya == 'g') {kamu = '8'}
		if (saya == 'I') {kamu = '9'}
		if (saya == 'd') {kamu = '0'}
		if (saya == 's') {kamu = ' '}
		if (saya == '') {kamu = ''}
	}

	if (kamu == undefined) {kamu = ""}
	
	return kamu
}

function go() {
	var p = 0
	var q = 1
	document.getElementById('result-clear').innerHTML = asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++) + asdert(p++,q++)
}

function changemode() {
	var x = document.getElementById("status-in-out")
	if (x.innerHTML === "IN") {
		x.innerHTML = "OUT"
	} else {
		x.innerHTML = "IN"
	}
}

function closein() {
	document.getElementById('status-verification-code').innerHTML = ""
	document.getElementById('status-in-out').innerHTML = ""
	document.getElementById('keypad').classList.remove('hide')
	document.getElementById('verification').classList.remove('hide')
	document.getElementById('status-situation').classList.remove('status-safe')
	document.getElementById('status-situation').classList.add('status-not-safe')
	document.getElementById('button').classList.add('hide')
	document.getElementById('input').classList.add('hide')
	document.getElementById('result').classList.add('hide')
	document.getElementById('verification-code').innerHTML = ""
	document.getElementById('source').value = ""
	document.getElementById('result-clear').innerHTML = ""
}