/**
 * @class App.view.panel.TabPanel
 * @extend Ext.tab.Panel
 *
 * Custom tab panel
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */
Ext.define('App.view.panel.TabPanel', {
    extend: 'Ext.tab.Panel',
    
    requires: [
        'App.view.panel.TabPanelController'
    ],
    
    controller: 'tabspanel',
    
    defaults: {
        margin: 20
    },
    
    viewModel: {
        data: {
            htmlValue: ''
        }
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
        bind: {
            html: '{htmlValue}'
        },
        listeners: {
            activate: 'onThirdTabActivate'
        }
    }]
});
