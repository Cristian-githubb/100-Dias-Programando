/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

// area(Triangle(10.0, 5.0))
//     area(Rectangle(5.0, 7.0))
//     area(Square(4.0))

area = () => {
    let triangulo = 10.00 * 5.0 /2;
    let rectangulo = 5.0 *7;
    let cuadrado = 5.0 * 5.0;
    console.log("El area de un triangulo es:", triangulo)
    console.log("El area de un rectangulo es:", rectangulo)
    console.log("El area de un cuadrado es:", cuadrado)
};

area();

console.log("-------------");

const ar = (baseTriangulo, alturaTriangulo, largoRectangulo, anchoRectangulo, ladoCuadrado) => {
    let triangulo = (baseTriangulo * alturaTriangulo) / 2;  // Área del triángulo
    let rectangulo = largoRectangulo * anchoRectangulo;     // Área del rectángulo
    let cuadrado = ladoCuadrado * ladoCuadrado;             // Área del cuadrado

    console.log("El área del triángulo es:", triangulo);
    console.log("El área del rectángulo es:", rectangulo);
    console.log("El área del cuadrado es:", cuadrado);
};

// Llamada a la función con los valores deseados
ar(10.0, 5.0, 5.0, 7.0, 5.0);