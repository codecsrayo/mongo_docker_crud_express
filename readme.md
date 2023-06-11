<!--todo lo refrente a creación de diagramas, modelado, arquitectura será diseñado en plamuml  -->
La universidad Digital de Antioquia necesita llevar el control de los equipos de cómputo 
(computadores (escritorio y portátiles), mouse, teclado, monitores, etc.), móviles (celulares, 
tabletas, parlantes, etc.), etc. Para ello requiere contar con una aplicación web en donde se registren 
los datos de los distintos equipos que tienen actualmente en su inventario para tener un mejor 
control de dichos equipos. El sistema deberá contar con los siguientes 4 módulos:

# Módulo de tipo de equipo:
Este módulo permitirá registrar los tipos de equipos que tendrá el sistema. En el requerimiento se 
definen dos (2) (computo, móviles), pero podrán existir más en la medida que el sistema se coloque 
en marcha. Para este módulo se necesitará guardar la siguiente información por cada tipo de 
computo: 
I. Nombre. 
II. Estado (Activo o inactivo). 
III. Fecha creación. 
IV. Fecha de actualización. 
El sistema permitirá la creación y edición de los tipos de equipo. 

# Módulo de estado de equipo
Este módulo permitirá registrar los estados en los cuales se podrá encontrar un equipo en un 
determinado momento (en uso, en bodega, depreciado, etc.). Para este módulo se necesitará 
guardar la siguiente información por cada tipo de computo:

V. Nombre. 

VI. Estado (Activo o inactivo). 

VII. Fecha creación. 

VIII. Fecha de actualización. 

El sistema permitirá la creación y edición de los tipos de equipo. 

# Módulo de usuarios
Este módulo permitirá registrar los distintos usuarios que tendrán a cargo los equipos del inventario. 
Para este módulo se necesitará guardar la siguiente información por cada usuario: 

I. Nombre. 

II. Email. 

III. Estado (Activo o inactivo). 

IV. Fecha creación. 

V. Fecha de actualización. 

El sistema permitirá la creación y edición de usuarios.

# Módulo de marcas
Este módulo permitirá registrar las distintas marcas de los equipos. Para este módulo se necesitará 
guardar la siguiente información para cada marca: 

I. Nombre. 

II. Estado (Activo o inactivo). 

III. Fecha creación. 

IV. Fecha de actualización. 

El sistema permitirá la creación y edición de las marcas. 

# Módulo de inventario 
Este módulo se encargará de registrar los distintos equipos del inventario. Para este módulo se 
necesitará guardar la siguiente información: 

I. Serial: campo único. 

II. Modelo: campo único. 

III. Descripción. 

IV. Foto del equipo. Se requiere guardar la URL de la imagen. 

V. Color. 

VI. Fecha de compra. 

VII. Precio. 

VIII. Usuario a cargo. El sistema deberá permitir la selección de sólo los usuarios activos definidos 
en el modelo de usuarios. 

IX. Marca. El sistema deberá permitir la selección de solo las marcas activas definidas en el 
módulo de marcas. 

X. Estado del equipo. El sistema deberá permitir la selección de solo los estados definidos en 
el módulo de estados de equipo. 

XI. Tipo de equipo. El sistema deberá permitir la selección de solo los tipos definidos en el 
módulo de tipos de equipo. 

El sistema permitirá la creación y edición de los equipos del inventario.  

# Módulo de Gestión de Pagos

Este módulo permitirá gestionar los pagos realizados por los clientes. Deberá proporcionar funcionalidades para realizar pagos, visualizar facturas pendientes, ver el historial de pagos y recibir notificaciones de confirmación de pago. A continuación, se presentan las funcionalidades clave que se esperan de este módulo:

# Módulo de Gestión de Pagos

Este módulo permitirá gestionar los pagos realizados por los clientes. Proporcionará funcionalidades para realizar pagos, visualizar facturas pendientes, ver el historial de pagos y recibir notificaciones de confirmación de pago. Para este módulo, se necesitará guardar la siguiente información:

## Realizar Pagos

I. Método de pago: campo de selección que permita escoger el método de pago.

II. Confirmación de pago: estado que indique si el pago se ha realizado con éxito.

## Visualización de Facturas Pendientes

I. Lista de facturas: muestra todas las facturas pendientes de pago.

II. Detalles de la factura: incluye el monto, la fecha de vencimiento y los servicios o productos facturados.

## Historial de Pagos

I. Lista de pagos: muestra todos los pagos realizados.

II. Detalles del pago: incluye la cantidad, la fecha y el método de pago.

## Notificaciones de Confirmación de Pago

I. Notificación: mensaje que se envía después de realizar un pago.

II. Detalles de la notificación: incluye detalles del pago, como la cantidad, la fecha y el método de pago.

El sistema permitirá la creación, visualización y edición de los pagos y las facturas.

## Arquítectura


@startuml

package "Cliente" {
  [Frontend]
}

package "Servidor Linux" {
  node "Backend" {
    [API]
  }

  database "Base de Datos" {
    [Usuarios]
    [Marcas]
    [Inventario]
    [Tipos de Equipo]
    [Estados de Equipo]
    [Pagos]
  }

  package "Módulo de Usuarios" {
    [Creación de Usuarios]
    [Edición de Usuarios]
  }

  package "Módulo de Marcas" {
    [Creación de Marcas]
    [Edición de Marcas]
  }

  package "Módulo de Inventario" {
    [Creación de Equipos]
    [Edición de Equipos]
  }

  package "Módulo de Tipo de Equipo" {
    [Creación de Tipos de Equipo]
    [Edición de Tipos de Equipo]
  }

  package "Módulo de Estado de Equipo" {
    [Creación de Estados de Equipo]
    [Edición de Estados de Equipo]
  }

  package "Gestión de Pagos" {
    [Realizar Pagos]
    [Visualización de Facturas Pendientes]
    [Historial de Pagos]
    [Notificaciones de Confirmación de Pago]
  }
}

"Frontend" --> "API" : Envía solicitudes
"API" --> "Frontend" : Responde a solicitudes

"Módulo de Usuarios" --> "Base de Datos" : Almacena/Recupera Usuarios
"Módulo de Marcas" --> "Base de Datos" : Almacena/Recupera Marcas
"Módulo de Inventario" --> "Base de Datos" : Almacena/Recupera Equipos
"Módulo de Tipo de Equipo" --> "Base de Datos" : Almacena/Recupera Tipos de Equipo
"Módulo de Estado de Equipo" --> "Base de Datos" : Almacena/Recupera Estados de Equipo
"Gestión de Pagos" --> "Base de Datos" : Almacena/Recupera Pagos

@enduml


    
    

