class Usuario {

    constructor(nombre, apellido, libros, mascotas){
        
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros=[],
        this.mascotas = mascotas
    }

    getFullName(){
    return `${this.nombre} ${this.apellido}`
    }

    addMascotas(){
    this.mascotas.push('cerdo');
    console.log('se añadio una nueva mascota');
    }

    countMascotas(){
        return `${this.mascotas.length}`
    }

    addBook(){
        this.libros.push({libro:'Dracula', autor: 'Bram Stoker'},{libro : 'IT', autor : 'Stephen King'},{libro : 'Viaje al centro de la tierra', autor : 'Julio Verne'});
        console.log('se añadieron tus libros favoritos');
    }

    getBookName(){
        const bookName=[];
        this.libros.forEach(({libro}) => {
            bookName.push(libro);
        });
        return bookName;
    }
}
let usuario=new Usuario('carlos','restrepo','', ['gato','perro','hamster','caballo'])