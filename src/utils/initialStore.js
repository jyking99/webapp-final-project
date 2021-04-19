/* sample data store*/
export default { 
    currentUserId: "junyi",
    users:[
        {
            id:"junyi",
            email:"wangcgv@bc.edu",
            photo:"/assets/user2.png",
            name: "Junyi Wang",
            bio:"biobiobio biobio bio.",
        },
        {
            id:"yufin",
            email:"yangalm@bc.edu",
            photo:"/assets/user2.png",
            name: "Yufin Yang",
            bio:"biobiobio biobio bio.",
            
        },
        {
            id:"ryan",
            email:"wangchn@bc.edu",
            photo:"/assets/user2.png",
            name:"Ryan Wang",
            bio:"biobiobio biobio bio.",
        },
        {
            id:"roger",
            email:"yangahq@bc.edu",
            photo:"/assets/user2.png",
            name: "Roger Yang",
            bio:"biobiobio biobio bio.",
        }
    ],
    chats:[
        {
            from: 'yufin',
            to: 'junyi',
            text: 'Have you seen a dinosaur?',
            datetime: '2020-02-09T22:45:28Z',
        }, 
        {
            from: 'junyi',
            to: 'yufin',
            text: 'No.',
            datetime: '2020-02-09T22:45:29Z',
        },
        {
            from: 'roger',
            to: 'junyi',
            text: 'Are you a samurai?',
            datetime: '2020-02-09T22:45:26Z',
        }, 
        {
            from: 'junyi',
            to: 'roger',
            text: 'Yes.',
            datetime: '2020-02-09T22:45:27Z',
        },

    ],
}

