import '../css/componentes.css';

export const saludar = ( nombre ) => {
    console.log('creando etiqueda H1, prueba de modificacion');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }, que onda gatin!!`;
    document.body.append( h1 );

}