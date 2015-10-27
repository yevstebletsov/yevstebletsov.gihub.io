/**
 * @class App.controller.page.Test
 * @extend Ext.app.Controller
 *
 * Controllers which handle logic general logic for page
 *
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */

Ext.define('App.controller.page.Test', {
    extend: 'Ext.app.Controller',

    views: [
        'viewport.Test',
        'panel.TabPanel',
        'viewcontroller.TestViewController'
    ],
    
    stores: [
        'Colors'
    ],

    init: function() {
        "use strict";
    }
});