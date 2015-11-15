/**
 * 
 * @author Alexey
 * {global P}
 */
function Actions() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    // TODO : place your code here
    
    model.requery(function () {
        // TODO : place your code here
    });
    
    form.btnAddAction.onActionPerformed = function(event) {
        model.qActions.push({});
    };
    form.btnDelAction.onActionPerformed = function(event) {

    };
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
    form.btnCancel.onActionPerformed = function(event) {
        model.requery();
    };
}
