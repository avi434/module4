var names=["yaakov","john","jen","jason","paul","frank","larry","paula","lauara","jim"];
		for (var i=0 ; i<names.length;i++) {
			var firstletter = names[i].charAt(0).toLowerCase();
		if(firstletter==='j'){
			window.fun(names[i]);
		}
		else{
			window.fun1(names[i]);
		}
	}