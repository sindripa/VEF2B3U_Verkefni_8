


//1.
	var elTest = document.getElementById('b');
	var elTest2 = document.getElementById('c');
	function test() {
		console.log('test');
	}
	//a.
		//finnst á síðu "kóðanum"
	//b.
		elTest.onclick = test;
	//c.
		elTest2.addEventListener("click", test, false);



//2.
	setTimeout(function () {
		console.log('þetta kemur tveim sec eftir það var kallað á það');
	}, 2000);



//4.
	function checkUsername(e) {
		var target = e.target;
	}
	var el = document.getElementById('username');
	el.addEventListener('blur', function(event) {
		checkUsername(event);
	}, false);



//6.
	//a.
		var elD = document.getElementById('d');  
		var elP = document.getElementById('p');  
		var elS = document.getElementById('s');  


		elD.addEventListener("click", function() {
		    alert("The div element was clicked.");
		}, false);

		elP.addEventListener("click", function() {
		    alert("The Paragraph element was clicked.");
		}, false);

		elS.addEventListener("click", function() {
		    event.stopPropagation();
		    alert("The span element was clicked.");
		}, false);

		/* Sorrí að ég tek kóðann þinn. Þetta er bara besta dæmi sem ég hef í huga. */


	//b.
		document.getElementById("ekkivirka").addEventListener("click", function(event){
    		event.preventDefault()
		});


