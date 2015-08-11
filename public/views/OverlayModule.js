define(['react'], function(React) {
	var OverlayModule=React.createClass({
		 componentDidMount: function () {
        $(this.refs.modal.getDOMNode()).modal({
            backdrop: "static",
            show: true,
            keyboard:true,
            background:true
        });
    },
    // componentDidUnmount: function () {
    //     $(this.refs.modal.getDOMNode()).off();
    // },
		render:function(){	

			return( 
				<div ref="modal" id="myModal" className="modal" role="dialog">
	 			<div className="modal-dialog">
    				<div className="modal-content">
      					<div className="modal-header">
       						 <button type="button" className="close" data-dismiss="modal">&times;</button>
        						<h4 className="modal-title">Game Over</h4>
      					</div>
      					<div className="modal-body">
        					<p>The Points you Earned are : {this.props.overlayprops.scoreVal}.</p>
     					 </div>
      					<div className="modal-footer">
        					<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      					</div>
    				</div>

  				</div>
			</div>		
			);					
		},
	 show: function () {
        $(this.refs.modal.getDOMNode()).modal("show");
    },
    hide: function () {
        $(this.refs.modal.getDOMNode()).modal("hide");
    }	
	});
	return OverlayModule; 

});	