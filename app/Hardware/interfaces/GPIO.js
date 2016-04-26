/**
 * 
 * @author Alexey
 */
define('GPIO',['logger', 'Interface'], function (Logger, Interface, ModuleName) {
    return function (port, dir, init) {
        var self = this;
        
        var interface = new Interface();
        
        var state = !!init;
        var gpio = new interface.GPIO(port);
        gpio.dir(dir == 'out' ? interface.DIR.DIR_OUT : interface.DIR.DIR_IN);
        if (dir == 'out')
            gpio.write(state);

        Object.defineProperty(this, 'value', {
            set: function(aValue) {
                if (dir === 'out') {
                    gpio.write(aValue);
                    state = aValue;
                } else {
                    error('GPIO: couldn\'t set value for input pin!' );
                }
            },
            get: function() {
                return dir == 'in' ? gpio.read() : state;
            }
        });
    };
});
