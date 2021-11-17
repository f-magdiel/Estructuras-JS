class Nodo{ // clase nodo
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
    }
}

// debe de tener Agregar, Eliminar, Buscar, Actualizar
class ListaSimple{ //clase lista
    constructor(){
        this.cabeza = null;
    }
    //el método para agregar al final un valor a la lista
    agregarFinal(entrada){
        const nuevoNodo = new Nodo(entrada);
        if(!this.cabeza){
            this.cabeza = nuevoNodo;
        }else{
            let actual = this.cabeza;
            while(actual.siguiente!= null){
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }
    //agregar al inicio un valor de la lista
    agregarInicio(entrada){
        const nuevoNodo = new Nodo(entrada);
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza = nuevoNodo;

    }

    //para eliminar un valor en la lista
    eliminar(entrada){
        let actual = this.cabeza;
        let anterior = null;
        let encontrado = false;
        
        while((actual!=null) && (encontrado==false)){ // si no es null y no se ha encotrado nada
            encontrado = (actual.dato == entrada);
            if(encontrado == false){ // si no es la entrada que se busca, se ejecuta
                anterior = actual; // guardo el anterior
                actual = actual.siguiente; // cambio de nodo, paso al siguiente
            }
        }

        if(actual!=null){ //diferente de null
            if(actual == this.cabeza){ // si lo que se elimino es la cabeza, se reasigna la cebeza
                this.cabeza = actual.siguiente;
            }else{
                anterior.siguiente = actual.siguiente;  // si es cualquiera, el anterior se enlaza con el siguiente del eliminado 
            }
            actual = null; // se limpia
            
        }
    }

    //actualizar
    actualizar(entrada, valor){ // recibirá dos argumentos uno para el dato a buscar y por que será reemplezado
        let actual = this.cabeza
        while(actual!=null){
            if(entrada == actual.dato){
                actual.dato = valor;
                break;
            }
            actual = actual.siguiente;
        }
    }

    //para buscar en la lista un valor
    buscar(entrada){

        let actual = this.cabeza;
        while(actual!=null){
            if(entrada == actual.dato){
                return entrada;
            }
            actual  = actual.siguiente;
        }
        return null;

    }

    imprimir(){
        let actual = this.cabeza;
        let res = "";
        while(actual!=null){
            res += actual.dato +" ->  ";
            actual = actual.siguiente;
        }
        res += "null";
        console.log(res);
    }
}

//prueba
const nodoPrueba = new ListaSimple();
nodoPrueba.agregarFinal(1);
nodoPrueba.agregarFinal(2);
nodoPrueba.agregarFinal(3);
nodoPrueba.agregarFinal(4);
nodoPrueba.imprimir();
console.log("\n");
nodoPrueba.agregarInicio(0);
nodoPrueba.imprimir();
console.log("Valor buscado es:  "+nodoPrueba.buscar(0));
nodoPrueba.eliminar(0);
nodoPrueba.imprimir();
console.log("Valor buscado es:  "+nodoPrueba.buscar(1));
nodoPrueba.eliminar(1);
nodoPrueba.imprimir();
console.log("Valor buscado es:  "+nodoPrueba.buscar(2));
nodoPrueba.eliminar(2);
nodoPrueba.imprimir();
console.log("Valor buscado es:  "+nodoPrueba.buscar(3));
nodoPrueba.eliminar(3);
nodoPrueba.imprimir();
nodoPrueba.eliminar(3);
nodoPrueba.actualizar(4,5);
nodoPrueba.imprimir();