var request=new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function()
{
var data=JSON.parse(this.response)
console.log(data)
for(var i in data)
{
console.log("Country name:"+data[i].name+","+"Capital:"+data[i].capital)
}
var filter=data.filter((item)=>{
return item.capital.length<5
})
for(var i in filter)
{
console.log(filter[i].capital)
}
var caps=data.map((item)=>{
return item.name.toUpperCase()
})
console.log(caps)
var findName=data.find((item)=>{
return item.name==='India'
})
console.log(findName)
}
request.send()