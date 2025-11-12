import { useParams, useNavigate } from 'react-router-dom'
import { lessons, Lesson } from '../../data/lessons'
import { useProgressStore } from '../../store/progressStore'
import { useEffect, useState } from 'react'
import ProgressBar from '../ui/ProgressBar'
import CodeEditor from './CodeEditor'
import AchievementNotification from '../gamification/AchievementNotification'
import { useGamificationStore } from '../../store/gamificationStore'
import { FaLock } from 'react-icons/fa'
import LanguageLogo from '../ui/LanguageLogo'

export default function LessonView() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const navigate = useNavigate()
  const lesson = lessons.find((l) => l.id === lessonId)
  const { updateProgress, getProgress } = useProgressStore()
  const [currentProgress, setCurrentProgress] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [newlyUnlockedAchievements, setNewlyUnlockedAchievements] = useState<string[]>([])
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0)

  useEffect(() => {
    if (lesson) {
      let cancelled = false
      getProgress(lesson.id).then((progress) => {
        if (!cancelled) {
          setCurrentProgress(progress?.progress || 0)
          setCompleted(progress?.completed || false)
        }
      }).catch((error) => {
        if (!cancelled) {
          console.error('Failed to load lesson progress:', error)
        }
      })
      
      return () => {
        cancelled = true
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.id])

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold font-heading text-white mb-4">Lesson not found</h2>
          <button
            onClick={() => navigate('/study-program')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Back to Study Program
          </button>
        </div>
      </div>
    )
  }

  // Generate tasks based on lesson
  const generateTasks = () => {
    // Subject-specific content
    const subjectContent: Record<string, Array<{ id: string; title: string; description: string; code: string }>> = {
      'HTML': [
        {
          id: 'task-1',
          title: 'HTML Structure & Semantic Elements',
          description: 'Learn the basic structure of HTML documents and semantic HTML5 elements.',
          code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <header>\n    <h1>Welcome</h1>\n  </header>\n  <main>\n    <p>Content goes here</p>\n  </main>\n</body>\n</html>`,
        },
        {
          id: 'task-2',
          title: 'CSS Styling & Selectors',
          description: 'Master CSS selectors, properties, and styling techniques.',
          code: `/* CSS Selectors */\n.header {\n  background-color: #333;\n  color: white;\n  padding: 20px;\n}\n\n#main-content {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nh1:hover {\n  color: blue;\n}`,
        },
        {
          id: 'task-3',
          title: 'CSS Grid & Flexbox',
          description: 'Create responsive layouts using CSS Grid and Flexbox.',
          code: `/* Flexbox */\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* CSS Grid */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}`,
        },
        {
          id: 'task-4',
          title: 'Responsive Design',
          description: 'Build responsive websites that work on all devices using media queries.',
          code: `/* Mobile First */\n.container {\n  width: 100%;\n  padding: 10px;\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 750px;\n    margin: 0 auto;\n  }\n}`,
        },
      ],
      'JavaScript': [
        {
          id: 'task-1',
          title: 'Variables & Data Types',
          description: 'Learn how to declare variables and understand different data types in JavaScript.',
          code: `let name = "Codeverse";\nconst age = 25;\nvar isActive = true;\n\n// Data types\nconst number = 42;\nconst string = "Hello";\nconst boolean = true;\nconst array = [1, 2, 3];\nconst object = { key: "value" };`,
        },
        {
          id: 'task-2',
          title: 'Functions',
          description: 'Create and use functions to organize your code.',
          code: `function greet(name) {\n  return \`Hello, \${name}!\`;\n}\n\n// Arrow function\nconst arrow = (x) => x * 2;\n\n// Callback\nsetTimeout(() => {\n  console.log("Delayed!");\n}, 1000);`,
        },
        {
          id: 'task-3',
          title: 'Control Flow',
          description: 'Use conditionals and loops to control program flow.',
          code: `if (condition) {\n  // do something\n} else if (otherCondition) {\n  // do something else\n} else {\n  // default\n}\n\n// Loops\nfor (let i = 0; i < 10; i++) {\n  console.log(i);\n}`,
        },
        {
          id: 'task-4',
          title: 'Objects & Arrays',
          description: 'Work with objects and arrays to store and manipulate data.',
          code: `const obj = { name: "Codeverse", age: 25 };\nconst arr = [1, 2, 3];\n\n// Array methods\narr.map(x => x * 2);\narr.filter(x => x > 1);\narr.reduce((acc, x) => acc + x, 0);`,
        },
      ],
      'Python': [
        {
          id: 'task-1',
          title: 'Variables & Data Types',
          description: 'Learn Python variables and basic data types.',
          code: `name = "Codeverse"\nage = 25\nis_active = True\n\n# Data types\nnumber = 42\nstring = "Hello"\nboolean = True\nmy_list = [1, 2, 3]\nmy_dict = {"key": "value"}`,
        },
        {
          id: 'task-2',
          title: 'Functions & Control Flow',
          description: 'Create functions and use conditionals in Python.',
          code: `def greet(name):\n    return f"Hello, {name}!"\n\n# Conditionals\nif condition:\n    print("True")\nelif other_condition:\n    print("Other")\nelse:\n    print("False")`,
        },
        {
          id: 'task-3',
          title: 'Lists & Dictionaries',
          description: 'Work with Python lists and dictionaries.',
          code: `# Lists\nmy_list = [1, 2, 3, 4, 5]\nmy_list.append(6)\nmy_list[0] = 10\n\n# Dictionaries\nmy_dict = {"name": "Codeverse", "age": 25}\nmy_dict["city"] = "Tech City"`,
        },
        {
          id: 'task-4',
          title: 'Loops & List Comprehensions',
          description: 'Master Python loops and list comprehensions.',
          code: `# For loop\nfor i in range(10):\n    print(i)\n\n# List comprehension\nsquares = [x**2 for x in range(10)]\n\n# Dictionary comprehension\nsquared_dict = {x: x**2 for x in range(5)}`,
        },
      ],
      'TypeScript': [
        {
          id: 'task-1',
          title: 'Types & Interfaces',
          description: 'Learn TypeScript types and interfaces for type safety.',
          code: `// Basic types\nlet name: string = "Codeverse";\nlet age: number = 25;\nlet isActive: boolean = true;\n\n// Interface\ninterface User {\n  name: string;\n  age: number;\n  email?: string;\n}`,
        },
        {
          id: 'task-2',
          title: 'Functions & Generics',
          description: 'Create typed functions and use generics.',
          code: `function greet(name: string): string {\n  return \`Hello, \${name}!\`;\n}\n\n// Generic function\nfunction identity<T>(arg: T): T {\n  return arg;\n}`,
        },
        {
          id: 'task-3',
          title: 'Classes & Inheritance',
          description: 'Use TypeScript classes with type safety.',
          code: `class User {\n  constructor(\n    public name: string,\n    private age: number\n  ) {}\n  \n  greet(): string {\n    return \`Hello, \${this.name}!\`;\n  }\n}`,
        },
        {
          id: 'task-4',
          title: 'Advanced Types',
          description: 'Explore union types, enums, and type guards.',
          code: `// Union types\ntype Status = "active" | "inactive" | "pending";\n\n// Enum\nenum Color {\n  Red = "red",\n  Blue = "blue",\n  Green = "green"\n}\n\n// Type guard\nfunction isString(value: unknown): value is string {\n  return typeof value === "string";\n}`,
        },
      ],
      'Node.js': [
        {
          id: 'task-1',
          title: 'Modules & require()',
          description: 'Learn Node.js module system and require().',
          code: `// Import module\nconst fs = require('fs');\nconst path = require('path');\n\n// ES6 modules\nexport function greet(name) {\n  return \`Hello, \${name}!\`;\n}\n\nimport { greet } from './greet.js';`,
        },
        {
          id: 'task-2',
          title: 'File System Operations',
          description: 'Read and write files using Node.js fs module.',
          code: `const fs = require('fs').promises;\n\n// Read file\nasync function readFile() {\n  const data = await fs.readFile('file.txt', 'utf8');\n  console.log(data);\n}\n\n// Write file\nawait fs.writeFile('output.txt', 'Hello World');`,
        },
        {
          id: 'task-3',
          title: 'HTTP Server',
          description: 'Create HTTP servers with Node.js http module.',
          code: `const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello World');\n});\n\nserver.listen(3000);`,
        },
        {
          id: 'task-4',
          title: 'Express.js Basics',
          description: 'Build web applications with Express.js framework.',
          code: `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World');\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});`,
        },
      ],
      'PHP': [
        {
          id: 'task-1',
          title: 'PHP Basics & Variables',
          description: 'Learn PHP syntax and variable handling.',
          code: `<?php\n$name = "Codeverse";\n$age = 25;\n$isActive = true;\n\n// Concatenation\necho "Hello, " . $name . "!";\n\n// String interpolation\necho "Hello, {$name}!";\n?>`,
        },
        {
          id: 'task-2',
          title: 'Functions & Arrays',
          description: 'Create functions and work with arrays in PHP.',
          code: `<?php\nfunction greet($name) {\n    return "Hello, " . $name . "!";\n}\n\n// Arrays\n$fruits = ["apple", "banana", "orange"];\n$person = [\n    "name" => "Codeverse",\n    "age" => 25\n];\n?>`,
        },
        {
          id: 'task-3',
          title: 'Database Operations',
          description: 'Connect to databases and execute queries.',
          code: `<?php\n$conn = new mysqli("localhost", "user", "pass", "db");\n\n$result = $conn->query("SELECT * FROM users");\nwhile ($row = $result->fetch_assoc()) {\n    echo $row["name"];\n}\n\n$conn->close();\n?>`,
        },
        {
          id: 'task-4',
          title: 'Forms & Sessions',
          description: 'Handle form submissions and manage sessions.',
          code: `<?php\nsession_start();\n\n// Form handling\nif ($_SERVER["REQUEST_METHOD"] == "POST") {\n    $name = $_POST["name"];\n    $_SESSION["user"] = $name;\n}\n\n// Access session\necho $_SESSION["user"];\n?>`,
        },
      ],
      'Ruby': [
        {
          id: 'task-1',
          title: 'Ruby Basics',
          description: 'Learn Ruby syntax and basic concepts.',
          code: `name = "Codeverse"\nage = 25\nis_active = true\n\n# String interpolation\nputs "Hello, #{name}!"\n\n# Symbols\n:status => :active`,
        },
        {
          id: 'task-2',
          title: 'Methods & Blocks',
          description: 'Create methods and use blocks in Ruby.',
          code: `def greet(name)\n  "Hello, #{name}!"\nend\n\n# Blocks\n[1, 2, 3].each do |num|\n  puts num * 2\nend\n\n# Yield\n[1, 2, 3].map { |x| x * 2 }`,
        },
        {
          id: 'task-3',
          title: 'Classes & Modules',
          description: 'Work with Ruby classes and modules.',
          code: `class User\n  attr_accessor :name, :age\n  \n  def initialize(name, age)\n    @name = name\n    @age = age\n  end\n  \n  def greet\n    "Hello, #{@name}!"\n  end\nend`,
        },
        {
          id: 'task-4',
          title: 'Hashes & Arrays',
          description: 'Master Ruby hashes and arrays.',
          code: `# Arrays\nfruits = ["apple", "banana", "orange"]\nfruits << "grape"\n\n# Hashes\nperson = {\n  name: "Codeverse",\n  age: 25\n}\n\nperson[:city] = "Tech City"`,
        },
      ],
      'Swift': [
        {
          id: 'task-1',
          title: 'Swift Basics',
          description: 'Learn Swift variables and constants.',
          code: `var name = "Codeverse"\nlet age = 25\nvar isActive = true\n\n// Type annotation\nvar count: Int = 10\nvar message: String = "Hello"`,
        },
        {
          id: 'task-2',
          title: 'Optionals & Unwrapping',
          description: 'Master Swift optionals and safe unwrapping.',
          code: `var optionalName: String? = "Codeverse"\n\n// Optional binding\nif let name = optionalName {\n    print(name)\n}\n\n// Guard statement\nguard let name = optionalName else { return }`,
        },
        {
          id: 'task-3',
          title: 'Functions & Closures',
          description: 'Create functions and use closures in Swift.',
          code: `func greet(name: String) -> String {\n    return "Hello, \\(name)!"\n}\n\n// Closure\nlet multiply = { (x: Int, y: Int) -> Int in\n    return x * y\n}`,
        },
        {
          id: 'task-4',
          title: 'Structs & Classes',
          description: 'Work with Swift structs and classes.',
          code: `struct User {\n    var name: String\n    let age: Int\n    \n    func greet() -> String {\n        return "Hello, \\(name)!"\n    }\n}\n\nlet user = User(name: "Codeverse", age: 25)`,
        },
      ],
      'Kotlin': [
        {
          id: 'task-1',
          title: 'Kotlin Basics',
          description: 'Learn Kotlin variables and data types.',
          code: `var name = "Codeverse"\nval age = 25\nvar isActive = true\n\n// Type annotation\nval count: Int = 10\nval message: String = "Hello"`,
        },
        {
          id: 'task-2',
          title: 'Null Safety',
          description: 'Master Kotlin null safety features.',
          code: `var name: String? = "Codeverse"\n\n// Safe call\nval length = name?.length\n\n// Elvis operator\nval displayName = name ?: "Unknown"\n\n// Not-null assertion\nval length2 = name!!.length`,
        },
        {
          id: 'task-3',
          title: 'Functions & Lambdas',
          description: 'Create functions and use lambdas.',
          code: `fun greet(name: String): String {\n    return "Hello, $name!"\n}\n\n// Lambda\nval multiply = { x: Int, y: Int -> x * y }\n\n// Higher-order function\nlistOf(1, 2, 3).map { it * 2 }`,
        },
        {
          id: 'task-4',
          title: 'Data Classes & Sealed Classes',
          description: 'Work with Kotlin data classes.',
          code: `data class User(\n    val name: String,\n    val age: Int\n)\n\nval user = User("Codeverse", 25)\nval (name, age) = user // Destructuring`,
        },
      ],
      'C#': [
        {
          id: 'task-1',
          title: 'C# Basics',
          description: 'Learn C# variables and data types.',
          code: `string name = "Codeverse";\nint age = 25;\nbool isActive = true;\n\n// Type inference\nvar count = 10;\nvar message = "Hello";`,
        },
        {
          id: 'task-2',
          title: 'Classes & Objects',
          description: 'Create classes and objects in C#.',
          code: `public class User\n{\n    public string Name { get; set; }\n    public int Age { get; set; }\n    \n    public string Greet()\n    {\n        return $"Hello, {Name}!";\n    }\n}`,
        },
        {
          id: 'task-3',
          title: 'LINQ & Collections',
          description: 'Use LINQ to query collections.',
          code: `var numbers = new List<int> { 1, 2, 3, 4, 5 };\n\nvar evens = numbers.Where(n => n % 2 == 0);\nvar doubled = numbers.Select(n => n * 2);\nvar sum = numbers.Sum();`,
        },
        {
          id: 'task-4',
          title: 'Async/Await',
          description: 'Work with asynchronous programming.',
          code: `async Task<string> GetDataAsync()\n{\n    await Task.Delay(1000);\n    return "Data loaded";\n}\n\n// Usage\nvar data = await GetDataAsync();`,
        },
      ],
      'C': [
        {
          id: 'task-1',
          title: 'C Basics & Pointers',
          description: 'Learn C syntax and pointer basics.',
          code: `#include <stdio.h>\n\nint main() {\n    int age = 25;\n    int *ptr = &age;\n    \n    printf("Age: %d\\n", age);\n    printf("Pointer: %p\\n", ptr);\n    \n    return 0;\n}`,
        },
        {
          id: 'task-2',
          title: 'Arrays & Strings',
          description: 'Work with arrays and strings in C.',
          code: `int numbers[5] = {1, 2, 3, 4, 5};\nchar name[] = "Codeverse";\n\n// String functions\n#include <string.h>\nint len = strlen(name);\nstrcpy(dest, name);`,
        },
        {
          id: 'task-3',
          title: 'Functions & Memory',
          description: 'Create functions and manage memory.',
          code: `int add(int a, int b) {\n    return a + b;\n}\n\n// Memory allocation\nint *arr = malloc(10 * sizeof(int));\nfree(arr);`,
        },
        {
          id: 'task-4',
          title: 'Structures & File I/O',
          description: 'Work with structures and file operations.',
          code: `struct User {\n    char name[50];\n    int age;\n};\n\n// File I/O\nFILE *file = fopen("data.txt", "r");\nfclose(file);`,
        },
      ],
      'C++': [
        {
          id: 'task-1',
          title: 'C++ Basics & Classes',
          description: 'Learn C++ syntax and classes.',
          code: `#include <iostream>\nusing namespace std;\n\nclass User {\nprivate:\n    string name;\n    int age;\npublic:\n    User(string n, int a) : name(n), age(a) {}\n    void greet() { cout << "Hello, " << name << "!"; }\n};`,
        },
        {
          id: 'task-2',
          title: 'Templates & STL',
          description: 'Use templates and STL containers.',
          code: `template<typename T>\nT add(T a, T b) {\n    return a + b;\n}\n\n// STL\n#include <vector>\nvector<int> numbers = {1, 2, 3, 4, 5};`,
        },
        {
          id: 'task-3',
          title: 'Pointers & References',
          description: 'Master pointers and references.',
          code: `int value = 10;\nint *ptr = &value;\nint &ref = value;\n\n*ptr = 20;  // Changes value\nref = 30;   // Also changes value`,
        },
        {
          id: 'task-4',
          title: 'Inheritance & Polymorphism',
          description: 'Use inheritance and polymorphism.',
          code: `class Animal {\npublic:\n    virtual void speak() = 0;\n};\n\nclass Dog : public Animal {\npublic:\n    void speak() override { cout << "Woof!"; }\n};`,
        },
      ],
      'Go': [
        {
          id: 'task-1',
          title: 'Go Basics',
          description: 'Learn Go syntax and basic concepts.',
          code: `package main\n\nimport "fmt"\n\nfunc main() {\n    name := "Codeverse"\n    age := 25\n    \n    fmt.Printf("Hello, %s! Age: %d\\n", name, age)\n}`,
        },
        {
          id: 'task-2',
          title: 'Functions & Methods',
          description: 'Create functions and methods in Go.',
          code: `func greet(name string) string {\n    return fmt.Sprintf("Hello, %s!", name)\n}\n\ntype User struct {\n    Name string\n    Age  int\n}\n\nfunc (u User) Greet() string {\n    return fmt.Sprintf("Hello, %s!", u.Name)\n}`,
        },
        {
          id: 'task-3',
          title: 'Goroutines & Channels',
          description: 'Use goroutines and channels for concurrency.',
          code: `go func() {\n    fmt.Println("Running in goroutine")\n}()\n\nch := make(chan string)\ngo func() {\n    ch <- "Hello"\n}()\nmsg := <-ch`,
        },
        {
          id: 'task-4',
          title: 'Interfaces & Error Handling',
          description: 'Work with interfaces and error handling.',
          code: `type Greeter interface {\n    Greet() string\n}\n\nfunc greet(g Greeter) {\n    fmt.Println(g.Greet())\n}\n\n// Error handling\nresult, err := doSomething()\nif err != nil {\n    log.Fatal(err)\n}`,
        },
      ],
      'Rust': [
        {
          id: 'task-1',
          title: 'Rust Basics & Ownership',
          description: 'Learn Rust syntax and ownership system.',
          code: `let name = String::from("Codeverse");\nlet age = 25;\n\n// Ownership\nlet s1 = String::from("hello");\nlet s2 = s1; // s1 moved to s2\n// println!("{}", s1); // Error!`,
        },
        {
          id: 'task-2',
          title: 'Borrowing & References',
          description: 'Master borrowing and references in Rust.',
          code: `fn calculate_length(s: &String) -> usize {\n    s.len()\n}\n\nlet s = String::from("hello");\nlet len = calculate_length(&s);\nprintln!("{}", s); // Still valid`,
        },
        {
          id: 'task-3',
          title: 'Structs & Enums',
          description: 'Work with structs and enums.',
          code: `struct User {\n    name: String,\n    age: u32,\n}\n\nenum Status {\n    Active,\n    Inactive,\n    Pending,\n}`,
        },
        {
          id: 'task-4',
          title: 'Error Handling & Result',
          description: 'Handle errors using Result type.',
          code: `fn divide(a: f64, b: f64) -> Result<f64, String> {\n    if b == 0.0 {\n        Err(String::from("Division by zero"))\n    } else {\n        Ok(a / b)\n    }\n}\n\nmatch divide(10.0, 2.0) {\n    Ok(result) => println!("{}", result),\n    Err(e) => println!("Error: {}", e),\n}`,
        },
      ],
      'Java': [
        {
          id: 'task-1',
          title: 'Java Basics & Classes',
          description: 'Learn Java syntax and classes.',
          code: `public class User {\n    private String name;\n    private int age;\n    \n    public User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public String greet() {\n        return "Hello, " + name + "!";\n    }\n}`,
        },
        {
          id: 'task-2',
          title: 'Inheritance & Polymorphism',
          description: 'Use inheritance and polymorphism.',
          code: `class Animal {\n    public void speak() {\n        System.out.println("Some sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    public void speak() {\n        System.out.println("Woof!");\n    }\n}`,
        },
        {
          id: 'task-3',
          title: 'Collections & Generics',
          description: 'Work with Java collections.',
          code: `List<String> names = new ArrayList<>();\nnames.add("Codeverse");\nnames.add("Java");\n\nMap<String, Integer> ages = new HashMap<>();\nages.put("Codeverse", 25);`,
        },
        {
          id: 'task-4',
          title: 'Exceptions & Streams',
          description: 'Handle exceptions and use streams.',
          code: `try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Error: " + e.getMessage());\n}\n\n// Streams\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nnumbers.stream()\n    .filter(n -> n % 2 == 0)\n    .forEach(System.out::println);`,
        },
      ],
    }

    // Return subject-specific content or fallback to generic
    if (subjectContent[lesson.subject]) {
      return subjectContent[lesson.subject]
    }

    // Generic fallback
    return [
      {
        id: 'task-1',
        title: 'Introduction',
        description: `Welcome to ${lesson.title}! Let's start with the basics.`,
        code: `// ${lesson.subject} Basics\n// Start learning ${lesson.subject} here!`,
      },
      {
        id: 'task-2',
        title: 'Core Concepts',
        description: 'Learn the fundamental concepts of this language.',
        code: `// Core concepts in ${lesson.subject}\n// Explore the key features`,
      },
      {
        id: 'task-3',
        title: 'Practice Exercise',
        description: 'Apply what you\'ve learned in a hands-on exercise.',
        code: `// Your ${lesson.subject} code here\n// Practice makes perfect!`,
      },
      {
        id: 'task-4',
        title: 'Advanced Topics',
        description: 'Explore more advanced features and patterns.',
        code: `// Advanced ${lesson.subject} patterns\n// Take your skills to the next level`,
      },
    ]
  }


  const handleComplete = async () => {
    if (completed) return // Already completed
    
    setCurrentProgress(100)
    setCompleted(true)
    
    // Update progress (this triggers achievement checking in progressStore)
    await updateProgress(lesson.id, 100, true)
    
    // Check for newly unlocked achievements
    const gamificationStore = useGamificationStore.getState()
    const newlyUnlocked = await gamificationStore.checkAndUnlockAchievements()
    
    // Trigger celebration for lesson completion
    const { celebrateLessonCompletion } = await import('../../utils/celebration')
    celebrateLessonCompletion()
    
    // Show achievement notifications
    if (newlyUnlocked.length > 0) {
      setNewlyUnlockedAchievements(newlyUnlocked)
      setCurrentNotificationIndex(0)
      
      // Celebrate each achievement based on rarity
      const { celebrateAchievement } = await import('../../utils/celebration')
      const { getAchievementById } = await import('../../data/achievements')
      
      newlyUnlocked.forEach((achievementId) => {
        const achievement = getAchievementById(achievementId)
        if (achievement) {
          celebrateAchievement(achievement.rarity)
        }
      })
    }
  }

  // Get next lesson in the same language
  const getNextLesson = (): Lesson | null => {
    if (!lesson) return null
    
    const languageLessons = lessons
      .filter((l) => l.subject === lesson.subject && (l.order ?? 0) > 0)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    
    const currentIndex = languageLessons.findIndex((l) => l.id === lesson.id)
    if (currentIndex >= 0 && currentIndex < languageLessons.length - 1) {
      return languageLessons[currentIndex + 1]
    }
    return null
  }

  // Get previous lesson in the same language
  const getPreviousLesson = (): Lesson | null => {
    if (!lesson) return null
    
    const languageLessons = lessons
      .filter((l) => l.subject === lesson.subject && (l.order ?? 0) > 0)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    
    const currentIndex = languageLessons.findIndex((l) => l.id === lesson.id)
    if (currentIndex > 0) {
      return languageLessons[currentIndex - 1]
    }
    return null
  }

  // Check if previous lesson is completed (required to access current lesson)
  const [canAccess, setCanAccess] = useState(true)
  useEffect(() => {
    const checkAccess = async () => {
      if (!lesson || !lesson.order || lesson.order === 1) {
        setCanAccess(true)
        return
      }
      
      const previousLesson = getPreviousLesson()
      if (previousLesson) {
        const prevProgress = await getProgress(previousLesson.id)
        setCanAccess(prevProgress?.completed || false)
      } else {
        setCanAccess(true)
      }
    }
    checkAccess()
  }, [lesson, getProgress])

  // Transform ES6 module syntax to executable code
  const transformES6Modules = (code: string): string => {
    let transformed = code

    // Handle import React from 'react' -> const React = mock object
    transformed = transformed.replace(/import\s+React\s+from\s+['"]react['"];?/g, 
      'const React = { createElement: () => ({}), Fragment: () => ({}) };')
    
    // Handle import { useState, useEffect } from 'react' -> extract hooks
    transformed = transformed.replace(/import\s*{\s*([^}]+)\s*}\s+from\s+['"]react['"];?/g, 
      (match, imports) => {
        const importList = imports.split(',').map((i: string) => i.trim())
        const hookDeclarations = importList.map((hook: string) => {
          if (hook === 'useState') return 'const useState = (initial) => { let state = initial; const setState = (newState) => { state = typeof newState === "function" ? newState(state) : newState }; return [state, setState]; };'
          if (hook === 'useEffect') return 'const useEffect = () => {};'
          if (hook === 'useRef') return 'const useRef = (initial) => ({ current: initial });'
          if (hook === 'useContext') return 'const useContext = () => null;'
          if (hook === 'useReducer') return 'const useReducer = () => [null, () => {}];'
          if (hook === 'useMemo') return 'const useMemo = (fn) => fn();'
          if (hook === 'useCallback') return 'const useCallback = (fn) => fn;'
          if (hook === 'useLayoutEffect') return 'const useLayoutEffect = () => {};'
          if (hook === 'useImperativeHandle') return 'const useImperativeHandle = () => {};'
          if (hook === 'useDebugValue') return 'const useDebugValue = () => {};'
          return `const ${hook} = () => {};`
        }).join('\n')
        return hookDeclarations
      })
    
    // Handle combined import: import React, { useState } from 'react'
    transformed = transformed.replace(/import\s+React\s*,\s*{\s*([^}]+)\s*}\s+from\s+['"]react['"];?/g,
      (match, imports) => {
        const importList = imports.split(',').map((i: string) => i.trim())
        const hookDeclarations = importList.map((hook: string) => {
          if (hook === 'useState') return 'const useState = (initial) => { let state = initial; const setState = (newState) => { state = typeof newState === "function" ? newState(state) : newState }; return [state, setState]; };'
          if (hook === 'useEffect') return 'const useEffect = () => {};'
          if (hook === 'useRef') return 'const useRef = (initial) => ({ current: initial });'
          return `const ${hook} = () => {};`
        }).join('\n')
        return 'const React = { createElement: () => ({}), Fragment: () => ({}) };\n' + hookDeclarations
      })
    
    // import Something from 'module' -> const Something = {}
    transformed = transformed.replace(/import\s+(\w+)\s+from\s+['"][^'"]+['"];?/g, 
      'const $1 = {};')
    
    // import * as Something from 'module' -> const Something = {}
    transformed = transformed.replace(/import\s+\*\s+as\s+(\w+)\s+from\s+['"][^'"]+['"];?/g, 
      'const $1 = {};')
    
    // Handle export default - transform to assignment so component is accessible
    // export default ComponentName -> ComponentName is already defined, just make it global
    transformed = transformed.replace(/export\s+default\s+(\w+);?/g, 
      (match, componentName) => {
        // Make component available globally for test code
        return `if (typeof ${componentName} !== 'undefined') { window.${componentName} = ${componentName}; }`
      })
    
    // Handle named exports - remove export keyword but keep declaration
    transformed = transformed.replace(/export\s+(const|let|var|function|class)\s+/g, '$1 ')
    transformed = transformed.replace(/export\s*{\s*([^}]+)\s*};?/g, '')
    
    return transformed
  }

  // Validate code
  const validateCode = async (code: string): Promise<{ isValid: boolean; error?: string }> => {
    if (!lesson?.challenge) {
      return { isValid: false, error: 'No challenge available for this lesson' }
    }

    try {
      // Capture console output
      let consoleOutput = ''
      const originalLog = console.log
      console.log = (...args: any[]) => {
        consoleOutput += args.map(arg => String(arg)).join(' ') + '\n'
        originalLog(...args)
      }

      // Execute user code in a safe context
      if (lesson.challenge.language === 'javascript') {
        // First, clear console output
        consoleOutput = ''
        
        // Check if code contains ES6 module syntax (import/export)
        const hasES6Modules = /import\s+.*from|export\s+(default|{)/.test(code)
        const transformedCode = hasES6Modules ? transformES6Modules(code) : code
        
        // Execute user code to capture console output
        try {
          const func = new Function(transformedCode)
          func()
        } catch (e) {
          // If execution fails due to module syntax, try transformed version
          if (hasES6Modules && e instanceof SyntaxError && e.message.includes('import')) {
            // Already transformed, so this is a different error
            throw e
          }
        }
        
        // Store the console output from user code
        const userCodeOutput = consoleOutput.trim()

        // Run test code if available - test code should have access to variables from user code
        if (lesson.challenge.testCode) {
          // Combine user code and test code so test code can access user's variables
          // We need to prevent user code from running again, so we'll wrap it to suppress console.log
          // Replace all console.log in user code with a no-op during test execution
          const userCodeWithoutLogs = transformedCode.replace(/console\.log\(/g, '// Suppressed: console.log(')
          const testCodeWithoutLogs = lesson.challenge.testCode.replace(/console\.log\(/g, '// console.log(')
          const combinedCode = userCodeWithoutLogs + '\n\n' + testCodeWithoutLogs
          
          // Execute combined code (user code runs but console.log is suppressed, test code runs normally)
          const testFunc = new Function(combinedCode)
          testFunc()
        }

        // If we have test code, it's the primary validation method (more flexible)
        if (lesson.challenge.testCode) {
          // Test code passed (no errors thrown), so validation is successful
          // Expected output is optional when test code exists
          await handleComplete()
          return { isValid: true }
        }

        // If no test code, check expected output (fallback validation)
        if (lesson.challenge.expectedOutput) {
          const expected = lesson.challenge.expectedOutput.trim()
          const actual = userCodeOutput
          
          // Flexible comparison: check if output contains expected lines (order doesn't matter)
          const expectedLines = expected.split('\n').filter(line => line.trim() !== '')
          const actualLines = actual.split('\n').filter(line => line.trim() !== '')
          
          // Check if all expected lines are present in actual output
          const allLinesPresent = expectedLines.every(expectedLine => 
            actualLines.some(actualLine => actualLine.trim() === expectedLine.trim())
          )
          
          if (!allLinesPresent && actual !== expected) {
            return {
              isValid: false,
              error: `Expected output should contain:\n${expected}\n\nGot:\n${actual}`,
            }
          }
          
          await handleComplete()
          return { isValid: true }
        }

        // If no validation method, just check that code executed without errors
        await handleComplete()
        return { isValid: true }
      } else if (lesson.challenge.language === 'html') {
        // For HTML, check if the code is valid
        const parser = new DOMParser()
        const doc = parser.parseFromString(code, 'text/html')
        
        if (lesson.challenge.testCode) {
          // Run test code in context with the parsed document
          const testFunc = new Function('doc', 'code', lesson.challenge.testCode)
          testFunc(doc, code)
        }
        
        await handleComplete()
        return { isValid: true }
      } else if (lesson.challenge.language === 'css') {
        // For CSS, flexible validation
        if (lesson.challenge.testCode) {
          const testFunc = new Function('code', lesson.challenge.testCode)
          testFunc(code)
        }
        
        await handleComplete()
        return { isValid: true }
      } else if (lesson.challenge.language === 'python') {
        // For Python, we need to parse Python syntax and validate it
        // Since we can't execute Python directly, we'll parse the code and validate structure
        
        try {
          // Parse Python code to extract variables
          const pythonVars: Record<string, any> = {}
          const lines = code.split('\n')
          
          for (const line of lines) {
            const trimmed = line.trim()
            // Skip comments and empty lines
            if (!trimmed || trimmed.startsWith('#')) continue
            
            // Skip print statements
            if (trimmed.startsWith('print(')) continue
            
            // Parse variable assignments: name = value
            const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+)$/)
            if (assignMatch) {
              const varName = assignMatch[1]
              let varValue = assignMatch[2].trim()
              
              // Remove trailing comments
              if (varValue.includes('#')) {
                varValue = varValue.split('#')[0].trim()
              }
              
              // Parse Python values
              if (varValue === 'True') {
                pythonVars[varName] = true
              } else if (varValue === 'False') {
                pythonVars[varName] = false
              } else if (varValue === 'None') {
                pythonVars[varName] = null
              } else if (varValue.startsWith('"') || varValue.startsWith("'")) {
                // String - remove quotes
                pythonVars[varName] = varValue.slice(1, -1)
              } else if (/^-?\d+$/.test(varValue)) {
                // Integer
                pythonVars[varName] = parseInt(varValue, 10)
              } else if (/^-?\d+\.\d+$/.test(varValue)) {
                // Float
                pythonVars[varName] = parseFloat(varValue)
              } else {
                // Unknown type, store as string for now
                pythonVars[varName] = varValue
              }
            }
          }
          
          // Validate using testCode if available
          if (lesson.challenge.testCode) {
            // Convert Python testCode to JavaScript validation
            const testCode = lesson.challenge.testCode
            
            // Check for name variable (string)
            if (testCode.includes("isinstance(name, str)") || testCode.includes("name must be a string")) {
              if (!pythonVars.name || typeof pythonVars.name !== 'string') {
                return {
                  isValid: false,
                  error: 'name must be a string (text)',
                }
              }
              if (pythonVars.name === '') {
                return {
                  isValid: false,
                  error: 'name must have a value',
                }
              }
            }
            
            // Check for age variable (integer)
            if (testCode.includes("isinstance(age, int)") || testCode.includes("age must be an integer")) {
              if (!pythonVars.age || typeof pythonVars.age !== 'number' || !Number.isInteger(pythonVars.age)) {
                return {
                  isValid: false,
                  error: 'age must be an integer (whole number)',
                }
              }
            }
            
            // Check for is_active variable (boolean)
            if (testCode.includes("isinstance(is_active, bool)") || testCode.includes("is_active must be a boolean")) {
              if (pythonVars.is_active === undefined || typeof pythonVars.is_active !== 'boolean') {
                return {
                  isValid: false,
                  error: 'is_active must be a boolean (True or False)',
                }
              }
            }
            
            // Generic validation: check for any variable type checks in testCode
            const typeChecks = testCode.match(/isinstance\((\w+),\s*(\w+)\)/g)
            if (typeChecks) {
              for (const check of typeChecks) {
                const match = check.match(/isinstance\((\w+),\s*(\w+)\)/)
                if (match) {
                  const varName = match[1]
                  const expectedType = match[2]
                  
                  if (!pythonVars[varName]) {
                    return {
                      isValid: false,
                      error: `${varName} must be defined`,
                    }
                  }
                  
                  // Map Python types to JavaScript types
                  const typeMap: Record<string, string> = {
                    'str': 'string',
                    'int': 'number',
                    'float': 'number',
                    'bool': 'boolean',
                  }
                  
                  const jsType = typeMap[expectedType]
                  if (jsType && typeof pythonVars[varName] !== jsType) {
                    return {
                      isValid: false,
                      error: `${varName} must be a ${expectedType}`,
                    }
                  }
                }
              }
            }
          }
          
          await handleComplete()
          return { isValid: true }
        } catch (error) {
          return {
            isValid: false,
            error: error instanceof Error ? error.message : 'Python code validation failed',
          }
        }
      } else if (lesson.challenge.language === 'typescript') {
        // TypeScript is compiled to JavaScript, so validate it similarly
        // First, clear console output
        consoleOutput = ''
        
        // Execute user code to capture console output
        const func = new Function(code)
        func()
        
        // Store the console output from user code
        const userCodeOutput = consoleOutput.trim()

        // Run test code if available - test code should have access to variables from user code
        if (lesson.challenge.testCode) {
          // Combine user code and test code so test code can access user's variables
          const userCodeWithoutLogs = code.replace(/console\.log\(/g, '// Suppressed: console.log(')
          const testCodeWithoutLogs = lesson.challenge.testCode.replace(/console\.log\(/g, '// console.log(')
          const combinedCode = userCodeWithoutLogs + '\n\n' + testCodeWithoutLogs
          
          // Execute combined code (user code runs but console.log is suppressed, test code runs normally)
          const testFunc = new Function(combinedCode)
          testFunc()
        }

        // If we have test code, it's the primary validation (most flexible)
        if (lesson.challenge.testCode) {
          await handleComplete()
          return { isValid: true }
        }

        // Fallback to flexible expected output check
        if (lesson.challenge.expectedOutput) {
          const expected = lesson.challenge.expectedOutput.trim()
          const actual = userCodeOutput
          
          // Flexible comparison: check if output contains expected lines
          const expectedLines = expected.split('\n').filter(line => line.trim() !== '')
          const actualLines = actual.split('\n').filter(line => line.trim() !== '')
          
          const allLinesPresent = expectedLines.every(expectedLine => 
            actualLines.some(actualLine => actualLine.trim() === expectedLine.trim())
          )
          
          if (!allLinesPresent && actual !== expected) {
            return {
              isValid: false,
              error: `Expected output should contain:\n${expected}\n\nGot:\n${actual}`,
            }
          }
        }

        await handleComplete()
        return { isValid: true }
      } else if (lesson.challenge.language === 'ruby') {
        // For Ruby, parse Ruby syntax and validate it (similar to Python)
        try {
          const rubyVars: Record<string, any> = {}
          const lines = code.split('\n')
          
          for (const line of lines) {
            const trimmed = line.trim()
            if (!trimmed || trimmed.startsWith('#')) continue
            if (trimmed.startsWith('puts') || trimmed.startsWith('print')) continue
            
            // Parse variable assignments: name = value
            const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+)$/)
            if (assignMatch) {
              const varName = assignMatch[1]
              let varValue = assignMatch[2].trim()
              
              if (varValue.includes('#')) {
                varValue = varValue.split('#')[0].trim()
              }
              
              // Parse Ruby values
              if (varValue === 'true') {
                rubyVars[varName] = true
              } else if (varValue === 'false') {
                rubyVars[varName] = false
              } else if (varValue === 'nil') {
                rubyVars[varName] = null
              } else if (varValue.startsWith('"') || varValue.startsWith("'")) {
                rubyVars[varName] = varValue.slice(1, -1)
              } else if (/^-?\d+$/.test(varValue)) {
                rubyVars[varName] = parseInt(varValue, 10)
              } else if (/^-?\d+\.\d+$/.test(varValue)) {
                rubyVars[varName] = parseFloat(varValue)
              } else {
                rubyVars[varName] = varValue
              }
            }
          }
          
          // Validate using testCode
          if (lesson.challenge.testCode) {
            const testCode = lesson.challenge.testCode
            
            // Check for variable type checks
            if (testCode.includes('is_a?(String)') || testCode.includes('name must be a string')) {
              if (!rubyVars.name || typeof rubyVars.name !== 'string') {
                return { isValid: false, error: 'name must be a string' }
              }
              if (rubyVars.name === '') {
                return { isValid: false, error: 'name must have a value' }
              }
            }
            
            if (testCode.includes('is_a?(Integer)') || testCode.includes('age must be an integer')) {
              if (!rubyVars.age || typeof rubyVars.age !== 'number' || !Number.isInteger(rubyVars.age)) {
                return { isValid: false, error: 'age must be an integer' }
              }
            }
            
            if (testCode.includes('is_a?(TrueClass)') || testCode.includes('is_a?(FalseClass)') || testCode.includes('is_active must be a boolean')) {
              if (rubyVars.is_active === undefined || typeof rubyVars.is_active !== 'boolean') {
                return { isValid: false, error: 'is_active must be a boolean (true or false)' }
              }
            }
          }
          
          await handleComplete()
          return { isValid: true }
        } catch (error) {
          return {
            isValid: false,
            error: error instanceof Error ? error.message : 'Ruby code validation failed',
          }
        }
      } else if (lesson.challenge.language === 'php') {
        // For PHP, parse PHP syntax and validate it
        try {
          const phpVars: Record<string, any> = {}
          const lines = code.split('\n')
          
          for (const line of lines) {
            const trimmed = line.trim()
            if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('<?php') || trimmed.startsWith('?>')) continue
            if (trimmed.startsWith('echo') || trimmed.startsWith('print')) continue
            
            // Parse variable assignments: $name = value
            const assignMatch = trimmed.match(/^\$(\w+)\s*=\s*(.+);?$/)
            if (assignMatch) {
              const varName = assignMatch[1]
              let varValue = assignMatch[2].trim().replace(/;$/, '')
              
              if (varValue.includes('//')) {
                varValue = varValue.split('//')[0].trim()
              }
              
              // Parse PHP values
              if (varValue === 'true') {
                phpVars[varName] = true
              } else if (varValue === 'false') {
                phpVars[varName] = false
              } else if (varValue === 'null') {
                phpVars[varName] = null
              } else if (varValue.startsWith('"') || varValue.startsWith("'")) {
                phpVars[varName] = varValue.slice(1, -1)
              } else if (/^-?\d+$/.test(varValue)) {
                phpVars[varName] = parseInt(varValue, 10)
              } else if (/^-?\d+\.\d+$/.test(varValue)) {
                phpVars[varName] = parseFloat(varValue)
              } else {
                phpVars[varName] = varValue
              }
            }
          }
          
          // Validate using testCode
          if (lesson.challenge.testCode) {
            const testCode = lesson.challenge.testCode
            
            if (testCode.includes('is_string') || testCode.includes('name must be a string')) {
              if (!phpVars.name || typeof phpVars.name !== 'string') {
                return { isValid: false, error: '$name must be a string' }
              }
              if (phpVars.name === '') {
                return { isValid: false, error: '$name must have a value' }
              }
            }
            
            if (testCode.includes('is_int') || testCode.includes('age must be an integer')) {
              if (!phpVars.age || typeof phpVars.age !== 'number' || !Number.isInteger(phpVars.age)) {
                return { isValid: false, error: '$age must be an integer' }
              }
            }
            
            if (testCode.includes('is_bool') || testCode.includes('isActive must be a boolean')) {
              if (phpVars.isActive === undefined || typeof phpVars.isActive !== 'boolean') {
                return { isValid: false, error: '$isActive must be a boolean' }
              }
            }
          }
          
          await handleComplete()
          return { isValid: true }
        } catch (error) {
          return {
            isValid: false,
            error: error instanceof Error ? error.message : 'PHP code validation failed',
          }
        }
      } else {
        // Default flexible validation for all other languages (React, Node.js, Swift, Kotlin, C++, Go, Rust, C, Java, C#, etc.)
        // Most languages can be validated as JavaScript-like code or through testCode
        
        // Try to execute as JavaScript-like code if possible
        try {
          // First, clear console output
          consoleOutput = ''
          
          // Check if code contains ES6 module syntax (import/export)
          const hasES6Modules = /import\s+.*from|export\s+(default|{)/.test(code)
          const transformedCode = hasES6Modules ? transformES6Modules(code) : code
          
          // Try executing the code (works for JS-like languages)
          try {
            const func = new Function(transformedCode)
            func()
          } catch (e) {
            // If execution fails, that's okay - we'll rely on testCode
          }
          
          const userCodeOutput = consoleOutput.trim()

          // Test code is primary validation (most flexible)
          if (lesson.challenge.testCode) {
            // Try to combine user code and test code
            try {
              const userCodeWithoutLogs = transformedCode.replace(/console\.log\(/g, '// Suppressed: console.log(')
              const testCodeWithoutLogs = lesson.challenge.testCode.replace(/console\.log\(/g, '// console.log(')
              const combinedCode = userCodeWithoutLogs + '\n\n' + testCodeWithoutLogs
              const testFunc = new Function(combinedCode)
              testFunc()
            } catch (e) {
              // If combining fails, try test code alone with code as parameter
              try {
                const testFunc = new Function('code', lesson.challenge.testCode)
                testFunc(code)
              } catch (e2) {
                // If that fails, try test code alone
                const testFunc = new Function(lesson.challenge.testCode)
                testFunc()
              }
            }
            
            await handleComplete()
            return { isValid: true }
          }

          // Fallback to flexible expected output check
          if (lesson.challenge.expectedOutput) {
            const expected = lesson.challenge.expectedOutput.trim()
            const actual = userCodeOutput
            
            // Flexible comparison: check if output contains expected lines
            const expectedLines = expected.split('\n').filter(line => line.trim() !== '')
            const actualLines = actual.split('\n').filter(line => line.trim() !== '')
            
            const allLinesPresent = expectedLines.every(expectedLine => 
              actualLines.some(actualLine => actualLine.trim() === expectedLine.trim())
            )
            
            if (!allLinesPresent && actual !== expected) {
              return {
                isValid: false,
                error: `Expected output should contain:\n${expected}\n\nGot:\n${actual}`,
              }
            }
          }

          // If no validation method, just check that code executed without errors
          await handleComplete()
          return { isValid: true }
        } catch (error) {
          // If execution fails completely, still try testCode if available
          if (lesson.challenge.testCode) {
            try {
              const testFunc = new Function('code', lesson.challenge.testCode)
              testFunc(code)
              await handleComplete()
              return { isValid: true }
            } catch (e) {
              return {
                isValid: false,
                error: error instanceof Error ? error.message : 'Code validation failed',
              }
            }
          }
          
          return {
            isValid: false,
            error: error instanceof Error ? error.message : 'Code execution failed',
          }
        }
      }

      // Restore console.log
      console.log = originalLog

      return { isValid: false, error: 'Code validation failed. Please check your solution.' }
    } catch (error) {
      return {
        isValid: false,
        error: error instanceof Error ? error.message : 'Code execution failed',
      }
    }
  }

  const nextLesson = getNextLesson()
  const previousLesson = getPreviousLesson()

  // If lesson requires previous completion and user can't access it
  if (!canAccess && lesson && lesson.order && lesson.order > 1) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center max-w-md">
          <FaLock className="text-6xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold font-heading text-white mb-4">Lesson Locked</h2>
          <p className="text-gray-400 font-body mb-6">
            You must complete the previous lesson before accessing this one.
          </p>
          {previousLesson && (
            <button
              onClick={() => navigate(`/lesson/${previousLesson.id}`)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium"
            >
              Go to Previous Lesson
            </button>
          )}
        </div>
      </div>
    )
  }

  // Handle achievement notification close
  const handleNotificationClose = () => {
    if (currentNotificationIndex < newlyUnlockedAchievements.length - 1) {
      setCurrentNotificationIndex(currentNotificationIndex + 1)
    } else {
      setNewlyUnlockedAchievements([])
      setCurrentNotificationIndex(0)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Achievement Notifications */}
      {newlyUnlockedAchievements.length > 0 && (
        <AchievementNotification
          achievementId={newlyUnlockedAchievements[currentNotificationIndex]}
          onClose={handleNotificationClose}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lesson Header */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <LanguageLogo languageName={lesson.subject} size={32} />
                <h1 className="text-3xl font-bold font-heading text-white">{lesson.title}</h1>
              </div>
              <p className="text-gray-400 font-body">{lesson.description}</p>
            </div>
            <button
              onClick={() => navigate('/study-program')}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Study Program
            </button>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-300 font-code">Progress</span>
              <span className="text-sm text-indigo-400 font-code font-bold">{currentProgress}%</span>
            </div>
            <ProgressBar 
              lessonId={lesson.id} 
              progress={currentProgress}
              completed={completed}
            />
          </div>
        </div>

        {/* Code Challenge Section */}
        {lesson.challenge ? (
          <div className="space-y-6 mb-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold font-heading text-white mb-4">
                {lesson.challenge.title}
              </h2>
              <p className="text-gray-400 font-body mb-6">{lesson.challenge.description}</p>
              
              {/* Key Concepts */}
              {lesson.challenge.concepts && lesson.challenge.concepts.length > 0 && (
                <div className="mb-6 bg-indigo-900/20 border border-indigo-700 rounded-lg p-4">
                  <h3 className="text-lg font-bold font-heading text-indigo-300 mb-3">Key Concepts:</h3>
                  <div className="flex flex-wrap gap-2">
                    {lesson.challenge.concepts.map((concept, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-800/50 border border-indigo-600 rounded-full text-sm text-indigo-200 font-code"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Explanations */}
              {lesson.challenge.explanations && lesson.challenge.explanations.length > 0 && (
                <div className="mb-6 bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold font-heading text-white mb-4">Code Explanation</h3>
                  <p className="text-gray-400 font-body mb-4 text-sm">
                    Understanding each part of the solution:
                  </p>
                  <div className="space-y-4">
                    {lesson.challenge.explanations.map((explanation, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-indigo-500 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold font-heading text-sm flex-shrink-0">
                            {explanation.line}
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-800 rounded p-2 mb-2">
                              <code className="text-sm text-green-400 font-code">{explanation.code}</code>
                            </div>
                            <p className="text-gray-300 font-body text-sm">{explanation.explanation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <CodeEditor
                challenge={lesson.challenge}
                onCodeChange={() => {}} // Code is managed internally by CodeEditor
                onValidate={validateCode}
                isCompleted={completed}
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <div>
                {previousLesson && (
                  <button
                    onClick={() => navigate(`/lesson/${previousLesson.id}`)}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    ← Previous Lesson
                  </button>
                )}
              </div>
              <div>
                {nextLesson ? (
                  <button
                    onClick={() => navigate(`/lesson/${nextLesson.id}`)}
                    disabled={!completed}
                    className={`px-4 py-2 rounded-lg transition-all font-medium ${
                      completed
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Next Lesson →
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/study-program')}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium"
                  >
                    Back to Study Program
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Fallback: Show old task-based content for lessons without challenges */
          <div className="space-y-8 pb-12">
            {generateTasks().map((task, index) => (
              <div
                key={task.id}
                className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:border-indigo-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold font-heading text-xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-heading text-white mb-3">{task.title}</h3>
                    <p className="text-gray-400 font-body mb-4">{task.description}</p>
                    {task.code && (
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                        <pre className="text-sm text-green-400 font-code whitespace-pre-wrap overflow-x-auto">
                          {task.code}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

