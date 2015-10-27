//Start point of application
Ext.application({
    name: 'App',
    
    appFolder: 'app',
    
    controllers: [
        'page.Test'
    ],
    
    launch: function() {
        splashscreen.fadeOut();
        var viewport = Ext.create('App.view.viewport.Test'),
            height = window.innerHeight,
            width = window.innerWidth;

        viewport.fireResize(width, height);
        viewport.show();
    },
    
    init: function(){
        splashscreen = Ext.getBody().mask("Loading application...");
    }
});


