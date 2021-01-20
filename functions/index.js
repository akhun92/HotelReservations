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

app.intent ('Reservations Intent', (conv, params) => {

    conv.ask('Digame que tipo de reserva desea');
    conv.ask(new Suggestions('Habitaciones'));

});

app.intent ('Reservation Room', (conv, params) => {
    conv.ask("Disponemos de habitaciones individuales, para 2 o para 4 Personas, digame que tipo de habitación quiere reservar");
    conv.ask(new Suggestions('Habitación para dos'));
    conv.ask(new Suggestions('Habitación para cuatro'));
    conv.ask(new Suggestions('Habitación individual'));
});

exports.fulfillment = functions.https.onRequest(app);
