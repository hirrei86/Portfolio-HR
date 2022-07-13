package com.portfoliohr.hr.Controller;

import com.portfoliohr.hr.Entity.Experiencia;
import com.portfoliohr.hr.Interface.IExperienciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ExperienciaController {

    @Autowired
    IExperienciaService iexperienciaService;

    @GetMapping("experiencias/traer")
    public List<Experiencia> getExperiencia() {
        return iexperienciaService.getExperiencia();
    }

    @PostMapping("/experiencias/crear")
    public String createExperiencia(@RequestBody Experiencia experiencia) {
        iexperienciaService.saveExperiencia(experiencia);
        return "Su experiencia laboral fue creada exitosamente";
    }

    @DeleteMapping("/experiencias/borrar/{id}")
    public String deleteExperiencia(@PathVariable Long id) {
        iexperienciaService.deleteExperiencia(id);
        return "Su experiencia laboral fue borrada exitosamente";
    }

    @PutMapping("/experiencias/editar/{id}")
    public Experiencia editExperiencia(@PathVariable Long id,
            @RequestParam("empleo") String nuevoEmpleo,
            @RequestParam("anioinicio") String nuevoAnioinicio,
            @RequestParam("aniofinal") String nuevoAniofinal,
            @RequestParam("cargo") String nuevoCargo) {
        Experiencia experiencia = iexperienciaService.findExperiencia(id);

        experiencia.setEmpleo(nuevoEmpleo);
        experiencia.setAnioinicio(nuevoAnioinicio);
        experiencia.setAniofinal(nuevoAniofinal);
        experiencia.setCargo(nuevoCargo);

        iexperienciaService.saveExperiencia(experiencia);
        return experiencia;
    }

    @GetMapping("/experiencias/traer/perfil")
    public Experiencia findExperiencia() {
        return iexperienciaService.findExperiencia((long) 1);
    }
}
