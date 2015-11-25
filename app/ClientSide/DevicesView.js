/* global P */
/**
 * 
 * @author Алексей
 * @module DevicesView
 * {global P}
 */
function DevicesView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    model.requery();
    
    var settings = {}, set_count = 0, setData = {}, data;
    function clearSettings() {
        for (var j in settings) {
            form.pnlSettings.remove(settings[j].label);
            form.pnlSettings.remove(settings[j].control);
            delete settings[j];
        }
        settings = {};
        set_count = 0;
        setData = {};
    }
    
    function fillSettings(aSetConf, aDevConf) {
        var setConf = JSON.parse(aSetConf);
        setData = aDevConf ? JSON.parse(aDevConf) : {};
        for (var j in setConf) {
            settings[j] = {};
            settings[j].label =  new P.Label();
            settings[j].label.text = setConf[j].description;
            if (!setData[j])
                setData[j] = null;
            
            switch (setConf[j].value_type) {
                case 'integer': {
                    settings[j].control = new P.ModelSpin();
                    settings[j].control.value = setData[j];
                    settings[j].control.height = '40px';
                    break;
                }
                case 'boolean': {
                    settings[j].control = new P.ModelCheckBox();
                    settings[j].control.value = setData[j];
                    break;
                }
            }
            
            form.pnlSettings.add(settings[j].label, set_count, 0);
            form.pnlSettings.add(settings[j].control, set_count, 1);
            set_count++;
        }
    }
    
    function applySettings() {
        for (var j in setData) {
            try {
                setData[j] = settings[j].control.value;
            } catch (e) {
                console.log('Probably bad device setting data. Error: ' + e);
            }
        }
        data.dev_data = JSON.stringify(setData);
    };
    
    form.btnAdd.onActionPerformed = function(event) {
        model.qDevices.push({});
    };
    
    form.mgDevices.onItemSelected = function(event) {
        if (data)
            applySettings();
        clearSettings();
        data = event.item;
        fillSettings(event.item.dev_types.required_settings, data.dev_data);
    };
    form.btnDel.onActionPerformed = function(event) {
        delete form.mgDevices.selected[0];
    };
    form.btnRequery.onActionPerformed = function(event) {
        model.requery();
    };

    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
    form.btnCancel.onActionPerformed = function(event) {
        form.close();
    };
};
