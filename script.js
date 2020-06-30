// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js')
//       .then(reg => console.log('Registro de SW exitoso', reg))
//       .catch(err => console.warn('Error al tratar de registrar el sw', err))
// }


var app = new Vue({ 
    el: '#app',
    data: {
        dpi: '',
        selected: 0,
        validDPI: false
    },
    methods: {
        onChange(index){
            this.selected = index;
        },
        onVerifyDpi(){
            alert(this.dpi)
            axios({
                url: 'https://final-arquitectura.herokuapp.com/api/usuarios',
                method: 'GET',
            }).then((res) => {
                if(!res.data.error)
                    this.validDPI = true;
                    this.selected = 1
            })
        }
    },
});