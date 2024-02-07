import AWS from 'aws-sdk'

const S3 = new AWS.S3()

const params = {
    Bucket : 'ritiksbucket' , 
    Key : 'file.txt' , 
    ObjectAttributes : [
        'StorageClass' , 'ObjectSize' , 'ObjectParts' , 'ETag'
    ]
}

S3.getObjectAttributes(params , (err , data)=>{
     err ? console.log(err) : console.log(data)
})
