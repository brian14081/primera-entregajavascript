


































const impuestos= 1.75

function producto(id,nombre,importe,stock){

    this.id = id
    this.nombre = nombre
    this.importe = importe
    this.stock = stock

    this.importeconimpuestos = function(){
        return this.importe * impuestos
    }

    this.ajustarstock= function(clavesdejuego){
        if(typeof clavesdejuego === "number" && this.stock >= clavesdejuego && stock> 0){
            return this.stock = this.stock - parseInt(clavesdejuego)
        }else{
            console.error("error al descontar las unidades, " + clavesdejuego)
        }
    }
}


const juego1 = new producto (1, "DOOM", 60, 999)

const juego2 = new producto (2, "SPIDERMAN", 12000, 999)

const juego3 = new producto (3, "ELDEN RING", 11000, 999)

const juego4 = new producto (4, "MINECRAFT", 800, 999)

const juego5 = new producto (5, "ASSESINS CREED", 6000, 999)

console.log(juego1.importeconimpuestos())
