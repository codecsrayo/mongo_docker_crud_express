# Actividad Énfasis 2a Técnologías web 
 
En  la  institución  universitaria  IUDigital  existe  un  área  destinada  a  la  realización  de  asesorías 
académicas para estudiantes de pregrado y postgrado la cual funciona de manera transversal a los 
procesos académicos y además requiere un rubro por cada asesoría, la cual se considera como un 
proyecto  y  cada  proyecto  guarda  número,  título,  fecha  de  iniciación,  clientes,  universidad,  valor, 
tipo de proyecto, fecha de entrega, además guarda la etapa en la que se encuentra cada proyecto, 
las etapas son anteproyecto, entrega parcial 1, entrega parcial 2 y entrega final. 
Para  tener  en  cuenta  los  módulos  del  sistema  monolítico  (aplicación  con  todos  los  módulos  del 
sistema) son: 
* Módulo  tipo  de  proyecto,  en  este  módulo  se  administran  los  siguientes  datos:  nombre 
(ensayo, artículo, monografía, trabajo final de pregrado y trabajo final de especialización), 
fecha de creación y fecha de actualización, el sistema permitirá listar, crear y actualizar tipos 
de proyecto. 
* Módulo de cliente, el cual se manejan los siguientes datos: nombre, email, fecha creación y 
fecha de actualización, el sistema permitirá listar, crear y editar clientes. 
* Módulo  de  Universidad,  este  módulo  tiene  en  cuenta  los  siguientes  datos:  nombre, 
dirección, teléfono, fecha de creación y fecha de actualización, el sistema permitirá listar, 
crear y editar universidades. 
* Módulo de etapas, este módulo tiene en cuenta los siguientes datos: nombre 
(anteproyecto, entrega parcial 1, entrega parcial 2, y entrega final), fecha creación y fecha 
actualización, el sistema permitirá listar, crear y editar etapas. 
* Módulo  de  proyecto  en  el  cual  se  manejan  los  siguientes  datos:  numero  (campo  único), 
título, fecha iniciación, fecha entrega, valor, fecha creación, fecha de actualización, cliente 
que  requiere  el  servicio,  tipo  de  proyecto,  universidad  y  etapa  del  proyecto,  el  sistema 
permitirá listar, crear y editar proyectos. 
 
__ResumenModels__:

```yaml
TipoProyecto:
    - Nombre
    - Ensayo
    - Articulo
    - Monografia
    - TrabajoFinalPregrado
    - TrabajoFinalesPecializacion
    - FechaCreacion
    - FechaUpdate

Cliente:
    - Nombre
    - Email
    - FechCreacion
    - FechaUpdate

Universidad:
    - Nombre
    - Direccion
    - Telefono
    - FechaCreacion
    - FechaActualizacion

Etapas:
    - Nombre
    - AnteProyecto
    - ParcialFirst
    - ParcialSecond
    - EntregaFinal
    - FechaCreacion
    - FechaUpdate

Proyecto:
    - Numero
    - Titulo
    - FechaInicio
    - FechaEntrega
    - Valor
    - FechaCreacion
    - FechaUpdate
    - Requerido
    - TipoProyecto
    - Universidad
    - EtapaProyecto

```

----

Desarrollar una aplicación con NodeJs y Mongodb con los respectivos módulos mencionados. Una 
vez  desarrollada  la  aplicación,  analizar  cual  es  el  componente  que  mayor  demanda  tiene y 
desacoplarlo de la aplicación previamente construida. 
El estudiante deberá entregar las imágenes de la aplicación inicialmente construida y la de la nueva 
aplicación con la funcionalidad del componente que más demanda tiene montadas en Docker hub 
y los archivos de Docker Compose con el Orquestamiento del despliegue de cada aplicación. 