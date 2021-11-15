const request= require("supertest");
const app= require('../index');

describe("Pruebas Unitarias Fibonacci", ()=> {


    it("Numero valido", (done) => {
        let numero = 8;
        request(app)
            .get("/api/fibonacci")
            .set("accept", "application/json")
            .set("numberfibonacci", numero)
            .expect("Content-Type", /json/)
            .expect({status: "Retorna correctamente Fibonacci", arr:[0, 1, 1, 2, 3, 5, 8, 13, 21]})
            .expect(200, done)

    })
    it("Numero invalido", (done) => {
        let numero = -9;
        request(app)
            .get("/api/fibonacci")
            .set("accept", "application/json")
            .set("numero", numero)
            .expect("Content-Type", /json/)
            .expect({status: "Error", response: "El numero no cumple"})
            .expect(400, done)

    })
    it("letra", (done) => {
        let numero = "a";
        request(app)
            .get("/api/fibonacci")
            .set("accept", "application/json")
            .set("numerofibonacci", numero)
            .expect("Content-Type", /json/)
            .expect({status: "Error", response: "El numero no cumple"})
            .expect(400, done)
    })
    it("Caracter Especial", (done) => {
        let numero = "*";
        request(app)
            .get("/api/fibonacci")
            .set("accept", "application/json")
            .set("numerofactorial", numero)
            .expect("Content-Type", /json/)
            .expect({status: "Error", response: "El numero no cumple"})
            .expect(400, done)

    })


}).timeout(18000)


describe("Pruebas Unitarias Factorial", () => {

    it("Numero valido", (done) => {
        let numero = 6;
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .set("numberfactorial", numero)
            .expect("Content-Type", /json/)
            .expect({status: "Retorna correctamente factorial", factoresult: 720})
            .expect(200, done)

    })
    it("Numero invalido", (done) => {
        let numero = -9;
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .set("numerofactorial", numero)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"Al numero no se le puede sacar factorial"})
            .expect(400, done)

    })
    it("letra", (done) => {
        let numero = "a";
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .set("numerofactorial", numero)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"Al numero no se le puede sacar factorial"})
            .expect(400, done)

    })
    it("Caracter Especial", (done) => {
        let numero = "*";
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .set("numerofactorial", numero)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"Al numero no se le puede sacar factorial"})
            .expect(400, done)

    })
    it("Numero mayor a 170", (done) => {
        let numero = 175;
        request(app)
            .get("/api/factorial")
            .set("accept", "application/json")
            .set("numerofactorial", numero)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"Al numero no se le puede sacar factorial"})
            .expect(400, done)

    })


}).timeout(18000)

describe("Pruebas Unitarias Triangulo", () => {

    it("lados validos", (done) => {
        let side1 = 4;
        let side2 = 5;
        let side3 = 3;
        request(app)
            .get("/api/triangulo")
            .set("accept", "application/json")
            .set("side1triangule", side1)
            .set("side2triangule", side2)
            .set("side3triangule", side3)
            .expect("Content-Type", /json/)
            .expect({status: "Retorna correctamente perimetro y area", p: 12, area:6})
            .expect(200, done)

    })
    it("Lados invalidos", (done) => {
        let side1 = -5;
        let side2 = -6;
        let side3 = -9;
        request(app)
            .get("/api/triangulo")
            .set("accept", "application/json")
            .set("side1triangule", side1)
            .set("side2triangule", side2)
            .set("side3triangule", side3)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"El triangulo no cumple con las propiedades"})
            .expect(400, done)

    })
    it("letra", (done) => {
        let side1 = "a";
        let side2 = "b";
        let side3 = "c";
        request(app)
            .get("/api/triangulo")
            .set("accept", "application/json")
            .set("side1triangule", side1)
            .set("side2triangule", side2)
            .set("side3triangule", side3)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"El triangulo no cumple con las propiedades"})
            .expect(400, done)

    })
    it("Caracteres Especiales", (done) => {
        let side1 = "*";
        let side2 = "/";
        let side3 = "-";
        request(app)
            .get("/api/triangulo")
            .set("accept", "application/json")
            .set("side1triangule", side1)
            .set("side2triangule", side2)
            .set("side3triangule", side3)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"El triangulo no cumple con las propiedades"})
            .expect(400, done)

    })



}).timeout(18000)

describe("Pruebas Unitarias Circulo", () => {

    it("Numero valido", (done) => {
        let radius = 2;
        request(app)
            .get("/api/circulo")
            .set("accept", "application/json")
            .set("radiuscircle", radius)
            .expect("Content-Type", /json/)
            .expect({status: "Retorna correctamente perimetro y area", p: 12.566370614359172 , area:12.566370614359172})
            .expect(200, done)

    })
    it("Numero invalido", (done) => {
        let radius = -20;
        request(app)
            .get("/api/circulo")
            .set("accept", "application/json")
            .set("radiuscircle", radius)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"El radio no es apto para un circulo"})
            .expect(400, done)

    })
    it("letra", (done) => {
        let radius = "a";
        request(app)
            .get("/api/circulo")
            .set("accept", "application/json")
            .set("radiuscircle", radius)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"El radio no es apto para un circulo"})
            .expect(400, done)

    })
    it("Caracter Especial", (done) => {
        let radius = "?";
        request(app)
            .get("/api/circulo")
            .set("accept", "application/json")
            .set("radiuscircle", radius)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"El radio no es apto para un circulo"})
            .expect(400, done)

    })


}).timeout(18000)

describe("Pruebas Unitarias Rectangulo", () => {

    it("Lados validos", (done) => {
        let side1 = 6;
        let side2 = 10;
        request(app)
            .get("/api/rectangulo")
            .set("accept", "application/json")
            .set("side1rect", side1)
            .set("side2rect", side2)
            .expect("Content-Type", /json/)
            .expect({status: "Retorna correctamente perimetro y area", p: 32, area: 60})
            .expect(200, done)

    })
    it("Lado invalido", (done) => {
        let side1 = -6;
        let side2 = 10;
        request(app)
            .get("/api/rectangulo")
            .set("accept", "application/json")
            .set("side1rect", side1)
            .set("side2rect", side2)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"Los lados deben de ser numeros positivos distintos de cero"})
            .expect(400, done)

    })
    it("letra", (done) => {
        let side1 = "a";
        let side2 = "b";
        request(app)
            .get("/api/rectangulo")
            .set("accept", "application/json")
            .set("side1rect", side1)
            .set("side2rect", side2)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"Los lados deben de ser numeros positivos distintos de cero"})
            .expect(400, done)


    })
    it("Caracter Especial", (done) => {
        let side1 = "*";
        let side2 = 10;
        request(app)
            .get("/api/rectangulo")
            .set("accept", "application/json")
            .set("side1rect", side1)
            .set("side2rect", side2)
            .expect("Content-Type", /json/)
            .expect({status:"Error",response:"Los lados deben de ser numeros positivos distintos de cero"})
            .expect(400, done)


    })


}).timeout(18000)