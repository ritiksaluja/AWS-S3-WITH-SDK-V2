import AWS from 'aws-sdk'

const S3 = new AWS.S3


const listBucket = ()=>{
    S3.listBuckets((err , data)=>{
        err ? console.log(err) : console.log(data)
    })
}

listBucket()