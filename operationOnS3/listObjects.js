import AWS from 'aws-sdk'

const S3 = new  AWS.S3()


const params = {
    Bucket : 'ritiksbucket'
}


const listBucketObjects = async ()=>{
    const data = await S3.listObjectsV2(params).promise();
    let content = data.Contents


    
    console.log(content)
}

listBucketObjects()