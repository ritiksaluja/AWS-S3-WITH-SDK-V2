import AWS from 'aws-sdk'

const S3 = new  AWS.S3()


const params = {
    Bucket : 'salujasbucket' , 
    Key : 'file.txt'
}

S3.deleteObject(params , (err , data)=>{
    err ? console.log(err) : console.log(data)
})
