// oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// 1. MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// 2. MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// 3. MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

// 1a creare un Array di stringhe con i vari todo
// 2a con un ciclo v-for in cui passiamo sia l'elemento che l'indice stampiamo tutti i todo

// AGGIUNTA DI UN TODO
// 1b creo un data (stringa) da associare al v-model dell'input
// 2b al keyup.enter dell'input e al click del bottone push della variabile temporanea nel todo
// 3b resetto la variabile temporanea

// ELIMINAZIONE TODO
// 1c al @click del cestino--> zuncione elimina task passando come parametro l'indice della task da eliminare
// 2c eliminaTask: effettua lo splice dell'indice passato per un solo elemento da eliminare dell'array dei todo

const {createApp} =Vue

createApp({
  data() {
    return {
      // creo oggetto
      todoList:[
        {
          text: 'fare la spesa',
          done: true
        }
      ],
      newTask:''
    }
  },
  methods: {
    addTask(){
      console.log('add')
    }
  },
}).mount('#app')