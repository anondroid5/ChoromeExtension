var colors = document.getElementsByName('colors');


document.getElementById('save').onclick = function() {
	if(colors[0].checked){
		localStorage['color'] = 'red';
	}else if (colors[1].checked){
		localStorage['color'] = 'green';
	}else {
		localStorage['color'] = 'blue';
	}
}

document.body.onload = function() {
	switch(localStorage['color']){
		case 'red':
			collors[0].checked = true;
			break;
		case 'green':
			collors[1].checked = true;
			break;
		case 'blue':
			collors[2].checked = true;
			break;
		case 'default':
			collors[0].checked = true;
			break;

	}
}
