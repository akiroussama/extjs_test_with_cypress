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
	},
	 getCookie: function(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
		  var c = ca[i];
		  while (c.charAt(0) == ' ') {
			c = c.substring(1);
		  }
		  if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		  }
		}
		return "";
	  }
});