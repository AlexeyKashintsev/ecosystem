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
        //Инициализация контекста возращаемой функции-коструктора
        var self = this;
        
        Logger.info('Initializing module AIO on port: ' + port);
        
        //Инициализация интерфейсов, определенных на нижнем уровне
        var interface = new Interface();
        //Инициализация аналогового интерфейса, определенного на нижнем уровне
        var aio = new interface.AIO(port);
        
        //Определение свойства value, доступного только для чтения, возвращающего
        //целочисленное значение (основное значение интерфейса)
        Object.defineProperty(self, 'value', {
            get: function() {
                return aio.read();
            }
        });
        
        //Определение свойства floatValue, доступного только для чтения, возвращающего
        //значение с плавающей точкой
        Object.defineProperty(self, 'floatValue', {
            get: function() {
                return aio.readFloat();
            }
        });

        Logger.info('Module AIO has successfully initialized on port: ' + port);
    };
});
