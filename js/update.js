var ProductName =document.getElementById('ProductName')
var ProductUrl =document.getElementById('ProductUrl')



var Products

if(localStorage.getItem('ourProducts')==null)
{
    Products=[]
}else{
    Products=JSON.parse(localStorage.getItem('ourProducts'))
}
function addProdutName(){


    var Product={ 

        name:ProductName.value,   
        url:ProductUrl.value,   


    }
    Products.push(Product)
    console.log(Products);
    displayProducts()
    clear()
    localStorage.setItem('ourProducts',JSON.stringify(Products))

}


function displayProducts(){

var kobay=``

for( var i=0;i<Products.length;i++)
{
kobay+=`
<h3 >`+Products[i].name+`</h3>
<button onclick="link(`+i+`)" class="btn btn-primary mt-2" > visit</button>
<button onclick="deleteItem(`+i+`)" class="btn btn-danger mt-2">delete</button>`

}

document.getElementById('kobay').innerHTML=kobay

}

 function clear(){
     ProductName.value=''
     ProductUrl.value=''  
    }
   
function deleteItem(index)
{

Products.splice(index,1)
console.log(Products);
localStorage.setItem('ourProducts',JSON.stringify(Products))
displayProducts()

}
 

function link(index){
    
   
    console.log("indexxx",index);
    var URL=Products[index].url;
    console.log("product url",Products[index].url);
window.open(URL,"_blank");
    localStorage.setItem('ourProducts',JSON.stringify(Products))
displayProducts()
}







