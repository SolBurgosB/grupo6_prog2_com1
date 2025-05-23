CREATE SCHEMA maquillaje_db;
USE maquillaje_db;

CREATE TABLE users (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(500) NOT NULL,
  mail TEXT NOT NULL,
  userpassword VARCHAR(500) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
  birthday DATE NOT NULL,
  dni CHAR(8) NOT NULL UNIQUE,
  profileimage VARCHAR(500) NOT NULL
);

INSERT INTO users VALUES (0,'Celina','celimaccari@gmail.com','Hola123', DEFAULT, DEFAULT, DEFAULT,'2006-01-05','47127379','https://em-content.zobj.net/source/apple/237/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png');
INSERT INTO users VALUES (DEFAULT,'Pilar','pilaruncal@gmail.com','Hola345', DEFAULT, DEFAULT, DEFAULT,'2005-11-12','46861068','https://em-content.zobj.net/source/apple/237/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png');
INSERT INTO users VALUES (DEFAULT,'Sol','solburgos@gmail.com','Hola678', DEFAULT, DEFAULT, DEFAULT,'2005-11-15','47248478','https://emojitool.com/img/apple/ios-14.5/woman-medium-skin-tone-473.png');
INSERT INTO users VALUES (DEFAULT,'Catalina','catalinapiantoni@gmail.com','Hola910', DEFAULT, DEFAULT, DEFAULT,'2006-01-05','47000000','https://em-content.zobj.net/source/apple/237/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png');
INSERT INTO users VALUES (DEFAULT,'Tini','tinistoessel@gmail.com','Hola112', DEFAULT, DEFAULT, DEFAULT,'2000-03-21','41000000','https://emojitool.com/img/apple/ios-14.5/woman-medium-skin-tone-473.png');

CREATE TABLE products (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  productimage VARCHAR(500) NOT NULL,
  productname VARCHAR(500) NOT NULL,
  productdescription VARCHAR(500) NOT NULL,
  userid INT UNSIGNED NOT NULL, 
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
  FOREIGN KEY (userid) REFERENCES users(id)
);

INSERT INTO products VALUES (0,'https://http2.mlstatic.com/D_NQ_NP_702169-MLA79667134087_092024-O.webp','Base líquida de larga duración',' Cobertura media a completa con acabado natural. Resiste todo el día sin sentirse pesada. Ideal para pieles mixtas a grasas.', 1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT,'https://www.maybelline.com.ar/-/media/project/loreal/brand-sites/mny/americas/latam/products/face/concealer/instant-age-rewind-concealer/product-packshot.jpeg?rev=a3f024830ea249daaff24fdc9d832df6&cx=0.25&cy=0.31&cw=315&ch=472&hash=2CBAAF902D73D62619168645E654C814','Corrector iluminador','Cubre ojeras y manchas al instante con un efecto luminoso. Textura cremosa que se difumina fácil y no se acumula', 2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT,'https://m.media-amazon.com/images/I/511naEb-UOL._AC_UF1000,1000_QL80_.jpg','Rubor en crema','Aporta un toque de color suave y radiante que se integra perfectamente con la piel. Su fórmula liviana deja un acabado natural, ideal para realzar tu brillo.', 3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT,'https://farmaciasdelpueblo.vtexassets.com/arquivos/ids/178206/Revlon-Polvo-Traslucido-Colorstay-Blot-0309970165123_img1.png?v=637892742963630000','Polvo matificante translúcido','Sella el maquillaje y controla el brillo sin alterar el color. Acabado suave y sin flashback.', 1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT,'https://juleriaque.vtexassets.com/arquivos/ids/205595/hypnose-palette-5-couleurs-9808663CBA7CFDD04FAD9911C081B2F6.jpg?v=638085769004670000','Sombra de ojos en barra',' Fórmula cremosa de alta pigmentación que se aplica con facilidad. Deja un acabado natural y duradero, ideal para un look fresco que se mantiene todo el día.', 2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT,'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw3ef1caeb/NATARG-95757_1.jpg','Delineador líquido waterproof','Punta ultra precisa para trazos definidos o dramáticos. Secado rápido y a prueba de todo.', 3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT,'https://cdn2.primor.eu/media/catalog/product/0/M/0MO20544_1_c58b.jpg','Máscara de pestañas volumen extremo','Alarga, curva y da volumen desde la primera pasada. No se corre ni se descascara.', 1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT,'https://m.media-amazon.com/images/I/71Z6khL9EPL._SL1500_.jpg','Lápiz de cejas retráctil','Trazo fino y natural para definir, rellenar y dar forma con precisión. Ideal para lograr unas cejas prolijas y con acabado impecable.', 2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT,'https://http2.mlstatic.com/D_NQ_NP_833586-MLA79890068758_102024-O.webp','Iluminador en polvo',' Brillo radiante sin partículas gruesas. Ideal para darle luz a mejillas, nariz y arco de cupido.', 3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO products VALUES (DEFAULT,'https://getthelookar.vtexassets.com/arquivos/ids/164106/222118_labial-liquido-maybelline-superstay-matte-ink-x-5-ml_imagen-1.jpg?v=637612688756770000','Labial líquido mate','Color intenso que no se transfiere. Textura ligera, no reseca y se mantiene intacto por horas.', 1, DEFAULT, DEFAULT, DEFAULT);

CREATE TABLE comments (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  productid INT UNSIGNED NOT NULL,
  userid INT UNSIGNED NOT NULL,
  commenttext VARCHAR(500) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
  FOREIGN KEY (productid) REFERENCES products(id),
  FOREIGN KEY (userid) REFERENCES users(id)
);

INSERT INTO comments VALUES (0, 1, 2,'¡Muy bueno me encantó!', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comments VALUES (DEFAULT, 2, 3,'¡Super recomendado!', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comments VALUES (DEFAULT, 3, 1,'No es mi producto favorito', DEFAULT, DEFAULT, DEFAULT);