/**
 * 
 * @author User
 */
define('Starter', ['orm', 'forms', 'ui', 'ActionsView', 'DevicesView', 'TimersView'],
        function (Orm, Forms, Ui, actionsView, devisesView, timersView, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);
                self.show = function () {
                    form.show();
                };

                var objForms = [
                    {FormName: 'ActionsView'},
                    {FormName: 'DevicesView'},
                    {FormName: 'TimersView'}];

                form.mgForms.data = objForms;

                form.mgForms.onMouseClicked = function (evt) {
                    if (evt.clickCount == 1) {
                        form.title = form.mgForms.selected[0].FormName;
                        form.pnlForm.clear();
                        switch (form.title) {
                            case objForms[0].FormName : actionsview.show(form.pnlForm); break;
                            case objForms[1].FormName : devisesview.show(form.pnlForm); break;  
                            case objForms[2].FormName : timersview.show(form.pnlForm); break;  
                        }
                    }
                    //form.btnConfig.onActionPerformed();                            
                };

                var actionsview = new actionsView();
                var devisesview = new devisesView();
                var timersview = new timersView();
            }
            return module_constructor;
        });
