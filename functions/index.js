const functions = require('firebase-functions');

const {
    dialogflow,
    Image,
    Table,
    Carousel,
    Suggestions,
} = require ('actions-on-google');

const app = dialogflow();
const HOSTING = 'https://conversational-ai.eu/adria/hosting/img/';

app.intent ('Default Welcome Intent', (conv, params) => {

        conv.ask(`Bienvenido al asistente de NH hoteles, soy marta. ¿En que puedo ayudarle?`);
        conv.ask(new Image ({
            url: 'https://www.tourinews.es/uploads/s1/47/03/71/nh-hotel-group-tambien-recurre-al-ico-para-garantizar-su-liquidez_4_732x400.jpeg',
            alt: 'A bot',
        }))
        conv.ask(new Suggestions('Reservas'));

});

app.intent ('Reservas', (conv, params) => {

    conv.ask('Digame que tipo de reserva desea');
    
});

exports.fulfillment = functions.https.onRequest(app);
