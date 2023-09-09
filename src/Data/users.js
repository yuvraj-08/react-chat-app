import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Yuvraj Singh",
      image:user.image,
      
       
      contacts: [
        {
          id: 2,
          name: "Brian Williams",
          image:
            "data:image/jpeg;base64,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",
          chatlog: [
            {
              text: "Hi Yuvraj,How are you!",
              timestamp: "11:21 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Not too bad, Brian. Just trying to stay on top of all these assignments. How about you?",
              timestamp: "11:22 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I hear you. The workload is definitely piling up. ",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Have you started the research paper for Professor Smith's class yet?",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Yeah, I've started researching, but I'm still trying to narrow down my topic.",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Alex Taylor ",
          image:"https://www.sragenkab.go.id/assets/images/demo/user-4.jpg",
          chatlog: [
            {
              text: "Hey Yuvraj, I heard you aced the math exam yesterday. Congrats!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Thanks, Alex! Yeah, I was relieved it went well. How about you? How's your studying going?",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Well, I'm struggling a bit with the calculus concepts. ",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Do you think you could help me out sometime this week?",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "No problem at all, Alex. We'll tackle those calculus problems together.",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Thanks, Yuvraj, you're a lifesaver!",
              timestamp: "10:08 AM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 4,
          name: "Sarah Johnson",
          image:
            "https://www.sragenkab.go.id/assets/images/demo/user-1.jpg",
          chatlog: [
            {
              text: " Hey Yuvraj, I heard you went on a camping trip last weekend. How was it?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: " Hi Sarah, it was fantastic! We had great weather, and the scenery was breathtaking. I even saw a shooting star.",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "That sounds amazing! I've always wanted to go camping. ",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Did you do any hiking or other outdoor activities?",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Yeah, we did some hiking and even went kayaking on the lake. It was a full outdoor adventure.",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Chris Anderson ",
          image:
            "https://www.sragenkab.go.id/assets/images/demo/user-2.jpg",
          chatlog: [],
        },
        {
          id: 6,
          name: "Michael White ",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Tp9QV0YOLXrb3m0G6FyUlGcx5sBr8UNN7Ez6nj6u7qOi-LXNL2P0Gx9ynX80l-gXYFc&usqp=CAU",
          chatlog: [
            {
              text: "Grabbing Breakfast now. Join?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Sure, where?",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "At the café around the corner.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: " On my way!",
              timestamp: "10:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "Thanks for treat!",
              timestamp: "12:05 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "David Lee ",
          image:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
          chatlog: [
            {
              text: "Hi David, how's your day going? ",
              timestamp: "10:06 AM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "Hey Yuvraj, not too bad. Just working on some projects. How about you?",
              timestamp: "10:06 AM",
              sender: "user",
              message_id: 2,
            },
            {
              text: " I'm good, thanks. Just finished a workout. Got any exciting plans for the weekend?",
              timestamp: "10:07 AM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "Not really, probably just catching up on some reading and relaxing. How about you?",
              timestamp: "10:08 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Thinking of going for a hike if the weather's nice. Nature always clears my mind.",
              timestamp: "10:09 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Sounds like a great way to recharge. Enjoy your hike, Yuvraj!",
              timestamp: "10:09 AM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Jessica Miller",
          image:"https://www.sragenkab.go.id/assets/images/demo/user-6.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Morgan Carter",
          image:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          chatlog: [],
        },
      ],
    },
  };