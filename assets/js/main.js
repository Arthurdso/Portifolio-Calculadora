function Calculadora () {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
        this.display.focus();
        this.trocaVirgula();
        this.capturaDel();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.realizaConta();
        });
    };

    this.trocaVirgula = () => {
        document.addEventListener('keyup', e =>{
            if (e.keyCode === 188 || e.keyCode === 110){
                this.display.value = this.display.value.slice(0, -1);
                this.display.value += '.'
            }
        })
    }

    this.capturaDel = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 46) this.clear();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();

        });
    };

    this.realizaConta = () => {
        try {
            let conta = eval(this.display.value);
            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
            this.display.focus();

        } catch(e) {
            alert('Conta inválida');
            return;
        }
    }

    

    this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
}

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    
}

const calculadora = new Calculadora();
calculadora.inicia();