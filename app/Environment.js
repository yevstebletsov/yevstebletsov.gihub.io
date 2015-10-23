/**
 * @class Environment
 * @singleton
 *
 * Class responsible for handling environment variables and global settings about application, also environment save data
 * to local storage so it's make possible to restore it even after page closed
 *
 * @author Yevgeniy Stebletsov <yevgeniy.stebletsov@gmail.com>
 */

var Environment = new (function(){
    var savedDataHash = localStorage.getItem('environment'),
        dataHash = (typeof savedDataHash == 'string' ? Ext.JSON.decode(savedDataHash) : {}),
        callbacks = {};
        
    /**
     * Sync data to local storage
     *
     * @private
     */
    function sync() {
        localStorage.setItem('environment', Ext.JSON.encode(dataHash));
    }

    /**
     * Returns value from request string by the key name
     * 
     *@param {String} key
     *@return {String} value
     */
    this.getValueFromRequest = function(key) {
        var strSearch = location.search,
            str = strSearch.split("?"),
            strKeys = str[1].split("&"),
            dataKeysValues = {};
        
        Ext.Array.each(strKeys, function(key, index) {
            strKeys[index] = strKeys[index].split("=");
            dataKeysValues[strKeys[index][0]]=strKeys[index][1];
        });
        
        return dataKeysValues[key];
    };

    /**
     * Set environment variable by specified name
     *
     * @param {String} name
     * @param {*} value
     * @return {*}
     */
    this.set = function(name, value) {
        var callbackStack = callbacks[name];
        
        if(callbackStack) {
            for(var i = 0; i < callbackStack.length; i++) {
                callbackStack[i].fn.call(callbackStack[i].scope, value, dataHash[name]);
            }
        }

        dataHash[name] = value;

        sync();

        return value;
    };

    /**
     * Get environment variable by specified name
     *
     * @param {String} name
     * @return {*}
     */
    this.get = function(name) {
        return dataHash[name];
    };

    /**
     *
     * Add event handlers which will be triggered when environment variable will be changed with specified name
     *
     * @param {String} name specify on which variable change will be triggered callback function
     * @param {Function} callback event handler, which will accept two parameters:
     * - newValue - value which will be set
     * - oldValue - value which was set before
     * @param {Object} [scope=window] specify scope in which callback function will be call (default to window)
     */
    this.onSet = function(name, callback, scope) {
        if(!callbacks[name]) {
            callbacks[name] = [];
        }
        callbacks[name].push({
            fn : callback,
            scope : scope || window
        });
    };
    
});