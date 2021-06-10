# Custom-File-Upload-in-Lightning-Component

While working on a Aura Component form  for creating custom object records in lightning Community, I had to upload file as a related record to the created record.
As the lightning:fileUpload required record Id as a paramater , It was difficult to upload files using this tag.

So After searching on internet found some good resources which helped me resolve my file upload functionality.

My task was to create a record and upload the file as a child record.
So on the doSave button first I am creating the record then saving the created record Id to an attribute and using that as a paramater for file upload.

Below are the links of Blogs and Github links which I found useful.

1) Biswajeet Samal's Blog : https://www.biswajeetsamal.com/blog/custom-file-upload-in-salesforce-lightning-component/
2) SalesforceCodex : https://salesforcecodex.com/salesforce/upload-multiple-files-in-lightning-component/
3) SalesforceBobLightning : https://gist.github.com/SalesforceBobLightning/7e244fe097390000c45a7db2a0957aa4
4) Stack Exchange : https://salesforce.stackexchange.com/questions/157024/uploading-files-in-contentversion-using-lightning-component

<b>NOTE<b> : I referred the above links to create file upload code as per my requirement , kindly go through each link and try to understand the code and use it as per your requirement. 
