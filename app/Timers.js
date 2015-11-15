/**
 * 
 * @author Alexey
 * {global P}
 */
function Timers() {
    var self = this
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
}
