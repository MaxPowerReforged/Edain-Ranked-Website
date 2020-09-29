var bucketName = "edain-ranked-replays";
var bucketRegion = "eu-central-1";
var IdentityPoolId = "eu-central-1:2926cce6-ac04-4f8a-aad7-8d3990ce4eb6";

 AWS.config.update({
                region: bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: IdentityPoolId
                })
            });

            var s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {Bucket: bucketName}
        });

function uploadReplay(fileName) {
   var files = document.getElementById('Upload_File').files;
     var file = files[0];
     s3.upload({
        Key: fileName,
        Body: file,
        ACL: 'public-read'
        }, function(err, data) {
        if(err) {
        reject('error');
        }
        alert('Successfully Uploaded!');
        })
	setTimeout(function(){ window.location.href = "index.html"; }, 1500);
   }