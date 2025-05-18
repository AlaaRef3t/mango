// Primitive data type (number , string , un , boolean , null)

// Non primitive data type (object , array )

// var human = {
//     name: "Ahmed",
//     age: 30,
//     SalaryPerHour: 200,
//     totalSalary: function (hours) {

//          return hours * human.SalaryPerHour
//     },
//     eating: function (food) {
//         return `He is eating ${food}`
//     },
//     wife: {
//         name: "Sara",
//         age: 28,
//         son: {
//             name: "Ali",
//             age: 8,
//         }
//     }
// }

// console.log(human.eating("Piza"));
// console.log(human.totalSalary(70));


// --------------------------------------------------------

// array

// index          0        1       2      3
// var friends = ["Shaza", "Sara", "Ahmed", "Saa" ];
// // Length         1        2       3      4

// // console.log(friends.length);

// for (var i = 0; i < friends.length; i++){
//     console.log(friends[i]);

// }


// var friends = [{
//     userId: 1,
//     id: 1,

// },
// {
//     userId: 2,
//     id: 2,
// },
// {
//     userId: 3,
//     id: 3,
// }]

// for (var i = 0; i < friends.length; i++){
//     console.log(friends[i]);

// }

// array methods

// Sort() A to Z  /  Reverse()

/*
/ return new length 
push("Element") add element in the end of array
unshift("Element") add element in the start of array

pop() remove last element
shift() remove first element

slice (1 , 5) start , end 
splice (0 , 2) start , Delete count 

concat() add array to another array


--return string--

toString()
Join(" ")


--search--

indexOf => from left to right
lastIndexOf => from right to left
includes => return boolean   true / false
// */
// var friends = ["Nour", "Sara","Nour" , "Ahmed", "Mai","Nour"];
// var newFriends = ["Mostafa", "Fady"];


// var result = friends.lastIndexOf("Sara");
// if (result > -1) {
//     console.log("founded");

// } else {
//     console.log("not founded");

// }

// console.log(result );
// // console.log(friends );








var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");
var productImg = document.getElementById("productImg");
var row = document.getElementById("row");


var productList = [];
function addProduct() {
    var product = {

        name: productName.value,
        price: productPrice.value,
        category: productCat.value,
        desc: productDesc.value,
        img: productImg.files[0].name,
    }
    productList.push(product)
    displayProduct(productList); 

}

function deleteProduct(a) {
    productList.splice(a,1)
    displayProduct();
}

function displayProduct() {
    var cartoona = "";
    for (var i = 0; i < productList.length; i++){
        cartoona+=` <div class="col-md-3">
                    <img src="./images/${productList[i].img}" class="py-3" alt="">
                    <p>Product Name :<strong> ${productList[i].name}</strong> </p>
                    <p>Product Price : <strong> ${productList[i].price}</strong> </p>
                    <p>Product Category : <strong> ${productList[i].category}</strong> </p>
                    <p>Product Description : <strong> ${productList[i].desc}</strong> </p>
                    <button class="btn btn-outline-success w-100 py-1 my-1">Update</button>
                    <button class="btn btn-outline-danger w-100 py-1 my-1" onclick="deleteProduct(${i})">Delete</button>
                </div>`
    }
    
    row.innerHTML = cartoona;
}


