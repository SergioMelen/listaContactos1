// Lista de contactos
let persona1 = {
  id: 1,
  nombre: "Lucho",
  apellido: "Diaz",
  telefono: "11111111",
  ubicaciones: {
    ciudad: "Cartagena",
    direccion: "Zona Norte",
  },
};
let persona2 = {
  id: 2,
  nombre: "Juan",
  apellido: "Cuadrado",
  telefono: "22222222",
  ubicaciones: {
    ciudad: "Barranquilla",
    direccion: "Zona Sur",
  },
};
let persona3 = {
  id: 3,
  nombre: "Radamel",
  apellido: "Falcao",
  telefono: "3333333",
  ubicaciones: {
    ciudad: "Santa Marta",
    direccion: "Zona Oeste",
  },
};
let listaContactos = [persona1, persona2, persona3];

// Añadir un nuevo contacto a la lista
function agregarContacto(id, nombre, apellido, telefono, ciudad, direccion) {
  let persona = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    ubicacion: {
      ciudad: ciudad,
      direccion: direccion,
    },
  };
  listaContactos.push(persona);
}
agregarContacto(
  4,
  "Cristiano",
  "Ronaldo",
  "44444444",
  "Medellin",
  "Zona Noroccidente"
);

//console.log(listaContactos);

// Borrar un contacto existente de la lista
function borrarContacto(id) {
  listaContactos = listaContactos.filter(
    (listaContactos) => listaContactos.id !== id
  );
}

borrarContacto(2);

//console.log(listaContactos);

// Imprimir los contactos en la consola
function imprimirContactos(id) {
  for (const persona of listaContactos) {
    console.log(persona);
  }
}

// Actualizar contacto

function actualizarContacto(id, nombre, apellido, telefono, ciudad, direccion) {
  const contactIndex = listaContactos.findIndex((contact) => contact.id === id);
  if (contactIndex !== -1) {
    const actualizarContacto = {
      ...listaContactos[contactIndex],
      nombre: nombre || listaContactos[contactIndex].nombre,
      apellido: apellido || listaContactos[contactIndex].apellido,
      telefono: telefono || listaContactos[contactIndex].telefono,
      ubicacion: {
        ciudad: ciudad || listaContactos[contactIndex].ubicacion.ciudad,
        direccion:
          direccion || listaContactos[contactIndex].ubicacion.direccion,
      },
    };
    listaContactos[contactIndex] = actualizarContacto;
    return "Contacto actualizado correctamente";
  } else {
    return "No se pudo actualizar el contacto";
  }
}

function imprimirContactos() {
  console.log(listaContactos);
}
imprimirContactos();

actualizarContacto();

imprimirContactos();
