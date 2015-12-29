/**
 * 
 * @author Алексей
 * {global P}
 */
function TimersView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
            
    var timersMod = new P.ServerModule('Timers');
    
    self.show = function () {
        form.show();
    };
    
    model.requery();
    
    form.btnAdd.onActionPerformed = function(event) {
        model.qTimers.push({});
    };
    form.btnDel.onActionPerformed = function(event) {
        delete form.mgTimers.selected[0];
    };
    form.btnRequery.onActionPerformed = function(event) {
        model.requery();
    };
    form.btnAddAction.onActionPerformed = function(event) {
        model.qActCon.push({
            timer:  form.mgTimers.selected[0].act_timer_id
        });
    };
    form.btnDelAction.onActionPerformed = function(event) {
        delete form.mgActions.selected[0];
    };
    form.button.onActionPerformed = function(event) {
        model.save(function() {
            timersMod.reloadTimers();
        });
    };
}
