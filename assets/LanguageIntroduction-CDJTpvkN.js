import{W as b,d as w,j as e,L as r,h as v,l as x,X as S,g as k,Y as C,o as A,f as I,Z as P,_ as c,$ as L,m as d,I as N,a0 as E,c as T,a1 as R,i as M,k as j}from"./index-FUybUZy6.js";import{g as W}from"./iconMapper-Dvzpafmt.js";import{L as B}from"./LanguageLogo-S8t48duK.js";const F={HTML:{id:"HTML",name:"HTML & CSS",tagline:"The foundation of every website",description:"HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the building blocks of the web. HTML structures your content, while CSS makes it beautiful.",whatIsIt:{title:"What is HTML & CSS?",content:"HTML is the standard markup language for creating web pages. It describes the structure of a webpage. CSS is used to style and layout web pages, controlling colors, fonts, spacing, and more.",visual:"Think of HTML as the skeleton of a house (structure) and CSS as the paint and decorations (appearance)."},whyLearn:["Essential for web development - every website uses HTML & CSS","Easy to learn - perfect starting point for beginners","See immediate results - build your first webpage in minutes","Foundation for learning JavaScript and other web technologies","High demand in the job market"],keyFeatures:{title:"Key Features",items:[{name:"Semantic Structure",description:"Organize content with meaningful tags like <header>, <nav>, <article>",icon:"📋"},{name:"Responsive Design",description:"Create websites that work on phones, tablets, and desktops",icon:"📱"},{name:"Styling Power",description:"Control colors, fonts, layouts, animations, and more with CSS",icon:"🎨"},{name:"Accessibility",description:"Build websites that everyone can use, including screen readers",icon:"♿"}]},quickExample:{title:"Quick Example",code:`<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
  <style>
    body { font-family: Arial; }
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to HTML!</p>
</body>
</html>`,explanation:"This simple HTML page creates a heading and paragraph. The CSS styles the heading blue and sets the font to Arial. You can edit and preview examples live in our interactive lessons!"},cssExample:{title:"CSS Magic",code:`.button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: transform 0.2s;
}

.button:hover {
  transform: scale(1.05);
}`,explanation:"CSS brings your HTML to life! This example shows a gradient button with a smooth hover effect. CSS controls colors, animations, layouts, and more."},nextSteps:{title:"What's Next?",description:"After mastering HTML & CSS, continue your web development journey:",suggestions:[{language:"JavaScript",languageId:"JavaScript",description:"Add interactivity and dynamic behavior to your websites",icon:"⚡"},{language:"TypeScript",languageId:"TypeScript",description:"Build more robust applications with type safety",icon:"🛡️"}]},useCases:[{title:"Web Development",description:"Build websites, web applications, and user interfaces"},{title:"Email Templates",description:"Create beautiful, responsive email designs"},{title:"Documentation",description:"Format and style technical documentation"},{title:"Prototyping",description:"Quickly prototype designs before adding functionality"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Basic HTML Tags",description:"Start with <h1>, <p>, <div>, <img>, and <a> tags"},{step:2,title:"Understand CSS Selectors",description:"Learn how to target elements with classes, IDs, and tags"},{step:3,title:"Practice Layout",description:"Master Flexbox and Grid for creating layouts"},{step:4,title:"Build Your First Page",description:"Combine HTML and CSS to create a complete webpage"}]}},JavaScript:{id:"JavaScript",name:"JavaScript",tagline:"The language that powers the web",description:"JavaScript is the programming language of the web. It makes websites interactive, dynamic, and responsive. From simple animations to complex web applications, JavaScript brings websites to life.",whatIsIt:{title:"What is JavaScript?",content:"JavaScript is a high-level, interpreted programming language that runs in web browsers. It allows you to add interactivity, handle user events, manipulate web pages, and communicate with servers. Unlike HTML (structure) and CSS (styling), JavaScript adds behavior and functionality.",visual:"Think of JavaScript as the brain of a website - HTML is the skeleton, CSS is the appearance, and JavaScript is what makes it think and react."},whyLearn:["Essential for web development - runs in every modern browser","Versatile - use it for frontend, backend (Node.js), and mobile apps","Huge ecosystem - millions of libraries and frameworks available","High demand - one of the most sought-after skills in tech","See results immediately - test code directly in the browser"],keyFeatures:{title:"Key Features",items:[{name:"Dynamic & Interactive",description:"Create responsive user interfaces that react to user actions in real-time",icon:"⚡"},{name:"Event-Driven",description:"Handle clicks, form submissions, and other user interactions seamlessly",icon:"🖱️"},{name:"Asynchronous Programming",description:"Fetch data from APIs, handle multiple tasks without blocking",icon:"🔄"},{name:"Rich Ecosystem",description:"Access to frameworks like React, Vue, Angular, and thousands of npm packages",icon:"📦"}]},quickExample:{title:"Quick Example",code:`// Interactive button click handler
const button = document.querySelector('#myButton');
const counter = { count: 0 };

button.addEventListener('click', () => {
  counter.count++;
  button.textContent = \`Clicked \${counter.count} times!\`;
  console.log('Button clicked!');
});

// Simple function
function greet(name) {
  return \`Hello, \${name}! Welcome to JavaScript.\`;
}

console.log(greet('Developer'));`,explanation:"This example shows event handling and functions. JavaScript listens for button clicks and updates the page dynamically. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Applications",description:"Build interactive websites, SPAs, and complex web apps"},{title:"Frontend Frameworks",description:"Create modern UIs with React, Vue, Angular, or Svelte"},{title:"Backend Development",description:"Build servers and APIs using Node.js"},{title:"Mobile Apps",description:"Develop cross-platform apps with React Native or Ionic"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn the Basics",description:"Master variables, functions, arrays, objects, and control flow"},{step:2,title:"DOM Manipulation",description:"Learn to select and modify HTML elements with JavaScript"},{step:3,title:"Event Handling",description:"Understand how to respond to user interactions and events"},{step:4,title:"Async & APIs",description:"Work with promises, async/await, and fetch data from APIs"}]},nextSteps:{title:"What's Next?",description:"After mastering JavaScript, level up your skills:",suggestions:[{language:"TypeScript",languageId:"TypeScript",description:"Add type safety and build more robust applications",icon:"🛡️"},{language:"Node.js",languageId:"Node.js",description:"Use JavaScript on the server side for full-stack development",icon:"🚀"}]}},Python:{id:"Python",name:"Python",tagline:"Simple, powerful, and versatile",description:"Python is one of the most beginner-friendly programming languages. Its clean syntax reads like English, making it perfect for learning programming concepts. Yet it's powerful enough to build everything from web apps to AI systems.",whatIsIt:{title:"What is Python?",content:"Python is a high-level, interpreted programming language known for its simplicity and readability. It emphasizes code readability with its clean syntax, making it ideal for beginners. Python is versatile - used in web development, data science, automation, AI, and more.",visual:"Think of Python as a Swiss Army knife - simple enough for beginners to learn, but powerful enough for professionals to build complex systems."},whyLearn:["Beginner-friendly - syntax reads like English, easy to learn","Versatile - use it for web, data science, AI, automation, and more","Huge community - extensive libraries and frameworks available","High demand - one of the most popular languages in tech","Great for automation - automate repetitive tasks easily"],keyFeatures:{title:"Key Features",items:[{name:"Readable Syntax",description:"Clean, simple syntax that reads like English - perfect for beginners",icon:"📖"},{name:"Versatile",description:"Use for web development, data science, AI, automation, and scripting",icon:"🔧"},{name:"Rich Libraries",description:"Access to powerful libraries like Django, Flask, NumPy, Pandas, TensorFlow",icon:"📚"},{name:"Rapid Development",description:"Build applications quickly with less code than other languages",icon:"⚡"}]},quickExample:{title:"Quick Example",code:`# Simple and readable Python code
def greet(name):
    return f"Hello, {name}! Welcome to Python."

# List comprehension - Pythonic way
numbers = [1, 2, 3, 4, 5]
squared = [x ** 2 for x in numbers]

# Working with data
user = {
    "name": "Alice",
    "age": 25,
    "city": "San Francisco"
}

print(greet(user["name"]))
print(f"Squared numbers: {squared}")`,explanation:"Python code is clean and readable. This example shows functions, list comprehensions, and dictionaries. Notice how it reads almost like English! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Development",description:"Build web apps with Django or Flask frameworks"},{title:"Data Science",description:"Analyze data, create visualizations with Pandas and Matplotlib"},{title:"AI & Machine Learning",description:"Build AI models with TensorFlow, PyTorch, and scikit-learn"},{title:"Automation",description:"Automate tasks, web scraping, and system administration"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Python Basics",description:"Master variables, data types, functions, and control structures"},{step:2,title:"Work with Data Structures",description:"Understand lists, dictionaries, tuples, and sets"},{step:3,title:"Object-Oriented Programming",description:"Learn classes, objects, and inheritance in Python"},{step:4,title:"Build Projects",description:"Create real applications using libraries and frameworks"}]},nextSteps:{title:"What's Next?",description:"After mastering Python, explore these paths:",suggestions:[{language:"JavaScript",languageId:"JavaScript",description:"Learn web development and build interactive frontends",icon:"🌐"},{language:"TypeScript",languageId:"TypeScript",description:"Add type safety to your JavaScript projects",icon:"🛡️"}]}},Ruby:{id:"Ruby",name:"Ruby",tagline:"A programmer's best friend",description:"Ruby is a beautiful, elegant programming language designed for developer happiness. It's known for its clean syntax and the powerful Ruby on Rails framework, which makes building web applications fast and enjoyable.",whatIsIt:{title:"What is Ruby?",content:"Ruby is a dynamic, object-oriented programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write. Ruby on Rails (Rails) is its famous web framework that revolutionized web development.",visual:"Think of Ruby as a language designed by developers, for developers - prioritizing human happiness and code elegance over everything else."},whyLearn:["Beautiful syntax - code reads like natural language","Ruby on Rails - powerful framework for rapid web development","Developer-friendly - designed for programmer happiness","Great for startups - Rails helps build MVPs quickly","Active community - friendly and supportive Ruby community"],keyFeatures:{title:"Key Features",items:[{name:"Elegant Syntax",description:"Clean, readable code that feels natural and expressive",icon:"💎"},{name:"Ruby on Rails",description:'Powerful web framework that follows "convention over configuration"',icon:"🚂"},{name:"Object-Oriented",description:"Everything is an object - consistent and intuitive design",icon:"🎯"},{name:"Rapid Development",description:"Build web applications quickly with Rails' built-in features",icon:"⚡"}]},quickExample:{title:"Quick Example",code:`# Ruby's elegant and readable syntax
def greet(name)
  "Hello, #{name}! Welcome to Ruby."
end

# Working with arrays - Ruby style
numbers = [1, 2, 3, 4, 5]
squared = numbers.map { |n| n ** 2 }

# Hashes (like dictionaries)
user = {
  name: "Bob",
  age: 30,
  city: "Tokyo"
}

puts greet(user[:name])
puts "Squared: #{squared}"`,explanation:"Ruby code is elegant and expressive. Notice how natural it reads! This example shows methods, blocks, and hashes. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Development",description:"Build web applications with Ruby on Rails framework"},{title:"Startups & MVPs",description:"Rapidly prototype and build minimum viable products"},{title:"Scripting",description:"Automate tasks and write utility scripts"},{title:"API Development",description:"Create RESTful APIs and backend services"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Ruby Basics",description:"Master variables, methods, blocks, and control flow"},{step:2,title:"Understand Objects & Classes",description:"Learn Ruby's object-oriented programming model"},{step:3,title:"Explore Ruby on Rails",description:"Get started with the Rails framework and MVC pattern"},{step:4,title:"Build Your First App",description:"Create a complete web application with Rails"}]},nextSteps:{title:"What's Next?",description:"After mastering Ruby, expand your skills:",suggestions:[{language:"JavaScript",languageId:"JavaScript",description:"Add frontend interactivity to your Ruby applications",icon:"⚡"},{language:"Python",languageId:"Python",description:"Explore data science and AI capabilities",icon:"🐍"}]}},TypeScript:{id:"TypeScript",name:"TypeScript",tagline:"JavaScript with superpowers",description:"TypeScript is JavaScript with static type checking. It adds type safety to JavaScript, helping you catch errors before they happen and write more maintainable, scalable code. It compiles to plain JavaScript, so it works everywhere JavaScript works.",whatIsIt:{title:"What is TypeScript?",content:"TypeScript is a superset of JavaScript that adds static type definitions. Created by Microsoft, it provides optional type checking, better IDE support, and improved code documentation. All valid JavaScript is valid TypeScript, making migration easy.",visual:"Think of TypeScript as JavaScript with a safety net - it helps you catch bugs during development instead of at runtime, like having a spell-checker for your code."},whyLearn:["Type safety - catch errors before they reach production","Better IDE support - autocomplete, refactoring, and navigation","Improved code quality - self-documenting code with types","Industry standard - used by major frameworks like React, Angular, Vue","Easy migration - gradually adopt TypeScript in existing JavaScript projects"],keyFeatures:{title:"Key Features",items:[{name:"Static Typing",description:"Define types for variables, functions, and objects to catch errors early",icon:"🛡️"},{name:"Type Inference",description:"TypeScript automatically infers types when possible - less code to write",icon:"🧠"},{name:"Modern JavaScript",description:"Supports latest ES features and compiles to any JavaScript version",icon:"⚡"},{name:"Tooling",description:"Excellent IDE support with IntelliSense, refactoring, and error checking",icon:"🔧"}]},quickExample:{title:"Quick Example",code:`// TypeScript adds type safety
interface User {
  name: string;
  age: number;
  email: string;
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}! You are \${user.age} years old.\`;
}

// TypeScript catches errors at compile time
const user: User = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

console.log(greetUser(user));`,explanation:"TypeScript adds type definitions to catch errors early. Notice the interface and type annotations - they help prevent bugs! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Large Applications",description:"Build maintainable, scalable applications with type safety"},{title:"Team Development",description:"Improve collaboration with self-documenting, type-safe code"},{title:"Framework Development",description:"Used by React, Angular, Vue, and other major frameworks"},{title:"Enterprise Projects",description:"Industry standard for building robust, production-ready applications"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn TypeScript Basics",description:"Understand types, interfaces, and type annotations"},{step:2,title:"Master Advanced Types",description:"Learn generics, unions, intersections, and utility types"},{step:3,title:"Integrate with Frameworks",description:"Use TypeScript with React, Vue, or Angular"},{step:4,title:"Build Type-Safe Apps",description:"Create robust applications with full type coverage"}]},nextSteps:{title:"What's Next?",description:"After mastering TypeScript, explore these paths:",suggestions:[{language:"Node.js",languageId:"Node.js",description:"Build full-stack applications with TypeScript on the server",icon:"🚀"},{language:"C#",languageId:"C#",description:"Explore another strongly-typed language for enterprise development",icon:"💼"}]}},"Node.js":{id:"Node.js",name:"Node.js",tagline:"JavaScript everywhere",description:"Node.js lets you run JavaScript on the server side. Built on Chrome's V8 engine, it enables full-stack JavaScript development. Write both frontend and backend code in the same language, making development faster and more efficient.",whatIsIt:{title:"What is Node.js?",content:"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript outside the browser, on servers. Node.js uses an event-driven, non-blocking I/O model, making it perfect for building scalable network applications.",visual:"Think of Node.js as JavaScript breaking free from the browser - now you can use JavaScript to build servers, APIs, and backend services, not just websites."},whyLearn:["Full-stack JavaScript - use one language for frontend and backend","Fast and scalable - event-driven architecture handles many connections","Huge ecosystem - access to npm, the largest package registry","Real-time applications - perfect for chat apps, gaming, and streaming","Industry standard - used by Netflix, LinkedIn, Uber, and more"],keyFeatures:{title:"Key Features",items:[{name:"Non-Blocking I/O",description:"Asynchronous operations allow handling thousands of concurrent connections",icon:"⚡"},{name:"NPM Ecosystem",description:"Access to millions of packages through npm for rapid development",icon:"📦"},{name:"Event-Driven",description:"Efficient handling of I/O operations with event loops",icon:"🔄"},{name:"Cross-Platform",description:"Run on Windows, macOS, Linux - write once, run anywhere",icon:"🌐"}]},quickExample:{title:"Quick Example",code:`// Simple Node.js server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Using Express (popular framework)
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Node.js!' });
});

app.listen(3000);`,explanation:"Node.js lets you build servers with JavaScript. This example shows a basic HTTP server. With frameworks like Express, you can build powerful APIs quickly! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"API Development",description:"Build RESTful APIs and microservices with Express or Fastify"},{title:"Real-Time Apps",description:"Create chat applications, gaming servers, and live streaming"},{title:"Full-Stack Development",description:"Use JavaScript for both frontend and backend in one project"},{title:"DevOps & Automation",description:"Build tools, scripts, and automation with Node.js"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Node.js Basics",description:"Understand modules, file system, and HTTP servers"},{step:2,title:"Explore NPM",description:"Learn to use and create npm packages"},{step:3,title:"Master Express Framework",description:"Build REST APIs and web applications with Express"},{step:4,title:"Build Full-Stack Apps",description:"Create complete applications with Node.js backend"}]},nextSteps:{title:"What's Next?",description:"After mastering Node.js, expand your skills:",suggestions:[{language:"TypeScript",languageId:"TypeScript",description:"Add type safety to your Node.js applications",icon:"🛡️"},{language:"Go",languageId:"Go",description:"Explore high-performance systems programming",icon:"⚡"}]}},PHP:{id:"PHP",name:"PHP",tagline:"The web's workhorse",description:"PHP is one of the most popular server-side scripting languages, powering millions of websites including WordPress, Facebook, and Wikipedia. It's designed for web development, making it easy to create dynamic web pages and interact with databases.",whatIsIt:{title:"What is PHP?",content:"PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development. It runs on the server, processes requests, and generates HTML to send to browsers. PHP is especially good at working with databases and creating dynamic content.",visual:"Think of PHP as the engine behind dynamic websites - while HTML shows static content, PHP generates personalized, database-driven content for each visitor."},whyLearn:["Widely used - powers 78% of all websites including WordPress","Easy to learn - simple syntax, great for beginners","Database integration - excellent MySQL and PostgreSQL support","Mature ecosystem - huge community and extensive documentation","Job opportunities - still in high demand for web development"],keyFeatures:{title:"Key Features",items:[{name:"Server-Side Processing",description:"Execute code on the server before sending HTML to browsers",icon:"🖥️"},{name:"Database Integration",description:"Seamless connection with MySQL, PostgreSQL, and other databases",icon:"🗄️"},{name:"Content Management",description:"Power WordPress, Drupal, and other CMS platforms",icon:"📝"},{name:"Rapid Development",description:"Quick setup and deployment for web applications",icon:"⚡"}]},quickExample:{title:"Quick Example",code:`<?php
// Simple PHP script
$name = "World";
$greeting = "Hello, $name!";

echo $greeting;

// Working with arrays
$users = ["Alice", "Bob", "Charlie"];
foreach ($users as $user) {
    echo "Welcome, $user!";
}

// Database connection example
$conn = new mysqli("localhost", "user", "password", "database");
$result = $conn->query("SELECT * FROM users");
?>`,explanation:"PHP makes it easy to create dynamic web pages. This example shows variables, arrays, and database connections. PHP excels at server-side processing! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Content Management",description:"Power WordPress, Drupal, and custom CMS solutions"},{title:"E-Commerce",description:"Build online stores with WooCommerce, Magento, and custom solutions"},{title:"Web Applications",description:"Create dynamic websites and web applications with Laravel or Symfony"},{title:"API Development",description:"Build RESTful APIs and backend services"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn PHP Basics",description:"Master variables, arrays, functions, and control structures"},{step:2,title:"Work with Databases",description:"Connect to MySQL/PostgreSQL and perform CRUD operations"},{step:3,title:"Explore Frameworks",description:"Learn Laravel or Symfony for modern PHP development"},{step:4,title:"Build Web Apps",description:"Create complete web applications with PHP"}]},nextSteps:{title:"What's Next?",description:"After mastering PHP, expand your skills:",suggestions:[{language:"JavaScript",languageId:"JavaScript",description:"Add frontend interactivity to your PHP applications",icon:"⚡"},{language:"Python",languageId:"Python",description:"Explore modern web frameworks and data science",icon:"🐍"}]}},Swift:{id:"Swift",name:"Swift",tagline:"Modern, fast, and safe",description:"Swift is Apple's powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS development. Designed to be safe, fast, and expressive, Swift makes building Apple apps easier and more enjoyable than ever before.",whatIsIt:{title:"What is Swift?",content:"Swift is a modern, general-purpose programming language developed by Apple. It combines the performance of compiled languages with the simplicity of scripting languages. Swift is designed to be safe by default, preventing common programming errors.",visual:"Think of Swift as a modern, safer replacement for Objective-C - it's like upgrading from a manual car to a modern car with safety features, but still giving you full control."},whyLearn:["Apple ecosystem - build apps for iPhone, iPad, Mac, Apple Watch, and Apple TV","Modern language - clean syntax, type-safe, and easy to read","High performance - compiled language that runs fast","Growing demand - iOS development is a lucrative career path","Safe by default - prevents common bugs with built-in safety features"],keyFeatures:{title:"Key Features",items:[{name:"Type Safety",description:"Strong typing and optionals prevent null pointer errors and crashes",icon:"🛡️"},{name:"Modern Syntax",description:"Clean, expressive code that's easy to read and write",icon:"✨"},{name:"Performance",description:"Compiled language with performance comparable to Objective-C",icon:"⚡"},{name:"Playgrounds",description:"Interactive coding environment for rapid prototyping and learning",icon:"🎮"}]},quickExample:{title:"Quick Example",code:`// Swift's clean and safe syntax
func greet(name: String) -> String {
    return "Hello, \\(name)! Welcome to Swift."
}

// Optionals for safe handling
var username: String? = "Alice"
if let name = username {
    print(greet(name: name))
}

// Modern array operations
let numbers = [1, 2, 3, 4, 5]
let squared = numbers.map { $0 * $0 }

print("Squared: \\(squared)")`,explanation:"Swift code is clean and safe. Notice optionals and modern syntax - they help prevent errors! This example shows functions, optionals, and closures. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"iOS Development",description:"Build native iPhone and iPad applications with UIKit or SwiftUI"},{title:"macOS Apps",description:"Create desktop applications for Mac computers"},{title:"Apple Watch",description:"Develop apps for Apple Watch with watchOS"},{title:"Server-Side",description:"Use Swift on the server with frameworks like Vapor"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Swift Basics",description:"Master variables, functions, optionals, and control flow"},{step:2,title:"Understand Optionals",description:"Learn Swift's unique optional system for safe code"},{step:3,title:"Explore SwiftUI",description:"Build modern UIs with SwiftUI framework"},{step:4,title:"Build iOS Apps",description:"Create complete iOS applications with Xcode"}]},nextSteps:{title:"What's Next?",description:"After mastering Swift, expand your skills:",suggestions:[{language:"Kotlin",languageId:"Kotlin",description:"Learn Android development with Kotlin",icon:"🤖"},{language:"C#",languageId:"C#",description:"Explore cross-platform development with .NET",icon:"💼"}]}},Kotlin:{id:"Kotlin",name:"Kotlin",tagline:"Modern Android development",description:"Kotlin is the modern, concise programming language for Android development. It's fully interoperable with Java, but with a cleaner syntax and modern features. Google officially supports Kotlin as the preferred language for Android apps.",whatIsIt:{title:"What is Kotlin?",content:"Kotlin is a statically-typed programming language developed by JetBrains. It runs on the Java Virtual Machine (JVM) and is fully interoperable with Java. Kotlin is concise, safe, and designed to eliminate common programming errors.",visual:"Think of Kotlin as a modern, improved version of Java - same power, but with less boilerplate code and better safety features, like upgrading from a feature phone to a smartphone."},whyLearn:["Official Android language - Google's preferred language for Android","Concise syntax - write less code than Java with the same functionality","Null safety - built-in null safety prevents common crashes","Interoperable - works seamlessly with existing Java code","Growing ecosystem - used by major apps like Pinterest, Trello, and Evernote"],keyFeatures:{title:"Key Features",items:[{name:"Null Safety",description:"Built-in null safety prevents NullPointerException crashes",icon:"🛡️"},{name:"Concise Syntax",description:"Write less code - Kotlin reduces boilerplate significantly",icon:"✂️"},{name:"Coroutines",description:"Built-in support for asynchronous programming with coroutines",icon:"🔄"},{name:"Interoperability",description:"100% interoperable with Java - use existing Java libraries",icon:"🔗"}]},quickExample:{title:"Quick Example",code:`// Kotlin's concise and safe syntax
fun greet(name: String): String {
    return "Hello, $name! Welcome to Kotlin."
}

// Null safety with safe call operator
val username: String? = "Bob"
username?.let { 
    println(greet(it))
}

// Modern collection operations
val numbers = listOf(1, 2, 3, 4, 5)
val squared = numbers.map { it * it }

println("Squared: $squared")

// Data classes - less boilerplate
data class User(val name: String, val age: Int)`,explanation:"Kotlin code is concise and safe. Notice null safety and data classes - they make code cleaner! This example shows functions, null safety, and collections. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Android Development",description:"Build native Android applications with Android SDK"},{title:"Backend Development",description:"Create server-side applications with Kotlin/JVM"},{title:"Multiplatform",description:"Share code between Android, iOS, and web with Kotlin Multiplatform"},{title:"Desktop Apps",description:"Build desktop applications with Kotlin and JavaFX"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Kotlin Basics",description:"Master variables, functions, null safety, and control flow"},{step:2,title:"Understand Null Safety",description:"Learn Kotlin's null safety system and safe call operators"},{step:3,title:"Explore Android SDK",description:"Get started with Android development and Android Studio"},{step:4,title:"Build Android Apps",description:"Create complete Android applications with Kotlin"}]},nextSteps:{title:"What's Next?",description:"After mastering Kotlin, expand your skills:",suggestions:[{language:"Swift",languageId:"Swift",description:"Learn iOS development for cross-platform skills",icon:"🍎"},{language:"Java",languageId:"Java",description:"Deepen your understanding of the JVM ecosystem",icon:"☕"}]}},"C#":{id:"C#",name:"C#",tagline:"Powerful and versatile",description:"C# (C-Sharp) is Microsoft's modern, object-oriented programming language. It's part of the .NET ecosystem and is used for building Windows applications, web services, games with Unity, and cross-platform mobile apps with Xamarin.",whatIsIt:{title:"What is C#?",content:"C# is a modern, type-safe, object-oriented programming language developed by Microsoft. It's part of the .NET platform and combines the power of C++ with the simplicity of Visual Basic. C# is versatile - used for desktop apps, web services, games, and mobile development.",visual:"Think of C# as a Swiss Army knife for Microsoft technologies - powerful enough for enterprise applications, yet elegant enough for game development and mobile apps."},whyLearn:["Versatile - build desktop, web, mobile, and game applications","Strong typing - type-safe language prevents many errors",".NET ecosystem - access to powerful frameworks and libraries","Game development - Unity game engine uses C#","Enterprise ready - used by major companies for large-scale applications"],keyFeatures:{title:"Key Features",items:[{name:"Type Safety",description:"Strong typing and compile-time checking prevent errors",icon:"🛡️"},{name:".NET Framework",description:"Access to comprehensive libraries and frameworks",icon:"📚"},{name:"Cross-Platform",description:"Build for Windows, Linux, macOS, iOS, and Android",icon:"🌐"},{name:"Modern Features",description:"Async/await, LINQ, properties, and more built-in features",icon:"⚡"}]},quickExample:{title:"Quick Example",code:`// C#'s clean and powerful syntax
public class Program {
    public static string Greet(string name) {
        return $"Hello, {name}! Welcome to C#.";
    }
    
    public static void Main() {
        // Working with collections
        var numbers = new List<int> { 1, 2, 3, 4, 5 };
        var squared = numbers.Select(n => n * n);
        
        // Properties and classes
        var user = new User {
            Name = "Charlie",
            Age = 28
        };
        
        Console.WriteLine(Greet(user.Name));
        Console.WriteLine($"Squared: {string.Join(", ", squared)}");
    }
}

public class User {
    public string Name { get; set; }
    public int Age { get; set; }
}`,explanation:"C# code is clean and powerful. Notice properties, LINQ, and string interpolation - they make development efficient! This example shows classes, collections, and modern C# features. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Windows Applications",description:"Build desktop applications with WPF, WinForms, or UWP"},{title:"Web Development",description:"Create web apps and APIs with ASP.NET Core"},{title:"Game Development",description:"Develop games with Unity game engine"},{title:"Mobile Apps",description:"Build cross-platform apps with Xamarin or .NET MAUI"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn C# Basics",description:"Master variables, classes, methods, and control flow"},{step:2,title:"Understand OOP",description:"Learn object-oriented programming concepts in C#"},{step:3,title:"Explore .NET",description:"Get familiar with .NET framework and libraries"},{step:4,title:"Build Applications",description:"Create desktop, web, or mobile applications"}]},nextSteps:{title:"What's Next?",description:"After mastering C#, explore these paths:",suggestions:[{language:"TypeScript",languageId:"TypeScript",description:"Learn another strongly-typed language for web development",icon:"🛡️"},{language:"Java",languageId:"Java",description:"Explore enterprise development with Java",icon:"☕"}]}},C:{id:"C",name:"C",tagline:"The foundation of modern computing",description:"C is one of the most influential programming languages ever created. It's the foundation for operating systems, embedded systems, and many other languages. Learning C gives you deep understanding of how computers work at a low level.",whatIsIt:{title:"What is C?",content:"C is a low-level, procedural programming language developed in the 1970s. It provides direct access to memory and hardware, making it extremely powerful but requiring careful programming. C is the language behind operating systems like Linux and Windows, and it influenced many modern languages.",visual:"Think of C as the foundation of a skyscraper - other languages build on top of it, but C gives you direct access to the hardware, like having the blueprint to the building itself."},whyLearn:["Understand computers deeply - learn how memory, pointers, and hardware work","Foundation for other languages - C++, Java, Python, and more are based on C","System programming - build operating systems, drivers, and embedded systems","Performance - direct hardware access means maximum speed and efficiency","Industry standard - still widely used in systems programming and embedded devices"],keyFeatures:{title:"Key Features",items:[{name:"Low-Level Control",description:"Direct memory management and hardware access",icon:"⚙️"},{name:"Performance",description:"Compiled to machine code for maximum speed",icon:"⚡"},{name:"Portability",description:"Write once, compile anywhere - runs on any platform",icon:"🌐"},{name:"Minimal Runtime",description:"No garbage collector or virtual machine overhead",icon:"🎯"}]},quickExample:{title:"Quick Example",code:`// C's powerful and direct syntax
#include <stdio.h>

// Function definition
void greet(char* name) {
    printf("Hello, %s! Welcome to C.\\n", name);
}

int main() {
    // Working with arrays
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    // Pointers - C's powerful feature
    int* ptr = numbers;
    
    printf("First number: %d\\n", *ptr);
    greet("Developer");
    
    return 0;
}`,explanation:"C code gives you direct control over memory and hardware. Notice pointers and manual memory management - they're powerful but require care! This example shows functions, arrays, and pointers. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Operating Systems",description:"Build operating systems, kernels, and system software"},{title:"Embedded Systems",description:"Program microcontrollers, IoT devices, and hardware"},{title:"System Programming",description:"Create drivers, compilers, and low-level utilities"},{title:"Performance-Critical Apps",description:"Build applications where every CPU cycle matters"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn C Basics",description:"Master variables, functions, arrays, and control flow"},{step:2,title:"Understand Pointers",description:"Learn C's most powerful feature - memory addresses and pointers"},{step:3,title:"Memory Management",description:"Master malloc, free, and manual memory management"},{step:4,title:"Build System Programs",description:"Create low-level programs and utilities"}]},nextSteps:{title:"What's Next?",description:"After mastering C, explore these paths:",suggestions:[{language:"C++",languageId:"C++",description:"Add object-oriented features and modern C++ capabilities",icon:"🚀"},{language:"Rust",languageId:"Rust",description:"Learn memory safety with modern systems programming",icon:"🦀"}]}},"C++":{id:"C++",name:"C++",tagline:"Power and performance with modern features",description:"C++ is an extension of C that adds object-oriented programming, templates, and modern features. It's used for high-performance applications, game engines, browsers, and system software. C++ gives you C's power with additional abstraction capabilities.",whatIsIt:{title:"What is C++?",content:"C++ is a general-purpose programming language that extends C with object-oriented features, templates, and modern abstractions. It maintains C's performance while adding higher-level programming constructs. C++ is used for everything from game engines to operating systems.",visual:"Think of C++ as C with superpowers - you get all of C's low-level control, plus object-oriented programming, templates, and modern features, like adding wings to a race car."},whyLearn:["High performance - used in game engines, browsers, and performance-critical software","Versatile - systems programming, games, applications, and more","Industry standard - powers Unreal Engine, Chrome, Windows, and many AAA games","Modern features - C++20 brings modern abstractions while maintaining performance","Career opportunities - highly valued in game development and systems programming"],keyFeatures:{title:"Key Features",items:[{name:"Object-Oriented",description:"Classes, inheritance, polymorphism, and encapsulation",icon:"🏗️"},{name:"Templates",description:"Generic programming with templates for code reuse",icon:"📋"},{name:"STL",description:"Standard Template Library with containers and algorithms",icon:"📚"},{name:"Performance",description:"Zero-cost abstractions - high-level code with C-like performance",icon:"⚡"}]},quickExample:{title:"Quick Example",code:`// C++'s object-oriented and modern features
#include <iostream>
#include <vector>
#include <algorithm>

class User {
public:
    std::string name;
    int age;
    
    User(std::string n, int a) : name(n), age(a) {}
    
    void greet() {
        std::cout << "Hello, " << name << "! Welcome to C++." << std::endl;
    }
};

int main() {
    // Modern C++ with STL
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    std::transform(numbers.begin(), numbers.end(), numbers.begin(),
                   [](int n) { return n * n; });
    
    User user("Developer", 25);
    user.greet();
    
    return 0;
}`,explanation:"C++ combines C's power with modern features. Notice classes, STL containers, and lambdas - they make development easier while maintaining performance! This example shows OOP and modern C++. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Game Development",description:"Build game engines and AAA games with Unreal Engine"},{title:"System Software",description:"Create operating systems, drivers, and embedded systems"},{title:"High-Performance Apps",description:"Build browsers, databases, and performance-critical software"},{title:"Scientific Computing",description:"Develop simulations, physics engines, and scientific software"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn C++ Basics",description:"Master classes, objects, inheritance, and polymorphism"},{step:2,title:"Explore STL",description:"Learn Standard Template Library containers and algorithms"},{step:3,title:"Master Templates",description:"Understand generic programming with templates"},{step:4,title:"Build Applications",description:"Create high-performance applications and games"}]},nextSteps:{title:"What's Next?",description:"After mastering C++, explore these paths:",suggestions:[{language:"Rust",languageId:"Rust",description:"Learn memory safety with modern systems programming",icon:"🦀"},{language:"Go",languageId:"Go",description:"Explore concurrent programming and modern systems languages",icon:"🚀"}]}},Go:{id:"Go",name:"Go",tagline:"Simple, fast, and concurrent",description:"Go (Golang) is Google's modern programming language designed for simplicity and performance. It combines the ease of Python with the speed of C, and has built-in support for concurrent programming. Go is perfect for building scalable servers and cloud applications.",whatIsIt:{title:"What is Go?",content:"Go is a statically-typed, compiled programming language designed at Google. It emphasizes simplicity, readability, and concurrent programming. Go compiles quickly, runs fast, and has excellent tooling. It's designed to solve problems at scale with built-in concurrency.",visual:"Think of Go as the best of both worlds - Python's simplicity meets C's performance, with built-in superpowers for handling thousands of concurrent operations."},whyLearn:["Simple syntax - easy to learn, readable code, minimal boilerplate","Built-in concurrency - goroutines and channels make concurrent programming easy","Fast compilation - compiles quickly, runs fast, great developer experience","Cloud-native - perfect for microservices, APIs, and cloud applications","Industry adoption - used by Google, Docker, Kubernetes, and major tech companies"],keyFeatures:{title:"Key Features",items:[{name:"Goroutines",description:"Lightweight threads for concurrent programming - handle millions of goroutines",icon:"🔄"},{name:"Channels",description:"Built-in communication mechanism for safe concurrent operations",icon:"📡"},{name:"Fast Compilation",description:"Compiles quickly to a single binary - no runtime dependencies",icon:"⚡"},{name:"Simple Syntax",description:"Clean, minimal syntax - easy to read and maintain",icon:"✨"}]},quickExample:{title:"Quick Example",code:`// Go's simple and concurrent syntax
package main

import "fmt"

// Simple function
func greet(name string) string {
    return fmt.Sprintf("Hello, %s! Welcome to Go.", name)
}

// Goroutine example
func main() {
    // Working with slices
    numbers := []int{1, 2, 3, 4, 5}
    squared := make([]int, len(numbers))
    
    for i, n := range numbers {
        squared[i] = n * n
    }
    
    // Concurrent execution
    go func() {
        fmt.Println("Running in a goroutine!")
    }()
    
    fmt.Println(greet("Developer"))
    fmt.Printf("Squared: %v\\n", squared)
}`,explanation:"Go code is simple and powerful. Notice goroutines for concurrency and slices for collections - they make Go great for scalable applications! This example shows functions, slices, and goroutines. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Cloud Services",description:"Build microservices, APIs, and cloud-native applications"},{title:"DevOps Tools",description:"Create tools like Docker, Kubernetes, and Terraform"},{title:"Web Servers",description:"Build high-performance web servers and APIs"},{title:"Distributed Systems",description:"Develop scalable distributed systems and services"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Go Basics",description:"Master variables, functions, structs, and control flow"},{step:2,title:"Understand Concurrency",description:"Learn goroutines, channels, and concurrent programming"},{step:3,title:"Explore Standard Library",description:"Get familiar with Go's comprehensive standard library"},{step:4,title:"Build Services",description:"Create web servers, APIs, and microservices"}]},nextSteps:{title:"What's Next?",description:"After mastering Go, explore these paths:",suggestions:[{language:"Rust",languageId:"Rust",description:"Learn memory safety and systems programming",icon:"🦀"},{language:"Java",languageId:"Java",description:"Explore enterprise development and JVM ecosystem",icon:"☕"}]}},Rust:{id:"Rust",name:"Rust",tagline:"Memory safety without garbage collection",description:"Rust is a modern systems programming language that provides memory safety without garbage collection. It prevents common bugs like null pointer dereferences and data races at compile time. Rust combines the performance of C++ with modern safety guarantees.",whatIsIt:{title:"What is Rust?",content:"Rust is a systems programming language focused on safety, speed, and concurrency. It prevents memory errors and data races at compile time through its ownership system, without needing a garbage collector. Rust gives you low-level control with high-level safety.",visual:"Think of Rust as a race car with an advanced safety system - you get C++'s speed and control, but with built-in protections that prevent crashes before they happen."},whyLearn:["Memory safety - prevents crashes and security vulnerabilities at compile time","Zero-cost abstractions - high-level features with C++-like performance","Fearless concurrency - safe concurrent programming without data races","Growing ecosystem - used by Mozilla, Microsoft, Amazon, and major tech companies","Modern language - excellent tooling, package manager, and developer experience"],keyFeatures:{title:"Key Features",items:[{name:"Ownership System",description:"Unique ownership model prevents memory errors without garbage collection",icon:"🔒"},{name:"Borrow Checker",description:"Compile-time checks prevent data races and memory issues",icon:"🛡️"},{name:"Zero-Cost Abstractions",description:"High-level features compile to efficient machine code",icon:"⚡"},{name:"Cargo",description:"Built-in package manager and build tool - excellent developer experience",icon:"📦"}]},quickExample:{title:"Quick Example",code:`// Rust's safe and powerful syntax
fn greet(name: &str) -> String {
    format!("Hello, {}! Welcome to Rust.", name)
}

fn main() {
    // Ownership and borrowing
    let name = String::from("Developer");
    let greeting = greet(&name);
    
    // Working with vectors
    let numbers = vec![1, 2, 3, 4, 5];
    let squared: Vec<i32> = numbers.iter().map(|n| n * n).collect();
    
    println!("{}", greeting);
    println!("Squared: {:?}", squared);
    
    // Safe concurrent programming
    let handle = std::thread::spawn(|| {
        println!("Running in a thread!");
    });
    handle.join().unwrap();
}`,explanation:"Rust code is safe and powerful. Notice ownership, borrowing, and safe concurrency - they prevent bugs at compile time! This example shows functions, ownership, and threads. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Systems Programming",description:"Build operating systems, drivers, and embedded systems"},{title:"Web Assembly",description:"Compile to WebAssembly for high-performance web applications"},{title:"Blockchain",description:"Develop blockchain and cryptocurrency projects"},{title:"Network Services",description:"Build high-performance network services and APIs"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Rust Basics",description:"Master variables, functions, ownership, and borrowing"},{step:2,title:"Understand Ownership",description:"Learn Rust's unique ownership system and borrowing rules"},{step:3,title:"Explore Cargo",description:"Get familiar with Cargo package manager and Rust ecosystem"},{step:4,title:"Build Systems",description:"Create safe, high-performance systems programs"}]},nextSteps:{title:"What's Next?",description:"After mastering Rust, explore these paths:",suggestions:[{language:"Go",languageId:"Go",description:"Explore concurrent programming and cloud-native development",icon:"🚀"},{language:"C++",languageId:"C++",description:"Deepen your systems programming knowledge",icon:"⚡"}]}},Java:{id:"Java",name:"Java",tagline:"Write once, run anywhere",description:`Java is one of the most popular programming languages in the world. It's used for enterprise applications, Android development, web services, and large-scale systems. Java's "write once, run anywhere" philosophy makes it perfect for cross-platform development.`,whatIsIt:{title:"What is Java?",content:"Java is an object-oriented, class-based programming language designed to have as few implementation dependencies as possible. It runs on the Java Virtual Machine (JVM), allowing Java programs to run on any device with a JVM. Java is known for its portability, security, and robustness.",visual:"Think of Java as a universal translator - write your code once, and it runs on Windows, Linux, macOS, Android, and more, thanks to the JVM."},whyLearn:["Enterprise standard - used by major companies for large-scale applications","Android development - primary language for Android app development","Cross-platform - write once, run anywhere on any device","Strong ecosystem - massive library ecosystem and active community","Career opportunities - high demand for Java developers worldwide"],keyFeatures:{title:"Key Features",items:[{name:"Platform Independent",description:"Compile once, run anywhere with Java Virtual Machine",icon:"🌐"},{name:"Object-Oriented",description:"Strong OOP principles - classes, inheritance, polymorphism",icon:"🏗️"},{name:"Rich Libraries",description:"Comprehensive standard library and vast ecosystem",icon:"📚"},{name:"Memory Management",description:"Automatic garbage collection handles memory management",icon:"🧹"}]},quickExample:{title:"Quick Example",code:`// Java's object-oriented and platform-independent syntax
public class Program {
    public static String greet(String name) {
        return "Hello, " + name + "! Welcome to Java.";
    }
    
    public static void main(String[] args) {
        // Working with collections
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        List<Integer> squared = numbers.stream()
            .map(n -> n * n)
            .collect(Collectors.toList());
        
        // Object-oriented programming
        User user = new User("Developer", 25);
        
        System.out.println(greet(user.getName()));
        System.out.println("Squared: " + squared);
    }
}

class User {
    private String name;
    private int age;
    
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
}`,explanation:"Java code is structured and object-oriented. Notice classes, streams, and encapsulation - they make Java great for large applications! This example shows OOP and modern Java features. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Enterprise Applications",description:"Build large-scale business applications and systems"},{title:"Android Development",description:"Create Android mobile applications"},{title:"Web Services",description:"Develop RESTful APIs and microservices with Spring Boot"},{title:"Big Data",description:"Work with Hadoop, Spark, and big data technologies"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Java Basics",description:"Master classes, objects, inheritance, and polymorphism"},{step:2,title:"Understand JVM",description:"Learn how Java Virtual Machine works and platform independence"},{step:3,title:"Explore Frameworks",description:"Get familiar with Spring, Hibernate, and other Java frameworks"},{step:4,title:"Build Applications",description:"Create enterprise applications or Android apps"}]},nextSteps:{title:"What's Next?",description:"After mastering Java, explore these paths:",suggestions:[{language:"Kotlin",languageId:"Kotlin",description:"Learn modern Android development with Kotlin",icon:"🤖"},{language:"C#",languageId:"C#",description:"Explore .NET ecosystem and cross-platform development",icon:"💼"}]}},"Vue.js":{id:"Vue.js",name:"Vue.js",tagline:"The progressive JavaScript framework",description:"Vue.js is a progressive, incrementally adoptable JavaScript framework for building user interfaces. It's designed from the ground up to be incrementally adoptable, making it perfect for both small projects and large-scale applications.",whatIsIt:{title:"What is Vue.js?",content:"Vue.js is a progressive JavaScript framework for building user interfaces. Unlike monolithic frameworks, Vue is designed to be incrementally adoptable. The core library focuses on the view layer only, and it's easy to pick up and integrate with other libraries or existing projects.",visual:"Think of Vue.js as a friendly, approachable framework that grows with you - start simple and add complexity only when you need it."},whyLearn:["Beginner-friendly - easy to learn with clear documentation and gentle learning curve","Progressive - use as much or as little as you need, from simple scripts to full SPAs","Versatile - works for small widgets or large enterprise applications","Great performance - virtual DOM and optimized rendering","Active community - growing ecosystem with excellent tooling"],keyFeatures:{title:"Key Features",items:[{name:"Reactive Data Binding",description:"Automatic updates when data changes with two-way data binding",icon:"🔄"},{name:"Component-Based",description:"Build reusable components for better code organization",icon:"🧩"},{name:"Single File Components",description:"Combine template, script, and styles in one .vue file",icon:"📄"},{name:"Vue Router & Vuex",description:"Official routing and state management solutions",icon:"🗺️"}]},quickExample:{title:"Quick Example",code:`<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue.js!',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
<\/script>`,explanation:"Vue.js makes it easy to create reactive interfaces. Notice the simple template syntax and automatic reactivity! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Single Page Applications",description:"Build modern SPAs with Vue Router and Vuex"},{title:"Progressive Web Apps",description:"Create PWAs with Vue and service workers"},{title:"Component Libraries",description:"Build reusable UI component libraries"},{title:"Interactive Widgets",description:"Add interactivity to existing websites"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Vue Basics",description:"Master templates, directives, and data binding"},{step:2,title:"Understand Components",description:"Learn to create and compose Vue components"},{step:3,title:"Explore Vue Router",description:"Add routing to create multi-page applications"},{step:4,title:"Master State Management",description:"Use Vuex for complex state management"}]},nextSteps:{title:"What's Next?",description:"After mastering Vue.js, explore these paths:",suggestions:[{language:"React",languageId:"React",description:"Learn another popular frontend framework",icon:"⚛️"},{language:"TypeScript",languageId:"TypeScript",description:"Add type safety to your Vue applications",icon:"🛡️"}]}},React:{id:"React",name:"React",tagline:"A JavaScript library for building user interfaces",description:"React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Created by Facebook, it lets you compose complex UIs from small, isolated pieces of code called components.",whatIsIt:{title:"What is React?",content:"React is a JavaScript library for building user interfaces, particularly web applications. It uses a component-based architecture where you build encapsulated components that manage their own state, then compose them to make complex UIs.",visual:"Think of React as LEGO blocks for web interfaces - build small, reusable components and snap them together to create amazing applications."},whyLearn:["Industry standard - used by Facebook, Netflix, Airbnb, and thousands of companies","Component-based - reusable, maintainable code architecture","Huge ecosystem - massive community and extensive library support","Job market - one of the most in-demand skills in web development","Modern features - hooks, concurrent rendering, and excellent developer experience"],keyFeatures:{title:"Key Features",items:[{name:"Virtual DOM",description:"Efficient rendering with virtual DOM for optimal performance",icon:"⚡"},{name:"JSX",description:"Write HTML-like syntax directly in JavaScript",icon:"📝"},{name:"Hooks",description:"Modern way to use state and lifecycle features in functional components",icon:"🪝"},{name:"One-Way Data Flow",description:"Predictable data flow makes debugging easier",icon:"🔄"}]},quickExample:{title:"Quick Example",code:`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,explanation:"React makes it easy to build interactive UIs with hooks and JSX. Notice how simple state management is with useState! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Applications",description:"Build modern, interactive web applications"},{title:"Mobile Apps",description:"Create mobile apps with React Native"},{title:"Component Libraries",description:"Build and share reusable UI components"},{title:"Enterprise Applications",description:"Scale to large applications with React ecosystem"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn React Basics",description:"Master JSX, components, props, and state"},{step:2,title:"Understand Hooks",description:"Learn useState, useEffect, and custom hooks"},{step:3,title:"Explore React Router",description:"Add routing and navigation to your apps"},{step:4,title:"Master State Management",description:"Use Context API or Redux for complex state"}]},nextSteps:{title:"What's Next?",description:"After mastering React, explore these paths:",suggestions:[{language:"React Native",languageId:"React Native",description:"Build mobile apps with React",icon:"📱"},{language:"TypeScript",languageId:"TypeScript",description:"Add type safety to your React applications",icon:"🛡️"}]}},Svelte:{id:"Svelte",name:"Svelte",tagline:"Cybernetically enhanced web apps",description:"Svelte is a radical new approach to building user interfaces. Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.",whatIsIt:{title:"What is Svelte?",content:"Svelte is a compiler that converts your component code into highly optimized vanilla JavaScript at build time. Unlike traditional frameworks, Svelte shifts work from the browser to the compile step, resulting in smaller bundle sizes and faster runtime performance.",visual:"Think of Svelte as a framework that disappears at runtime - it compiles away, leaving you with pure, optimized JavaScript."},whyLearn:["No virtual DOM - compiles to vanilla JavaScript for better performance","Smaller bundles - no framework runtime means smaller file sizes","Simple syntax - easy to learn with minimal boilerplate","Great performance - faster than React and Vue in many benchmarks","Growing ecosystem - active community and excellent tooling"],keyFeatures:{title:"Key Features",items:[{name:"Compiler-Based",description:"Compiles to optimized vanilla JavaScript at build time",icon:"⚙️"},{name:"Reactive Statements",description:"Automatic reactivity with $: reactive declarations",icon:"🔄"},{name:"Scoped Styles",description:"Component-scoped CSS by default",icon:"🎨"},{name:"Built-in Animations",description:"Easy animations and transitions built-in",icon:"✨"}]},quickExample:{title:"Quick Example",code:`<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
<\/script>

<button on:click={increment}>
  Count: {count}
</button>

<style>
  button {
    padding: 10px 20px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
  }
</style>`,explanation:"Svelte code is clean and simple. Notice how reactive it is - no hooks or special syntax needed! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Applications",description:"Build fast, lightweight web applications"},{title:"Progressive Web Apps",description:"Create PWAs with excellent performance"},{title:"Interactive Components",description:"Build reusable, performant UI components"},{title:"Data Visualization",description:"Create smooth, animated data visualizations"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Svelte Basics",description:"Master components, props, and reactive statements"},{step:2,title:"Understand Reactivity",description:"Learn $: reactive declarations and stores"},{step:3,title:"Explore SvelteKit",description:"Build full-stack apps with SvelteKit framework"},{step:4,title:"Master Animations",description:"Create smooth transitions and animations"}]},nextSteps:{title:"What's Next?",description:"After mastering Svelte, explore these paths:",suggestions:[{language:"Vue.js",languageId:"Vue.js",description:"Learn another progressive framework",icon:"💚"},{language:"TypeScript",languageId:"TypeScript",description:"Add type safety to your Svelte apps",icon:"🛡️"}]}},Angular:{id:"Angular",name:"Angular",tagline:"The web development framework",description:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript and implements core and optional functionality as a set of TypeScript libraries.",whatIsIt:{title:"What is Angular?",content:"Angular is a comprehensive framework for building web applications. It provides everything you need out of the box: routing, forms, HTTP client, testing utilities, and more. Angular uses TypeScript by default and follows a component-based architecture.",visual:"Think of Angular as a complete toolkit for building enterprise applications - everything you need is included and well-integrated."},whyLearn:["Enterprise-ready - designed for large-scale applications","TypeScript-first - built with TypeScript for type safety","Complete framework - includes routing, forms, HTTP, and more","Strong tooling - excellent CLI and development tools","Google-backed - maintained by Google with long-term support"],keyFeatures:{title:"Key Features",items:[{name:"TypeScript",description:"Built with TypeScript for type safety and better tooling",icon:"🛡️"},{name:"Dependency Injection",description:"Built-in DI system for better code organization",icon:"💉"},{name:"RxJS Integration",description:"Reactive programming with Observables",icon:"🔄"},{name:"Angular CLI",description:"Powerful command-line interface for development",icon:"⚡"}]},quickExample:{title:"Quick Example",code:`import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <h1>Count: {{ count }}</h1>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
}`,explanation:"Angular uses decorators and TypeScript for a structured approach. Notice the component decorator and class-based syntax! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Enterprise Applications",description:"Build large-scale, maintainable applications"},{title:"Single Page Applications",description:"Create complex SPAs with routing and state management"},{title:"Progressive Web Apps",description:"Build PWAs with Angular Service Workers"},{title:"Mobile Apps",description:"Create mobile apps with Ionic and Angular"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn TypeScript",description:"Master TypeScript basics as Angular uses it by default"},{step:2,title:"Understand Components",description:"Learn Angular components, templates, and data binding"},{step:3,title:"Explore Services",description:"Use services and dependency injection"},{step:4,title:"Master Routing",description:"Build multi-page applications with Angular Router"}]},nextSteps:{title:"What's Next?",description:"After mastering Angular, explore these paths:",suggestions:[{language:"TypeScript",languageId:"TypeScript",description:"Deepen your TypeScript knowledge",icon:"🛡️"},{language:"Node.js",languageId:"Node.js",description:"Build full-stack applications",icon:"🚀"}]}},Deno:{id:"Deno",name:"Deno",tagline:"A secure runtime for JavaScript and TypeScript",description:"Deno is a modern runtime for JavaScript and TypeScript that uses V8 and is built in Rust. Created by Ryan Dahl (creator of Node.js), Deno addresses many of Node.js's design decisions with security and developer experience in mind.",whatIsIt:{title:"What is Deno?",content:"Deno is a secure runtime for JavaScript and TypeScript, built on V8 and Rust. It was created by Ryan Dahl to address what he saw as mistakes in Node.js, particularly around security, module resolution, and developer experience. Deno has built-in TypeScript support and secure-by-default permissions.",visual:"Think of Deno as Node.js 2.0 - same creator, but with lessons learned and modern best practices built-in from the start."},whyLearn:["Security-first - explicit permissions for file, network, and environment access","TypeScript built-in - no need for separate compilation step","Modern features - ES modules, top-level await, and Web APIs","Single executable - no package manager or node_modules needed","Future of JavaScript - represents modern JavaScript runtime design"],keyFeatures:{title:"Key Features",items:[{name:"Security by Default",description:"Explicit permissions for file, network, and environment access",icon:"🔒"},{name:"TypeScript Support",description:"Built-in TypeScript support without configuration",icon:"🛡️"},{name:"Web Standards",description:"Uses Web APIs like fetch, WebSocket, and more",icon:"🌐"},{name:"No Package Manager",description:"Import directly from URLs, no npm or node_modules",icon:"📦"}]},quickExample:{title:"Quick Example",code:`// Simple Deno server
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve((req) => {
  return new Response("Hello from Deno!", {
    headers: { "content-type": "text/plain" },
  });
}, { port: 8000 });

console.log("Server running on http://localhost:8000");`,explanation:"Deno code is clean and modern. Notice the URL imports and built-in TypeScript! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Servers",description:"Build secure web servers and APIs"},{title:"Scripts & Tools",description:"Create command-line tools and automation scripts"},{title:"Full-Stack Apps",description:"Build complete applications with Deno Deploy"},{title:"Modern Development",description:"Use cutting-edge JavaScript and TypeScript features"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Install Deno",description:"Install Deno and understand the runtime"},{step:2,title:"Learn URL Imports",description:"Understand how to import modules from URLs"},{step:3,title:"Understand Permissions",description:"Learn Deno's security model and permissions"},{step:4,title:"Build Applications",description:"Create servers, APIs, and full-stack applications"}]},nextSteps:{title:"What's Next?",description:"After mastering Deno, explore these paths:",suggestions:[{language:"Node.js",languageId:"Node.js",description:"Compare with Node.js and understand differences",icon:"🟢"},{language:"TypeScript",languageId:"TypeScript",description:"Deepen your TypeScript knowledge",icon:"🛡️"}]}},"Ruby on Rails":{id:"Ruby on Rails",name:"Ruby on Rails",tagline:"Convention over configuration",description:"Ruby on Rails, often called Rails, is a server-side web application framework written in Ruby. Rails emphasizes convention over configuration and the DRY (Don't Repeat Yourself) principle, making it perfect for rapid development.",whatIsIt:{title:"What is Ruby on Rails?",content:"Rails is a full-stack web application framework that provides everything needed to create database-backed web applications. It follows the MVC (Model-View-Controller) pattern and includes everything from database migrations to email sending out of the box.",visual:"Think of Rails as a framework that makes decisions for you - follow conventions, and you can build applications incredibly fast."},whyLearn:["Rapid development - build applications quickly with built-in features","Convention over configuration - less code, more productivity","Mature ecosystem - stable, well-tested, and battle-proven","Great for startups - perfect for MVPs and rapid prototyping","Active community - friendly, helpful community and extensive resources"],keyFeatures:{title:"Key Features",items:[{name:"MVC Architecture",description:"Clean separation with Model-View-Controller pattern",icon:"🏗️"},{name:"Active Record",description:"Powerful ORM for database interactions",icon:"🗄️"},{name:"RESTful Routes",description:"Convention-based routing for REST APIs",icon:"🛣️"},{name:"Built-in Testing",description:"Testing framework included by default",icon:"🧪"}]},quickExample:{title:"Quick Example",code:`# Rails controller
class UsersController < ApplicationController
  def index
    @users = User.all
  end
  
  def show
    @user = User.find(params[:id])
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user
    else
      render :new
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:name, :email)
  end
end`,explanation:"Rails code is elegant and follows conventions. Notice how much functionality you get with minimal code! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Applications",description:"Build full-stack web applications rapidly"},{title:"APIs",description:"Create RESTful APIs and backend services"},{title:"Startups & MVPs",description:"Rapidly prototype and build minimum viable products"},{title:"E-Commerce",description:"Build online stores and marketplaces"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Ruby Basics",description:"Master Ruby fundamentals before diving into Rails"},{step:2,title:"Understand MVC",description:"Learn the Model-View-Controller pattern"},{step:3,title:"Explore Active Record",description:"Master database interactions with Active Record"},{step:4,title:"Build Your First App",description:"Create a complete Rails application"}]},nextSteps:{title:"What's Next?",description:"After mastering Rails, explore these paths:",suggestions:[{language:"Ruby",languageId:"Ruby",description:"Deepen your Ruby knowledge",icon:"💎"},{language:"JavaScript",languageId:"JavaScript",description:"Add frontend interactivity",icon:"⚡"}]}},Elixir:{id:"Elixir",name:"Elixir",tagline:"Functional, concurrent, distributed",description:"Elixir is a dynamic, functional language designed for building scalable and maintainable applications. It runs on the Erlang VM, giving you access to an ecosystem used for building distributed, fault-tolerant systems.",whatIsIt:{title:"What is Elixir?",content:"Elixir is a functional programming language built on the Erlang VM. It combines the productivity of Ruby with the robustness of Erlang, making it perfect for building distributed, fault-tolerant systems. Elixir is known for its excellent concurrency model and the Phoenix web framework.",visual:"Think of Elixir as Ruby's functional cousin running on Erlang's battle-tested virtual machine - productivity meets reliability."},whyLearn:["Fault-tolerant - built for systems that need to stay running","Excellent concurrency - handle millions of concurrent processes","Phoenix framework - high-performance web framework","Functional programming - learn modern functional concepts","Growing ecosystem - active community and great tooling"],keyFeatures:{title:"Key Features",items:[{name:"Actor Model",description:"Lightweight processes for excellent concurrency",icon:"🎭"},{name:"Pattern Matching",description:"Powerful pattern matching for elegant code",icon:"🎯"},{name:"Phoenix Framework",description:"High-performance web framework with real-time features",icon:"🔥"},{name:"Fault Tolerance",description:"Let it crash philosophy with supervision trees",icon:"🛡️"}]},quickExample:{title:"Quick Example",code:`# Pattern matching and functions
defmodule Math do
  def factorial(0), do: 1
  def factorial(n) when n > 0, do: n * factorial(n - 1)
  
  def sum([]), do: 0
  def sum([head | tail]), do: head + sum(tail)
end

# Working with processes
pid = spawn(fn -> 
  receive do
    {:hello, sender} -> send(sender, "Hello back!")
  end
end)

send(pid, {:hello, self()})`,explanation:"Elixir code is elegant with pattern matching and functional style. Notice the pattern matching in function definitions! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Real-Time Applications",description:"Build chat apps, gaming servers, and live systems"},{title:"Distributed Systems",description:"Create fault-tolerant, distributed applications"},{title:"Web Applications",description:"Build high-performance web apps with Phoenix"},{title:"IoT & Embedded",description:"Use Nerves framework for embedded systems"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Elixir Basics",description:"Master pattern matching, functions, and data structures"},{step:2,title:"Understand Processes",description:"Learn the actor model and concurrency"},{step:3,title:"Explore Phoenix",description:"Build web applications with Phoenix framework"},{step:4,title:"Master OTP",description:"Learn OTP for building robust systems"}]},nextSteps:{title:"What's Next?",description:"After mastering Elixir, explore these paths:",suggestions:[{language:"Ruby",languageId:"Ruby",description:"Compare functional vs OOP approaches",icon:"💎"},{language:"Haskell",languageId:"Haskell",description:"Explore pure functional programming",icon:"🔷"}]}},SQL:{id:"SQL",name:"SQL",tagline:"The language of databases",description:"SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. Whether you're a web developer, data analyst, or software engineer, SQL is an essential skill.",whatIsIt:{title:"What is SQL?",content:"SQL is a domain-specific language used for managing data in relational database management systems. It allows you to create, read, update, and delete data, as well as define database structures and manage access permissions.",visual:"Think of SQL as the universal language for talking to databases - learn it once, use it everywhere."},whyLearn:["Universal - works with all major database systems","Essential skill - required for most development and data roles","Powerful queries - extract and analyze data efficiently","Career opportunities - high demand across industries","Foundation - understanding databases is crucial for any developer"],keyFeatures:{title:"Key Features",items:[{name:"Data Manipulation",description:"SELECT, INSERT, UPDATE, DELETE operations",icon:"📊"},{name:"Data Definition",description:"CREATE, ALTER, DROP tables and schemas",icon:"🏗️"},{name:"Joins & Relationships",description:"Combine data from multiple tables",icon:"🔗"},{name:"Aggregations",description:"GROUP BY, HAVING, and aggregate functions",icon:"📈"}]},quickExample:{title:"Quick Example",code:`-- Create a table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO users (name, email) 
VALUES ('Alice', 'alice@example.com');

-- Query data
SELECT name, email 
FROM users 
WHERE created_at > '2024-01-01'
ORDER BY name;

-- Join tables
SELECT u.name, o.total
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.total > 100;`,explanation:"SQL makes it easy to work with databases. Notice how intuitive the syntax is for querying and manipulating data! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Development",description:"Store and retrieve data for web applications"},{title:"Data Analysis",description:"Analyze and extract insights from databases"},{title:"Business Intelligence",description:"Create reports and dashboards from data"},{title:"Database Administration",description:"Manage and maintain database systems"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Basic Queries",description:"Master SELECT, WHERE, ORDER BY, and LIMIT"},{step:2,title:"Understand Joins",description:"Learn INNER, LEFT, RIGHT, and FULL JOINs"},{step:3,title:"Master Aggregations",description:"Use GROUP BY, HAVING, and aggregate functions"},{step:4,title:"Practice with Real Data",description:"Work with sample databases and real projects"}]},nextSteps:{title:"What's Next?",description:"After mastering SQL, explore these paths:",suggestions:[{language:"PostgreSQL",languageId:"PostgreSQL",description:"Learn advanced PostgreSQL features",icon:"🐘"},{language:"Node.js",languageId:"Node.js",description:"Use SQL in your backend applications",icon:"🚀"}]}},PostgreSQL:{id:"PostgreSQL",name:"PostgreSQL",tagline:"The world's most advanced open source database",description:"PostgreSQL is a powerful, open-source object-relational database system with over 30 years of active development. It has earned a strong reputation for reliability, feature robustness, and performance.",whatIsIt:{title:"What is PostgreSQL?",content:"PostgreSQL is an advanced, open-source relational database management system. It extends SQL with additional features like JSON support, full-text search, and advanced indexing. PostgreSQL is known for its standards compliance and extensibility.",visual:"Think of PostgreSQL as the Swiss Army knife of databases - powerful, reliable, and feature-rich."},whyLearn:["Advanced features - JSON, arrays, full-text search, and more","ACID compliant - reliable transactions and data integrity","Extensible - add custom functions, types, and operators","Open source - free, community-driven, and well-maintained","Industry standard - used by major companies worldwide"],keyFeatures:{title:"Key Features",items:[{name:"JSON Support",description:"Native JSON and JSONB data types with indexing",icon:"📄"},{name:"Full-Text Search",description:"Built-in full-text search capabilities",icon:"🔍"},{name:"Advanced Indexing",description:"B-tree, hash, GIN, GiST, and custom indexes",icon:"📇"},{name:"Stored Procedures",description:"Write functions in multiple languages",icon:"⚙️"}]},quickExample:{title:"Quick Example",code:`-- JSON support
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  attributes JSONB
);

INSERT INTO products (name, attributes) 
VALUES ('Laptop', '{"brand": "Dell", "ram": "16GB", "storage": "512GB"}');

-- Query JSON
SELECT name, attributes->>'brand' as brand
FROM products
WHERE attributes @> '{"ram": "16GB"}';

-- Full-text search
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  content TEXT
);

SELECT title, content
FROM articles
WHERE to_tsvector('english', content) @@ to_tsquery('english', 'database');`,explanation:"PostgreSQL extends SQL with powerful features like JSON support and full-text search. Notice how you can query JSON data directly! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Applications",description:"Power backend databases for web apps"},{title:"Data Warehousing",description:"Store and analyze large datasets"},{title:"Geospatial Data",description:"Use PostGIS for geographic information systems"},{title:"Analytics",description:"Complex queries and data analysis"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn SQL Basics",description:"Master fundamental SQL concepts first"},{step:2,title:"Explore PostgreSQL Features",description:"Learn JSON, arrays, and advanced data types"},{step:3,title:"Understand Indexing",description:"Master different index types and optimization"},{step:4,title:"Practice Advanced Queries",description:"Work with complex queries and stored procedures"}]},nextSteps:{title:"What's Next?",description:"After mastering PostgreSQL, explore these paths:",suggestions:[{language:"SQL",languageId:"SQL",description:"Deepen your SQL knowledge",icon:"📊"},{language:"Node.js",languageId:"Node.js",description:"Use PostgreSQL in your applications",icon:"🚀"}]}},MySQL:{id:"MySQL",name:"MySQL",tagline:"The world's most popular open source database",description:"MySQL is the world's most popular open-source relational database management system. It's fast, reliable, and easy to use, making it the database of choice for many web applications.",whatIsIt:{title:"What is MySQL?",content:"MySQL is an open-source relational database management system that uses SQL. It's known for its speed, reliability, and ease of use. MySQL is widely used in web applications and is the M in the LAMP stack (Linux, Apache, MySQL, PHP).",visual:"Think of MySQL as the workhorse of web databases - reliable, fast, and trusted by millions of applications."},whyLearn:["Most popular - widely used across the web","Fast performance - optimized for speed","Easy to use - simple setup and administration","Great documentation - extensive resources and community","Industry standard - used by major platforms like WordPress"],keyFeatures:{title:"Key Features",items:[{name:"High Performance",description:"Optimized for speed and efficiency",icon:"⚡"},{name:"Scalability",description:"Handles everything from small to large applications",icon:"📈"},{name:"Replication",description:"Master-slave and master-master replication",icon:"🔄"},{name:"Storage Engines",description:"Multiple storage engines (InnoDB, MyISAM, etc.)",icon:"💾"}]},quickExample:{title:"Quick Example",code:`-- Create database and table
CREATE DATABASE myapp;
USE myapp;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO users (username, email) 
VALUES ('john_doe', 'john@example.com'),
       ('jane_smith', 'jane@example.com');

-- Query with joins
SELECT u.username, p.title, p.created_at
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
ORDER BY p.created_at DESC;`,explanation:"MySQL makes database management straightforward. Notice the simple syntax and powerful querying capabilities! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Web Applications",description:"Power millions of websites and web apps"},{title:"Content Management",description:"Used by WordPress, Drupal, and other CMS platforms"},{title:"E-Commerce",description:"Store product and order data for online stores"},{title:"Data Analysis",description:"Analyze business data and generate reports"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn SQL Basics",description:"Master fundamental SQL with MySQL"},{step:2,title:"Understand Storage Engines",description:"Learn about InnoDB, MyISAM, and other engines"},{step:3,title:"Master Indexing",description:"Optimize queries with proper indexing"},{step:4,title:"Practice Administration",description:"Learn backup, restore, and maintenance"}]},nextSteps:{title:"What's Next?",description:"After mastering MySQL, explore these paths:",suggestions:[{language:"PostgreSQL",languageId:"PostgreSQL",description:"Explore advanced database features",icon:"🐘"},{language:"PHP",languageId:"PHP",description:"Build web apps with MySQL and PHP",icon:"🐘"}]}},Flutter:{id:"Flutter",name:"Flutter / Dart",tagline:"Build beautiful native apps",description:"Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase. Flutter uses Dart, a modern language optimized for client-side development.",whatIsIt:{title:"What is Flutter?",content:"Flutter is a cross-platform framework that lets you build apps for iOS, Android, Web, Windows, macOS, and Linux from a single codebase. It uses Dart programming language and provides a rich set of pre-built widgets for creating beautiful, fast user interfaces.",visual:'Think of Flutter as "write once, run everywhere" done right - one codebase, native performance on all platforms.'},whyLearn:["Cross-platform - build for iOS, Android, Web, and desktop from one codebase","Fast development - hot reload for instant updates","Beautiful UI - rich widget library and custom designs","Native performance - compiled to native code","Growing ecosystem - backed by Google with active community"],keyFeatures:{title:"Key Features",items:[{name:"Hot Reload",description:"See changes instantly without losing app state",icon:"⚡"},{name:"Rich Widgets",description:"Extensive library of beautiful, customizable widgets",icon:"🧩"},{name:"Dart Language",description:"Modern language optimized for UI development",icon:"🎯"},{name:"Native Performance",description:"Compiled to native ARM code for fast execution",icon:"🚀"}]},quickExample:{title:"Quick Example",code:`import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Flutter Demo')),
        body: Center(
          child: Text('Hello, Flutter!'),
        ),
      ),
    );
  }
}`,explanation:"Flutter code is declarative and widget-based. Notice how everything is a widget! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Mobile Apps",description:"Build iOS and Android apps from one codebase"},{title:"Web Applications",description:"Create web apps with Flutter for Web"},{title:"Desktop Apps",description:"Build Windows, macOS, and Linux applications"},{title:"Embedded Systems",description:"Use Flutter for embedded devices and IoT"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Dart Basics",description:"Master Dart programming language fundamentals"},{step:2,title:"Understand Widgets",description:"Learn Flutter's widget system and composition"},{step:3,title:"Explore State Management",description:"Use setState, Provider, or Riverpod for state"},{step:4,title:"Build Your First App",description:"Create a complete mobile application"}]},nextSteps:{title:"What's Next?",description:"After mastering Flutter, explore these paths:",suggestions:[{language:"Dart",languageId:"Flutter",description:"Deepen your Dart knowledge",icon:"🎯"},{language:"React Native",languageId:"React Native",description:"Compare with React Native",icon:"⚛️"}]}},"React Native":{id:"React Native",name:"React Native",tagline:"Learn once, write anywhere",description:"React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.",whatIsIt:{title:"What is React Native?",content:"React Native is a framework for building native mobile applications using React and JavaScript. It allows you to write code once and deploy it to both iOS and Android, while still providing access to native platform features.",visual:"Think of React Native as React for mobile - same concepts, same developer experience, but for building native mobile apps."},whyLearn:["Code reuse - share code between iOS and Android","React knowledge - use your existing React skills","Native performance - compiles to native components","Hot reload - see changes instantly","Large ecosystem - huge community and library support"],keyFeatures:{title:"Key Features",items:[{name:"Cross-Platform",description:"Write once, run on iOS and Android",icon:"📱"},{name:"React Concepts",description:"Use familiar React patterns and hooks",icon:"⚛️"},{name:"Native Components",description:"Access to native platform APIs",icon:"🔧"},{name:"Fast Refresh",description:"Instant updates during development",icon:"⚡"}]},quickExample:{title:"Quick Example",code:`import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default App;`,explanation:"React Native uses React concepts you already know! Notice how similar it is to React web development. You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Mobile Apps",description:"Build iOS and Android applications"},{title:"Cross-Platform",description:"Share code between platforms efficiently"},{title:"Startups",description:"Rapidly develop MVPs for mobile"},{title:"Enterprise Apps",description:"Build large-scale mobile applications"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn React First",description:"Master React basics before React Native"},{step:2,title:"Understand Native Components",description:"Learn View, Text, Image, and other components"},{step:3,title:"Explore Navigation",description:"Use React Navigation for app navigation"},{step:4,title:"Build Your First App",description:"Create a complete mobile application"}]},nextSteps:{title:"What's Next?",description:"After mastering React Native, explore these paths:",suggestions:[{language:"React",languageId:"React",description:"Deepen your React knowledge",icon:"⚛️"},{language:"TypeScript",languageId:"TypeScript",description:"Add type safety to React Native",icon:"🛡️"}]}},"Objective-C":{id:"Objective-C",name:"Objective-C",tagline:"The original iOS language",description:"Objective-C is the primary programming language used for writing software for macOS and iOS. While Swift is now preferred, Objective-C is still widely used in legacy codebases and is valuable for maintaining existing applications.",whatIsIt:{title:"What is Objective-C?",content:"Objective-C is an object-oriented programming language that adds Smalltalk-style messaging to C. It was the primary language for Apple platforms before Swift and is still used in many existing iOS and macOS applications.",visual:"Think of Objective-C as C with object-oriented superpowers - it extends C with dynamic runtime and messaging capabilities."},whyLearn:["Legacy codebases - many iOS apps still use Objective-C","Foundation knowledge - understand how Apple platforms work","C compatibility - works seamlessly with C code","Dynamic runtime - powerful runtime features","Career opportunities - maintain and update existing apps"],keyFeatures:{title:"Key Features",items:[{name:"Dynamic Runtime",description:"Powerful runtime with dynamic method dispatch",icon:"⚡"},{name:"Message Passing",description:"Smalltalk-style messaging between objects",icon:"💬"},{name:"C Compatibility",description:"Full compatibility with C and C++",icon:"🔗"},{name:"Cocoa Framework",description:"Access to Apple's Cocoa and Cocoa Touch frameworks",icon:"🍎"}]},quickExample:{title:"Quick Example",code:`// Objective-C class
#import <Foundation/Foundation.h>

@interface Person : NSObject
@property (nonatomic, strong) NSString *name;
@property (nonatomic, assign) NSInteger age;

- (void)greet;
@end

@implementation Person
- (void)greet {
    NSLog(@"Hello, I'm %@ and I'm %ld years old", self.name, (long)self.age);
}
@end

// Usage
Person *person = [[Person alloc] init];
person.name = @"Alice";
person.age = 25;
[person greet];`,explanation:"Objective-C uses a unique syntax with square brackets for method calls. Notice the @interface and @implementation syntax! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Legacy iOS Apps",description:"Maintain and update existing iOS applications"},{title:"macOS Development",description:"Build desktop applications for Mac"},{title:"Framework Development",description:"Create libraries and frameworks for Apple platforms"},{title:"System Programming",description:"Low-level system programming on macOS"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn C Basics",description:"Master C programming fundamentals first"},{step:2,title:"Understand OOP",description:"Learn object-oriented concepts in Objective-C"},{step:3,title:"Explore Cocoa",description:"Get familiar with Cocoa and Cocoa Touch frameworks"},{step:4,title:"Build iOS Apps",description:"Create iOS applications with Xcode"}]},nextSteps:{title:"What's Next?",description:"After mastering Objective-C, explore these paths:",suggestions:[{language:"Swift",languageId:"Swift",description:"Learn modern iOS development with Swift",icon:"🦉"},{language:"C",languageId:"C",description:"Deepen your C knowledge",icon:"⚙️"}]}},Assembly:{id:"Assembly",name:"Assembly",tagline:"The language closest to the machine",description:"Assembly language is a low-level programming language that corresponds closely to machine code instructions. Learning assembly gives you deep understanding of how computers work at the hardware level.",whatIsIt:{title:"What is Assembly?",content:"Assembly language is a low-level programming language that uses mnemonics to represent machine code instructions. Each assembly instruction corresponds to a single machine instruction, giving you direct control over the CPU and memory.",visual:"Think of Assembly as the native language of your computer's processor - every instruction you write directly controls the hardware."},whyLearn:["Deep understanding - learn how computers really work","Performance - maximum control and optimization","Embedded systems - essential for microcontroller programming","Reverse engineering - understand compiled code","Educational value - fundamental computer science knowledge"],keyFeatures:{title:"Key Features",items:[{name:"Direct Hardware Control",description:"Direct access to CPU registers and memory",icon:"⚙️"},{name:"Minimal Abstraction",description:"One-to-one mapping with machine instructions",icon:"🎯"},{name:"Maximum Performance",description:"No overhead, complete control over execution",icon:"⚡"},{name:"Platform Specific",description:"Different for x86, ARM, and other architectures",icon:"🖥️"}]},quickExample:{title:"Quick Example",code:`; x86-64 Assembly example
section .data
    msg db 'Hello, Assembly!', 0xA
    len equ $ - msg

section .text
    global _start

_start:
    ; Write to stdout
    mov rax, 1        ; sys_write
    mov rdi, 1        ; file descriptor (stdout)
    mov rsi, msg      ; message address
    mov rdx, len      ; message length
    syscall
    
    ; Exit
    mov rax, 60       ; sys_exit
    mov rdi, 0        ; exit code
    syscall`,explanation:"Assembly gives you direct control over the CPU. Notice how each instruction directly manipulates registers and memory! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Embedded Systems",description:"Program microcontrollers and embedded devices"},{title:"Operating Systems",description:"Write kernel code and system software"},{title:"Performance Optimization",description:"Optimize critical code sections"},{title:"Reverse Engineering",description:"Understand and analyze compiled programs"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Computer Architecture",description:"Understand CPU, registers, and memory"},{step:2,title:"Master Basic Instructions",description:"Learn MOV, ADD, SUB, and control flow"},{step:3,title:"Understand Calling Conventions",description:"Learn how functions work at assembly level"},{step:4,title:"Practice with Projects",description:"Write assembly programs and debug them"}]},nextSteps:{title:"What's Next?",description:"After mastering Assembly, explore these paths:",suggestions:[{language:"C",languageId:"C",description:"See how C compiles to assembly",icon:"⚙️"},{language:"Rust",languageId:"Rust",description:"Learn modern systems programming",icon:"🦀"}]}},R:{id:"R",name:"R",tagline:"The language of data science",description:"R is a programming language and environment for statistical computing and graphics. It's widely used by statisticians, data analysts, and researchers for data analysis, visualization, and statistical modeling.",whatIsIt:{title:"What is R?",content:"R is a language and environment for statistical computing and graphics. It provides a wide variety of statistical and graphical techniques and is highly extensible. R is particularly strong in data manipulation, statistical analysis, and data visualization.",visual:"Think of R as a specialized tool for data scientists - designed from the ground up for statistical analysis and data visualization."},whyLearn:["Data science - essential for statistical analysis and research","Powerful visualization - excellent plotting and graphics capabilities","Rich ecosystem - thousands of packages for data analysis","Academic standard - widely used in research and academia","Career opportunities - high demand for data science skills"],keyFeatures:{title:"Key Features",items:[{name:"Statistical Analysis",description:"Built-in functions for statistical tests and modeling",icon:"📊"},{name:"Data Visualization",description:"Powerful plotting with ggplot2 and base graphics",icon:"📈"},{name:"Data Frames",description:"Native support for tabular data structures",icon:"📋"},{name:"Package Ecosystem",description:"CRAN with thousands of specialized packages",icon:"📦"}]},quickExample:{title:"Quick Example",code:`# Create a data frame
data <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 35),
  score = c(85, 92, 78)
)

# Basic statistics
mean(data$score)
summary(data)

# Visualization
plot(data$age, data$score, 
     main = "Age vs Score",
     xlab = "Age", 
     ylab = "Score")

# Linear regression
model <- lm(score ~ age, data = data)
summary(model)`,explanation:"R makes statistical analysis straightforward. Notice how intuitive the syntax is for data manipulation and analysis! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Data Analysis",description:"Analyze datasets and extract insights"},{title:"Statistical Modeling",description:"Build regression models and statistical tests"},{title:"Data Visualization",description:"Create publication-quality plots and charts"},{title:"Research",description:"Academic research and scientific computing"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn R Basics",description:"Master vectors, data frames, and basic operations"},{step:2,title:"Explore Data Manipulation",description:"Use dplyr for data wrangling"},{step:3,title:"Master Visualization",description:"Create plots with ggplot2"},{step:4,title:"Practice Statistics",description:"Perform statistical tests and modeling"}]},nextSteps:{title:"What's Next?",description:"After mastering R, explore these paths:",suggestions:[{language:"Python",languageId:"Python",description:"Compare with Python for data science",icon:"🐍"},{language:"SQL",languageId:"SQL",description:"Combine R with SQL for data analysis",icon:"📊"}]}},MATLAB:{id:"MATLAB",name:"MATLAB",tagline:"The language of technical computing",description:"MATLAB is a high-level programming language and interactive environment for numerical computation, visualization, and programming. It's widely used in engineering, science, and mathematics.",whatIsIt:{title:"What is MATLAB?",content:"MATLAB (Matrix Laboratory) is a programming platform designed for engineers and scientists. It combines a desktop environment tuned for iterative analysis and design processes with a programming language that expresses matrix and array mathematics directly.",visual:"Think of MATLAB as a powerful calculator for engineers and scientists - designed for mathematical computation and visualization."},whyLearn:["Engineering standard - widely used in engineering and science","Matrix operations - optimized for mathematical computations","Rich toolboxes - specialized tools for various domains","Visualization - excellent plotting and 3D graphics","Industry demand - valuable skill in engineering fields"],keyFeatures:{title:"Key Features",items:[{name:"Matrix Operations",description:"Native support for matrix and array mathematics",icon:"🔢"},{name:"Toolboxes",description:"Specialized toolboxes for various engineering domains",icon:"🧰"},{name:"Simulink",description:"Model-based design and simulation",icon:"📐"},{name:"Visualization",description:"Powerful 2D and 3D plotting capabilities",icon:"📊"}]},quickExample:{title:"Quick Example",code:`% Create matrices
A = [1, 2, 3; 4, 5, 6; 7, 8, 9];
B = [9, 8, 7; 6, 5, 4; 3, 2, 1];

% Matrix operations
C = A * B;
D = A .* B;  % Element-wise multiplication

% Plotting
x = 0:0.1:10;
y = sin(x);
plot(x, y);
title('Sine Wave');
xlabel('x');
ylabel('sin(x)');

% Statistics
mean_value = mean(A(:));
std_value = std(A(:));`,explanation:"MATLAB makes mathematical computation intuitive. Notice how natural matrix operations are! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Engineering",description:"Signal processing, control systems, and simulations"},{title:"Scientific Computing",description:"Numerical analysis and scientific research"},{title:"Data Analysis",description:"Analyze experimental data and results"},{title:"Image Processing",description:"Process and analyze images and signals"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn MATLAB Basics",description:"Master matrices, arrays, and basic operations"},{step:2,title:"Understand Scripts & Functions",description:"Write reusable MATLAB scripts and functions"},{step:3,title:"Explore Toolboxes",description:"Use specialized toolboxes for your domain"},{step:4,title:"Practice Visualization",description:"Create plots and 3D visualizations"}]},nextSteps:{title:"What's Next?",description:"After mastering MATLAB, explore these paths:",suggestions:[{language:"Python",languageId:"Python",description:"Compare with Python for scientific computing",icon:"🐍"},{language:"R",languageId:"R",description:"Explore statistical computing with R",icon:"📊"}]}},Haskell:{id:"Haskell",name:"Haskell",tagline:"Purely functional programming",description:"Haskell is a purely functional programming language with strong static typing and lazy evaluation. It's known for its mathematical elegance and is excellent for learning functional programming concepts.",whatIsIt:{title:"What is Haskell?",content:"Haskell is a purely functional programming language, meaning functions have no side effects and the same input always produces the same output. It features strong static typing, type inference, and lazy evaluation, making it both powerful and elegant.",visual:"Think of Haskell as mathematics made into a programming language - elegant, pure, and mathematically sound."},whyLearn:["Functional programming - learn pure functional concepts","Type safety - powerful type system prevents many errors","Mathematical elegance - beautiful, concise code","Mind-expanding - changes how you think about programming","Academic value - widely taught in computer science programs"],keyFeatures:{title:"Key Features",items:[{name:"Pure Functions",description:"No side effects, referential transparency",icon:"✨"},{name:"Strong Typing",description:"Powerful type system with type inference",icon:"🛡️"},{name:"Lazy Evaluation",description:"Expressions evaluated only when needed",icon:"⏱️"},{name:"Pattern Matching",description:"Elegant pattern matching and guards",icon:"🎯"}]},quickExample:{title:"Quick Example",code:`-- Function definitions
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- List comprehensions
squares = [x^2 | x <- [1..10]]

-- Higher-order functions
map (*2) [1, 2, 3, 4, 5]
filter (>3) [1, 2, 3, 4, 5]

-- Pattern matching
fibonacci :: Integer -> Integer
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci n = fibonacci (n-1) + fibonacci (n-2)`,explanation:"Haskell code is elegant and mathematical. Notice the pattern matching and type signatures! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Functional Programming",description:"Learn and practice pure functional programming"},{title:"Research",description:"Academic research and language design"},{title:"Financial Systems",description:"Build reliable financial and trading systems"},{title:"Compilers",description:"Write compilers and language tools"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Functional Concepts",description:"Understand immutability and pure functions"},{step:2,title:"Master Types",description:"Learn Haskell's type system and type inference"},{step:3,title:"Understand Lazy Evaluation",description:"Learn how lazy evaluation works"},{step:4,title:"Practice with Projects",description:"Build functional programs and solve problems"}]},nextSteps:{title:"What's Next?",description:"After mastering Haskell, explore these paths:",suggestions:[{language:"Elixir",languageId:"Elixir",description:"Apply functional concepts to practical applications",icon:"💜"},{language:"Scala",languageId:"Scala",description:"Learn functional programming on the JVM",icon:"🔷"}]}},Scala:{id:"Scala",name:"Scala",tagline:"Scalable language for the JVM",description:"Scala is a modern programming language that combines object-oriented and functional programming. It runs on the Java Virtual Machine and is designed to be concise, elegant, and scalable.",whatIsIt:{title:"What is Scala?",content:"Scala (Scalable Language) is a general-purpose programming language that supports both object-oriented and functional programming paradigms. It runs on the JVM and is fully interoperable with Java, making it popular for building large-scale systems.",visual:"Think of Scala as Java's sophisticated cousin - more expressive, more functional, but still runs on the JVM."},whyLearn:["JVM ecosystem - runs on Java Virtual Machine with Java interop","Functional + OOP - best of both programming paradigms","Concise syntax - write less code than Java","Big Data - used by Spark, Kafka, and big data tools","Type safety - strong static typing with type inference"],keyFeatures:{title:"Key Features",items:[{name:"Functional & OOP",description:"Combines object-oriented and functional programming",icon:"🔄"},{name:"Type Inference",description:"Compiler infers types automatically",icon:"🧠"},{name:"Immutability",description:"Strong support for immutable data structures",icon:"🔒"},{name:"Pattern Matching",description:"Powerful pattern matching capabilities",icon:"🎯"}]},quickExample:{title:"Quick Example",code:`// Simple function
def greet(name: String): String = s"Hello, $name!"

// Pattern matching
def factorial(n: Int): Int = n match {
  case 0 => 1
  case _ => n * factorial(n - 1)
}

// Higher-order functions
val numbers = List(1, 2, 3, 4, 5)
val doubled = numbers.map(_ * 2)
val evens = numbers.filter(_ % 2 == 0)

// Case classes
case class Person(name: String, age: Int)
val alice = Person("Alice", 25)`,explanation:"Scala code is concise and expressive. Notice the pattern matching and functional style! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Big Data",description:"Build applications with Apache Spark and Kafka"},{title:"Web Applications",description:"Build web apps with Play Framework"},{title:"Distributed Systems",description:"Create scalable, distributed applications"},{title:"Enterprise Applications",description:"Build large-scale JVM applications"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Scala Basics",description:"Master syntax, functions, and data structures"},{step:2,title:"Understand Functional Programming",description:"Learn immutability, higher-order functions, and collections"},{step:3,title:"Explore Pattern Matching",description:"Master pattern matching and case classes"},{step:4,title:"Build Applications",description:"Create applications with Scala frameworks"}]},nextSteps:{title:"What's Next?",description:"After mastering Scala, explore these paths:",suggestions:[{language:"Java",languageId:"Java",description:"Deepen your JVM knowledge",icon:"☕"},{language:"Haskell",languageId:"Haskell",description:"Explore pure functional programming",icon:"🔷"}]}},Lua:{id:"Lua",name:"Lua",tagline:"Lightweight, embeddable scripting",description:"Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. It's known for its simplicity, small size, and ease of embedding.",whatIsIt:{title:"What is Lua?",content:"Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural, object-oriented, functional, and data-driven programming. Lua is designed to be embedded in applications to provide scripting capabilities.",visual:"Think of Lua as a scripting language that fits anywhere - small, fast, and easy to embed in games, applications, and systems."},whyLearn:["Game development - used in Roblox, World of Warcraft, and many games","Embeddable - easy to integrate into C/C++ applications","Lightweight - small footprint and fast execution","Simple syntax - easy to learn and use","Versatile - used in games, web servers, and embedded systems"],keyFeatures:{title:"Key Features",items:[{name:"Lightweight",description:"Small size and minimal dependencies",icon:"⚡"},{name:"Embeddable",description:"Easy to embed in C/C++ applications",icon:"🔌"},{name:"Fast",description:"Fast execution with LuaJIT",icon:"🚀"},{name:"Flexible",description:"Supports multiple programming paradigms",icon:"🔄"}]},quickExample:{title:"Quick Example",code:`-- Simple function
function greet(name)
    return "Hello, " .. name .. "!"
end

-- Tables (Lua's data structure)
person = {
    name = "Alice",
    age = 25,
    city = "New York"
}

-- Iteration
numbers = {1, 2, 3, 4, 5}
for i, num in ipairs(numbers) do
    print(num * 2)
end

-- Metatables for OOP
Person = {}
Person.__index = Person

function Person:new(name, age)
    local obj = {name = name, age = age}
    setmetatable(obj, Person)
    return obj
end`,explanation:"Lua code is simple and clean. Notice how tables work as both arrays and dictionaries! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Game Development",description:"Script games in Roblox, World of Warcraft, and more"},{title:"Embedded Scripting",description:"Add scripting to C/C++ applications"},{title:"Web Development",description:"Build web applications with OpenResty/Lua"},{title:"Configuration",description:"Use for configuration files and automation"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Lua Basics",description:"Master tables, functions, and control flow"},{step:2,title:"Understand Metatables",description:"Learn metatables for OOP and operator overloading"},{step:3,title:"Explore LuaJIT",description:"Use LuaJIT for better performance"},{step:4,title:"Build Projects",description:"Create scripts for games or applications"}]},nextSteps:{title:"What's Next?",description:"After mastering Lua, explore these paths:",suggestions:[{language:"Python",languageId:"Python",description:"Compare with another scripting language",icon:"🐍"},{language:"C",languageId:"C",description:"Learn to embed Lua in C applications",icon:"⚙️"}]}},Bash:{id:"Bash",name:"Bash / Shell",tagline:"Automate everything",description:"Bash (Bourne Again Shell) is a Unix shell and command language. It's the default shell on most Linux distributions and macOS, making it essential for system administration, automation, and DevOps.",whatIsIt:{title:"What is Bash?",content:"Bash is a command processor that typically runs in a text window where users type commands. It can also read and execute commands from files called shell scripts. Bash is the default shell on Linux and macOS.",visual:"Think of Bash as the command-line interface to your operating system - automate tasks, manage files, and control your system."},whyLearn:["System administration - essential for Linux/Unix administration","Automation - automate repetitive tasks and workflows","DevOps - crucial for CI/CD, deployment, and infrastructure","Universal - works on Linux, macOS, and Windows (WSL)","Productivity - save time with powerful scripting capabilities"],keyFeatures:{title:"Key Features",items:[{name:"Command Chaining",description:"Pipe and chain commands together",icon:"🔗"},{name:"Scripting",description:"Write reusable shell scripts",icon:"📜"},{name:"Variables & Functions",description:"Use variables and define functions",icon:"📦"},{name:"Process Control",description:"Manage processes and job control",icon:"⚙️"}]},quickExample:{title:"Quick Example",code:`#!/bin/bash

# Variables
name="Alice"
age=25

# Function
greet() {
    echo "Hello, $1! You are $2 years old."
}

# Call function
greet "$name" "$age"

# Loop
for i in {1..5}; do
    echo "Count: $i"
done

# Conditional
if [ $age -ge 18 ]; then
    echo "Adult"
else
    echo "Minor"
fi

# Command substitution
files=$(ls -1 | wc -l)
echo "Number of files: $files"`,explanation:"Bash makes automation straightforward. Notice how you can chain commands and automate tasks! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"System Administration",description:"Manage Linux/Unix systems and servers"},{title:"Automation",description:"Automate repetitive tasks and workflows"},{title:"DevOps",description:"CI/CD scripts, deployment, and infrastructure"},{title:"File Management",description:"Batch process files and directories"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Basic Commands",description:"Master ls, cd, grep, find, and other commands"},{step:2,title:"Understand Scripting",description:"Write shell scripts with variables and functions"},{step:3,title:"Master Pipes & Redirection",description:"Chain commands and redirect input/output"},{step:4,title:"Practice Automation",description:"Automate real-world tasks and workflows"}]},nextSteps:{title:"What's Next?",description:"After mastering Bash, explore these paths:",suggestions:[{language:"Python",languageId:"Python",description:"Use Python for more complex automation",icon:"🐍"},{language:"PowerShell",languageId:"PowerShell",description:"Learn PowerShell for Windows automation",icon:"💻"}]}},PowerShell:{id:"PowerShell",name:"PowerShell",tagline:"Automation for Windows and beyond",description:"PowerShell is a task automation and configuration management framework from Microsoft. It consists of a command-line shell and scripting language built on .NET, making it powerful for Windows administration and cross-platform automation.",whatIsIt:{title:"What is PowerShell?",content:"PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. It's built on .NET and works on Windows, Linux, and macOS.",visual:"Think of PowerShell as Bash for Windows, but with object-oriented capabilities and .NET integration."},whyLearn:["Windows administration - essential for Windows system management","Cross-platform - works on Windows, Linux, and macOS","Object-oriented - works with objects, not just text",".NET integration - access to .NET framework and libraries","Enterprise standard - widely used in enterprise environments"],keyFeatures:{title:"Key Features",items:[{name:"Object-Oriented",description:"Works with objects instead of text streams",icon:"📦"},{name:".NET Integration",description:"Full access to .NET framework and libraries",icon:"🔗"},{name:"Cmdlets",description:"Powerful built-in commands (cmdlets)",icon:"⚡"},{name:"Pipeline",description:"Powerful pipeline for chaining commands",icon:"🔗"}]},quickExample:{title:"Quick Example",code:`# Variables
$name = "Alice"
$age = 25

# Function
function Greet-Person {
    param([string]$Name, [int]$Age)
    Write-Host "Hello, $Name! You are $Age years old."
}

# Call function
Greet-Person -Name $name -Age $age

# Objects
$person = [PSCustomObject]@{
    Name = "Alice"
    Age = 25
    City = "New York"
}

# Pipeline
Get-Process | Where-Object {$_.CPU -gt 100} | Select-Object Name, CPU

# Loops
1..5 | ForEach-Object {
    Write-Host "Count: $_"
}`,explanation:"PowerShell works with objects, making it powerful for automation. Notice how you can work with .NET objects directly! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Windows Administration",description:"Manage Windows systems and Active Directory"},{title:"Automation",description:"Automate Windows and cross-platform tasks"},{title:"DevOps",description:"CI/CD, Azure automation, and infrastructure"},{title:"System Management",description:"Configure and manage Windows servers"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn PowerShell Basics",description:"Master cmdlets, variables, and basic syntax"},{step:2,title:"Understand Objects",description:"Learn how PowerShell works with objects"},{step:3,title:"Master Pipeline",description:"Chain cmdlets using the pipeline"},{step:4,title:"Write Scripts",description:"Create reusable PowerShell scripts and modules"}]},nextSteps:{title:"What's Next?",description:"After mastering PowerShell, explore these paths:",suggestions:[{language:"C#",languageId:"C#",description:"Deepen your .NET knowledge",icon:"💼"},{language:"Bash",languageId:"Bash",description:"Compare with Bash for Linux automation",icon:"🐧"}]}},Perl:{id:"Perl",name:"Perl",tagline:"The duct tape of the internet",description:'Perl is a high-level, general-purpose, interpreted programming language. Known for its powerful text processing capabilities and regular expressions, Perl has been called "the duct tape of the internet" for its versatility.',whatIsIt:{title:"What is Perl?",content:"Perl is a family of high-level, general-purpose programming languages. Perl 5 is widely used for system administration, web development, network programming, and text processing. It's known for its powerful regular expressions and text manipulation capabilities.",visual:"Think of Perl as a Swiss Army knife for text processing - incredibly powerful for parsing, processing, and manipulating text."},whyLearn:["Text processing - excellent for parsing and manipulating text","Regular expressions - powerful regex capabilities","System administration - widely used for automation","Legacy systems - many systems still use Perl","CPAN - comprehensive library ecosystem"],keyFeatures:{title:"Key Features",items:[{name:"Regular Expressions",description:"Powerful built-in regex support",icon:"🔍"},{name:"Text Processing",description:"Excellent for parsing and manipulating text",icon:"📝"},{name:"CPAN",description:"Comprehensive Perl Archive Network",icon:"📦"},{name:"Flexible Syntax",description:"Multiple ways to accomplish tasks (TIMTOWTDI)",icon:"🔄"}]},quickExample:{title:"Quick Example",code:`# Simple script
my $name = "Alice";
my $age = 25;

sub greet {
    my ($name, $age) = @_;
    return "Hello, $name! You are $age years old.";
}

print greet($name, $age) . "\\n";

# Regular expressions
my $text = "Email: alice@example.com";
if ($text =~ /(\\w+@\\w+\\.\\w+)/) {
    print "Found email: $1\\n";
}

# File processing
open(my $fh, '<', 'data.txt') or die "Cannot open file: $!";
while (my $line = <$fh>) {
    chomp $line;
    print "Line: $line\\n";
}
close($fh);`,explanation:"Perl excels at text processing. Notice the powerful regular expressions and file handling! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Text Processing",description:"Parse logs, process files, and manipulate text"},{title:"System Administration",description:"Automate system tasks and administration"},{title:"Web Development",description:"Build web applications with CGI and frameworks"},{title:"Bioinformatics",description:"Process biological data and sequences"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Perl Basics",description:"Master variables, functions, and control structures"},{step:2,title:"Master Regular Expressions",description:"Learn Perl's powerful regex capabilities"},{step:3,title:"Understand File I/O",description:"Read and write files efficiently"},{step:4,title:"Explore CPAN",description:"Use CPAN modules for extended functionality"}]},nextSteps:{title:"What's Next?",description:"After mastering Perl, explore these paths:",suggestions:[{language:"Python",languageId:"Python",description:"Compare with modern scripting languages",icon:"🐍"},{language:"Bash",languageId:"Bash",description:"Learn shell scripting for automation",icon:"🐧"}]}},Julia:{id:"Julia",name:"Julia",tagline:"Fast as C, dynamic as Python",description:"Julia is a high-level, high-performance programming language for technical computing. It combines the ease of use of Python with the speed of C, making it perfect for scientific computing and data science.",whatIsIt:{title:"What is Julia?",content:'Julia is a high-performance programming language designed for numerical and scientific computing. It was created to solve the "two-language problem" - the need to prototype in one language (like Python) and optimize in another (like C).',visual:"Think of Julia as Python's speed demon cousin - as easy to write as Python, but as fast as C."},whyLearn:["High performance - approaches C and Fortran speeds","Scientific computing - designed for numerical computing","Easy syntax - Python-like syntax that's easy to learn","Parallel computing - built-in support for parallel execution","Growing ecosystem - active scientific computing community"],keyFeatures:{title:"Key Features",items:[{name:"Just-In-Time Compilation",description:"JIT compilation for high performance",icon:"⚡"},{name:"Multiple Dispatch",description:"Powerful multiple dispatch system",icon:"🔄"},{name:"Parallel Computing",description:"Built-in support for parallel and distributed computing",icon:"🔄"},{name:"Scientific Libraries",description:"Rich ecosystem for scientific computing",icon:"📚"}]},quickExample:{title:"Quick Example",code:`# Simple function
function greet(name)
    return "Hello, $name!"
end

# Multiple dispatch
abstract type Animal end
struct Dog <: Animal
    name::String
end
struct Cat <: Animal
    name::String
end

make_sound(animal::Dog) = "$(animal.name) says Woof!"
make_sound(animal::Cat) = "$(animal.name) says Meow!"

# Arrays and operations
numbers = [1, 2, 3, 4, 5]
squared = numbers .^ 2  # Element-wise operation

# Performance
function sum_squares(n)
    s = 0
    for i in 1:n
        s += i^2
    end
    return s
end`,explanation:"Julia combines ease of use with high performance. Notice the multiple dispatch and mathematical syntax! You can edit and preview examples live in our interactive lessons!"},useCases:[{title:"Scientific Computing",description:"Numerical analysis and scientific research"},{title:"Data Science",description:"High-performance data analysis and machine learning"},{title:"Parallel Computing",description:"Distributed and parallel scientific computing"},{title:"Financial Modeling",description:"High-performance financial calculations"}],gettingStarted:{title:"Getting Started",steps:[{step:1,title:"Learn Julia Basics",description:"Master syntax, functions, and data structures"},{step:2,title:"Understand Multiple Dispatch",description:"Learn Julia's unique type system"},{step:3,title:"Explore Scientific Libraries",description:"Use packages for scientific computing"},{step:4,title:"Optimize Performance",description:"Write high-performance Julia code"}]},nextSteps:{title:"What's Next?",description:"After mastering Julia, explore these paths:",suggestions:[{language:"Python",languageId:"Python",description:"Compare with Python for data science",icon:"🐍"},{language:"R",languageId:"R",description:"Explore statistical computing",icon:"📊"}]}}};function D(n){return F[n]}function G(){const{languageId:n}=b(),p=w();if(!n)return e.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-gray-400 font-body",children:"Language not found"}),e.jsx(r,{to:"/languages",className:"text-indigo-400 hover:text-indigo-300 mt-4 inline-block",children:"Back to Languages"})]})});const i=D(n),s=v(n),o=x.filter(t=>t.subject===n);if(!i||!s)return e.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-gray-400 font-body",children:"Introduction not available for this language yet"}),e.jsx(r,{to:"/languages",className:"text-indigo-400 hover:text-indigo-300 mt-4 inline-block",children:"Back to Languages"})]})});const m=t=>{switch(t){case"Web":return e.jsx(d,{className:"inline mr-2"});case"Mobile":return e.jsx(j,{className:"inline mr-2"});case"Systems":return e.jsx(M,{className:"inline mr-2"});default:return null}},u=t=>{switch(t){case"beginner":return"bg-green-900/30 text-green-400 border-green-700";case"intermediate":return"bg-yellow-900/30 text-yellow-400 border-yellow-700";case"advanced":return"bg-red-900/30 text-red-400 border-red-700";default:return"bg-gray-700 text-gray-300 border-gray-600"}};return e.jsx("div",{className:"min-h-screen bg-gray-900 py-12",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("button",{onClick:()=>p("/languages"),className:"flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors font-body",children:[e.jsx(S,{})," Back to Languages"]}),e.jsxs("div",{className:"flex items-start gap-6 mb-6",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(B,{languageName:n,size:80})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h1",{className:"text-4xl font-bold font-heading text-white mb-2",children:i.name}),e.jsx("p",{className:"text-xl text-indigo-400 font-body mb-4",children:i.tagline}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs("span",{className:`px-3 py-1 rounded text-sm font-code border ${u(s.difficulty)}`,children:[W(k(s.difficulty),"text-sm"),e.jsx("span",{className:"ml-1 capitalize",children:s.difficulty})]}),e.jsxs("span",{className:"px-3 py-1 rounded text-sm font-code bg-gradient-to-r from-blue-600 to-cyan-600 text-white",children:[m(s.track),s.track]})]})]})]})]}),e.jsx("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",children:e.jsx("p",{className:"text-gray-300 font-body text-lg leading-relaxed",children:i.description})}),e.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(C,{className:"text-3xl text-yellow-400"}),e.jsx("h2",{className:"text-2xl font-bold font-heading text-white",children:i.whatIsIt.title})]}),e.jsx("p",{className:"text-gray-300 font-body mb-4 leading-relaxed",children:i.whatIsIt.content}),i.whatIsIt.visual&&e.jsx("div",{className:"bg-indigo-900/20 border border-indigo-700 rounded-lg p-4 mt-4",children:e.jsxs("p",{className:"text-indigo-200 font-body italic",children:["💡 ",i.whatIsIt.visual]})})]}),e.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(A,{className:"text-3xl text-indigo-400"}),e.jsxs("h2",{className:"text-2xl font-bold font-heading text-white",children:["Why Learn ",i.name,"?"]})]}),e.jsx("div",{className:"space-y-3",children:i.whyLearn.map((t,a)=>e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(I,{className:"text-green-400 mt-1 flex-shrink-0"}),e.jsx("p",{className:"text-gray-300 font-body",children:t})]},a))})]}),e.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(P,{className:"text-3xl text-purple-400"}),e.jsx("h2",{className:"text-2xl font-bold font-heading text-white",children:i.keyFeatures.title})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.keyFeatures.items.map((t,a)=>e.jsx("div",{className:"bg-gray-700 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 transition-colors",children:e.jsxs("div",{className:"flex items-start gap-3",children:[t.icon&&e.jsx("span",{className:"text-2xl",children:t.icon}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold font-heading text-white mb-2",children:t.name}),e.jsx("p",{className:"text-gray-400 font-body text-sm",children:t.description})]})]})},a))})]}),e.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(c,{className:"text-3xl text-green-400"}),e.jsx("h2",{className:"text-2xl font-bold font-heading text-white",children:i.quickExample.title})]}),e.jsx("div",{className:"bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto",children:e.jsx("pre",{className:"text-sm text-gray-300 font-code whitespace-pre-wrap",children:e.jsx("code",{className:"text-green-400",children:i.quickExample.code})})}),e.jsx("div",{className:"bg-indigo-900/20 border border-indigo-700 rounded-lg p-4",children:e.jsxs("p",{className:"text-indigo-200 font-body text-sm",children:["💡 ",i.quickExample.explanation]})})]}),i.cssExample&&e.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(L,{className:"text-3xl text-pink-400"}),e.jsx("h2",{className:"text-2xl font-bold font-heading text-white",children:i.cssExample.title})]}),e.jsx("div",{className:"bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto",children:e.jsx("pre",{className:"text-sm text-gray-300 font-code whitespace-pre-wrap",children:e.jsx("code",{className:"text-cyan-400",children:i.cssExample.code})})}),e.jsx("div",{className:"bg-pink-900/20 border border-pink-700 rounded-lg p-4",children:e.jsxs("p",{className:"text-pink-200 font-body text-sm",children:["✨ ",i.cssExample.explanation]})})]}),e.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(d,{className:"text-3xl text-blue-400"}),e.jsx("h2",{className:"text-2xl font-bold font-heading text-white",children:"Common Use Cases"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.useCases.map((t,a)=>e.jsxs("div",{className:"bg-gray-700 border border-gray-600 rounded-lg p-4",children:[e.jsx("h3",{className:"text-lg font-bold font-heading text-white mb-2",children:t.title}),e.jsx("p",{className:"text-gray-400 font-body text-sm",children:t.description})]},a))})]}),e.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(N,{className:"text-3xl text-orange-400"}),e.jsx("h2",{className:"text-2xl font-bold font-heading text-white",children:i.gettingStarted.title})]}),e.jsx("div",{className:"space-y-4",children:i.gettingStarted.steps.map(t=>e.jsxs("div",{className:"flex gap-4 bg-gray-700 border border-gray-600 rounded-lg p-4",children:[e.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold font-heading",children:t.step}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg font-bold font-heading text-white mb-1",children:t.title}),e.jsx("p",{className:"text-gray-400 font-body text-sm",children:t.description})]})]},t.step))})]}),o.length>0&&e.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(E,{className:"text-3xl text-red-400"}),e.jsx("h2",{className:"text-2xl font-bold font-heading text-white",children:"Available Lessons"})]}),e.jsx("p",{className:"text-gray-400 font-body text-sm mb-4",children:"💡 You can edit and preview examples live in our interactive lessons!"}),e.jsx("div",{className:"space-y-2",children:o.filter((t,a,g)=>{const h=t.title.toLowerCase().split(/\s+/);return!g.slice(0,a).some(l=>{const f=l.title.toLowerCase().split(/\s+/);return h.filter(y=>f.includes(y)).length>=3&&Math.abs(t.title.length-l.title.length)<10})}).map(t=>e.jsx(r,{to:`/lesson/${t.id}`,className:"block bg-gray-700 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 hover:bg-gray-750 transition-all",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold font-heading text-white mb-1",children:t.title}),e.jsx("p",{className:"text-sm text-gray-400 font-body",children:t.description})]}),e.jsx(T,{className:"text-indigo-400"})]})},t.id))})]}),i.nextSteps&&e.jsxs("div",{className:"bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-2 border-indigo-700 rounded-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(R,{className:"text-3xl text-indigo-400"}),e.jsx("h2",{className:"text-2xl font-bold font-heading text-white",children:i.nextSteps.title})]}),e.jsx("p",{className:"text-gray-300 font-body mb-4",children:i.nextSteps.description}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.nextSteps.suggestions.map((t,a)=>e.jsx(r,{to:`/language/${t.languageId}`,className:"bg-gray-800/50 border border-gray-600 rounded-lg p-4 hover:border-indigo-500 hover:bg-gray-800 transition-all",children:e.jsxs("div",{className:"flex items-start gap-3",children:[t.icon&&e.jsx("span",{className:"text-2xl",children:t.icon}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold font-heading text-white mb-1",children:t.language}),e.jsx("p",{className:"text-gray-400 font-body text-sm",children:t.description})]})]})},a))})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsxs(r,{to:"/study-program",className:"flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium text-center font-heading",children:[e.jsx(c,{className:"inline mr-2"}),"Start Learning ",i.name]}),e.jsx(r,{to:"/languages",className:"flex-1 bg-gray-700 text-white px-6 py-4 rounded-lg hover:bg-gray-600 transition-colors font-medium text-center font-heading",children:"Explore Other Languages"})]})]})})}export{G as default};
