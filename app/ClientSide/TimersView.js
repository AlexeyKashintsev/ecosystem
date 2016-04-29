/**
 * 
 * @author Алексей
 * {global P}
 */

define('TimersView', ['orm', 'FormLoader', 'rpc', 'Widgets', 'DataWidg', 'ContainersWidg', 'invoke'],
        function (Orm, FormLoader, Rpc, Widgets, DataWidg, ContainersWidg, Invoke, ModuleName) {
            function module_constructor() {
                var self = this,
                        model = Orm.loadModel(ModuleName),
                        form = FormLoader(ModuleName, model, self);

                var timersMod = new Rpc.Proxy('Timers');

                model.requery();

                form.btnAdd.onActionPerformed = function (event) {
                    model.qTimers.push({});
                    Invoke.later(function () {
                        form.mgTimers.makeVisible(model.qTimers[model.qTimers.length - 1], true);
                    });
                };
                form.btnDel.onActionPerformed = function (event) {
                    model.qTimers.remove(form.mgTimers.selected);
                };
                form.btnRequery.onActionPerformed = function (event) {
                    model.requery();
                };
                form.btnAddAction.onActionPerformed = function (event) {
                    model.qActCon.push({
                        timer: form.mgTimers.selected[0].act_timer_id
                    });
                };
                form.btnDelAction.onActionPerformed = function (event) {
                    model.qActCon.remove(form.mgActions.selected);

                };
                form.button.onActionPerformed = function (event) {
                    model.save(function () {
                        timersMod.reloadTimers();
                    });
                };
                
                form.btnCancel.onActionPerformed = function (event) {
                    form.close();
                };
            }
            return module_constructor;
        });

