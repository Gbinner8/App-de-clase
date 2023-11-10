import { categorias } from "../interfaces/categoria";

export const CATEGORIAS : categorias [] = [

        {
         nombre:'Hamburguesas',
         id:1,
         fotoUrl:"https://theobjective.com/wp-content/uploads/2022/06/065104/como-hacer-una-hamburguesa-mas-ligera-y-con-menos-calorias.jpeg",
         productos: [{
            nombre: "Classic burguer",
            precio: 2000,
            descripcion: "Medallón de carne vacuna de 180 gramos, lechuga, tomate y huevo.",
            imagen:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/11db0425-c513-4006-a402-e7509d82bcb9/Derivates/99947aea-eed5-44ee-b283-b6271fc810d5.jpg",
         },
         { 
            nombre:"Double cheeseburguer",
            precio: 2200,
            descripcion:"Doble medallón de carne vacuna de 180 gramos, doble queso cheddar y salsa barbacoa.",
            imagen:"https://leitesculinaria.com/wp-content/uploads/2022/07/skillet-bacon-cheeseburger-with-crispy-fried-onions-fp.jpg",
         },
         {
            nombre: "Veggie burguer",
            precio: 2000,
            descripcion:"Medallón de remolacha y avena, palta, lechuga y tomate.",
            imagen:"https://i0.wp.com/veganista.es/wp-content/uploads/2018/04/IMG_20180424_141630.jpg?resize=624%2C509",
         }]
        },
        {
         nombre:'Pizzas',
         id:2,
         fotoUrl:"https://assets.elgourmet.com/wp-content/uploads/2023/03/pizza_Mh3H4eanyBKEsStv1YclPWTf9OUqIi.png",
         productos: [{
            nombre:"Pizza especial",
            precio: 3200,
            descripcion:"Salsa de tomate, queso mozzarella, jamón, morón, huevo duro y aceitunas.",
            imagen:"https://static.wixstatic.com/media/a87c1f_1eca1a29be404cfc84ee3c45a8bbf9ef~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a87c1f_1eca1a29be404cfc84ee3c45a8bbf9ef~mv2.jpg",

         },
         {
            nombre:"Pizza fugazzeta",
            precio:3500,
            descripcion:"Salsa de tomate, queso mozzarella, cebollas salteadas, orégano y aceitunas.",
            imagen:"https://assets.unileversolutions.com/recipes-v2/210361.jpg",
      
         },
         {
            nombre:"Pizza margarita",
            precio:3000,
            descripcion:"Salsa de tomate, queso y albahaca.",
            imagen:"https://img.freepik.com/premium-photo/italian-pizza-margarita-margharita-with-tomato-sauce-mozzarella-cheese-fresh-green-basil_114420-2440.jpg?w=2000",
         },
         {
            nombre:"Pizza pepperoni",
            precio:3200,
            descripcion:"Salsa de tomate, queso mozzarella y rodajas de salame salteadas.",
            imagen:"https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale",
         },
         {
            nombre:"Pizza de rúcula y jamón crudo",
            precio:3600,
            descripcion:"Salsa de tomate, queso mozzarela, jamón crudo, rúcula fresca y parmesano rayado encima.",
            imagen:"https://media-cdn.tripadvisor.com/media/photo-s/09/34/cf/25/morada-del-sol-hosteria.jpg",
         }]
        },
        {
         nombre:'Postres',
         id:3,
         fotoUrl:"https://okdiario.com/img/2021/03/05/recetas-chocolate-655x368.jpg",
         productos:[{
            nombre:"Cheesecake de frutos rojos",
            precio: 1200,
            descripcion: "Base de galleta crujiente, crema suave con base en queso mascarpone cubierto por frutos rojos.",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGLHB4B2Fu2wZIjcB117Eye7T2dOQSTDzuA&usqp=CAU",

         },
         {
            nombre:"Brownie con helado",
            precio:1200,
            descripcion:"Torta brownie acompañada con helado de america y salsa de chocolate.",
            imagen:"data:image/jpeg;base64,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",
         },
         {
            nombre:"Flan casero",
            precio:1000,
            descripcion:"Flan casero con caramelo, acompañado con dulce de leche o crema.",
            imagen:"https://www.clarin.com/img/2019/11/07/JnNsfUJT_360x240__1.jpg",

         }]
        },
        {
         nombre:'Bebidas',
         id:4,
         fotoUrl:"https://i.blogs.es/7fc543/alcohol/1366_2000.jpg",
         productos:[{
            nombre:"Gaseosa pequeña",
            precio: 700,
            descripcion: "Línea Pepsi - 500 ml.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_876152-MLA50108072203_052022-O.webp",
         },
         {
            nombre:"Agua mineral",
            precio: 600,
            descripcion:"Agua mineral con o sin gas.",
            imagen:"https://carrefourar.vtexassets.com/arquivos/ids/171888/7790315000446_02.jpg?v=637468542321600000",

         },
         {
            nombre:"Cerveza artesanal",
            precio:1000,
            descripcion:"Pintas artesanales distintas variedades: Golden, stout, ipa o session ipa",
            imagen:"https://www.infofueguina.com/u/fotografias/m/2019/6/3/f850x638-55695_133184_5050.jpg",

         },
         {
            nombre:"Jarra limonada",
            precio:1600,
            descripcion:"Limonada fresca con hojas de menta y jengíbre.",
            imagen:"https://www.comedera.com/wp-content/uploads/2022/04/Limonada-shutterstock_379385302.jpg",
            
         }]
        },
       ]
       