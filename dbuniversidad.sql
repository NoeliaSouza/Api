create table Estudiantes(
	Legajo int primary key auto_increment,
    Nombre varchar(50) not null,
    Email varchar(50) not null

);

create table Cursos(
	Codigo int primary key,
    Nombre varchar(50) not null,
    Docente varchar(50) not null,
    Descripcion varchar(50) not null
);

create table Notas(
	Id int primary key,
    Nota decimal (10,2) not null,
    Fecha date not null,
    Legajo int not null,
    CodigoCurso int not null,
    foreign key (Legajo) references Estudiantes (Legajo),
    foreign key (CodigoCurso) references Cursos(Codigo)
);


Alter table estudiantes
modify column Legajo INT auto_increment;

Alter table notas
drop foreign key notas_ibfk_1;

Alter table notas
add constraint notas_ibfk_1 foreign key (Legajo) references estudiantes(Legajo);


