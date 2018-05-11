import Data from '../Datafiles/Data.json';

export const DisplayTitle=Data => ({
type:'Display-Title',
payload:Data.title
})

// export const DisplayUserId=Data => ({
// type:'Display-UserId',
// payload:Data.userid
// })

// export const Displayid= Data =>  ({ 
// type :'Display-id',
// id:10
// })