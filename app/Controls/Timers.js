/**
 * 
 * @author Алексей
 * @module Timers
 * @resident
 * @public
 */
define('Timers', ['orm', 'rpc', 'WatchDog', 'logger'], function (Orm, Lpc, WatchDog, Logger, ModuleName) {
    return function () {
        var self = this, model = Orm.loadModel(ModuleName);
        var devices = new Lpc.Proxy('Devices');
        var timers = [], timerArray = [], wd;
        
        function loadActions() {
            var timer = timerArray.pop();
            if (timer) {
                model.qActCon.params.timer = timer.id;
                model.qActCon.requery(function() {
                    model.qActCon.forEach(function(conAction) {
                        timer.el.actions.push(conAction.action);
                    });
                    loadActions();
                });
            } else {
                wd = new WatchDog(60000, timerCheck);
            }
        }
        
        function reloadTimers() {
            model.requery(function() {
                if (wd)
                    wd.stop();
                
                timers = [];
                timerArray = [];
                model.qTimers.forEach(function(timer) {
                    var hh = timer.time.getHours();
                    var mm = timer.time.getMinutes();
                    //var ss = timer.time.getSeconds();
                    if (!timers[hh])
                        timers[hh] = [];
                    if (!timers[hh][mm])
                        timers[hh][mm] = [];
                    var el = {
                        id:         timer.act_timer_id,
                        actions:    []
                    }
                    timers[hh][mm].push(el);
                    timerArray.push({
                        id: timer.act_timer_id,
                        hh: hh,
                        mm: mm,
                        el: el
                    });
                });
                loadActions();
            });
            return true;
        };
        
        function timerCheck() {
            var time = new Date();
//            Logger.info('New time check ' + time.toTimeString());
            var hh = time.getHours();
            if (timers[hh]) {
                var mm = time.getMinutes();
                if (timers[hh][mm]) {
                    Logger.info('Timers found ' + timers[hh][mm].length);
                    timers[hh][mm].forEach(function(timer) {
                        Logger.info('Executing timer\'s ' + timer.id + ' events');
                        timer.actions.forEach(function(action) {
                            Logger.info('Event id: ' + action);
                            devices.devPerformAction(action);
                        });
                    });
                }
            }
        };
        
        reloadTimers();
        self.reloadTimers = reloadTimers;
    };
});
