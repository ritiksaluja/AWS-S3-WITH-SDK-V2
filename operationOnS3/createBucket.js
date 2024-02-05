import AWS from 'aws-sdk'

AWS.config.update({region : 'ap-south-1'})

const params = {
    Bucket : 'ritiksbucket' , 
    ACL : 'private' , 
    CreateBucketConfiguration : {
        'LocationConstraint' : 'ap-south-1'
    }
}


const s3 = new AWS.S3()

s3.createBucket(params , (err , data)=>{
   err ?  console.log(err) : console.log(data)
})