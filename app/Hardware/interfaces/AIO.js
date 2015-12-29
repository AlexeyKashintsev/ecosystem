/**
 * @author Alexey
 * @module AIO Модуль-обертка над модулем нижнего уровня определения интерфейсов,
 * отвечающий за инициализацию аналогового порта
 * @param {type} Logger Модуль, отвечающий за логирование
 * @param {type} Interface Модуль, отвечающий за инициализацию интерфейсов на нижнем уровне
 * @param {type} ModuleName Имя текущего модуля
 * @returns {Function} Функция-конструктор, определяющая объект
 */
define(['logger', 'Interface'], function (Logger, Interface, ModuleName) {
    /**
     * Функция-конструктор, определяющая объект с полями value и floatValue
     * @param {type} port Номер порта инициализируемого интерфейса
     * @returns {undefined}
     */
    return function (port) {
        var self = this;
        
        Logger.info('Initializing module AIO on port: ' + port);
        
        var interface = new Interface();
        var aio = new interface.AIO(port);
        
        Object.defineProperty(self, 'value', {
            get: function() {
                return aio.read();
            }
        });
        
        Object.defineProperty(self, 'floatValue', {
            get: function() {
                return aio.readFloat();
            }
        });

        Logger.info('Module AIO has successfully initialized on port: ' + port);
    };
});
