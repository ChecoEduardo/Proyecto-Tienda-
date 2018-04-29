var app = angular.module('TechStore.servicios',[]);

app.factory('Lista',['$http',function($http){

      var ListadoItems={
               items:[{
                  Sku: 1,NomProd: "Digital Storage Oscilloscope",Ctg: "IDM",
                  Img:"Image/Osciloscopio.jpg",Popular: 3 ,Precio:7744 ,
                  Descripcion:"Siglent Technologies SDS1102CML+ Digital Storage Oscilloscope, 100 MHz " },{
                  Sku: 2,NomProd: "Samsung UN-55J5500 ",Ctg: "AV",
                  Img:"Image/pantalla1.jpg",Popular: 4 ,Precio:11499 ,
                  Descripcion:"Televisor de LED 55 pulgadas, Smart TV, Full HD, HDMI, USB"},{
                  Sku: 3,NomProd: "All-in-one Desktop",Ctg: "CP",
                  Img:"Image/computadora1.jpg",Popular: 4 ,Precio:7999 ,
                  Descripcion:" HP 20-c206la All-in-one Desktop, 19.5, AMD A4_7210 1.8 GHz, 4 GB RAM, Disco Duro 1 TB, Windows 10, color Blanco  "},{
                  Sku: 4,NomProd: "Ajedrez para jugadores Principiantes ",Ctg: "ETR",
                  Img:"Image/ajedrez.jpg",Popular: 4 ,Precio:62.65 ,
                  Descripcion:"Ajedrez: Ajedrez para jugadores Principiantes y hasta Nivel Intermedio; ¡Aprende Aperturas Creativas, Jaques Rápidos, Sacrificios Inteligentes y un Sólido Final Juego Final! "},{
                  Sku: 5,NomProd: "Camara Falsa De Seguridad",Ctg: "SR",
                  Img:"Image/seguridad2.jpg",Popular: 2 ,Precio:149 ,
                  Descripcion:"Camara Falsa De Seguridad Simulada Domo Con Led."},{
                  Sku: 6,NomProd: "Escáner Automotriz",Ctg: "IDM",
                  Img:"Image/scantool.jpg",Popular: 1 ,Precio:7900 ,
                  Descripcion:"CJ15 Scantool "},{
                  Sku: 7,NomProd: "Logitech Z506 ",Ctg: "AV",
                  Img:"Image/bocina1.jpg",Popular: 1 ,Precio: 1312,
                  Descripcion:"Surround Sound Speakers, negro 150 W"},{
                  Sku: 8,NomProd: "Scheda CPU Magi",Ctg: "CP",
                  Img:"Image/CPU.jpg",Popular: 5 ,Precio: 4102.25,
                  Descripcion:"Saeco 996530041077 (0317.804.00F) Scheda CPU Magi "},{
                  Sku: 9,NomProd: "Funda para Nintendo Switch 2017",Ctg: "ETR",
                  Img:"Image/nintendo.jpg",Popular: 3 ,Precio:299 ,
                  Descripcion:" Protección con Tope Shock-Absorción Carcasa, Negro"},{
                  Sku: 10,NomProd: "Surveyor Chaleco",Ctg: "SR",
                  Img:"Image/seguridad4.jpg",Popular: 4 ,Precio:484.25 ,
                  Descripcion:"DeWalt dsv521 – 4 x Clase 2 Heavy Duty Surveyor Chaleco, 4 x -large"},{
                  Sku: 11,NomProd: "Function Generator with Counter",Ctg: "IDM",
                  Img:"Image/Generador.jpg",Popular: 2 ,Precio: 4811.90,
                  Descripcion:"GW Instek AFG-2105 Arbitrary DDS Function Generator with Counter, Sweep, AM, FM and FSK Modulation, 0.1Hz to 5MHz Frequency Range"},{
                  Sku: 12,NomProd: "DBPOWER T22 HD Proyector de vídeo 2200",Ctg: "AV",
                  Img:"Image/proyector1.jpg",Popular: 2 ,Precio: 3499,
                  Descripcion:"lumens SOPORTA 1080p con entrada de cable HDMI AV para Home Cinema Teatro Multimedia TV portátil Game SD iPad iPhone Smartphone Android, Blanco"},{
                  Sku: 13,NomProd: "HP All in One",Ctg: "CP",
                  Img:"Image/computadora2.jpg",Popular: 4 ,Precio:7279 ,
                  Descripcion:"HP All in One 205 G1 E3T80LT"},{
                  Sku: 14,NomProd: "programación inteligente robot RC Toy Regalo",Ctg: "ETR",
                  Img:"Image/entretenimiento2.jpg",Popular: 4 ,Precio:520.25 ,
                  Descripcion:"goolsky jjr/C R2 Cady Wini Control de Gesto de programación inteligente robot RC Toy Regalo para Niños Entretenimiento"},{
                  Sku: 15,NomProd: "llave/tarjeta de soporte para la pared",Ctg: "SR",
                  Img:"Image/llave.jpg",Popular: 1 ,Precio:583.56 ,
                  Descripcion:"NU-SET 2 085-3 llave/tarjeta de soporte para la pared presionar el botón combinación de caja de seguridad, negro"},{
                  Sku: 16,NomProd: "Cautin De Lapiz Con Control De Potencia ",Ctg: "IDM",
                  Img:"Image/lapiz.jpg",Popular: 3 ,Precio: 490.25,
                  Descripcion:"Cautin De Lapiz Con Control De Potencia "},{
                  Sku: 17,NomProd: "Cable HDMI",Ctg: "AV",
                  Img:"Image/cables1.jpg",Popular: 5 ,Precio:197 ,
                  Descripcion:"AmazonBasics Cable HDMI 2.0 de alta velocidad, 2 unidades, negro"},{
                  Sku: 18,NomProd: "Kingston Digital ",Ctg: "CP",
                  Img:"Image/memoria.jpg",Popular: 1 ,Precio:131 ,
                  Descripcion:"Kingston Digital DataTraveler SE9 16GB USB 2.0 Dispositivo Flash (DTSE9H/16GBZ)"},{
                  Sku: 19,NomProd: "Canasta de baloncesto",Ctg: "ETR",
                  Img:"Image/canasta.jpg",Popular: 2 ,Precio: 4034.38,
                  Descripcion:"Lifetime 71526 Backboard and Rim Competition Combo"},{
                  Sku: 20,NomProd: "Falsa Seguridad CCTV con Luz LED Rojo",Ctg: "SR",
                  Img:"Image/camara.jpg",Popular: 1 ,Precio:739.41,
                  Descripcion:"TOROTON 4 Paquetes Falsos Falsa Seguridad CCTV con Luz LED Rojo Intermitente con Pegatinas Advertencia de Seguridad Pegatinas para Uso en Interiores y Exteriores Alerta para Casas y Negocios Largo"},{
                  Sku: 21,NomProd: "Multímetro Digital",Ctg: "IDM",
                  Img:"Image/seguirdad3.jpg",Popular: 3 ,Precio: 306.99,
                  Descripcion:"Zacro Multímetro Digital Mini Multímetro Digital XL830L Comprobador de corriente de batería con pantalla LCD con destornillador para instalar la batería..."},{
                  Sku: 22,NomProd: "HDMI Bi-Directional ",Ctg: "AV",
                  Img:"Image/switcher1.jpg",Popular: 4 ,Precio:273.88 ,
                  Descripcion:"Fosmon HD8024 2x1 or 1x2 Ultra HD 4K HDMI Bi-Directional Switcher with HDCP Passthrough, Supports 3D and 1080P"},{
                  Sku: 23,NomProd: "Corsair Spec 02 Gabinete ATX Gaming ",Ctg: "CP",
                  Img:"Image/compu.jpg",Popular: 2 ,Precio: 940.50,
                  Descripcion:"Corsair Spec 02 Gabinete ATX Gaming "},{
                  Sku: 24,NomProd: "PlayStation 4 Standard Edition",Ctg: "ETR",
                  Img:"Image/ps4.jpg",Popular: 1 ,Precio:8485 ,
                  Descripcion:"Consola Playstation Pro 1TB - PlayStation 4 Standard Edition "},{
                  Sku: 25,NomProd: "Candado de Combinación con Letras",Ctg: "SR",
                  Img:"Image/Seguridad1.jpg",Popular: 2 ,Precio:435.89 ,
                  Descripcion:"Master Lock 1535DWD Candado de Combinación con Letras para Recordar Fácilmente"},{
                  Sku: 26,NomProd: "Medidor Digital",Ctg: "IDM",
                  Img:"Image/medidor.jpg",Popular: 3 ,Precio: 2509.50,
                  Descripcion:"klein tools CL800 AC/DC Auto-Ranging 600 Amp Digital medidor de abrazadera"},{
                  Sku: 27,NomProd: "Impresora Multifuncional",Ctg: "AV",
                  Img:"Image/impresora.jpg",Popular: 5 ,Precio:1274 ,
                  Descripcion:"HP 2675 Impresora Multifuncional "},{
                  Sku: 28,NomProd: "Router Inalámbrico ",Ctg: "CP",
                  Img:"Image/modem.jpg",Popular: 2 ,Precio:1179 ,
                  Descripcion:"TP-Link Archer C2 Router Inalámbrico Gigabit Banda Dual Simultanea, AC750, 2 Antenas Externas"},{
                  Sku: 29,NomProd: "CAJA DE CUBOS ABC",Ctg: "ETR",
                  Img:"Image/entretenimiento1.jpg",Popular: 4 ,Precio:370 ,
                  Descripcion:"Ivanna & Pau - CAJA DE CUBOS ABC"},{
                  Sku: 30,NomProd: "Maxsa motion-activated seguridad luz de inundación",Ctg: "SR",
                  Img:"Image/lampara.jpg",Popular: 5 ,Precio: 2015.25,
                  Descripcion:"Maxsa motion-activated seguridad luz de inundación, 150 LED brillante con energía solar al aire última intervensión luz para garajes y yardas plata 44150"}




                ]};


      return ListadoItems.items;
}])
