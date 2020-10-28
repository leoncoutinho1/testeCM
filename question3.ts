class FigGeo {
  
  tipo: String;
  
  constructor(tipo: String) {
    this.tipo = tipo;
  }

  calcArea() {

  }

}

class Circulo extends FigGeo {
  
  raio: number = 0;

  constructor(raio: number) {
    super('Círculo');
    this.raio = raio;
  }

  calcArea():Number {
    return Math.PI * Math.pow(this.raio, 2);
  }

}

class Quadrado extends FigGeo {
  
  lado: number = 0;

  constructor(lado: number) {
    super('Quadrado');
    this.lado = lado;
  }

  calcArea():Number {
    return Math.pow(this.lado, 2);
  }

}

class TriangEquil extends FigGeo {
  
  lado: number = 0;

  constructor(lado: number) {
    super('Triângulo Equilátero');
    this.lado = lado;
  }

  calcArea():Number {
    return (Math.pow(this.lado, 2) * Math.sqrt(3) / 4);
  }

}

let circulo:FigGeo = new Circulo(2);
let circulo2:FigGeo = new Circulo(3);
let quadrado:FigGeo = new Quadrado(5);
let quadrado2:FigGeo = new Quadrado(6);
let triangulo:FigGeo = new TriangEquil(4);
let triangulo2:FigGeo = new TriangEquil(8);


let figuras:Array<FigGeo> = [];

figuras.push(circulo);
figuras.push(circulo2);
figuras.push(quadrado);
figuras.push(quadrado2);
figuras.push(triangulo);
figuras.push(triangulo2);


figuras.forEach(fig => console.log(`${fig.tipo}: ${fig.calcArea()}`));