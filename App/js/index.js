// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button1")
                .setLeft("1.25em")
                .setTop("1.25em")
                .setWidth("7.1875em")
                .setHeight("2.3125em")
                .setCaption("Discord")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#000000",
                        "background-color" : "#000000",
                        "font-family" : "arial black,avant garde",
                        "font-size" : "16px",
                        "border-radius" : "15px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button11")
                .setLeft("50.285714285714285em")
                .setTop("1.5238095238095237em")
                .setWidth("9.904761904761905em")
                .setHeight("2.8190476190476192em")
                .setCaption("Profil")
                .setType("status")
                .setCustomStyle({
                    "KEY" : {
                        "border-radius" : "15px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput85")
                .setLeft("6.857142857142857em")
                .setTop("1.5238095238095237em")
                .setWidth("43.12380952380953em")
                .setHeight("3.276190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Search")
                .setType("popbox")
            );
            
            append(
                xui.create("xui.UI.Video")
                .setHost(host,"xui_ui_video1")
                .setLeft("3.0476190476190474em")
                .setTop("8.380952380952381em")
                .setWidth("27.123809523809523em")
                .setHeight("15.085714285714285em")
                .setSrc("https://drive.google.com/file/d/1VpWaPTKb8hlWdo4oViBMnXj3gCiivCal/preview")
            );
            
            append(
                xui.create("xui.MessageService")
                .setHost(host,"xui_messageservice1")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});