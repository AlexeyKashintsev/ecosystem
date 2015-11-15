/**
 * 
 * @author Alexey
 * {global P}
 */
function devList() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    
}
