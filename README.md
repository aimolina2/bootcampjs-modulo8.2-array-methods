# Laboratorio módulo 8.2 - Array methods

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## 1. Apartado 1

a. Lista de pacientes asignados a la especialidad _Pediatría_.

b. Lista de pacientes asignados a _Pediatría_ y cuya edad sea menor de 10 años.

Para ambos casos usamos _filter_ para que se nos devuelva un nuevo array con los elementos que cumplen con la condición establecida.

## Apartado 2

Activar protocolo de emergencia si CUALQUIER paciente presenta: ritmo cardiaco superior a 100 pulsaciones/minuto + temperatura >39 grados.
Usamos _some_.

## Apartado 3

Reasignar los pacientes de la especialidad _Pediatría_ a la de _Médico de familia_.
Usamos _map_.

## Apartado 4

Comprobar si en la lista hay pacientes asignados a _Pediatría_
Usamos _some_.
