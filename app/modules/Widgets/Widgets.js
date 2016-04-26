/**
 * 
 * @author User
 */
define('Widgets', [
    'forms/action-event',    
    'forms/button',
    'forms/button-group',    
    'forms/check-box', 
    'forms/component-event',
    'forms/drop-down-button',
    'forms/focus-event',
    'forms/formatted-field',
    'forms/html-area',
    'forms/item-event',
    'forms/key-event',
    'forms/label',
    'forms/mouse-event',
    'forms/password-field',
    'forms/progress-bar',
    'forms/radio-button',    
    'forms/slider',   
    'forms/text-area',
    'forms/text-field',
    'forms/toggle-button',   
    'forms/value-change-event'  

], function (
        ActionEvent,
        Button,
        ButtonGroup,        
        CheckBox, 
        ComponentEvent,      
        DropDownButton,
        FocusEvent,        
        FormattedField,           
        HtmlArea,        
        ItemEvent,        
        KeyEvent,        
        Label,
        MouseEvent,
        PasswordField,
        ProgressBar,
        RadioButton,        
        Slider,
        TextArea,
        TextField,
        ToggleButton,
        ValueChangeEvent
        ) {

    return {
        ActionEvent: ActionEvent,       
        Button: Button,
        ButtonGroup: ButtonGroup,        
        CheckBox: CheckBox, 
        ComponentEvent: ComponentEvent,
        DropDownButton: DropDownButton,  
        FocusEvent: FocusEvent,
        FormattedField: FormattedField,
        HtmlArea: HtmlArea,
        ItemEvent: ItemEvent,
        KeyEvent: KeyEvent,
        Label: Label,
        MouseEvent: MouseEvent,
        PasswordField: PasswordField,  
        ProgressBar: ProgressBar,
        RadioButton: RadioButton,
        Slider: Slider,
        TextArea: TextArea,
        TextField: TextField,
        ToggleButton: ToggleButton,
        ValueChangeEvent: ValueChangeEvent
    };

//    function module_constructor() {
//        var self = this, model = Orm.loadModel(ModuleName);
//
//        // TODO : place constructor code here
//
//        self.execute = function () {
//            // TODO : place application code here
//        };
//    }
//    return module_constructor;
});
