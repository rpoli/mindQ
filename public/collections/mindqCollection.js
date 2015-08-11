define([ 'backbone', 'models/minqModel' ], function( Backbone, minqModel ) {
  
  return Backbone.Collection.extend({
  	url : 'data/firstObject.json'
	
 
  });

 
});
