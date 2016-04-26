/**
 * 
 * @author User
 */
define('ColumnsWidg', [
    'forms/check-grid-column',  
    'forms/model-grid-column',
    'forms/radio-grid-column', 
    'forms/service-grid-column'    

], function (        
        CheckGridColumn,
        ModelGridColumn,
        RadioGridColumn,
        ServiceGridColumn
        ) {

    return {
        CheckGridColumn: CheckGridColumn,        
        ModelGridColumn: ModelGridColumn,       
        RadioGridColumn: RadioGridColumn,
        ServiceGridColumn: ServiceGridColumn
    };
});
