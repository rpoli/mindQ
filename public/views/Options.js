/**
 * @jsx React.DOM
 */
define(['react'],function(React) {


var Options=React.createClass({

//to change backgroundcolor of option selected
		optionSelected:function(index){
			$('.option').removeClass('optionSelected');
			var ele=$("#"+event.target.id);
			ele.addClass('optionSelected');	
		},
	
		render:function(){
			var optionProps=this.props.opt;
			var opObj=optionProps.Category.questionAndAnswerObject[optionProps.random];//accessing upto questionAndAnser object
			var optionsArray=[];

		//iterating through the options
			opObj.options.map(function(optionIndex,index){
				var optionId="option"+ index;
				optionsArray.push(
					<li><button type="button" className="col-lg-5 option" key={index} onClick={this.optionSelected.bind(this, index)} id={optionId} >
					<span>{optionIndex.option}</span>{optionIndex.optionvalue}
					</button>
					</li>
					)
			},this);

			return(<div className="row options">
				<ul>
					{optionsArray}
				</ul>
				   </div>);
		}

	});
return Options;
});
