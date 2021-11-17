class Nodo{ // nodo para la lista doblemente enlazada
    constructor(dato){
        this.dato = dato;
        this.siguiente = null; //puntero para adelante
        this.anterior = null; //puntero para atrás
    }
}

//lista doblemente enlazada
//operaciones: agregar al inicio, al final, buscar, eliminar, actualizar
class ListaSimpleDoble{
    constructor(){
        this.cabeza = null;
        this.cola = null;
        
    }

    //método para agregar al final un dato a la lista
    agregarFinal(entrada){
        const nuevoNodo = new Nodo(entrada);
        if(!this.cabeza){
            this.cabeza = nuevoNodo;
           
        }else{
            let actual = this.cabeza;
            while(actual.siguiente!=null){
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
            nuevoNodo.anterior = actual;
            this.cola = nuevoNodo;
        }
    }

    agregarInicio(entrada){
        const nuevoNodo = new Nodo(entrada);
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza.anterior = nuevoNodo;
        this.cabeza = nuevoNodo;
        
    }

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

    actualizar(entrada, valor){
        let actual = this.cabeza
        while(actual!=null){
            if(entrada == actual.dato){
                actual.dato = valor;
                break;
            }
            actual = actual.siguiente;
        }
    }

    eliminar(entrada){
        let actual = this.cabeza;
        let encontrado = false;
        
        while((actual!=null) && (encontrado==false)){ // si no es null y no se ha encotrado nada
            encontrado = (actual.dato == entrada); // cuando encuentra el dato buscado
            if(encontrado == false){ // si no es la entrada que se busca, se ejecuta
               
                actual = actual.siguiente; // cambio de nodo, paso al siguiente
            }
        }

        if(actual!=null){ //diferente de null
            if(actual == this.cabeza){
                this.cabeza = actual.siguiente;
                if(actual.siguiente!=null){
                    actual.siguiente.anterior= null;
                }
            }else if(actual.siguiente!=null){
                actual.anterior.siguiente = actual.siguiente;
                actual.siguiente.anterior = actual.anterior;
            }else{
                actual.anterior.siguiente = null;
                actual = null;
                }
            }
            
        }
    

    
    imprimirDesdeCabeza(){
        let actual = this.cabeza;
        let res = "";
        
        while(actual!=null){
           res += actual.dato +"->";
           actual = actual.siguiente;
           
        }
        res += "null";
        console.log(res);
        
    }
    imprimirDesdeCola(){
        let actual = this.cola;
        let res = "";
        
        while(actual!=null){
            res += actual.dato +"->";
           actual = actual.anterior;
           
        }
        console.log(res);
        
    }

}
const nodoPrueba = new ListaSimpleDoble();
nodoPrueba.agregarFinal(1);
nodoPrueba.agregarFinal(2);
nodoPrueba.agregarFinal(3);
nodoPrueba.agregarFinal(4);
nodoPrueba.agregarFinal(5);
nodoPrueba.agregarFinal(6);
nodoPrueba.agregarInicio(0);
nodoPrueba.imprimirDesdeCabeza();
nodoPrueba.imprimirDesdeCola();
console.log("Buscado: "+nodoPrueba.buscar(2));
nodoPrueba.actualizar(2,12);
nodoPrueba.imprimirDesdeCabeza();
nodoPrueba.imprimirDesdeCola();
nodoPrueba.eliminar(4);
nodoPrueba.imprimirDesdeCabeza();
nodoPrueba.imprimirDesdeCola();