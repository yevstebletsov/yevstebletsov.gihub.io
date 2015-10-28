//Start point of application
Ext.application({
    name: 'App',
    extend: 'Ext.app.Application',
    appFolder: 'app',
    requires: [],
    views: ['panel.TabPanel'],
    stores: ['Colors'],
    models: ['Colors'],
    
    mainView: 'panel.TabPanel'
});

