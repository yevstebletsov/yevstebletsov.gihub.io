/*
 * @class App.view.viewcontroller.TestViewController
 * @extend Ext.app.ViewController
 *
 * Controller wich handle tabs events
 *
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */

Ext.define('App.view.panel.TabPanelController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.tabspanel',
    
    onSecondTabActivate: function(tab){
        var mainCmp = tab.up(),
            refs = mainCmp.getReferences(),
            colorCmp = refs.color,
            color = colorCmp.getValue(),
            button = tab.down('button');
        if(color){
            button.setStyle('background-color', color);
        }
    },
    
    onThirdTabActivate: function(tab){
        var mainCmp = tab.up(), 
            refs = mainCmp.getReferences(),
            htmlCmp = refs.html,
            html = htmlCmp.getValue(),
            viewModel = mainCmp.getViewModel();

        viewModel.set('htmlValue', html);
    }
});


