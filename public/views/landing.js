define(['react'], function(React){

	return React.createClass({

		startShow : function(){
			console.log("start show");
		},
		render : function(){
			return <div>
					<form action="/startShow" method="post">
					<h4>Please enter your details below</h4>
						Name : <input type="text" name="userName" value="" />
						<br/>
						<br/>
						Course : <select>
									<option>Please select </option>
									<option>UI</option>
								</select>
						<br/>
						<br/>
						<button onClick={this.startShow}>Start</button>	
						</form>	
					</div>
					
		}

	});


});