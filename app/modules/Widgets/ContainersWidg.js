/**
 * 
 * @author User
 */
define('ContainersWidg', [
    'forms/anchors',
    'forms/anchors-pane',
    'forms/border-pane',
    'forms/box-pane',
    'forms/card-pane',
    'forms/desktop-pane',
    'forms/flow-pane',
    'forms/grid-pane',
    'forms/item-event',
    'forms/scroll-pane',   
    'forms/split-pane',
    'forms/tabbed-pane',   
    'forms/tool-bar'

], function (
        Anchors,
        AnchorsPane,        
        BorderPane,
        BoxPane,
        CardPane,
        DesktopPane,
        FlowPane,
        GridPane,  
        ItemEvent,
        ScrollPane,
        SplitPane,
        TabbedPane, 
        ToolBar
        ) {

    return {  
        Anchors: Anchors,
        AnchorsPane: AnchorsPane,
        BorderPane: BorderPane,
        BoxPane: BoxPane,       
        CardPane: CardPane,       
        DesktopPane: DesktopPane,       
        FlowPane: FlowPane,       
        GridPane: GridPane,       
        ItemEvent: ItemEvent,       
        ScrollPane: ScrollPane,
        SplitPane: SplitPane,
        TabbedPane: TabbedPane,        
        ToolBar: ToolBar
    };
});
