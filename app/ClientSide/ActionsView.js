/**
 * 
 * @author Алексей
 */
define('ActionsView', ['orm', 'FormLoader', 'rpc', 'forms/label', 'forms/model-spin', 'forms/model-check-box', 'forms/anchors', 'forms/anchors-pane'],
        function (Orm, FormLoader, Rpc, Label, ModelSpin, ModelCheckBox, Anchors, AnchorsPane, ModuleName) {
            function module_constructor() {
                var self = this,
                        model = Orm.loadModel(ModuleName),
                        form = FormLoader(ModuleName, model, self);
                //var servDev = new Rpc.Proxy('Devices');
               
                model.requery();

                var settings = {}, set_count = 0, setData = {}, data;
                function clearSettings() {
                    form.pnlSettings.clear();
                    settings = {};
                    set_count = 0;
                    setData = {};
                }                

                function fillSettings(aSetConf, aDevConf) {
                    var setConf = JSON.parse(aSetConf);
                    setData = aDevConf ? JSON.parse(aDevConf) : {};
                    for (var j in setConf) {
                        settings[j] = {};
                        settings[j].label = new Label();
                        settings[j].label.text = setConf[j].description;
                        settings[j].label.height = 25;
                        if (setData[j] === undefined)
                            setData[j] = null;

                        switch (setConf[j].value_type) {
                            case 'integer':
                            {
                                settings[j].control = new ModelSpin();
                                settings[j].control.value = setData[j];
                                settings[j].control.height = 30;
                                break;
                            }
                            case 'boolean':
                            {
                                settings[j].control = new ModelCheckBox();
                                settings[j].control.value = setData[j];
                                settings[j].control.height = 30;
                                break;
                            }
                        }

                        var pnl = new AnchorsPane();
                        pnl.height = 30;
                        pnl.add(settings[j].label, new Anchors(0, null, 150, 0, 25, 0));
                        pnl.add(settings[j].control, new Anchors(150, null, 0, 0, 30, 0));
                        form.pnlSettings.add(pnl);
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
                    data.action_params = JSON.stringify(setData);
                }
                ;

                form.btnAdd.onActionPerformed = function (event) {
                    model.qActions.push({});
                };

                form.mgActions.onItemSelected = function (event) {
                    if (data)
                        applySettings();
                    clearSettings();
                    data = event.item;
                    fillSettings(event.item.act_def.act_params, data.action_params);
                };

                form.btnDel.onActionPerformed = function (event) {
                    delete form.qActions.selected[0];
                };
                form.btnRequery.onActionPerformed = function (event) {
                    model.requery();
                };

                form.btnSave.onActionPerformed = function (event) {
                    model.save(function () {
                        servDev.devLoadConfFromDatabase(function () {});
                    });
                };
                form.btnCancel.onActionPerformed = function (event) {
                    form.close();
                };
                form.btnDoAction.onActionPerformed = function (event) {
                    if (!model.modified) {
                        servDev.devPerformAction(form.mgActions.selected[0].eco_actions_id, function (res) {
                            alert(res);
                        });
                    } else {
                        alert('Сохраните изменения!');
                    }
                };
            }
            return module_constructor;
        });
