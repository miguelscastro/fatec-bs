create database Livraria
use Livraria

-- tabelas / colunas
create table Assunto (
	sg_Assunto char (2) not null,
	ds_Assunto varchar(20)
)
go

create table Autor (
	cd_autor int not null,
	nm_Autor varchar (45),
	ds_EnderecoAutor varchar (45),
	dt_Nascimento datetime
)
go

create table Editora (
	cd_Editora int not null,
	nm_Editora varchar (20),
)
go

create table Livro (
	cd_Livro int not null,
	nm_Titulo varchar (40),
	cd_Editora int not null,
	sg_Assunto char(2) not null,
	vl_Livro money,
	dt_lancamento datetime
)
go

create table Autor_Livro (
	cd_Livro int not null,
	cd_Autor int not null,
)

-- chaves primárias
alter table Livro
	add primary key (cd_Livro)
alter table Assunto
	add primary key (sg_Assunto)
alter table Editora
	add primary key (cd_Editora)
alter table Autor
	add primary key (cd_Autor)
alter table Autor_Livro
	add primary key (cd_Livro, cd_Autor)
go


-- chaves estrangeiras
alter table Livro
	add foreign key (sg_Assunto)
	references Assunto
alter table Livro
	add foreign key (cd_Editora)
	references Editora
go
alter table Autor_Livro
	add foreign key (cd_Livro)
	references Livro
alter table Autor_Livro
	add foreign key (cd_Autor)
	references Autor
go