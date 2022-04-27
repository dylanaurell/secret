function verification() {
	var source = document.getElementById('verification-code').innerHTML
	if ((source == '111111')||(source == '135246')||(source == '111223')) {
		document.getElementById('status-verification-code').innerHTML = document.getElementById('verification-code').innerHTML
		document.getElementById('status-in-out').innerHTML = "IN"
		document.getElementById('keypad').classList.add('hide')
		document.getElementById('verification').classList.add('hide')
		document.getElementById('status-situation').classList.add('status-safe')
		document.getElementById('status-situation').classList.remove('status-not-safe')
		document.getElementById('button').classList.remove('hide')
		document.getElementById('input').classList.remove('hide')
		document.getElementById('result').classList.remove('hide')
		document.getElementById('verification-code').innerHTML = ""
	}
}
function verification_1() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '1'
}

function verification_2() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '2'
}

function verification_3() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '3'
}

function verification_4() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '4'
}

function verification_5() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '5'
}

function verification_6() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '6'
}

function verification_7() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '7'
}

function verification_8() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '8'
}

function verification_9() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '9'
}

function verification_0() {
	document.getElementById('verification-code').innerHTML = document.getElementById('verification-code').innerHTML + '0'
}

function verification_delete() {
	document.getElementById('verification-code').innerHTML = ''
}