import AWS from 'aws-sdk' 
import fs from 'fs'

const S3 = new AWS.S3()


   let BucketName = 'ritiksbucket'



const uploadFile = (fileName)=>{

    const file = fs.readFileSync(fileName)

    const params = {
        Bucket : BucketName , 
        Key : 'file.txt7' , 
        Body : file
    }

    S3.upload(params , (err , data)=>{
        err ? console.log(err) : console.log(data)
    })



}

uploadFile('../file/aws.txt')



