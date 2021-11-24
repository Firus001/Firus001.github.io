package com.company;

public class Persona {
    private String nombre;
    private int dni;


    public Persona(){
        this.nombre ="Carla";
        this.dni=5948659;
    }

    public Persona(String nombre, int dni) {
        this.nombre = nombre;
        this.dni = dni;
    }

    public Persona(String nombre) {
        this.nombre = nombre;
        this.dni = 868568689;
    }
}
