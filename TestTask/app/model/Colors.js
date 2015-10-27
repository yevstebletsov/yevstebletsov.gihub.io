/**
 * @class App.model.Colors
 * @extend Ext.data.Model
 *
 * Model which describe colors
 *
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */

Ext.define('App.model.Colors', {
    extend: 'Ext.data.Model',

    fields: [{
        type: 'string',
        name: 'name'
    },{
        type: 'string',
        name: 'text'
    }]
});


