Ext.define('classicdesktopmetrial.util.Shared', {
	alternateClassName: ['Shared'],
	singleton: true,
	sleep:function(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
		  if ((new Date().getTime() - start) > milliseconds){
			break;
		  }
		}
	  },
	log: function(msg) {
		console.log(msg);
	}
});