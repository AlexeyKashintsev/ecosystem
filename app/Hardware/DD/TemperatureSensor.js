/**
 * 
 * @author Алексей
 */
define('TemperatureSensor',['AIO', 'logger'], function (AIO, Logger, ModuleName) {
    return function (devData) {
        var self = this;
        var aio = new AIO(devData.port);
        
        self.getRawValue = function() {
            return aio.value;
        };
        
        self.getValue = function() {
            var a = aio.value;
            var B = 3975;
            var rs = (1023-a)*10000/a;
            return 1/(Math.log(rs/10000)/B+1/298.15)-273.15;
        };
    };
});
