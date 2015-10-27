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
        xtype: 'container',
        layout: 'fit',
        margin: 3,
        items: [{
            xtype: 'testtabpanel'
        }]
    }]
});
