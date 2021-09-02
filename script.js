//h1
var h1 = document.createElement('h1');
h1.innerHTML="Open Brewery DB";
document.body.append(h1);

//div
var div = document.createElement('div');
div.setAttribute('id','show');
document.body.append(div);


//table
var table = document.createElement('table');
table.setAttribute('class','table table-bordered');
table.setAttribute('id','mytable');
document.body.append(table);

var thead = document.createElement('thead');
document.body.append(thead);

var tr = document.createElement('tr');
var th1 = createtrth('th', 'Name');
var th2 = createtrth('th', 'Type');
var th3 = createtrth('th', 'Address');
var th4 = createtrth('th', 'URL');
var th5 = createtrth('th', 'Phone No');

tr.append(th1,th2,th3,th4,th5);
thead.append(tr);
table.append(thead);
div.append(table);

function createtrth(elementname, value) {
    
    var ele = document.createElement(elementname);
    ele.innerHTML = value;
    return ele;
}


var breweryurl = 'https://api.openbrewerydb.org/breweries';
async function click1(){
    //fetch api
    var brewery = await fetch(breweryurl);
    var brewerydata = await brewery.json();
    console.log(brewerydata);

    var table1 = document.getElementById('mytable');

    for(var i=0;i<brewerydata.length;i++){
        var tr = table1.insertRow(-1);
        var tabcell1 = tr.insertCell(-1);
        var tabcell2 = tr.insertCell(-1);
        var tabcell3 = tr.insertCell(-1);
        var tabcell4 = tr.insertCell(-1);
        var tabcell5 = tr.insertCell(-1);
        tabcell1.innerHTML=JSON.stringify(brewerydata[i].name);
        tabcell2.innerHTML=JSON.stringify(brewerydata[i].brewery_type);
        tabcell3.innerHTML=JSON.stringify(brewerydata[i].street);
        tabcell4.innerHTML=JSON.stringify(brewerydata[i].website_url);
        tabcell5.innerHTML=JSON.stringify(brewerydata[i].phone);
    }

        // var divContainer = document.getElementById("mytable").value;
        // divContainer.innerHTML = "";
        // divContainer.appendChild(table1);
}


//button
var button = document.createElement('input');
button.setAttribute('type','button');
button.setAttribute('id','button');
button.setAttribute('value','View all');
button.setAttribute('onclick','click1();');
document.body.append(button);

if(table==null){
    try{
        click1();
    }
    catch(error){
        console.log('error in a code');
    }
}


