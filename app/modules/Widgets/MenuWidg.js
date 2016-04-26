/**
 * 
 * @author User
 */
define('MenuWidg', [
    'forms/check-menu-item',
    'forms/menu',
    'forms/menu-bar',
    'forms/menu-item',
    'forms/menu-separator',
    'forms/popup-menu',
    'forms/radio-menu-item'

], function (
        CheckMenuItem,        
        Menu,
        MenuBar,
        MenuItem,
        MenuSeparator,
        PopupMenu,
        RadioMenuItem
        ) {

    return {
        CheckMenuItem: CheckMenuItem,
        Menu: Menu,
        MenuBar: MenuBar,
        MenuItem: MenuItem,
        MenuSeparator: MenuSeparator,        
        PopupMenu: PopupMenu,
        RadioMenuItem: RadioMenuItem
    };
});
