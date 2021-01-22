const functions = require('firebase-functions');

//Declaración de objetos de dialogflow que vamos a utilizar
const {
    dialogflow,
    Image,
    Table,
    Carousel,
    Suggestions,
    BrowseCarousel,
    LinkOutSuggestion,
    List,
} = require ('actions-on-google');

//Instanciamos en la variable app la función dialogflow
const app = dialogflow();

// Encontramos el primer intent del bot con una imagen y unas sugerencias
app.intent ('Default Welcome Intent', (conv, params) => {

        conv.ask(`Bienvenido al asistente de NH hoteles, soy marta. ¿En que puedo ayudarle?`);
        conv.ask(new Image ({
            url: 'https://www.tourinews.es/uploads/s1/47/03/71/nh-hotel-group-tambien-recurre-al-ico-para-garantizar-su-liquidez_4_732x400.jpeg',
            alt: 'Hotel',
        }))
        conv.ask(new Suggestions('Reservar habitación'));
        conv.ask(new Suggestions('Consultar precios'));
        conv.ask(new Suggestions('Consultar reserva'));
});

// Damos sugerencias y un texto al intent de información
app.intent ('Information', (conv, params) => {
  conv.ask("Digame sobre que quiere información");
  conv.ask(new Suggestions ('Habitaciones para 2'));
  conv.ask(new Suggestions ('Habitaciones para 4'));
  conv.ask(new Suggestions ('Servicios'));
});


// Facilitamos información mediante una lista de los servicios y habitaciones que disponemos
app.intent ('Information Services', (conv, params) => {
  conv.ask(new List({
    title: 'Servicios',
    items: {
      // Add the first item to the list
      'SELECTION_KEY_ONE': {
        synonyms: [
          'Servicios',
        ],
        title: 'Piscina',
        description: 'Disponemos de una piscina exterior',
        image: new Image({
          url: 'https://www.traveladvisorsguild.com/wp-content/uploads/2019/05/SP_NH_collection-gran-hotel-calderon_467.jpg',
          alt: 'Piscina',
        }),
      },
      // Add the second item to the list
      'SELECTION_KEY_GOOGLE_HOME': {
        synonyms: [
          'Comedor',
      ],
        title: 'Comedor',
        description: 'Disponemos de un comedor tipo bufet.',
        image: new Image({
          url: 'https://img.nh-hotels.net/nh_imperial_playa-212-buffet_breakfast.jpg?output-quality=80&resize=1110:*&composite-to=center,center|1110:380&background-color=white',
          alt: 'Comedor',
        }),
      },
      // Add the third item to the list
      'SELECTION_KEY_GOOGLE_PIXEL': {
        synonyms: [
          'Sauna',
        ],
        title: 'Sauna',
        description: 'Disponemos de una sauna donde los clientes puedan relajarse.',
        image: new Image({
          url: 'https://img.nh-hotels.net/nh_conference_centre_leeuwenhorst-224-hotel_facilities.jpg?output-quality=80&resize=1110:*&composite-to=center,center|1110:380&background-color=white',
          alt: 'Sauna',
        }),
      },
    },
  }));
  conv.ask("¿Puedo ayudarle con algo más?");
  conv.ask(new Suggestions ('Realizar otra consulta'));
  conv.ask(new Suggestions ('No necesito nada más'));
});

app.intent ('Information Room for 2', (conv, params) => {
  conv.ask(new List({
    title: 'Habitaciones para dos',
    items: {
      // Add the first item to the list
      'SELECTION_KEY_ONE': {
        synonyms: [
          'Habitaciones para dos',
        ],
        title: 'Confort',
        description: 'Es una habitación destinada al descanso y al binestar de nuestros clientes',
        image: new Image({
          url: 'https://img.nh-hotels.net/nh_collection_victoria-205-rooms.jpg?output-quality=70&resize=460:*&composite-to=center,center|460:240&background-color=white',
          alt: 'Confort',
        }),
      },
      // Add the second item to the list
      'SELECTION_KEY_GOOGLE_HOME': {
        synonyms: [
          'Premium',
      ],
        title: 'Premium',
        description: 'Es una habitación donde el cliente sentira que se encuentra en un espacio innovador',
        image: new Image({
          url: 'https://s1.eestatic.com/2018/05/11/actualidad/Actualidad_306482496_77336711_1024x576.jpg',
          alt: 'Premium',
        }),
      },
      // Add the third item to the list
      'SELECTION_KEY_GOOGLE_PIXEL': {
        synonyms: [
          'Suite',
        ],
        title: 'Suite',
        description: 'Es una habitación destinada a aquellas personas que necesiten la máxima intimidad y exclusividad durante su estancia',
        image: new Image({
          url: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/11/15077180646198.jpg',
          alt: 'Suite',
        }),
      },
    },
  }));
  conv.ask("¿Puedo ayudarle con algo más?");
  conv.ask(new Suggestions ('Realizar otra consulta'));
  conv.ask(new Suggestions ('No necesito nada más'));
});

app.intent ('Information Room for 4', (conv, params) => {
  conv.ask(new List({
    title: 'Habitaciones para cuatro',
    items: {
      // Add the first item to the list
      'SELECTION_KEY_ONE': {
        synonyms: [
          'Habitaciones para cuatro',
        ],
        title: 'Confort',
        description: 'Es una habitación destinada al descanso y al binestar de nuestros clientes',
        image: new Image({
          url: 'https://i.pinimg.com/originals/71/5e/8d/715e8d86344f0981a4831f67880239ca.png',
          alt: 'Confort',
        }),
      },
      // Add the second item to the list
      'SELECTION_KEY_GOOGLE_HOME': {
        synonyms: [
          'Premium',
      ],
        title: 'Premium',
        description: 'Es una habitación donde el cliente sentira que se encuentra en un espacio innovador y con habitaciones comunicadas',
        image: new Image({
          url: 'https://www.hotelindiana.es/wp-content/uploads/2017/07/habitacion-comunicada-4-5-personas-1030x641.jpg',
          alt: 'Premium',
        }),
      },
      // Add the third item to the list
      'SELECTION_KEY_GOOGLE_PIXEL': {
        synonyms: [
          'Suite',
        ],
        title: 'Palace',
        description: 'Es una habitación destinada a aquellas personas que necesiten la máxima intimidad, exclusividad y espacio durante su estancia',
        image: new Image({
          url: 'https://s1.eestatic.com/2018/05/11/actualidad/Actualidad_306482496_77336711_1024x576.jpg',
          alt: 'Palace',
        }),
      },
    },
  }));
  conv.ask("¿Puedo ayudarle con algo más?");
  conv.ask(new Suggestions ('Realizar otra consulta'));
  conv.ask(new Suggestions ('No necesito nada más'));
});

app.intent ('Information Room for 4', (conv, params) => {
  conv.ask(new List({
    title: 'Habitaciones para cuatro',
    items: {
      // Add the first item to the list
      'SELECTION_KEY_ONE': {
        synonyms: [
          'Habitaciones para cuatro',
        ],
        title: 'Confort',
        description: 'Es una habitación destinada al descanso y al binestar de nuestros clientes',
        image: new Image({
          url: 'https://i.pinimg.com/originals/71/5e/8d/715e8d86344f0981a4831f67880239ca.png',
          alt: 'Confort',
        }),
      },
      // Add the second item to the list
      'SELECTION_KEY_GOOGLE_HOME': {
        synonyms: [
          'Premium',
      ],
        title: 'Premium',
        description: 'Es una habitación donde el cliente sentira que se encuentra en un espacio innovador y con habitaciones comunicadas',
        image: new Image({
          url: 'https://www.hotelindiana.es/wp-content/uploads/2017/07/habitacion-comunicada-4-5-personas-1030x641.jpg',
          alt: 'Premium',
        }),
      },
      // Add the third item to the list
      'SELECTION_KEY_GOOGLE_PIXEL': {
        synonyms: [
          'Suite',
        ],
        title: 'Palace',
        description: 'Es una habitación destinada a aquellas personas que necesiten la máxima intimidad, exclusividad y espacio durante su estancia',
        image: new Image({
          url: 'https://s1.eestatic.com/2018/05/11/actualidad/Actualidad_306482496_77336711_1024x576.jpg',
          alt: 'Palace',
        }),
      },
    },
  }));
  conv.ask("¿Puedo ayudarle con algo más?");
  conv.ask(new Suggestions ('Realizar otra consulta'));
  conv.ask(new Suggestions ('No necesito nada más'));
});


// Conjunto de intents para dar información al usuario de su reserva
app.intent ('Reservation info', (conv, params) => {
  conv.ask("Digame el número de su reserva");
  conv.ask(new Suggestions('1000001'));
});

app.intent ('Reservation info with code', (conv, params) => {
  conv.ask("Dispone de una reserva para 2 personas el día 9 de abril en una habitación confort con pensión completa.");
  conv.ask("¿Necesita algo más?");
  conv.ask(new Suggestions ('Realizar otra consulta'));
  conv.ask(new Suggestions ('No necesito nada más'));
});


// Información sobre las tarifas mediante una tabla
app.intent ('Prices', (conv, params) => {
  conv.ask("Aqui puede ver nuestras tarifas por día");
  conv.ask(new Table({
    dividers: true,
    columns: ['Tipo de habitación', 'Media pensión', 'Pensión Completa'],
    rows: [
      ['Confort para 2', '50 €', '62 €'],
      ['Premium para 2', '80 €', '92 €'],
      ['Suite para 2', '120 €', '132 €'],
      ['Confort para 4', '80 €', '110 €'],
      ['Premium para 4', '100 €', '140 €'],
      ['Palace para 4', '200 €', '250 €'],
    ],
  }));
  conv.ask("¿Puedo ayudarle con algo más?");
  conv.ask(new Suggestions ('Realizar otra consulta'));
  conv.ask(new Suggestions ('No necesito nada más'));
});


// Conjunto de intents para realizar una reserva
app.intent ('Reservation Room', (conv, params) => {
    conv.ask("Disponemos de habitaciones para 2 o para 4 Personas, digame que tipo de habitación quiere reservar");
    conv.ask(new Suggestions('Habitación para dos'));
    conv.ask(new Suggestions('Habitación para cuatro'));
    conv.ask(new Suggestions('Necesito otras opciones'));
});

app.intent ('Other Options', (conv, params) => {
  conv.ask("Digame que opción es la que necesita");
  conv.ask(new Suggestions('Habitación para 1'));
  conv.ask(new Suggestions('Somos más personas'));
});

app.intent ('1 Person', (conv, params) => {
  conv.ask("Las habitaciones individuales son iguales a las de dos personas, por lo que puede reservar una de dos personas.");
  conv.ask("Quiere reservar una habitación para dos personas?");
  conv.ask(new Suggestions('Si'));
  conv.ask(new Suggestions('No'));
});

app.intent ('1 Person - yes', (conv, params) => {
  conv.ask("Vamos a proceder a la reserva de una habitación para dos personas.");
  conv.ask("¿Desea continuar?");
  conv.ask(new Suggestions('Continuar dos personas'));
  conv.ask(new Suggestions('Terminar'));
});

app.intent ('1 Person - no', (conv, params) => {
  conv.ask("Lamentamos oir eso.");
  conv.ask("¿Puedo ayudarle con algo más?");
  conv.ask(new Suggestions ('Realizar otra consulta'));
  conv.ask(new Suggestions ('No necesito nada más'));
});

app.intent ('Reservation for group', (conv, params) => {
  conv.ask("Para realizar reservas para más personas debe hacerlo a través del teléfono 901 000 000 o a través de nuestra página web www.nh-hoteles.");
  conv.ask("¿Puedo ayudarle con algo más?");
  conv.ask(new LinkOutSuggestion({
    name: 'Web',
    url: 'https://www.nh-hoteles.es',
  }));
  conv.ask(new Suggestions ('Realizar otra consulta'));
  conv.ask(new Suggestions ('No necesito nada más'));
});


app.intent ('Room for 2', (conv, params) => {

    conv.user.storage.num_persons = 2;

    conv.ask("Que tipo de habitación desea");
    conv.ask(new Suggestions ('Confort'));
    conv.ask(new Suggestions ('Media'));
    conv.ask(new Suggestions ('Alta gama'));

    conv.ask(new Carousel({
        title: 'Habitaciones para dos',
        items: {
          // Add the first item to the carousel
          'SELECTION_KEY_ONE': {
            synonyms: [
              'Confortable',
            ],
            title: 'Habitación confortable',
            image: new Image({
              url: 'https://img.nh-hotels.net/nh_collection_victoria-205-rooms.jpg?output-quality=70&resize=460:*&composite-to=center,center|460:240&background-color=white',
              alt: 'Habitacion confortable',
            }),
          },
          // Add the second item to the carousel
          'SELECTION_KEY_GOOGLE_HOME': {
            synonyms: [
              'Suite',
          ],
            title: 'Suite',
            image: new Image({
              url: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/11/15077180646198.jpg',
              alt: 'Suite',
            }),
          },
          // Add the third item to the carousel
          'SELECTION_KEY_GOOGLE_PIXEL': {
            synonyms: [
              'Habitación Premium',
            ],
            title: 'Habitación premium',
            image: new Image({
              url: 'https://s1.eestatic.com/2018/05/11/actualidad/Actualidad_306482496_77336711_1024x576.jpg',
              alt: 'Habitación premium',
            }),
          },
        },
      }));
}); 


app.intent ('Room for 4', (conv, params) => {

  conv.user.storage.num_persons = 4;

  conv.ask("Que tipo de habitación desea");
  conv.ask(new Suggestions ('Confort'));
  conv.ask(new Suggestions ('Media'));
  conv.ask(new Suggestions ('Palace'));

  conv.ask(new Carousel({
      title: 'Habitaciones para cuatro',
      items: {
        // Add the first item to the carousel
        'SELECTION_KEY_ONE': {
          synonyms: [
            'Confortable',
          ],
          title: 'Habitación confortable',
          image: new Image({
            url: 'https://i.pinimg.com/originals/71/5e/8d/715e8d86344f0981a4831f67880239ca.png',
            alt: 'Habitacion confortable',
          }),
        },
        // Add the second item to the carousel
        'SELECTION_KEY_GOOGLE_HOME': {
          synonyms: [
            'Alta gama',
        ],
          title: 'Palace',
          image: new Image({
            url: 'https://media-cdn.tripadvisor.com/media/photo-s/05/c5/02/de/hotel-princesa-de-eboli.jpg',
            alt: 'Palace',
          }),
        },
        // Add the third item to the carousel
        'SELECTION_KEY_GOOGLE_PIXEL': {
          synonyms: [
            'Habitación Premium',
          ],
          title: 'Habitación premium',
          image: new Image({
            url: 'https://www.hotelindiana.es/wp-content/uploads/2017/07/habitacion-comunicada-4-5-personas-1030x641.jpg',
            alt: 'Habitación premium',
          }),
        },
      },
    }));
}); 


app.intent ('Room for 2 Confort', (conv, params) => {

    conv.user.storage.date = "El 9 de abril";
    conv.user.storage.type = "confort";

    conv.ask(`En que fecha quiere realizar la reserva`);
    conv.ask(new Image ({
        url: 'https://s1.eestatic.com/2018/05/11/actualidad/Actualidad_306482496_77336711_1024x576.jpg',
        alt: 'Confort',
    }))
    conv.ask(new Suggestions ('El 9 de abril'));
});

app.intent ('Room for 4 Confort', (conv, params) => {

  conv.user.storage.date = "El 9 de abril";
  conv.user.storage.type = "confort";

  conv.ask(`En que fecha quiere realizar la reserva`);
  conv.ask(new Image ({
      url: 'https://i.pinimg.com/originals/71/5e/8d/715e8d86344f0981a4831f67880239ca.png',
      alt: 'Confort',
  }))
  conv.ask(new Suggestions ('El 9 de abril'));
});

app.intent ('Room for 2 Premium', (conv, params) => {

    conv.user.storage.date = "El 1 de agosto";
    conv.user.storage.type = "premium";

    conv.ask(`En que fecha quiere realizar la reserva`);
    conv.ask(new Image ({
        url: 'https://s1.eestatic.com/2018/05/11/actualidad/Actualidad_306482496_77336711_1024x576.jpg',
        alt: 'Premium',
    }))
    conv.ask(new Suggestions ('El 1 de agosto'));
});

app.intent ('Room for 4 Premium', (conv, params) => {

  conv.user.storage.date = "El 1 de agosto";
  conv.user.storage.type = "premium";

  conv.ask(`En que fecha quiere realizar la reserva`);
  conv.ask(new Image ({
      url: 'https://www.hotelindiana.es/wp-content/uploads/2017/07/habitacion-comunicada-4-5-personas-1030x641.jpg',
      alt: 'Premium',
  }))
  conv.ask(new Suggestions ('El 1 de agosto'));
});

app.intent ('Room for 2 Suite', (conv, params) => {

  conv.user.storage.date = "El 24 de diciembre";
  conv.user.storage.type = "suite";

  conv.ask(`En que fecha quiere realizar la reserva`);
  conv.ask(new Image ({
      url: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/11/15077180646198.jpg',
      alt: 'Premium',
  }))
  conv.ask(new Suggestions ('El 24 de diciembre'));
});

app.intent ('Room for 4 Top', (conv, params) => {

  conv.user.storage.date = "El 24 de diciembre";
  conv.user.storage.type = "de alta gama";

  conv.ask(`En que fecha quiere realizar la reserva`);
  conv.ask(new Image ({
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/05/c5/02/de/hotel-princesa-de-eboli.jpg',
      alt: 'Premium',
  }))
  conv.ask(new Suggestions ('El 24 de diciembre'));
});

app.intent ('Pension', (conv, params) => {

    conv.ask('¿Desea que la estancia sea con pensión completa o media pensión?');
    conv.ask(new Suggestions ('Pensión Completa'));
    conv.ask(new Suggestions ('Media pensión'));
});

app.intent ('Pension Complete', (conv, params) => {
    conv.user.storage.pension = "pension completa";
    conv.ask(`Desea finalizar la reserva para ${conv.user.storage.num_persons} personas el día ${conv.user.storage.date} en una habitación ${conv.user.storage.type} con ${conv.user.storage.pension}`);
    conv.ask(new Suggestions ('Finalizar reserva'));
    conv.ask(new Suggestions ('Cancelar reserva'));
});

app.intent ('Pension Med', (conv, params) => {
  conv.user.storage.pension = "Media pensión";
  conv.ask(`¿Desea finalizar la reserva para ${conv.user.storage.num_persons} personas el día ${conv.user.storage.date} en una habitación ${conv.user.storage.type} con ${conv.user.storage.pension}?`);
  conv.ask(new Suggestions ('Finalizar reserva'));
  conv.ask(new Suggestions ('Cancelar reserva'));
});

app.intent ('Finish reservation room', (conv, params) => {
    conv.ask("Muchas gracias por su reserva.");
    conv.ask("¿Puedo ayudarle con algo más?");
    conv.ask(new Suggestions ('Realizar otra consulta'));
    conv.ask(new Suggestions ('Ya he acabado'));
});

app.intent ('Cancel reservation room', (conv, params) => {
  conv.ask("Lamentamos que la reserva no se haya finalizado.");
  conv.ask("¿Puedo ayudarle con algo más?");
  conv.ask(new Suggestions ('Realizar otra consulta'));
  conv.ask(new Suggestions ('No necesito nada más'));
});

// Intents de despedida con dos posibles finales uno que el usuario se vaya sin finalizar y otro que el usuario se vaya finalizando su reserva.
app.intent ('Bad Final', (conv, params) => {
  conv.ask("Lamento oir eso.");
  conv.ask("Vuelve cuando quieras y te ayudaré en lo que necesites.");
  conv.ask(new Image ({
    url: 'https://img.freepik.com/vector-gratis/fondo-lettering-adios-mano-dibujo-animado_23-2147958749.jpg?size=338&ext=jpg',
    alt: 'Adios',
  }));
});

app.intent ('Happy Final', (conv, params) => {
  conv.ask("Esperamos que su experiencia en nuestros hoteles sea satisfactoria.");
  conv.ask(new Image ({
    url: 'https://img.freepik.com/vector-gratis/fondo-lettering-adios-mano-dibujo-animado_23-2147958749.jpg?size=338&ext=jpg',
    alt: 'Adios',
  }));
});

// Si el bot no entiende al usuario se ejecutara esta funcion aconsejandole volver a empezar.
app.intent ('Default Fallback Intent', (conv, params) => {
  conv.ask("Disculpa no le he entendido.");
  conv.ask("Quiza podria intentar a saludarme.");
  conv.ask(new Image ({
    url: 'https://www.museudebadalona.cat/wp-content/uploads/presentaci%C3%B3-web-800x321.jpg',
    alt: 'Error',
  }));
  conv.ask(new Suggestions("Hola"))
});

// pasa a la función on request la función dialogflow() almacenandolo en la variable fulfillment, esto es lo primero que se ejecutara en nuestro bot
exports.fulfillment = functions.https.onRequest(app);

