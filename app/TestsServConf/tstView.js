/**
 * 
 * @author Алексей
 * {global P}
 */
function tstView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    var serv1 = new P.ServerModule('Stst');
    var serv2 = new P.ServerModule('Stst');
    
    form.bs1.onActionPerformed = function(event) {
        serv1.setT(form.textField.text);
    };
    form.bg1.onActionPerformed = function(event) {
        serv1.getT(function(T) {form.textField.text = T});
    };
    
    form.bs2.onActionPerformed = function(event) {
        serv2.setT(form.textField1.text);
    };
    form.bg2.onActionPerformed = function(event) {
        serv2.getT(function(T) {form.textField1.text = T});
    };
    
}
