function add() {
    const car= {
        brand:brand.value,
        price:price.value,
        key:key.value,
    };
    if (brand.value==""|| price.value==""|| key.value==""){
        alert('Please fill all the feilds')
    }
    else {
        
        if(car.key in localStorage){
            alert("Car details already exsists")
        }
        else{
        
            window.localStorage.setItem(car.key, JSON.stringify(car))
            alert('Car details added successfully')
        }
        
    }
}
function retrieve(){
    let key=searchid.value
    console.log(key);
    if(key in localStorage){
        
        temp=JSON.parse(localStorage.getItem(key));
        console.log(temp);
        result.innerHTML=`<div class="p-3 m-2 border border-2 rounded-3 border-secondary">
        key : ${temp.key}<br>
        car brand: ${temp.brand} <br>
        car price: ${temp.price}<br>
        </div>`
    }
    else{
        alert("Enter valid key")
    }
}
function remove(){
    let dkey=delid.value
    console.log(dkey);
    if(dkey in localStorage){
        
        dtemp=JSON.parse(localStorage.removeItem(dkey));
        console.log(dtemp);
        alert("Car details deleted successfully")
    }else{
        alert("Enter valid key")

    }    
}
function removeall(){
    localStorage.clear();
}
