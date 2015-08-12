/**
 * @jsx React.DOM
 */
define(['react','reactTemplates/ContainerHeader','reactTemplates/QSectionComponent'],function(React,ContainerHeader,QSectionComponent) {
	//Intial Component to load Dashboard

	  var Dashboard = React.createClass({
	  render: function () {
	  var minqObject = this.props.minqObject[0].get("mindQ");
	  	return(<div className="parentContainer">

							<div className="container">
								<div className="container">
								<ContainerHeader header={minqObject} />
								<QSectionComponent qstnsObj={minqObject} />
								
							</div>
								
							</div>
					</div>)	    
	  }
	});
return Dashboard; 
});	