(function() {
    emailjs.init("user_eFz0jYtiptIk2vHOEyRrh");
})();
const vue = new Vue({
    el: '#app',
    data() {
        return {
            from_email: '',
        }
    },
    methods: {
        enviar() {
            let data = {
                from_email: this.from_email,
            };
            emailjs.send("service_cgwzbox", "template_fsj34sk", data)
                .then(function(response) {
                    if (response.text === 'OK') {
                        alert('El correo se ha enviado de forma exitosa');
                    }
                }, function(err) {
                    alert('Ocurrió un problema al enviar el correo');
                });
        }
    }
});