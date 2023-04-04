const { createApp } = Vue

const DateTime = luxon.DateTime;

createApp({
    data() {
        return {
            activeChat: -1,
            newMessage: '',
            filterValue: '',
            contactStatus: '',
            newChatWrapper: false,
            notificationPermission: false,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            defaultMessages: [
                'Ci sono due cose che non tornano mai indietro: una freccia scagliata e un\'occasione perduta',
                'Il tempo non puoi fermarlo, puoi solo viverlo',
                'Nascondi un difetto, e il mondo immaginerà il peggio',
                'Non ho mai conosciuto un uomo che vedendo i propri errori ne sapesse dar colpa a se stesso',
                'È molto difficile parlare di responsabilità a meno che tu non l\'abbia esercitata da te stesso',
                'Un barista è soltanto un farmacista con un inventario limitato',
                'Un astemio è uno che soffre per la sete invece che godersela',
                'Non è prendendo in giro la vita che si ottiene la felicità. È solo attraverso la rinuncia spontanea e la rassegnazione alla perdita che ci prepariamo alla morte e che otteniamo un minimo di felicità',
                'Il potere politico o economico o burocratico accresce il potenziale nocivo di una persona stupida',
                'Un adulto è un bambino che non sa più cosa vuole',
                'Solo gli spiriti accomodanti non sono mai cinici',
                'Chi è saggio non parla mai di ciò che non può tramutare in azione',
                'I bambini sono l\'unica forma di immortalità della quale possiamo essere sicuri',
            ],
            //filteredContacts: [],
            newContact: {
                name: '',
                avatar: null,
            }
        }
    },
    methods: {
        /**
         * ## Change Active Chat
         * Given a index, it changes the active chat index with it
         * @param {Number} position 
         */
        changeActiveChat(position) {
            this.activeChat = position;
        },
        /**
         * ## Add New Message
         * on Trigger, it creates a new message object and adds it inside the array
         */
        async addNewMessage() {
            if (this.newMessage !== '' && this.newMessage !== ' ') {
                const messageToInsert = {
                    date: this.newMessageHour(),
                    message: '',
                    status: 'sent',
                }
                messageToInsert.message = this.newMessage;
                this.contacts[this.activeChat].messages.push(messageToInsert);
                this.newMessage = '';
                // this.scrollBottom();

                setTimeout(this.addResponseMessage, 1000);
                setTimeout(this.activeStatus, 1000);
                setTimeout(this.defaultStatus, 3000);

                this.writingStatus();
            }
        },
        /**
         * ## Add Response Message
         * its triggered after the activatation of addNewMessage, its creates a message of response to the message submitted frome the client
         */
        async addResponseMessage() {
            const responseMessage = {
                date: this.newMessageHour(),
                message: this.getRandomResponse(),
                status: 'received',
            }
            this.contacts[this.activeChat].messages.push(responseMessage);
            // this.scrollBottom();
        },
        /**
         * ## Normalize a String
         * given a string its will be returned the first letter uppercase and all the other letters in lowercase format
         * @param {String} string 
         * @returns 
         */
        normalizeString(string) {
            if (string.length > 1) {
                return (string[0].toUpperCase() + string.substring(1).toLowerCase());
                // console.log(newString)
            } else {
                return string.toUpperCase();
            }
        },
        /**
         * ## Delete a Message
         * Given the index of the message to remove, it will splice out the element from the array
         * @param {Number} messageToDelete 
         */
        deleteMessage(messageToDelete) {
            // console.log(messageToDelete);
            // console.log(this.contacts[this.activeChat].messages[messageToDelete])
            this.contacts[this.activeChat].messages.splice(messageToDelete, 1)
            // console.log(this.contacts[this.activeChat].messages)
        },
        deleteAllMessages() {
            this.contacts[this.activeChat].messages.splice(0);
        },
        deleteChat() {

            this.contacts.splice(this.activeChat, 1);
            this.activeChat = -1;
        },
        /**
         * ## Set Hour
         * Given a string with a date, it will return the hour included with a specific format
         * @param {String} date 
         * @returns 
         */
        setHour(date) {
            dateObj = DateTime.fromFormat(date, 'dd/MM/yyyy HH:mm:ss');
            return dateObj.toLocaleString({ hour: 'numeric', minute: '2-digit' })
        },
        /**
         * ## New Message Hour
         * it return the actual hour for the new message object
         * @returns 
         */
        newMessageHour() {
            const now = DateTime.now();
            return now.toFormat('dd/MM/yyyy HH:mm:ss');
        },
        /**
         * ## Latest Message
         * Given the index of the message, it finds the latest message sended/received and returns it
         * @param {Number} index 
         * @returns 
         */
        latestMessage(index) {
            const messagesToRead = this.filteredContacts[index].messages;
            if (this.filterContacts.length > 0) {
                if (messagesToRead.length > 0) {
                    return messagesToRead[messagesToRead.length - 1].message;
                } else {
                    return 'Chat vuota';
                }
            }
        },
        /**
         * ## Latest Message Hour
         * Given the index of the message, it finds the latest message sended/received an returns the hour of send/receive
         * @param {Number} index 
         * @returns 
         */
        latestMessageHour(index) {
            const messagesToRead = this.filterContacts[index].messages;
            console.log(messagesToRead);
            if (this.filterContacts.length > 0) {
                if (messagesToRead.length > 0) {
                    return this.setHour(messagesToRead[messagesToRead.length - 1].date)
                } else {
                    return '--:--';
                }
            }
        },
        activeStatus() {
            this.contactStatus = 'Online';
        },
        writingStatus() {
            this.contactStatus = 'Sta Scrivendo...';
        },
        defaultStatus() {
            this.contactStatus = `Ultimo accesso oggi alle ${this.latestMessageHour(this.activeChat)}`;
        },
        /**
         * 
         * @param {Number} min 
         * @param {Number} max 
         * @returns 
         */
        getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        getRandomResponse() {
            if (this.defaultMessages.length > 0) {
                return this.defaultMessages[this.getRandom(0, this.defaultMessages.length - 1)];
            } else return 'Ok';
        },
        scrollBottom() {
            const container = document.querySelector('#right-main');
            container.scrollTop = container.scrollHeight;
        },
        addNewContact() {
            const { name, avatar } = this.newContact;
            if (name !== '') {
                const contactToAdd = {
                    name,
                    avatar,
                    visible: true,
                    messages: [],
                }
                this.contacts.unshift(contactToAdd);
                this.newContact.name = '';
                this.newContact.avatar = '';
                this.newChatWrapper = false;
                this.activeChat = 0;
            }
        },
        defaultPicture(name){
            const firstChar = name[0];
            // console.log(firstChar);
            return firstChar;
        }
    },
    mounted() {
        this.defaultStatus();

    },
    updated() {
        this.$nextTick(() => this.scrollBottom());
        // this.$nextTick(() => this.filterContacts());
    },
    computed: {
        /**
         * ## Filter Contacts
         * It will take the value of filterValue and use it to filter the contacts array
         */
        filterContacts() {
            let filter = this.normalizeString(this.filterValue);
            return this.contacts.filter(contact => contact.name.includes(filter));
        },
    },
}).mount('#app')
