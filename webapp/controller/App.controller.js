sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";
    return Controller.extend("com.sap.iOSExternalIPAInstall.controller.App", {
        onInit: function () {},
        /**
         *@memberOf com.sap.iOSExternalIPAInstall.controller.App
         */
        downloadApp: function (oEvent) {
            //This code was generated by the layout editor.
            window.location.href =
                "itms-services://?action=download-manifest&amp;url=https://ipaexternalinstallation-rnzihte43v.dispatcher.hana.ondemand.com/assets/app.plist";
            sap.m.MessageToast.show("Thank you for downloading...");
        },
    });
});
