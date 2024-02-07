import AWS from 'aws-sdk'

const S3 = new  AWS.S3()


const params = {
    Bucket : 'ritiksbucket' , 
    Delete : {Objects : [
        {
            Key : 'file.txt'
        } , 
        {
            Key : 'file.txt7'  
        }
    ]}
}

let deleteObjects = async()=>{

    let deleteObject = await S3.deleteObjects(params).promise()
    console.log(deleteObject)

}

deleteObjects()




