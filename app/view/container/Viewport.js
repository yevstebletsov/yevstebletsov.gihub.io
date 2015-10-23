/**
 * @class App.view.container.Viewport
 * @extend Ext.container.Container
 *
 * Base viewport that provide resize handling, to avoid persistence size from the start
 *
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */
Ext.define('App.view.container.Viewport', {
    extend: 'Ext.container.Container',
    alias: 'widget.appviewport',

    /**
     * @cfg {String} layout
     * Specify layout as fit for viewport
     * @private
     */
    layout: 'fit',

    /**
     * @cfg {String/HTMLElement/Ext.Element} renderTo
     * Always renders to div.main_viewport
     * @private
     */
    renderTo: Ext.get('main_viewport'),

    initComponent: function() {
        var me = this;

        this.callParent(arguments);

        setTimeout(function() {
            Ext.EventManager.onWindowResize(me.fireResize, me);
        }, 1);
    },

    /**
     * Window resize event handler, will take care of viewpport size
     * @param {Number} width
     * @param {Number} height
     * @private
     */
    fireResize: function(width, height){
        if (width != this.width || height != this.height) {
            this.setSize(width, height);
        }
    }
});
