/**
 * @jsx React.DOM
 */
define(['react','reactTemplates/Row'],function(React,Row) {
	//Intial Component to load Dashboard

	  var Dashboard = React.createClass({
	  render: function () {
	  var minqObject = this.props.minqObject[0].get("mindQ");
	  	return(<div className="parentContainer">

							<div className="container">
							

							<Row cols={minqObject} />
								
							</div>
					</div>)	    
	  }
	});
return Dashboard; 
});	