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

var s3List;

async function listS3Objects() {
	s3List = await s3.listObjects().promise();
	s3List.then(function(data) {
		console.log('sucess!');
		return data;
	}).catch(function(err) {
		console.log(err);
	});
}

async function listS3Objects() {
	const s3List = await s3.listObjects( (err) => {
		if (err) {
			console.log(err);
		}
	});
	return s3List.data;
}