import AWS from 'aws-sdk'

const S3 = new  AWS.S3()


const params = {
    Bucket : 'ritiksbucket' , 
    Key : 'file.txt'
}

S3.getObject(params , (err , data)=>{
    err ? console.log(err): console.log(data)

})
