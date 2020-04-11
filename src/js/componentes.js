import '../css/componentes.css';

export const saludar = ( nombre ) => {
    console.log('Punto cero de proyecto inicializado ');

    const h1 = document.createElement('h1');
    h1.innerText = `Webpack Starter de ${ nombre }`;
    document.body.append( h1 );

}