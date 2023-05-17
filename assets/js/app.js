// vue JS code
const { createApp } = Vue;

createApp({
    
    // data
    data() {
        return {
            // API
            BoleanApi: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emailList: [],
            emailListLength: 10,
        }
    },

    // methods
    methods: {

        // get email from API
        getEmail() {
            for (let i = 0; i < this.emailListLength; i++) {
                axios.get(this.BoleanApi)
                    .then((response) => {
                        this.emailList.push(response.data.response);
                    }).catch((error) => {
                        console.log('error during the request to the API ' + error);
                    }
                )
            }
        },

        // delete clicked email from the list
        deleteEmail(index) {
            this.emailList.splice(index, 1);
        },

        // delete all email from the list
        deleteAllEmail() {
            this.emailList = [];
        },

        // add a new email to the list 
        addEmail() {
            axios.get(this.BoleanApi)
                .then((response) => {
                    this.emailList.push(response.data.response);
                } ).catch((error) => {
                    console.log('error during the request to the API ' + error);
                }
            )
        },

        // button to show the list of emails
        showEmailList() {
            this.emailListLength = 10;
            this.getEmail();
            console.log('showEmailList' + this.emailListLength);
        },
    },
    
    // mounted
    mounted() {
        // for populating the list of emails when page is loaded 
        // this.getEmail();
    }
    
}).mount('#app');