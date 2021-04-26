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
            tags: ["Computer science", "math", "random"],
        },
        {
            id:"yufin",
            email:"yangalm@bc.edu",
            photo:"/assets/user2.png",
            name: "Yufin Yang",
            bio:"biobiobio biobio bio.",
            tags: ["Computer science", "math", "dancing", "random"],
        },
        {
            id:"ryan",
            email:"wangchn@bc.edu",
            photo:"/assets/user2.png",
            name:"Ryan Wang",
            bio:"biobiobio biobio bio.",
            tags: ["PC gaming", "FPS", "random"],
        },
        {
            id:"roger",
            email:"yangahq@bc.edu",
            photo:"/assets/user2.png",
            name: "Roger Yang",
            bio:"biobiobio biobio bio.",
            tags: ["Console gaming", "Psychology", "random"],
        }
    ],
    chats:[
        {
            id: "chat-1",
            from: 'yufin',
            to: 'junyi',
            text: 'Have you seen a dinosaur?',
            topic: 'biology',
            datetime: '2020-02-09T22:45:28Z',
        }, 
        {
            id: "chat-2",
            from: 'junyi',
            to: 'yufin',
            text: 'No.',
            topic: 'biology',
            datetime: '2020-02-09T22:45:29Z',
        },
        {
            id: "chat-3",
            from: 'roger',
            to: 'junyi',
            text: 'Are you a samurai?',
            topic: 'history',
            datetime: '2020-02-09T22:45:26Z',
        }, 
        {
            id: "chat-4",
            from: 'junyi',
            to: 'roger',
            text: 'Yes.',
            topic: 'history',
            datetime: '2020-02-09T22:45:27Z',
        },
    ],
    posts:[
        {
            userId: 'roger',
            text: 'Post 1',
            datetime: '2020-05-22T11:45:27Z',
            topic: 'random',
            replies: [
                {
                    from: "ryan",
                    text: ":))"
                }
            ],
        }, 
        {
            userId: 'yufin',
            text: 'Post 2',
            topic: 'random',
            datetime: '2021-04-22T11:45:27Z',
            replies: [],
        }
    ]
}

