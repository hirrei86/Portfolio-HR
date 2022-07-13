
export  class educacion{
    id?: number;
    institucion: string;
    anioinicio: string;
    aniofinal: string;
    tituloobtenido: string;
    static navigate: any;

  
   
    constructor(institucion: string, anioinicio: string, aniofinal: string, tituloobtenido: string){
        this.institucion = institucion;
        this.anioinicio = anioinicio;
        this.aniofinal = aniofinal;
        this.tituloobtenido = tituloobtenido;

    }
}