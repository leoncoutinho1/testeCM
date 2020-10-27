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
    return (Math.pow(this.lado, 2) * Math.sqrt(3) )/ 4;
  }

}

let circulo:FigGeo = new Circulo(2);
let quadrado:FigGeo = new Quadrado(2);
let triangulo:FigGeo = new TriangEquil(12);


let figuras:Array<FigGeo> = [];

figuras.push(circulo);
figuras.push(quadrado);
figuras.push(triangulo);


figuras.forEach(fig => console.log(fig.calcArea()));