export  class proyecto{
    id?: number;
    nombreproyecto: string;
    descripcionproyecto: string;
    imgproyecto: string;
    static navigate: any;

  
   
    constructor(nombreproyecto: string, descripcionproyecto: string, imgproyecto: string){
        this.nombreproyecto = nombreproyecto;
        this.descripcionproyecto = descripcionproyecto;
        this.imgproyecto = imgproyecto;
    }
}