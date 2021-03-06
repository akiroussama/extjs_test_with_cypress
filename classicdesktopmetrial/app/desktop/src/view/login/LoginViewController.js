Ext.define('classicdesktopmetrial.view.login.LoginViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginviewcontroller',

	onLogin: function() {
		var form = this.lookup('form')
		if (form.isValid()) {
			var me = this
			var user = me.lookup('user').getValue()
			var pass = me.lookup('pass').getValue()
			me.getLoginData(user, pass)
			.then(function(response) {
				if (response.success == true) {
					Ext.Msg.alert('Login Success', 'You have been logged in!')
					document.cookie = "LoggedIn=true";
					localStorage.setItem("LoggedIn", true)
					me.getView().destroy()
					Ext.create({xtype: 'mainview', plugins: 'viewport'})
				}
				else {
					Ext.Msg.alert('Server Login Failure', 'You have NOT been logged in!');
				}
			}, function(e) {
				console.log(e);
			})
		} else {
			Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
		}
	},

	getLoginData: function (user, pass) {
		return new Ext.Promise(function (resolve, reject) {
			try {
				var v = 'false'; if(user != '') { v = 'true'};
				Ext.Ajax.request({
					url: 'resources/shared/data/login' + v + '.json',
					success: function(response, opts) {
						var o = Ext.decode(response.responseText);
						console.log(new Date());
						console.log('Dude!');
						Shared.sleep(10000);
						console.log(new Date());
						resolve(o);
					},
					failure: function(response, opts) {
						return reject ('server-side failure with status code ' + response.status);
					}
				});
			}
			catch(err) {
				return reject(err);
			}
		});
	}

});
