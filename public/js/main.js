var quesOptions = document.querySelectorAll('.options li');

for(var i=0;i<quesOptions.length;i++)
{
	(function () {
		var currentLi = quesOptions[i];		
		currentLi.addEventListener('click',function(){
			removeAll();
			if(currentLi.classList.contains("selected")) currentLi.classList.remove("selected");
			else currentLi.className = currentLi.className+' selected';	
			
		});
	 }());
}	
function removeAll()
{
	for(var i=0;i<quesOptions.length;i++)
	{
		var currentLi = quesOptions[i];		
		if(currentLi.classList.contains("selected")) currentLi.classList.remove("selected");

	}
}