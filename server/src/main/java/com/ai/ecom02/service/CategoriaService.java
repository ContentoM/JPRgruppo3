/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service;

import com.ai.ecom02.model.Categoria;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Roberto
 */
@Service
public interface CategoriaService {

    void addCat(Categoria categoria);

    List<Categoria> getLista();

    List<Categoria> removeCat(Long id);

    List<Categoria> findCat(String descrizione);
    
    List<Categoria> updateCat(Categoria categoria);
}
