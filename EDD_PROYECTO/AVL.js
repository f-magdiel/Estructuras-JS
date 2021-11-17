class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
        this.altura = 0;
    }
}

class AVL {
    constructor() {
        this.raiz = null;
    }

    MAXIMO(v1, v2) {
        if (v1 > v2) return v1;
        return v2;
    }

    altura(nodo) {
        if (nodo == null) return -1;
        return nodo.altura;
    }

    insertar(valor) {
        this.raiz = this.add(valor, this.raiz);
    }

    add(valor, nodo) {
        if (nodo == null){
            return new Nodo(valor);
        } 
        else {
            if (valor < nodo.valor) {
                nodo.izquierdo = this.add(valor, nodo.izquierdo)

                if (this.altura(nodo.derecho) - this.altura(nodo.izquierdo) == -2) {
                    if (valor < nodo.izquierdo.valor) {
                        nodo = this.RotIzquierda(nodo);
                    } else {
                        nodo = this.RotDobIzquierda(nodo);
                    }
                }
            } else if (valor > nodo.valor) {
                nodo.derecho = this.add(valor, nodo.derecho);
                if (this.altura(nodo.derecho) - this.altura(nodo.izquierdo) == 2) {
                    if (valor > nodo.derecho.valor) {
                        nodo = this.RotDerecha(nodo);
                    } else {
                        nodo = this.RotDobDerecha(nodo);
                    }
                }
            } else {
                nodo.valor = valor;
            }
        }
        nodo.altura = this.MAXIMO(this.altura(nodo.izquierdo), this.altura(nodo.derecho)) + 1
        return nodo;
    }

    _

    RotIzquierda(nodo) {
        let aux = nodo.izquierdo;
        nodo.izquierdo = aux.derecho;
        aux.derecho = nodo;
        nodo.altura = this.MAXIMO(this.altura(nodo.derecho), this.altura(nodo.izquierdo)) + 1;
        aux.altura = this.MAXIMO(this.altura(nodo.izquierdo), nodo.altura) + 1;
        return aux;
    }

    RotDobIzquierda(nodo) {
        nodo.izquierdo = this.RotDerecha(nodo.izquierdo);
        return this.RotIzquierda(nodo);
    }

    RotDerecha(nodo) {
        var aux = nodo.derecho;
        nodo.derecho = aux.izquierdo;
        aux.izquierdo = nodo;
        nodo.altura = this.MAXIMO(this.altura(nodo.derecho), this.altura(nodo.izquierdo)) + 1;
        aux.altura = this.MAXIMO(this.altura(nodo.derecho), nodo.altura) + 1;
        return aux;
    }

    RotDobDerecha(nodo) {
        nodo.derecho = this.RotIzquierda(nodo.derecho);
        return this.RotDerecha(nodo);
    }


    print(){
        console.log(this.raiz)
    }

    
    preOrden() {
        console.log("Impresion")
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo) {
        if (nodo != null) {
            
            console.log("Valor:", nodo.valor);
            if(nodo.izquierdo!=null){
                console.log("Iz "+nodo.izquierdo.valor)
            }
            if(nodo.derecho!=null){
                console.log("Der "+nodo.derecho.valor)
            }
            this.pre_orden(nodo.izquierdo);
            this.pre_orden(nodo.derecho);
        }
    }
}

let avl = new AVL();
avl.insertar(25);
avl.insertar(15);
avl.insertar(30);
avl.insertar(8);
avl.insertar(10);
avl.insertar(5);
avl.insertar(28);
avl.insertar(27);
avl.insertar(40);
