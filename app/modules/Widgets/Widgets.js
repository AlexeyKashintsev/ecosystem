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
    'forms/popup-menu',
    'forms/progress-bar',
    'forms/radio-button',
    'forms/radio-grid-column',
    'forms/radio-menu-item',
    'forms/scroll-pane',
    'forms/service-grid-column',
    'forms/slider',
    'forms/split-pane',
    'forms/tabbed-pane',
    'forms/text-area',
    'forms/text-field',
    'forms/toggle-button',
    'forms/tool-bar',
    'forms/value-change-event',
    'forms/window-event'

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
        PopupMenu,
        ProgressBar,
        RadioButton,
        RadioGridColumn,
        RadioMenuItem,
        ScrollPane,
        ServiceGridColumn,
        Slider,
        SplitPane,
        TabbedPane,
        TextArea,
        TextField,
        ToggleButton,
        ToolBar,
        ValueChangeEvent,
        WindowEvent
        ) {

    return {
        ActionEvent: ActionEvent,
        Anchors: Anchors,
        AnchorsPane: AnchorsPane,
        BorderPane: BorderPane,
        BoxPane: BoxPane,
        Button: Button,
        ButtonGroup: ButtonGroup,
        CardPane: CardPane,
        CellRenderEvent: CellRenderEvent,
        CheckBox: CheckBox,
        CheckGridColumn: CheckGridColumn,
        CheckMenuItem: CheckMenuItem,
        ComponentEvent: ComponentEvent,
        ContainerEvent: ContainerEvent,
        DesktopPane: DesktopPane,
        DropDownButton: DropDownButton,
        FlowPane: FlowPane,
        FocusEvent: FocusEvent,
        Form: Form,
        FormattedField: FormattedField,
        GridPane: GridPane,
        HtmlArea: HtmlArea,
        ItemEvent: ItemEvent,
        KeyEvent: KeyEvent,
        Label: Label,
        Menu: Menu,
        MenuBar: MenuBar,
        MenuItem: MenuItem,
        MenuSeparator: MenuSeparator,
        ModelCheckBox: ModelCheckBox,
        ModelCombo: ModelCombo,
        ModelDate: ModelDate,
        ModelFormattedField: ModelFormattedField,
        ModelGrid: ModelGrid,
        ModelGridColumn: ModelGridColumn,
        ModelSpin: ModelSpin,
        ModelTextArea: ModelTextArea,
        MouseEvent: MouseEvent,
        PasswordField: PasswordField,
        PopupMenu: PopupMenu,
        ProgressBar: ProgressBar,
        RadioButton: RadioButton,
        RadioGridColumn: RadioGridColumn,
        RadioMenuItem: RadioMenuItem,
        ScrollPane: ScrollPane,
        ServiceGridColumn: ServiceGridColumn,
        Slider: Slider,
        SplitPane: SplitPane,
        TabbedPane: TabbedPane,
        TextArea: TextArea,
        TextField: TextField,
        ToggleButton: ToggleButton,
        ToolBar: ToolBar,
        ValueChangeEvent: ValueChangeEvent,
        WindowEvent: WindowEvent
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
