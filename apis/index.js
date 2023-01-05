const fetching =async()=>{
    
const data = await fetch("https://jsonplaceholder.typicode.com/posts")
const response= await data.json()

response.map((element,index)=>{
  //  console.log(element)
 document.getElementById('apiResponse').innerHTML += response[index].id +" " +response[index].title +"<br>" ;
})

}