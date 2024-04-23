const { createApp } = Vue;

createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            visibleMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            visibleMenu: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            visibleMenu: false,
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            visibleMenu: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            visibleMenu: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            visibleMenu: false,
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            visibleMenu: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            visibleMenu: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            visibleMenu: false,
                        }
                    ],
                },

                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visibleMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visibleMenu: false,
                        }
                    ],
                },

                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            visibleMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            visibleMenu: false,
                        }
                    ],
                },

                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            visibleMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            visibleMenu: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            visibleMenu: false,
                        }
                    ],
                },

                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            visibleMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            visibleMenu: false,
                        }
                    ],
                },

                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            visibleMenu: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            visibleMenu: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            visibleMenu: false,
                        }
                    ],
                }
            ],

            currentChat: 0,
            newMessage: "",
            strToSearch: "",
            viewOverlay: false,
            strAccess: "",
            chatMenu: false,
            selectedAvatar: 0,
            viewNewChat: false,
            nameNewChat: "",
            warning: false,

        }

    },

    methods: {

        changeChat(index) {
            this.currentChat = index;
            this.resetStrAccess();
        },

        changeAvatar(num) {
            this.selectedAvatar = num;
        },

        sentMessage() {

            if (this.newMessage != "") {

                const strDate = this.currentDate();

                this.contacts[this.currentChat].messages.push({
                    date: strDate,
                    message: this.newMessage,
                    status: 'sent',
                    visibleMenu: false,
                });
                this.newMessage = "";

                this.strAccess = "Sta scrivendo..."
                this.lastAccess();
                const timeOut = setTimeout(this.autoReply, 2000);


            }
        },

        autoReply() {
            this.strAccess = "Online"
            const numReply = Math.floor(Math.random() * 3) + 1;
            console.log(numReply);

            let strReply = "Ok";

            switch (numReply) {
                case 2:
                    strReply = "Va bene";
                    break;

                case 3:
                    strReply = "No"
                default:
                    break;
            }


            const strDate = this.currentDate();

            this.contacts[this.currentChat].messages.push({
                date: strDate,
                message: strReply,
                status: "received"
            });

            const timeAccess = setTimeout(() => {
                this.strAccess = "now";
                this.lastAccess();
            }, 2000)

            // this.goDown();


        },

        currentDate() {

            const now = luxon.DateTime.now();
            // converto data nel formato usato
            const strDate = now.toLocaleString(luxon.DateTime.DATE_SHORT) + ' ' + now.toLocaleString(luxon.DateTime.TIME_WITH_SECONDS);

            return strDate;
        },

        goDown() {
            // da implementare
            const chatPageElem = document.getElementById("chat-messages");
            console.log(chatPageElem);
            chatPageElem.scrollIntoView();
        },

        searchName() {

            this.contacts.forEach(element => {
                const name = element.name.toLowerCase()
                const found = name.includes(this.strToSearch.toLowerCase())
                if (!found) {
                    element.visible = false;
                } else {
                    element.visible = true;
                }
            });
        },

        showMenu(index) {
            this.contacts[this.currentChat].messages[index].visibleMenu = !this.contacts[this.currentChat].messages[index].visibleMenu;
            this.viewOverlay = true;
        },

        hideMenu() {
            this.viewOverlay = false;
            this.chatMenu = false;
            this.viewNewChat = false;
            if (this.contacts.length > 0) {
                this.contacts[this.currentChat].messages.forEach(element => {
                    element.visibleMenu = false;
                    console.log(element.visibleMenu);
                });
            }
        },

        deleteMessage(index) {
            console.log("canc");
            this.hideMenu();

            this.resetStrAccess();
            this.contacts[this.currentChat].messages.splice(index, 1);

        },

        deleteAllMessage() {
            this.hideMenu();

            this.resetStrAccess();
            if(this.contacts.length > 0){

                this.contacts[this.currentChat].messages = [];
            }

        },

        deleteChat() {
            this.hideMenu();
            this.resetStrAccess();
            if (this.contacts.length > 0) {

                this.contacts.splice(this.currentChat, 1);

                if (this.currentChat > this.contacts.length - 1) {
                    console.log("ok");
                    this.currentChat--;
                }
            }
        },

        resetStrAccess() {
            this.strAccess = "";
        },

        lastAccess() {

            if (this.strAccess === "") {

                let cont = 0;

                if (this.contacts[this.currentChat].messages.length > 0) {

                    this.contacts[this.currentChat].messages.forEach(element => {
                        if (element.status === "received") {
                            this.strAccess = "Ultimo accesso " + element.date;
                            cont++;
                        }
                    });

                    if (cont === 0) {
                        this.strAccess = "Ultimo accesso nascosto";
                    }
                } else {
                    this.strAccess = "Ultimo accesso nascosto";
                }

            } else if (this.strAccess === "now") {
                this.strAccess = "Ultimo accesso " + this.currentDate();
            }

            return this.strAccess;
        },

        toggleMenuChat() {
            this.chatMenu = !this.chatMenu;
            this.viewOverlay = true;
        },

        newChatMenu() {
            this.viewNewChat = true;
            this.viewOverlay = true;
        },

        startNewChat() {

            if(this.selectedAvatar != 0 && this.nameNewChat != "") {

            let newStrName = "";


            for (let index = 0; index < this.nameNewChat.length; index++) {
                const element = this.nameNewChat[index];

                if(index === 0) {
                    newStrName += element.toUpperCase();
                } else {
                    newStrName += element.toLowerCase();
                }
                
            }

            const newObject = {
                name: newStrName,
                avatar: `_${this.selectedAvatar}`,
                visible: true,
                messages: [],
            }

            
            this.nameNewChat = "";
            this.contacts.unshift(newObject);
            this.currentChat = 0;
            this.resetStrAccess();
            this.hideMenu();
            this.warning = false;

        } else {
            this.warning = true;
        }

        },

    }

}).mount("#app");