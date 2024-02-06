import AWS from 'aws-sdk'
import fs from 'fs'

const S3 = new AWS.S3

const uploadImage =  (fileName)=>{
   
    const fileContent = fs.readFileSync(fileName)

    const params = {
        Bucket : 'ritiksbucket' , 
        ACL : 'public-read' , 
        Key : 'AWSIMGE.png' ,
        Body : fileContent
    } 

    S3.putObject(params , (err , data )=>{
         err ? console.log(err) : console.log(data)
    })
}

uploadImage('../img/img1.jpg')