const maquillaje = { 
        usuario: {
            id: 1,
            mail: "tinistoessel@gmail.com",
            username: "tinita99",
            userpassword: "stoessel123",
            birthday: "21/03/1999",
            dni: "12345678",
            profileimage: "/images/tini.jpg",
        },
        products: {
            lista: [
            {
                id: 1,
                productimage: "/images/base.jpg",
                productname: "Base",
                productdescription: "Cobertura media a completa con acabado natural. Resiste todo el día sin sentirse pesada. Ideal para pieles mixtas a grasas.",
            },
            {
                id: 2,
                productimage: "/images/Corrector.jpg",
                productname: "Corrector",
                productdescription: "Cubre ojeras y manchas al instante con un efecto luminoso. Textura cremosa que se difumina fácil y no se acumula.",
            },
            {
                id: 3,
                productimage: "/images/Rubor.jpg",
                productname: "Rubor",
                productdescription: "Aporta un toque de color suave y radiante que se integra perfectamente con la piel. Su fórmula liviana deja un acabado natural, ideal para realzar tu brillo.",
            },
            {
                id: 4,
                productimage: "/images/Polvo.jpg",
                productname: "Polvo",
                productdescription: "Sella el maquillaje y controla el brillo sin alterar el color. Acabado suave y sin flashback.",
            },
            {
                id: 5,
                productimage: "/images/Sombra.jpg",
                productname: "Sombra",
                productdescription: " Fórmula cremosa de alta pigmentación que se aplica con facilidad. Deja un acabado natural y duradero, ideal para un look fresco que se mantiene todo el día.",
            },
            {
                id: 6,
                productimage: "/images/Delineador.jpg",
                productname: "Delineador",
                productdescription: "Punta ultra precisa para trazos definidos o dramáticos. Secado rápido y a prueba de todo.",
            },
            {
                id: 7,
                productimage: "/images/Rimmel.jpg",
                productname: "Rimmel",
                productdescription: "Alarga, curva y da volumen desde la primera pasada. No se corre ni se descascara.",
            },
            {
                id: 8,
                productimage: "/images/Lapiz.jpg",
                productname: "Lápiz",
                productdescription: "Trazo fino y natural para definir, rellenar y dar forma con precisión. Ideal para lograr unas cejas prolijas y con acabado impecable.",
            },
            {
                id: 9,
                productimage: "/images/Iluminador.jpg",
                productname: "Iluminador",
                productdescription: "Brillo radiante sin partículas gruesas. Ideal para darle luz a mejillas, nariz y arco de cupido.",
            },
            {
                id: 10,
                productimage: "/images/Labial.jpg",
                productname: "Labial",
                productdescription: "Color intenso que no se transfiere. Textura ligera, no reseca y se mantiene intacto por horas.",
            }
        ], 
        comments: [
            {
                username: "Celina",
                commenttext: "¡Muy bueno me encantó!",
                profileimage: "/images/tini.jpg",
            },
            {
                username: "Pilar",
                commenttext: "¡Súper recomendado!",
                profileimage: "/images/tini.jpg",
            },
            {
                username: "Sol",
                commenttext: "No es mi producto favorito.",
                profileimage: "/images/tini.jpg",
            },
        ]
    },
}

module.exports = maquillaje;