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
                .setWidth("9.0625em")
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
                .setLeft("44.19047619047619em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
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
                .setLeft("16.761904761904763em")
                .setTop("1.5238095238095237em")
                .setWidth("22.552380952380954em")
                .setHeight("2.5142857142857142em")
                .setLabelSize("8em")
                .setLabelCaption("Search")
                .setType("popbox")
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