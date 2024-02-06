import AWS from 'aws-sdk'

const S3 = new  AWS.S3()

const params = {
    Bucket : 'ritiksbucket' , 
    Prefix : 'file.txt7'
}

S3.listObjects(params , (err , data)=>{
    err ? console.log(err) : console.log(data)
})