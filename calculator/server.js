let express = require("express")

let PORT = process.env.PORT || 9000;

let app = express();

app.get("/:operation/:firstNum/:secondNum", function(req, res){
    let operation = req.params.operation;
    let firsNum = parseInt(req.params.firstNum);
    let secondNum = parseInt(req.params.secondNum);
    let result;

    switch (operation){
        case "add":
        case "+":
            result = firstNum + secondNum;
            break;
        
    }
})




app.listen(PORT, function(){
    console.log(`Server listening on : http://localhost: ${PORT}`)
})
