/**
 * @jsx React.DOM
 */
define(['react',
	"reactTemplates/Options",
	"reactTemplates/ScoreComponent",
	"reactTemplates/OverlayModule",'bootstrap'],
	function(React,Options,ScoreComponent,OverlayModule) {

//Questions component , clicking next, lock, quick
var QSectionComponent=React.createClass({

//Function on click of lock button
		lockState:function(){
			/*Ajax call need to be Done*/
			
		
			if(this.state.Qproperties.correctAnswer){
				var scoreObj=this.state.Qproperties.Score;
				var levels=scoreObj.levels;
				for(var i=0;i<levels.length;i++){
						levels[i].className="";
				}
				levels[this.state.Qproperties.random].className="selected";
				var Qproperties=this.state.Qproperties;
				this.setState({Qproperties});
			}
			else{
				this.state.Qproperties.quitFlag=true;
				var Qproperties=this.state.Qproperties;
				this.setState({Qproperties})
			}
			
		},

//Function on click of Quit Button
		quitState:function(){
			var scoreVal=$('.selected').find("#score").text();
			if(scoreVal){
				this.state.Qproperties.scoreVal=scoreVal;
				this.state.Qproperties.quitFlag=true;
				var Qproperties=this.state.Qproperties;
				this.setState({Qproperties})
			}
			else{
				alert("Game is not yet Started!")
			}
			
			
		},

//function on clicking Next button
		nextState:function(){
			$('.option').removeClass('optionSelected');
				var qLengthh=this.state.Qproperties.Category.questionAndAnswerObject.length-1;			
				var random=this.state.Qproperties.random;
				if(random<qLengthh){
					random=random+1;
					this.state.Qproperties.random=random;
					var Qproperties=this.state.Qproperties;	
					this.setState({Qproperties});
				}						
		  },

//to set intial properties
		getInitialState: function() {			
			var Qproperties=this.props.qstnsObj;   //setting props as state
			return{
				Qproperties		
			}
		  },		
		render:function(){		
			var qprops=this.state.Qproperties;	
			var quitOverlay=null;	
			var question=[];
			//checking for click on Quit button to Open Overlay
			if(qprops.quitFlag){
				quitOverlay=(<OverlayModule ref='modal' overlayprops={qprops} />)
			}


			//To Get Question and pushing into array
			question.push( <div className="row question">
								<span className="ques-right">
								{qprops.Category.questionAndAnswerObject[qprops.random].q}
								</span>
								</div>);		 		 			
    		return (
    				<div className="row game">
    				   <div className="col-lg-8  game-left">
	    					<form id="mindQForm"> 
		    					<div className="row ques-main">
		     			 		  	{question}
		     			 		 	<Options opt={qprops} />   
			     			 		</div> 	
			     			 		<div className="row game-options">
					             		<button type="button" className="col-lg-4  lock" onClick={this.lockState}><img src="img/lock.png" /><span>Lock Answer</span></button>
					                	<button type="button" className="col-lg-4  quit" data-toggle="modal" data-target="#myModal" onClick={this.quitState}><img src="img/quit.png" /><span>Quit Game</span></button>
					                	<button  className="col-lg-4  next" type="button" onClick={this.nextState}>Next</button>					             	
				           			</div>  		 			
	     			 		</form>
     			 		</div>
     			 		<ScoreComponent score={qprops} />
     			 		{quitOverlay}
     			 	</div>
   				 );
    }	
});
return QSectionComponent; 
});	