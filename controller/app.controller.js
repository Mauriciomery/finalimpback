const operations = {}
operations.getFibonacci = (req,res) => {
    let number = req.headers["numberFibonacci"]
    if (number > 0) {
        let a, b, result;
        a = 0;
        b = 1;
        for (var i = 2; i <= number; i++) {
            result = a + b;
            a = b;
            b = result;
        }
        res.status(200).json({status: "Retorna correctamente Fibonacci", result: result})
    } else {
        res.status(400).json({status: "Error", response: "El numero no cumple"})
    }
}
operations.getFactorial = (req,res) => {
    let number = req.headers["numberFactorial"]
    if (number>=0){
        if (number==0 || number==1){
            res.status(200).json({status: "Retorna correctamente Fibonacci", result: 1})
        }else{
            let factoResult =1;
            for(let i=1; i<=number;i++){
                factoResult = factoResult * i;
            }
            res.status(200).json({status: "Retorna correctamente Factorial", result: factoResult})
        }
    }else {
        res.status(400).json({status:"Error",response:"Al numero no se le puede sacar factorial"})
    }
}
operations.getAPTriangulo = (req,res) => {
    let side1 = req.headers["side1Triangule"]
    let side2 = req.headers["side2Triangule"]
    let side3 = req.headers["side3Triangule"]
    if(side1>0 && side2>0 && side3>0){
        if(side1+side2>side3 && side1+side3>side2 && side2+side3>side1){
            const p = side1 + side2 + side3;
            const semiP = p/2;
            const area = Math.sqrt(semiP*(semiP-side1)*(semiP-side2)*(semiP-side3))
            res.status(200).json({status: "Retorna correctamente perimetro y area", result: p, area})
        }else{
            res.status(400).json({status:"Error",response:"El triangulo no cumple con las propiedades"})
        }
    }else{
        res.status(400).json({status:"Error",response:"El triangulo no cumple con las propiedades"})
    }
}
operations.getAPCirculo = (req,res) => {
    let radius = req.headers["radiusCircle"]
    if(radius>1){
        const p = 2 * radius * Math.PI;
        const area = radius * radius * Math.PI;
        res.status(200).json({status: "Retorna correctamente perimetro y area", result: p, area})
    }else{
        res.status(400).json({status:"Error",response:"El radio no es apto para un circulo"})
    }
}
operations.getAPRectangulo = (req,res) => {
    let side1 = req.headers["side1Rect"]
    let side2 = req.headers["side2Rect"]
    if(side1>0 && side2>0){
        const p = (side1*2) + (side2*2);
        const area = side1*side2;
        res.status(200).json({status: "Retorna correctamente perimetro y area", result: p, area})
    }else{
        res.status(400).json({status:"Error",response:"Los lados no son numeros positivos distintos de cero"})
    }
}
module.exports = operations