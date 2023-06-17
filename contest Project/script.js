/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((element) => {
        if(element.profession === "developer"){
            console.log(element);
        }
    });

  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element) => {
        if(element.profession === "developer"){
            console.log(element);
        }
    });
  }

  function addData() {
    //Write your code here, just console.log
    let getid = arr.length;
    const New = {id:getid+1, name:"susan", age:"20", profession:"intern"};
    arr.push(New);
    console.log(arr);
  }
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((element) => {
    if(element.profession !== "admin"){
        console.log(element);
    }
   });
  }
  function concatenateArray() {
    //Write your code here, just console.log
    let employees = [
        {id:5, name:"om", age:26, profession:"admin"},
        {id:6, name:"namah", age:28, profession:"developer"},
        {id:7, name:"shivay", age:30, profession:"admin"}
    ];
    let newArray = arr.concat(employees);
    console.log(newArray);
  }