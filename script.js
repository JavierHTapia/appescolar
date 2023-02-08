class Usuario {
    static contadorUsuario = 0;
    constructor(nombre, apellido, telefono, email) {
      this._idUsuario = ++Usuario.contadorUsuario;
      this._nombre = nombre;
      this._apellido = apellido;
      this._telefono = telefono;
      this._email = email;
    }
    get idUsuario() {
      return this._idUsuario;
    }
    get nombre() {
      return this._nombre;
    }
    set nombre(nombre) {
      this._nombre = nombre;
    }
    get apellido() {
      return this._apellido;
    }
    set apellido(apellido) {
      this._apellido = apellido;
    }
    get telefono() {
      return this._telefono;
    }
    set telefono(telefono) {
      this._telefono = telefono;
    }
    get email() {
      return this._email;
    }
    set email(email) {
      this._email = email;
    }
    toString() {
      return `\n${this._nombre}|${this._apellido}|Tel:${this._telefono}|email: ${this._email}`;
    }
  }
  /* ESTUDIANTE */
  class Estudiante extends Usuario {
    static contadorEstudiante = 0;
    constructor(nombre, apellido, telefono, email, grado) {
      super(nombre, apellido, telefono, email)
      this._idEstudiante = ++Estudiante.contadorEstudiante;
      this._grado = grado;
    }
    get idEstudiante() {
      return this._idEstudiante;
    }
    get grado() {
      return this._grado;
    }
    set grado(grado) {
      this._grado = grado;
    }
    toString() {
      return `${super.toString()}\nGrado:${this._grado}`;
    }
  }
  /* DOCENTE */
  class Docente extends Usuario {
    static contadorDocente = 0;
    constructor(nombre, apellido, telefono, email, especialidad) {
      super(nombre, apellido, telefono, email)
      this._idDocente = ++Docente.contadorDocente;
      this._especialidad = especialidad;
    }
    get idDocente() {
      return this._idDocente;
    }
    get especialidad() {
      return this._especialidad;
    }
    set especialidad(especialidad) {
      this._especialidad = especialidad;
    }
    toString() {
      return `\nDocente:${super.toString()}\nEspecialidad: ${this._especialidad}`;
    }
  }
  /* MATERIA */
  class Materia {
    static contadorMateria = 0;
    constructor(nombreMateria) {
      this._idMateria = ++Materia.contadorMateria;
      this._nombreMateria = nombreMateria;
    }
    get idMateria() {
      return this._idMateria;
    }
    get nombreMateria() {
      return this._nombreMateria;
    }
    set nombreMateria(nombreMateria) {
      this._nombreMateria = nombreMateria;
    }
    toString() {
      return `\nMateria: id: ${this._idMateria}|${this._nombreMateria}`;
    }
  }
  /* MATRICULA */
  class Matricula {
    static contadorMatricula = 0;
    constructor(estudiante) {
      this._idMatricula = ++Matricula.contadorMatricula;
      this._estudiante = estudiante;
      this._materias = [];
    }
    get idMatricula() {
      return this._idMatricula;
    }
    get estudiante() {
      return this._estudiante;
    }
    agregarMateria(materia) {
      this._materias.push(materia);
    }
  
    mostrarMatricula() {
      let materiasMatriculadas = "";
      for (let materia of this._materias) {
        materiasMatriculadas += `\n${materia}`;
      }
      console.log(`Matricula: ${this._idMatricula}\nEstudiante: ${this._estudiante}\nMaterias: ${materiasMatriculadas}`);
    }
  }
  /* ASIGNACION MATERIAS */
  class Asignacion{
      static contadorAsignacion = 0;
      constructor(docente,materia){
          this._idAsignacion = ++Asignacion.contadorAsignacion;
          this._docente = docente;
          this._materia = materia;
      }
      get idAsignacion(){
          return this._idAsignacion;
      }
      toString(){
          return `Asignación: ${this._idAsignacion} ${this._docente} ${this._materia}`;
      }
  }
  /* ACTIVIDAD */
  class Actividad{
      static contadorActividad = 0;
      constructor(titulo,descripcion){
          this._idActividad = ++Actividad.contadorActividad;
          this._titulo = titulo;
          this._descripcion = descripcion;
      }
      get idActividad(){
          return this._idActividad;
      }
      get titulo(){
          return this._titulo;
      }
      set titulo(titulo){
          this._titulo = titulo;
      }
      get descripcion(){
          return this._descripcion;
      }
      set descripcion(descripcion){
          this._descripcion = descripcion;
      }
      toString(){
          return `id:${this._idActividad} Titulo:${this._titulo}\nDescripcion:${this._descripcion}`;
      }
  }
  /* TAREA */
  class Tarea{
      static contadorTarea = 0;
      constructor(materia){
          this._idTarea = ++Tarea.contadorTarea;
          this._materia = materia;
          this._actividades = [];
      }
      get idTarea(){
          return this._idTarea;
      }
      agregarActividad(actividad){
      this._actividades.push(actividad);
      }
      mostrarActividades(){
          let actividadTarea = '';
          for(let actividad of this._actividades){
              actividadTarea += `\n${actividad}`;
          }
          console.log(`Tarea:${this._idTarea}|${actividadTarea}`);
      }
      toString(){
          return `${this._idTarea} ${this._materia} ${this._actividad}`;
      }
  }
  
  
  let estudiante1 = new Estudiante('Javier', 'Huanca', 56565656, 'javier@gmail.com', '5to.');
  let estudiante2 = new Estudiante('Evo', 'Morales', 99999999, 'evo@gmail.com', '3ro.');
  
  let docente1 = new Docente('Andres', 'Pomacusi', 2222222, 'pomacusi@gmail.com', 'Historia');
  let docente2 = new Docente('Maria', 'Flores', 11111111, 'flores@gmail.com', 'quimica');
  
  let materia1 = new Materia('Ingles');
  let materia2 = new Materia('Sociales');
  let materia3 = new Materia('Matematicas');
  let materia4 = new Materia('Lenguaje');
  let matricula1 = new Matricula(estudiante2);
  matricula1.agregarMateria(materia4);
  matricula1.agregarMateria(materia2);
  matricula1.agregarMateria(materia3);
  matricula1.mostrarMatricula();
  let matricula2 = new Matricula(estudiante1);
  matricula2.agregarMateria(materia1);
  matricula2.mostrarMatricula();
  
  let asignacion1 = new Asignacion(docente1,materia1);
  
  let asignacion2 = new Asignacion(docente2,materia2);
  
  let actividad1 = new Actividad('Marketing','El marketin es la actividad');
  let actividad2 = new Actividad('Contabilidad','Conceptos');
  
  let tarea1 = new Tarea(materia1,actividad1);
  tarea1.agregarActividad(actividad1);
  tarea1.agregarActividad(actividad2);
  tarea1.mostrarActividades();
  