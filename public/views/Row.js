/**
 * @jsx React.DOM
 */
define(['react','reactTemplates/OverlayModule','bootstrap'],function(React,OverlayModule) {


//To display  Options for Question displayed
var Options=React.createClass({

//to change backgroundcolor of option selected
		optionSelected:function(){
			$('.option').removeClass('optionSelected');
			var ele=$("#"+event.target.id);
			ele.addClass('optionSelected');	
		},
	
		render:function(){

			var d=this.props.opt;
			var m=[];
			m.push(
				<ul>
                  <button type="button"  className="col-lg-5 col-md-5 col-sm-12 col-xs-12 option" onClick={this.optionSelected} id="optiona" ><span>A</span>{this.props.opt.Category.questionAndAnswerObject[this.props.opt.random].options[0]}</button>
                  <button type="button"   className="col-lg-5 col-md-5 col-sm-12 col-xs-12 option" onClick={this.optionSelected} id="optionb" ><span>B</span>{this.props.opt.Category.questionAndAnswerObject[this.props.opt.random].options[1]}</button>
                  <button type="button"   className="col-lg-5 col-md-5 col-sm-12 col-xs-12 option" onClick={this.optionSelected}  id="optionc" ><span>C</span>{this.props.opt.Category.questionAndAnswerObject[this.props.opt.random].options[2]}</button>
                  <button type="button"  className="col-lg-5 col-md-5 col-sm-12 col-xs-12 option" onClick={this.optionSelected}  id="optiond"><span>D</span>{this.props.opt.Category.questionAndAnswerObject[this.props.opt.random].options[3]}</button>     
				</ul>)
			return(<div className="row options">{m}</div>);
		}

	});


//The points component. It will be displayed in reverse order.
var ScoreComponent=React.createClass({
     render:function(){
     	var score=this.props.score.Score;
     	var scoree=[];

     	score.levels.forEach(function(scoreOb){
     		var classString="cols-xs-12" + " " + scoreOb.className;
     		scoree.push(<li className={classString}><span>{scoreOb.level}</span>&nbsp;&nbsp;&nbsp;<span id="score">{scoreOb.points}</span></li>);
     	});
     	 return( <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">   
          		 <div className="row game-right">
           		 <ul className="questions-list">
             		{scoree.reverse()}
            	</ul>
          		</div>
        		</div>)
     }
	});

//Questions component , clicking next, lock, quick

var QSectionComponent=React.createClass({

//Function on click of lock button
		lockState:function(){
			/*Ajax call need to be Done*/
			
			this.state.propss.correctAnswer=true;
			var a=this.state.propss.Score;
			var b=a.levels;
			for(var i=0;i<b.length;i++){
					b[i].className="";
			}
			b[this.state.propss.random].className="selected";
			var propss=this.state.propss;
			this.setState({propss});
		},

//Function on click of Quit Button
		quitState:function(){
			var scoreVal=$('.selected').find("#score").text();
			this.state.propss.scoreVal=scoreVal;
			this.state.propss.quitFlag=true;
			var propss=this.state.propss;
			this.setState({propss})
			
		},

//function on clicking Next button
		handleState:function(){
			$('.option').removeClass('optionSelected');
				var qLengthh=this.state.propss.Category.questionAndAnswerObject.length-1;			
				var random=this.state.propss.random;
				if(random<qLengthh){
					random=random+1;
					this.state.propss.random=random;
					var propss=this.state.propss;	
					this.setState({propss});
				}						
		  },

//to set intial properties
		getInitialState: function() {			
			this.props.qObj.quitFlag=false;
			var qLength=this.props.qObj.Category.questionAndAnswerObject;
			this.props.qObj.random=0;
			var propss=this.props.qObj;
			return{
				propss		
			}
		  },		
		render:function(){		
			var b=this.state.propss;	
			var quitOverlay=null;	
			var question=[];
			//checking for click on Quit button to Open Overlay
			if(b.quitFlag){
				quitOverlay=(<OverlayModule ref='modal' overlayprops={b} />)
			}


			//To Get Question and pushing into array
			question.push( <div className="row question">
								<span className="ques-right">
								{b.Category.questionAndAnswerObject[b.random].q}
								</span>
								</div>);		 		 			
    		return (
    				<div className="row game">
    				   <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 game-left">
	    					<form id="mindQForm"> 
		    					<div className="row ques-main">
		     			 		  	{question}
		     			 		 	<Options opt={b} />   
			     			 		</div> 	
			     			 		<div className="row game-options">
					             		<button type="button" className="col-lg-4 col-md-4 col-sm-12 col-xs-12 lock" onClick={this.lockState}><img src="img/lock.png" /><span>Lock Answer</span></button>
					                	<button type="button" className="col-lg-4 col-md-4 col-sm-12 col-xs-12 quit" data-toggle="modal" data-target="#myModal" onClick={this.quitState}><img src="img/quit.png" /><span>Quit Game</span></button>
					                	<button  className="col-lg-4 col-md-4 col-sm-12 col-xs-12 next" type="button" onClick={this.handleState}>Next</button>					             	
				           			</div>  		 			
	     			 		</form>
     			 		</div>
     			 		<ScoreComponent score={b} />
     			 		{quitOverlay}
     			 	</div>
   				 );
    }	
});


//Header
var ContainerHeader=React.createClass({
		render:function(){
		return( <div className="row">
        		<div className="col-xs-12 category-header-inner">
          		<h1>Quiz Category : <span>User Interface</span></h1>
       			</div>
     			</div> )
		}

	});

//Top Nav Bar
var NavComponent=React.createClass({
		render:function(){			
			return(<nav className="navbar header" role="navigation">
      				<div className="container">
        			<div className="row">
          			<div className="col-xs-12 header-inner">
           			 <h1>Mind<span>Q</span></h1>
          			</div>
        			</div>
     				</div>
    				</nav> )
		}

	});

	//Intial Component
	  var Row = React.createClass({
	  render: function () {
	  	var qObj=this.props.cols;
	  	return(<div className="parentContainer">
						<NavComponent navObj={qObj} />
							<div className="container">
								<ContainerHeader header={qObj} />
								<QSectionComponent qObj={qObj} />
								
							</div>
					</div>)	    
	  }
	});
return Row; 
});	