class Nodo{
    constructor(valor) {
    this.valor = valor;
    this.izquierdo=null;
    this.derecho=null;
    }
}

class ABB{
    constructor() {
        this.raiz = null;
    }

    insertar(valor){
        this.raiz = this.add(valor, this.raiz);
    }

    add(valor, nodo){
        if (nodo == null){
            return new Nodo(valor);
        }else{
            if ( valor > nodo.valor){
                nodo.derecho = this.add(valor, nodo.derecho);
            }else {
                nodo.izquierdo = this.add(valor, nodo.izquierdo);
            }
        }
        return nodo;
    }

    imprimir(){
        console.log(this.raiz)
    }
    preOrden(){
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo){
        if(nodo!=null){
            console.log("Valor:",nodo.valor);
            this.pre_orden(nodo.izquierdo);
            this.pre_orden(nodo.derecho);
        }
        console.log("fin")
    }

    inOrden(){
        this.in_orden(this.raiz);
    }

    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierdo);
            console.log("Valor:",nodo.valor);
            this.in_orden(nodo.derecho);
        }
    }

    postOrden(){
        this.post_orden(this.raiz);
    }
    post_orden(nodo){
        if(nodo!=null){
            this.post_orden(nodo.izquierdo);
            this.post_orden(nodo.derecho);
            console.log("Valor:",nodo.valor);
        }
    }
}
let bb = new ABB();
bb.insertar(25);
bb.insertar(15);
bb.insertar(30);
bb.insertar(8);
bb.insertar(10);
bb.insertar(5);
bb.insertar(28);
bb.insertar(27);
bb.insertar(40);
//bb.imprimir();
console.log("In orden")
bb.inOrden();
console.log("post orden")
bb.postOrden();
console.log("pre orden")
bb.preOrden();