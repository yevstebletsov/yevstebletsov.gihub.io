Ext.application({
    name: 'RTS',

    launch: function() {
        Ext.Msg.show({
            title : 'Notification',
            modal : true,
            buttons: Ext.MessageBox.OK,
            msg : "Please select a date interval shorter than 30 days!",
            icon : Ext.MessageBox.WARNING
        });
    },
    
    init: function(){
        console.log("app is init");
    }
});
