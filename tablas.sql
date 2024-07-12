create table proveedores (
    cod_prov int primary key,
    nombre varchar(40) not null,
    telefono varchar(13),
    email varchar(120),
    direccion varchar(40),
    fecha_ingreso datetime not null,
    fecha_actualizacion datetime not null
);

create table bebidas (
    cod_bebida int primary key,
    nombre varchar(40) not null,
    descripcion varchar(120),
    unidades int,
    precio_u double,
    precio_c double,
    fecha_actualizacion datetime not null,
    fecha_ingreso datetime not null,
    cod_prov_fk int,
    cod_categoria_fk int,
    foreign key (cod_prov_fk) references proveedores (cod_prov),
    foreign key (cod_categoria_fk) references categorias (cod_categoria)
);

create table categoria (
	cod_categoria int primary key,
    nombre
);

create table clientes (
    cod_cliente int primary key,
    nombre_y_apellido varchar(120) not null,
    telefono varchar(13),
    email varchar(40),
    fecha_ingreso datetime not null,
    fecha_actualizacion datetime not null
);

create table ventas (
    cod_venta int primary key,
    fecha datetime not null,
    valor double not null,
    cantidad int not null,
    cod_bebida_fk int,
    cod_cliente_fk int,
    foreign key (cod_bebida_fk) references bebidas (cod_bebida),
    foreign key (cod_cliente_fk) references clientes (cod_cliente)
);

create table compras (
    cod_compra int primary key,
    fecha datetime not null,
    valor double not null,
    cantidad int not null,
    cod_bebida_fk int,
    cod_prov_fk int,
    foreign key (cod_bebida_fk) references bebidas (cod_bebida),
    foreign key (cod_prov_fk) references proveedores (cod_prov)
);