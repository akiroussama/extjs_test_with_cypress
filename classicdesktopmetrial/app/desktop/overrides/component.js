Ext.define('Eco.override.Ext.Component', {
    override: 'Ext.Component',
    init: function() {
        this.callParent();
        if (this.cypressId != null) {
            debugger;
        }
    },
    initComponent: function() {
        var me = this;
        me.callParent();
        console.log(this.text);
        if (me.cypressId != null) {
            debugger;
        }
    }

    });