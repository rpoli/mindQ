/**
 * @jsx React.DOM
 */
define(['react'],function(React) {


//The points component. It will be displayed in reverse order.
var ScoreComponent=React.createClass({
     render:function(){
     	var score=this.props.score.Score;
     	var scoree=[];

     	score.levels.forEach(function(scoreOb){
     		var classString="cols-xs-12" + " " + scoreOb.className;
     		scoree.push(<li className={classString}><span>{scoreOb.level}</span>&nbsp;&nbsp;&nbsp;<span id="score">{scoreOb.points}</span></li>);
     	});
     	 return( <div className="col-lg-3">   
          		 <div className="row game-right">
           		 <ul className="questions-list">
             		{scoree.reverse()}
            	</ul>
          		</div>
        		</div>)
     }
	});
return ScoreComponent;

});