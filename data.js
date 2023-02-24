// function myFunction() {
//     // Get the value of the input field
//     var inputValue = document.getElementById("myInput").value;
  
//     // Return the value of the input field
//     return inputValue;
//   }
  
//   var defaultThreads = [
//     {
//       id: 1,
//       title: "Thread 1",
//       author: myFunction(), // Set author to result of calling myFunction()
//       date: Date.now(),
//       content: "Thread content",
//       comments: [
//         {
//           author: "Jack",
//           date: Date.now(),
//           content: "Hey there",
//         },
//         {
//           author: "Arthur",
//           date: Date.now(),
//           content: "Hey to you too",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Thread 2",
//       author: myFunction(), // Set author to result of calling myFunction()
//       date: Date.now(),
//       content: "Thread content 2",
//       comments: [
//         {
//           author: "Jack",
//           date: Date.now(),
//           content: "Hey there",
//         },
//         {
//           author: "Arthur",
//           date: Date.now(),
//           content: "Hey to you too",
//         },
//       ],
//     },
//   ];
  
//   var threads = defaultThreads;
//   if (localStorage && localStorage.getItem("threads")) {
//     threads = JSON.parse(localStorage.getItem("threads"));
//   } else {
//     threads = defaultThreads;
//     localStorage.setItem("threads", JSON.stringify(defaultThreads));
//   }
function myFunction() {
    // Get the value of the input field
    var inputValue = document.getElementById("myInput").value;
  
    // Use the value of the input field
    console.log(inputValue);
}

var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "myInput",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}