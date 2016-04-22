/**
 * @public
 * @author minya92
 */
define('FormLoader', ['forms'], function (Forms, ModuleName) {
    return function(ModuleName, model, self) {
        var form = Forms.loadForm(ModuleName, model);
        
        self.show = function (aPanel) {
            var cont = aPanel ? (typeof (aPanel) === 'object' ? aPanel
                    : document.getElementById(aPanel))
                    : self.container;
            if (cont) {
                if (cont.add)
                    cont.add(form.view, {left: 0, top: 0, right: 0, bottom: 0});
                else
                    form.view.showOn(cont);
                if (form.onWindowOpened)
                    form.onWindowOpened();
            } else
                form.show();
        };

        self.showModal = function(callback) {
            form.showModal(callback);
        };

        return form;
    }
});
