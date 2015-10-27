/**
 * @class App.store.Colors
 * @extend Ext.data.Store
 *
 * Store which has all available colors
 *
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */

Ext.define('App.store.Colors', {
    extend: 'Ext.data.Store',

    model: 'App.model.Colors',

    proxy: {
        type: 'memory'
    },
    
    data: [{
        name: 'red',
        text: 'Red'
    },{
        name: 'green',
        text: 'Green'
    },{
        name: 'blue',
        text: 'Blue'
    }]
});
