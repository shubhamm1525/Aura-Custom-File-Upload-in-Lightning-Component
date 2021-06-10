({
 

doSave: function (component, event, helper) {
        
        //As per scenario the file will be linked with created Object Record ex: Account or Contact or Opportunity.
        
        var action = cmp.get("c.YourApexClassMethod");
        action.setParams({  });
 
        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                 //once the record is created save the Id of the created record in attribute(variable).
                 component.set("!v.recID", response.getReturnValue() ) ;  

                 //After record is successfully created check if file is selected or not and if selected upload as a related file.
                if( component.find("fuploader").get("v.files") != null && component.find("fuploader").get("v.files").length > 0 ) {  
                var File = component.find("fuploader").get("v.files");
                var label = component.find("fuploader").get("v.label");
                    if( Result.PSO1.Id != null){
                        helper.uploadHelper(component, event, File , label);
                        console.log( 'Uploading 1' );
                    }
                } 

            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
  
        $A.enqueueAction(action);
    }
 

})
