import './App.css';
import React from 'react';
//import { products } from './products.json';
//import { useState, useEffect } from 'react'

function App() {

var _ = require('lodash');
const productos = require('./products.json');
const categoriaProductos = productos.results;

//categorias
//Suma de precios de los productos
let cuantiti = 0
categoriaProductos.forEach(item => { cuantiti = cuantiti + item.price });
//console.log(cuantiti);

/* const nombre = {};
nombre.pepe = "pepe";
console.log(nombre);

nombre.producto = [{nombre: "felipe"}, {apellido: "ramos"}]
console.log(nombre);

var keyName = "pizzas"
nombre[keyName] = "cualquier";
console.log(nombre);*/


//mapeo de categorias
var lista = _.map(categoriaProductos, categoriaProductos.name);

//impresion de categorias
const listaImpresa = lista.map((item) => <li key={item.id}>{item.name}</li>);

//Guardar categorias en un array

function guardarCategorias(data) {
  var categorias = [];
  data.forEach(item => {
    if (!categorias.includes(item.categoriaProducto.name)) {
      categorias.push(item.categoriaProducto.name);
    }
  });
  return console.log(categorias);
}
const categoriasOrdenadas = guardarCategorias(lista);

const Objeto = {};

const nuevoObjeto = Objeto.categoriasOrdenadas;

console.log(nuevoObjeto);

//Cuantos porductos de cocina y cuantos de bar??? grab_for
//Happy hour => total
//status, cuantos estas activos o no?
//cuantos productos valen mas o menos de $500
//Cuantos productos tienen al menos un grupo de opciones.


  return (
    <React.Fragment>
      <h1>Ejercicio JSON, abrir consola</h1>
      Ingrese una categoria
    <input type="text" name="categoriaProduct"/>
    <ol>
      { listaImpresa }
    </ol>
    </React.Fragment>
  );
}

export default App;