type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1.a. Lista de pacientes asignados a Pediatría

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] =>
  pacientes.filter((paciente) => paciente.especialidad === "Pediatra");

console.log(
  "Listado de pacientes de la especialidad Pediatría:",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// Apartado 1.b. Lista de pacientes asignados a Pediatría y cuya edad sea menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] =>
  pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );

console.log(
  "Listado de pacientes de la especialidad Pediatría con menos de 10 años:",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

// Apartado 2: Activar protocolo de urgencia si CUALQUIER paciente tiene ritmo cardiaco superior a 100 p/m y la temperatura corporal es superior a 39º.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  activarProtocolo = pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );

  return activarProtocolo;
};

console.log(
  "¿Se debe activar el protocolo de urgencia?",
  activarProtocoloUrgencia(pacientes)
);

// Apartado 3: Reasignar los pacientes de Pediatría a Médico de Familia

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] =>
  pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    }
    return paciente;
  });

console.log(
  "Listado de pacientes con reasignación de Pediatría a Médico de Familia:",
  reasignaPacientesAMedicoFamilia(pacientes)
);

// Apartado 4: Comprobar si hay pacientes asignados a Pediatría

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean =>
  pacientes.some((paciente) => paciente.especialidad === "Pediatra");

console.log(
  "¿Hay pacientes asignados a Pediatría?",
  HayPacientesDePediatria(pacientes)
);

// Apartado 5: Número total de pacientes asignados a cada especialidad

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const pacientesTotalesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  pacientesTotalesPorEspecialidad.medicoDeFamilia = pacientes.reduce(
    (acc: number, paciente: Pacientes): number => {
      if (paciente.especialidad === "Medico de familia") {
        acc++;
      }
      return acc;
    },
    0
  );
  pacientesTotalesPorEspecialidad.cardiologia = pacientes.reduce(
    (acc: number, paciente: Pacientes): number => {
      if (paciente.especialidad === "Cardiólogo") {
        acc++;
      }
      return acc;
    },
    0
  );
  pacientesTotalesPorEspecialidad.pediatria = pacientes.reduce(
    (acc: number, paciente: Pacientes): number => {
      if (paciente.especialidad === "Pediatra") {
        acc++;
      }
      return acc;
    },
    0
  );
  return pacientesTotalesPorEspecialidad;
};

console.log(
  "Número total de pacientes por especialidad:",
  cuentaPacientesPorEspecialidad(pacientes)
);
