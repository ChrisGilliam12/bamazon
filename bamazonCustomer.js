const mysql = require('mysql')
const inquirer = require('inquirer')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'password',
    database:'bamazon'
});

connection.connect(function(err){
    if(err)throw err;
})

const listProducts = function(){
    const query = 'Select * FROM products';
    connection.query(query, function(err, res){
        if(err) throw err;
       
        for(var i = 0; i < res.length; i++){
               console.log(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity)
        }
    })
}

listProducts();

inquirer
.prompt([
    {
        name:'id',
        type:'input',
        message:'enter id of item you want to purchase'+'\n',

    },
    {
        name:'quantity',
        type:'input',
        message: 'enter number of items you want to purchase',
    }
])
.then(function(response){
    let itemPurchased = response.id
    let quantityPurchased = response.quantity

    connection.query('Select * FROM products Where item_id =' + itemPurchased, function(err, res){
        if(err) throw err;
        if(quantityPurchased <= res[0].stock_quantity){
            console.log('Your items are in stock')
            console.log('Price:' + res[0].price * response.quantity)
        }else{
            console.log('Sorry, Out of Stock')
        }
    })
})
