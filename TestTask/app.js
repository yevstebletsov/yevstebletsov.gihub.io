/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.application({
    name: 'App',
    
    appFolder: 'app',
    
    controllers: [
        'page.Test'
    ],
    
    launch: function() {
        splashscreen.fadeOut();
        console.log("app launched");
        var viewport = Ext.create('App.view.viewport.Test'),
            height = window.innerHeight,
            width = window.innerWidth;

        viewport.fireResize(width, height);
        viewport.show();
    },
    
    init: function(){
        splashscreen = Ext.getBody().mask("Loading application...");
        console.log("app is init");
    }
});


