/**
 * 
 * @author Alexey
 */
define('ErrorThrow',['orm'], function (Orm, ModuleName) {
    return function () {
        var self = this, model = Orm.loadModel(ModuleName);
        
        function error(errorType) {
            throw { 
                name:        errorType, 
                level:       "Show Stopper", 
                message:     "Error detected. " + errorType, 
                htmlMessage: "Error detected. " + errorType,
                toString:    function(){return this.name + ": " + this.message;} 
            };
        }
    };
});
