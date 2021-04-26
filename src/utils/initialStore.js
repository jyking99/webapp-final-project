/* sample data store*/
export default { 
    currentUserId: "junyi",
    users:[
        {
            id:"junyi",
            email:"wangcgv@bc.edu",
            photo:"/assets/usr1.png",
            name: "Junyi Wang",
            bio:"My name is Jy, and I am a Computer Sience major at Boston College. My main area of comp sci is website development, and I am fluent with JS, SQL, Java, and HTML",
            tags: ["Computer Science", "Math", "random"],
        },
        {
            id:"yufin",
            email:"yangalm@bc.edu",
            photo:"/assets/usr2.png",
            name: "Yufin Yang",
            bio:"Hi, I am Yufin and I am a Math Comp Sci double major at Bosotn College. I am currently working on learning backend development of software so any discussions are welcome. I enjoy playing FPS when bored so if you are also a shooter hmu.",
            tags: ["Computer Science", "Math", "Dancing", "FPS"],
        },
        {
            id:"ryan",
            email:"wangchn@bc.edu",
            photo:"/assets/usr3.png",
            name:"Ryan Wang",
            bio:"My name is Ryan, and I am a CSGO Pro and Dota2 Pro. I like to compose music and write code in my freetime. My favorite genre of music is rap. ",
            tags: ["Music", "Computer Science", "FPS"],
        },
        {
            id:"roger",
            email:"yangahq@bc.edu",
            photo:"/assets/usr4.png",
            name: "Roger Yang",
            bio:"Hi I am Roger, and I am a Psych major at Boston College. My area of expertise is social psychology",
            tags: ["Console gaming", "Psychology", "Computer Science"],
        }
    ],
    chats:[
        {
            id: "chat-1",
            from: 'yufin',
            to: 'junyi',
            text: 'Hey Jy I am working on my Bio HW, and I am running into some trouble. Do you know 5 potential cures humans have found for curing cancer?',
            topic: 'biology',
            datetime: '2020-02-09T22:45:28Z',
        }, 
        {
            id: "chat-2",
            from: 'junyi',
            to: 'yufin',
            text: 'Sorry I am not familiar with biology research results. I can try referring my friend Danny to you. He might be able to help',
            topic: 'biology',
            datetime: '2020-02-09T22:45:29Z',
        },
        {
            id: "chat-3",
            from: 'roger',
            to: 'junyi',
            text: 'Hey Jy, do you know who the 5 Tigers Admiral are in the Three Kingdom?',
            topic: 'history',
            datetime: '2020-02-09T22:45:26Z',
        }, 
        {
            id: "chat-4",
            from: 'junyi',
            to: 'roger',
            text: 'yea, they are Guan Yu, Zhang Fei, Zhao Yun, Huang Zhong, and Ma chao',
            topic: 'history',
            datetime: '2020-02-09T22:46:27Z',
        },
        {
            id:"chat-5",
            from:'roger',
            to:'junyi',
            text:'Thank you',
            topic:'history',
            datetime:'2020-02-09T22:46:40Z'
        },
    ],
    posts:[
        {
            userId: 'roger',
            text: 'Post 1',
            datetime: '2020-05-22T11:45:27Z',
            topic: 'python: can not int variable does not have property len',
            replies: [
                {
                    from: "ryan",
                    text: "try converting your integer variable to string using str(integerName), then use len"
                }
            ],
        }, 
        {
            userId: 'yufin',
            text: 'Post 2',
            topic: 'Cryptography: How to decrypt bad RSA encryption using a small exponent.',
            datetime: '2021-04-22T11:45:27Z',
            replies: [
                {from: "Roger",
                text:"Check out this page: ..."
            } 
        
        ],
        }
    ]
}

