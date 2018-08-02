const assert = require('chai').assert;
global.window = global;
require('../src/js/validate'); //solo enlaza el archivo

describe('validar emails', ()=>{//Describe que habra dentro 
  describe('Deberia verificar si existe @', ()=>{
    it('Deberia tener solo un @', ()=>{
      assert.equal(validateEmail("asdf@asdf.com"), true);
      assert.equal(validateEmail("asdf@@asdf.com"), false);
      assert.equal(validateEmail("asdf.com"), false);
    });
    it('Deberia tener un @ antes del dominio', ()=>{
      assert.equal(validateEmail(".com@asdf"), false);
      assert.equal(validateEmail("fabian@laboratoria.la"), true);
    });
  });
  describe('Deberia verificar si tiene un dominio', ()=>{
    it('Tiene un punto y luefo solo caracteres del alfabeto', ()=>{
      assert.equal(validateEmail("asdf@asdf"), false);
      assert.equal(validateEmail("asdf@asdf."), false);
    });
  });
  describe('Deberia verificar que no contenga caracteres raros', ()=>{

  });
  describe('Deberia verificar que tenga al menos 1 caracter antes del @', ()=>{

  });
});