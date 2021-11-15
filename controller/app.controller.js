const operations = {}
operations.getFibonacci = (req,res) => {
    let number = req.headers["numberfibonacci"]
    if (number > 0) {
        let a, b, result;
        a = 0;
        b = 1;
        let arr = [a,b];
        for (let i = 2; i <= number; i++) {
            result = a + b;
            a = b;
            b = result;
            arr.push(result);
        }
        res.status(200).json({status: "Retorna correctamente Fibonacci", arr: arr})
    } else {
        res.status(400).json({status: "Error", response: "El numero no cumple"})
    }
}

operations.getFactorial = (req,res) => {
    console.log(req.headers);
    const number = req.headers["numberfactorial"]
    if (number>=0 && number<=170){
        if (number==0 || number==1){
            let factoresult = 1;
            res.status(200).json({status: "Retorna correctamente factorial", factoresult: factoresult})
        }else{
            let factoresult = 1;
            for(let i=1; i<=number;i++){
                factoresult = factoresult * i;
            }
            res.status(200).json({status: "Retorna correctamente factorial", factoresult: factoresult})
        }
    }else {
        res.status(400).json({status:"Error",response:"Al numero no se le puede sacar factorial"})
    }
}
operations.getAPTriangulo = (req,res) => {
    let side1 = parseInt(req.headers["side1triangule"])
    let side2 = parseInt(req.headers["side2triangule"])
    let side3 = parseInt(req.headers["side3triangule"])
    if(side1>0 && side2>0 && side3>0){
        if((side1+side2)>side3 && (side1+side3)>side2 && (side2+side3)>side1){
            const p = parseInt(side1) + parseInt(side2) + parseInt(side3);
            const semiP = p/2;
            const area = Math.sqrt(semiP*(semiP-side1)*(semiP-side2)*(semiP-side3))
            res.status(200).json({status: "Retorna correctamente perimetro y area", p: p, area:area})
        }else{
            res.status(400).json({status:"Error",response:"El triangulo no cumple con las propiedades"})
        }
    }else{
        res.status(400).json({status:"Error",response:"El triangulo no cumple con las propiedades"})
    }
}
operations.getAPCirculo = (req,res) => {
    let radius = req.headers["radiuscircle"]
    if(radius>1){
        const p = 2 * radius * Math.PI;
        const area = radius * radius * Math.PI;
        res.status(200).json({status: "Retorna correctamente perimetro y area", p: p, area:area})
    }else{
        res.status(400).json({status:"Error",response:"El radio no es apto para un circulo"})
    }
}
operations.getAPRectangulo = (req,res) => {
    let side1 = req.headers["side1rect"]
    let side2 = req.headers["side2rect"]
    if(side1>0 && side2>0){
        const p = (side1*2) + (side2*2);
        const area = side1*side2;
        res.status(200).json({status: "Retorna correctamente perimetro y area", p: p, area:area})
    }else{
        res.status(400).json({status:"Error",response:"Los lados deben de ser numeros positivos distintos de cero"})
    }
}
module.exports = operations