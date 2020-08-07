/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.repository.RepImballo;
import com.ai.ecom02.service.ImballoServiceCrud;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Francesco
 */

@Service
public class ImballoService implements ImballoServiceCrud {

    @Autowired
    RepImballo repImballo;

    @Override
    public Imballo add(Imballo o) {
        return repImballo.save(o);
    }

    @Override
    public void delete(Imballo o) {
        repImballo.delete(o);
    }

    @Override
    public List<Imballo> getAll() {
        return repImballo.findAll();
    }

    @Override
    public Imballo findById(Imballo o) {
        Imballo i = repImballo.getOne(o.getId());
//        Optional<Imballo> s = repImballo.findById(o.getId());
//        Imballo i = s.get();
        return i;
    }

    @Override
    public Imballo update(Imballo imballo) {
       return repImballo.save(imballo);
    }

    public List<Imballo> findByDescrizione(Imballo imballo){
        return repImballo.findByDescrizioneLike(imballo.getDescrizione());
    }
    
//    public List<Imballo> findByCosto(Imballo imballo){
//        return repImballo.findByCostoLike(imballo.getCosto());
//    }
}
