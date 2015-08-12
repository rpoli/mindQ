/**
 * @jsx React.DOM
 */
define(['react'],function(React) {
	//Intial Component
	  var ContainerHeader = React.createClass({
	  render: function () {	 
	  	return(<div className="row">
        		<div className="col-xs-12 category-header-inner">
          		<h1>Quiz Category : <span>User Interface</span></h1>
       			</div>
     			</div> )	    
	  }
	});
return ContainerHeader; 
});	