import AWS from 'aws-sdk'

const S3 = new AWS.S3

const params = {
    Bucket : 'ritiksbucket'
}


const deleteBucket = ()=>{

    S3.deleteBucket(params , (err ,data)=>{
       err ? console.log(err) : console.log("bucket deleted" , data)
    })

}

deleteBucket()