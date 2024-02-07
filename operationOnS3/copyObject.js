import AWS from 'aws-sdk'

const S3 = new AWS.S3()


const params = {
    Bucket : "salujasbucket" , 
    CopySource : 'ritiksbucket/file.txt' , 
    Key : 'file.txt' , 

}

S3.copyObject(params , (err , data)=>{
  err ? console.log(err) : console.log(data)
})