/*
 * @class App.view.viewcontroller.TestViewController
 * @extend Ext.app.ViewController
 *
 * Controller wich handle tabs events
 *
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */

Ext.define('App.view.viewcontroller.TestViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.tabsview',
    
    onSecondTabActivate: function(tab){
        var colorCmp = this.lookupReference('color'),
            color = colorCmp.getValue(),
            button = tab.down('button');
        if(color){
            button.setStyle('background-color', color);
        }
    },
    
    onThirdTabActivate: function(tab){
        var htmlCmp = this.lookupReference('html'),
            html = htmlCmp.getValue();
    
        if(html && html != ""){
            tab.setHtml(html);
        }else{
            if(tab.emptyText){
                tab.setHtml("<i><h3 style='color:gray;'>" + tab.emptyText + "</h3></i>");
            }
        }
    }
});


