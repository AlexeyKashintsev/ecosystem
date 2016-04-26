/**
 * 
 * @author User
 */
define('DataWidg', [    
    'forms/cell-render-event',
    'forms/item-event',
    'forms/model-check-box',
    'forms/model-combo',
    'forms/model-date',
    'forms/model-formatted-field',
    'forms/model-grid',
    'forms/model-spin',
    'forms/model-text-area'

], function (
        CellRenderEvent,  
        ItemEvent,
        ModelCheckBox,
        ModelCombo,
        ModelDate,
        ModelFormattedField,
        ModelGrid,     
        ModelSpin,
        ModelTextArea
        ) {

    return {
        CellRenderEvent: CellRenderEvent,
        ItemEvent: ItemEvent, 
        ModelCheckBox: ModelCheckBox,
        ModelCombo: ModelCombo,
        ModelDate: ModelDate,
        ModelFormattedField: ModelFormattedField,
        ModelGrid: ModelGrid,
        ModelSpin: ModelSpin,
        ModelTextArea: ModelTextArea       
    };
});
