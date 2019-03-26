var myboard = "WChhrcJv";
var myboardId = "5c99ac6bd8753a86895e7226";
var mylistId = "5c99b11ff562d88f9de9e7c9";
var mycardId = "5c99e2694b6eae6d8e31767e";
var mychecklistId = "5c99e270b1ded64fd727a734";
var mykey = "1c5bf31b3dd41796667ef66cc7ab16bb";
var mytoken = "5b47835e6eb46381fe98b5ca5a0b60c9b91094a94e728e340a682461bbbef8be";
fetch("https://api.trello.com/1/checklists/"+mychecklistId+"/checkItems?key="+mykey+"&token="+mytoken)
.then(data =>data.json())
.then(data =>{
  console.log(data);
        for(let item of data){
          function1(item);
        }
});

function function1(item) {
    var div = document.createElement("div");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    if(item["state"] == 'complete') checkBox.setAttribute("checked","checked");
    checkBox.value = item['name'];
    child.appendChild(div);
    child.appendChild(checkBox);
    child.appendChild(label);
    label.appendChild(document.createTextNode(item['name']));

  }

  function myFunction() {
    var inputvalues = document.getElementById("mytext").value; 
    var div = document.createElement("div");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = inputvalues;
    child.appendChild(div);
    child.appendChild(checkBox);
    child.appendChild(label);
    label.appendChild(document.createTextNode(inputvalues));
  
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    xhr.open("POST", "https://api.trello.com/1/checklists/"+mychecklistId+"/checkItems?name="+inputvalues+"&pos=bottom&checked=false&key=1c5bf31b3dd41796667ef66cc7ab16bb&token=5b47835e6eb46381fe98b5ca5a0b60c9b91094a94e728e340a682461bbbef8be");
    xhr.send(data);
  }



