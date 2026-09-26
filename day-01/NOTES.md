# Day 01 Notes

## What is Node.js?

Node.js is a JavaScript runtime that allows JavaScript to run outside the browser. Unlike browser JavaScript, Node.js provides access to features such as the file system, processes, and the operating system.

---

## What is npm?

npm is the package manager that comes with Node.js. It is used to install and manage packages, dependencies, and tools for JavaScript and Node.js projects.

---

## Git vs GitHub

Git is a version control system that runs locally and tracks changes in a project.

GitHub is an online platform for hosting Git repositories and collaborating with other developers.

In short:

- **Git** => Version control
- **GitHub** => Remote repository hosting and collaboration

---

## Commands I Learned

| Command | What it does |
|---------|--------------|
| `node <file>` | Runs a JavaScript file using Node.js |
| `npm --version` | Displays the installed npm version |
| `node --version` | Displays the installed Node.js version |
| `git init` | Initializes a Git repository in the current folder |
| `git add .` | Stages all changes in the current directory |
| `git status` | Shows the current Git repository status |
| `git commit -m "message"` | Creates a commit with a descriptive message |
| `git branch -M main` | Renames the current branch to `main` |
| `git remote add origin <url>` | Connects the local repository to a remote repository |
| `git push -u origin main` | Pushes the local `main` branch to GitHub |

---

## What Broke During Setup?

Nothing major broke during the setup.

I checked that Node.js and npm were installed correctly, created and ran JavaScript files with Node.js, initialized the Git repository, committed the project, connected it to GitHub, and successfully pushed the project to the `main` branch.

---

## Questions & Answers

### 1. When do you use `let` instead of `const`?
I use `let` when I need to reassign the variable later. I use `const` when the value should not be reassigned.

### 2. What does `typeof []` return, and why is that surprising?
It returns `"object"`. This is surprising because an array is a special type of object in JavaScript.

### 3. What is the difference between `===` and `==`, and why do we only use `===`?
`===` compares both the value and the type, while `==` can convert types before comparing. I use `===` because it makes comparisons more predictable.

### 4. When would you use `while` instead of `for`?



I would use `while` when I want a loop to continue as long as a condition is true, especially when I do not know exactly how many iterations are needed.

---