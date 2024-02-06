import AWS from 'aws-sdk'

const S3 = new  AWS.S3()


const params = {
    Bucket : 'ritiksbucket'
}


const deleteBucket = async ()=>{
    const data = await S3.listObjectsV2(params).promise();
    let content = data.Contents

    let bucketArray = content.map((obj)=>{
        //  console.log(obj.Key)
         return { Key: obj.Key }
    })
    
    console.log(bucketArray)

    

    if(content.length > 0){
     let  deleteObjects =  await S3.deleteObjects({
            Bucket : params.Bucket , 
            Delete : {Objects : bucketArray}
        }).promise()

       console.log(deleteObjects)
    }
    
    await S3.deleteBucket(params).promise()

}


deleteBucket()