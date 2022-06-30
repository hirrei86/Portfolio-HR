
export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    acercaDe: string;
    static navigate: any;
    
    

    constructor(nombre: string, apellido: string, img: string, acercaDe: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.acercaDe = acercaDe;
    }
   
}


