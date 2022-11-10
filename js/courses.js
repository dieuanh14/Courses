let coursesApi = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);
}
start();

function getCourses(callback) {
  fetch(coursesApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderCourses(courses) {
  let listCoursesBlock = document.querySelector("#list-courses");
  let htmls = courses.map(function (course) {
    return `
	<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 course">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="">
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${course.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${course.description}.</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
`;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

const data = {
  courses: [
    {
      name: "JavScript",
      description:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
      id: 1,
    },
    {
      name: "ReactJs",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
      id: 2,
    },
    {
      name: "C#",
      description:
        "C# is a general-purpose, high-level multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
      id: 3,
    },
    {
      name: "Java",
      description:
        "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      id: 4,
    },
    {
      name: "C++",
      description:
        "C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or C with Classes",
      id: 5,
    },
    {
      name: "Ruby on Rails",
      description:
        "Ruby on Rails is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.",
      id: 6,
    },
    {
      "name": "HTML",
      "description": "HTML is a markup language designed to create web pages on the World Wide Web. It can be helped by technologies like CSS and JavaScript-like scripting languages.",
      "id": 7
    },
    {
      "name": "NODEJS",
      "description": "Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.",
      "id": 8
    },
    {
      "name": "SCSS",
      "description": "The term SCSS is an acronym for Sassy Cascading Style Sheets. It is basically a more advanced and evolved variant of the CSS language. Natalie Weizenbaum and Chris Eppstein created it, and Hampton Catlin designed it. It comes with more advanced features- thus often called Sassy CSS.",
      "id": 9
    }
  ],
};

const searchBar = document.getElementById("default-search");
let courses = [];
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredValue = data.courses.filter((course) => {
    return course.name.toLowerCase().trim().includes(searchString);
  });
  renderCourses(filteredValue)
});

