var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium laboriosam assumenda deserunt, eligendi ea quas! Incidunt saepe, commodi dolorum deserunt voluptatum, vitae minus a, sunt reiciendis perspiciatis, harum quo.";

function loky(cantidad){
	//  20 ps .
	var form = document.getElementById("sign-up");
	for(var i=0; i<cantidad; i++){
		var p = document.createElement("p");
		p.appendChild(document.createTextNode(lorem));
		form.appendChild(p);
	}
}

function thor(cantidad){
	//  20 ps .
	var form = document.getElementById("sign-up");
	for(var i=0; i<cantidad; i++){
		form.innerHTML += "<p>"+lorem+"</p>";
	}
}

function documnetFrag(cantidad){
  var form = document.getElementById("sign-up");
  var dfm = document.createDocumentFragment();
	for(var i=0; i<cantidad; i++){
		var p = document.createElement("p");
		p.appendChild(document.createTextNode(lorem));
		dfm.appendChild(p);
  }
  form.appendChild(dfm);
}
//document fragment.
