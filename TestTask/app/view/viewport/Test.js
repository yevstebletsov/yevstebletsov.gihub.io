/**
 * @class App.view.viewport.Test
 * @extend App.view.container.Viewport
 *
 * Specify base vieport for test page
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */
Ext.define('App.view.viewport.Test', {
    extend: 'App.view.container.Viewport',

    items: [{
        xtype: 'panel',
        layout: {
            type: 'border',
            padding: 3
        },
        defaults: {
            split: true
        },
        items: [{
            xtype: 'panel',
            region: 'west',
            flex: 1,
            collapsible: true,
            maxWidth: 300,
            title: 'Navigation'
        },{
            xtype: 'panel',
            region: 'center',
            flex: 5,
            title: 'MyApp',
            collapsible: true,
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    text: 'Show',
                    listeners: {
                        click: function(button){
                            if(!this.win){
                                this.win = Ext.create('widget.window', {
                                    title: 'Layout Window with title <em>after</em> tools',
                                    closable: true,
                                    closeAction: 'hide',
                                    maximizable: true,
                                    modal: true,
                                    animateTarget: button,
                                    width: 600,
                                    minWidth: 350,
                                    height: 350,
                                    layout: {
                                        type: 'border',
                                        padding: 5
                                    },
                                    items: [{
                                        region: 'west',
                                        title: 'Navigation',
                                        width: 200,
                                        split: true,
                                        collapsible: true,
                                        floatable: false
                                    }, {
                                        region: 'center',
                                        xtype: 'tabpanel',
                                        items: [{
                                            // LTR even when example is RTL so that the code can be read
                                            rtl: false,
                                            title: 'Bogus Tab',
                                            html: 'Bogus Tab'
                                        }, {
                                            title: 'Another Tab',
                                            html: 'Hello world 2'
                                        }, {
                                            title: 'Closable Tab',
                                            html: 'Hello world 3',
                                            closable: true
                                        }]
                                    }]
                                });
                            }
                            this.win.show(this);
                        }
                    }
                },{
                    text: 'Hide'
                }]
            }]
        }]
    }]
});
