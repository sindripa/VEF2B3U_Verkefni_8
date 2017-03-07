//reference
var elSpurningar = document.getElementById("spurning");
var elSvor = document.getElementById("svarmoguleikar");

//constructor
function Spurningar(texti,svor,rett) {
	this.text = texti;
	this.answers = svor;
	this.correct = rett;
}

//spurninga array
var spurning = [
	new Spurningar("Hvað eru sextán plús tíu frá tíundakerfi jafnt og í sextándakerfi?",["2B","1A","C8","FF"],"1A"),
	new Spurningar("Er Windows 10 merkið fimm rauðir hringir?",["Já","Nei"],"Nei"),
	new Spurningar("Hversu margar fætur eru kóngulær með?",["1","2","3","Of margar"],"Of margar")
];

//setur svörin í texta format
Spurningar.prototype.writeAnswersInHTML = function() {
	var olid = document.createElement('ol');
	olid.type = "A";
	for (var i = 0; i < this.answers.length; i++) {
		var temp = document.createElement('li');
		var temp2 = document.createTextNode(this.answers[i]);
		temp.appendChild(temp2);
		temp.id = ("svar" + i);
		olid.appendChild(temp);
	}
	return olid;
}

//setur spurninguna í text ready format
Spurningar.prototype.writeQuestionInHTML = function() {
	return this.text;
}

function shuffleArray(array) {
 let m = array.length, t, i;
 // While there remain elements to shuffle…
 while (m) {
 // Pick a remaining element…
 i = Math.floor(Math.random() * m--);
 // And swap it with the current element.
 t = array[m];
 array[m] = array[i];
 array[i] = t;
 }
 return array;
}

shuffleArray(spurning);

//skrifað út
elSpurningar.appendChild(document.createTextNode(spurning[0].writeQuestionInHTML()));
elSvor.appendChild(spurning[0].writeAnswersInHTML());

//selection stuffið
function selected(e) {

	var target = e.target;

	if (target.nodeName.toLowerCase() == "li") {
		if (target.textContent == spurning[0].correct) {
    		target.className = "green";
    	}
		else {
			target.className = "red";
		}
	}

}

//event hlustari
elSvor.addEventListener("click", selected, false);