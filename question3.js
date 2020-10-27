var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FigGeo = /** @class */ (function () {
    function FigGeo(tipo) {
        this.tipo = tipo;
    }
    FigGeo.prototype.calcArea = function () {
    };
    return FigGeo;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(raio) {
        var _this = _super.call(this, 'Círculo') || this;
        _this.raio = 0;
        _this.raio = raio;
        return _this;
    }
    Circulo.prototype.calcArea = function () {
        return Math.PI * Math.pow(this.raio, 2);
    };
    return Circulo;
}(FigGeo));
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this, 'Quadrado') || this;
        _this.lado = 0;
        _this.lado = lado;
        return _this;
    }
    Quadrado.prototype.calcArea = function () {
        return Math.pow(this.lado, 2);
    };
    return Quadrado;
}(FigGeo));
var TriangEquil = /** @class */ (function (_super) {
    __extends(TriangEquil, _super);
    function TriangEquil(lado) {
        var _this = _super.call(this, 'Triângulo Equilátero') || this;
        _this.lado = 0;
        _this.lado = lado;
        return _this;
    }
    TriangEquil.prototype.calcArea = function () {
        return (Math.pow(this.lado, 2) * Math.sqrt(3)) / 4;
    };
    return TriangEquil;
}(FigGeo));
var circulo = new Circulo(2);
var quadrado = new Quadrado(2);
var triangulo = new TriangEquil(12);
var figuras = [];
figuras.push(circulo);
figuras.push(quadrado);
figuras.push(triangulo);
figuras.forEach(function (fig) { return console.log(fig.calcArea()); });
