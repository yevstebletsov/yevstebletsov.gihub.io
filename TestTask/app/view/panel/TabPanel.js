/**
 * @class App.view.panel.TabPanel
 * @extend Ext.tab.Panel
 *
 * Custom tab panel
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */
Ext.define('App.view.panel.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.testtabpanel',
    controller: 'tabsview',
    
    defaults: {
        margin: 20
    },
    
    items: [{
        title: 'One',
        layout: 'vbox',
        items: [{
            xtype: 'combobox',
            store: 'Colors',
            displayField: 'text',
            valueField: 'name',
            fieldLabel: 'Color',
            editable: false,
            emptyText: 'Select some color...',
            width: 500,
            reference: 'color'
        },{
            xtype: 'textarea',
            fieldLabel: 'HTML',
            emptyText: 'Type here html code...',
            width: 500,
            height: 200,
            reference: 'html'
        }]
    },{
        title: 'Two',
        items: [{
            xtype: 'button',
            width: 100,
            text: 'Okai'
        }],
        listeners: {
            activate: 'onSecondTabActivate'
        }
    }, {
        title: 'Tree',
        xtype: 'container',
        html: '',
        listeners: {
            activate: 'onThirdTabActivate'
        },
        emptyText: 'Type some HTML to the html area on the first tab...'
    }]
});
