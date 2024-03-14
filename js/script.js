// oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// 1. MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo. ok
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
// 2b al keyup.enter dell'input e al click del bottone unshift(ovvero metto per primo il testo che immetto) della variabile temporanea nel todo
// 3b resetto la variabile temporanea

// GESTIONE ERRORE INSERIMENTO
// a creare un data(stringa) messaggio errore
// b in add task mettere un controllo su  imput vuoto
// c se la stringa <  5 caratterivalorizzare la variabile errormsg con messaggio appropriato
// daltrimenti come in 2b e reset

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
          done: true,
        },
        {
          text: 'pagare le bollette',
          done: true,
        },
        {
          text: 'studiare',
          done: false,
        },
      ],
      newTask:{
        text:'',
        done: false
      },
      errorMsg: '',

    }
  },

  methods: {
    addTask(){
      // console.log(this.newTask)
      if(this.newTask.length > 5){
            //  2b
            // creo un nuovo oggetto da inserire nell'array dei task
            const newTaskT ={
              text: this.newTask,
              done: false
            }
        this.todoList.unshift(this.newTaskT)
        // 3b
        this.newTask = ''
        this.errorMsg = '';
      }else{
        this.errorMsg= 'attenzione il testo deve avere piu di 5 caratteri'
      }
    },
    toggleDone(task){
      task.done = !task.done;
      this.errorMsg= '';
    },

    eliminaTask(indice){
      if(this.todoList[indice].done){
        this.todoList.splice(indice,1)
      }else{
        this.errorMsg = 'attenzione! prima va eseguito il task!'
      }
    }
  },
}).mount('#app')