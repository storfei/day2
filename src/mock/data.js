import mock from "mockjs"

const data = mock.mock({
    "arr|4":[
        {
            title:"@title",
            "id|+1":0,
            "price|10-40":23
        }
    ]
})

export default data

// mock.mock("api/one",()=>{
//     return data.arr
// })