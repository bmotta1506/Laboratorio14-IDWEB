class Notificacion {
    enviar() {
        return "Enviando notificación...";
    }
}

class Email extends Notificacion {
    enviar() {
        return "Enviando Email...";
    }
}

class SMS extends Notificacion {
    enviar() {
        return "Enviando SMS...";
    }
}

class Push extends Notificacion {
    enviar() {
        return "Enviando Notificación Push...";
    }
}

function procesarNotificaciones(lista) {
    lista.forEach(n => console.log(n.enviar()));
}

let notificaciones = [
    new Email(),
    new SMS(),
    new Push(),
    new Email()
];

procesarNotificaciones(notificaciones);
