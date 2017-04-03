var img = document.getElementsByClassName('animal');
var select = document.getElementById('select')
var cla;

select.onchange = function(){
	if(select.value == 'original'){
		cla = "animal original";
	}
	if(select.value == 'sepia'){
		cla = "animal sepia";
	}
	if(select.value == 'blanco-negro'){
		cla = "animal blanco-negro";
	}
	if(select.value == 'invertir-colores'){
		cla = "animal invertir-colores";
	}
		for (var i = 0; i < img.length; i++) {
				img[i].setAttribute('class',cla);
		}
};
