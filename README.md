# Project Todolist 

# BRIEF DESCRIPTION


The To-Do App we're creating enables users to add tasks to a list of to-do items. Once a task is added, users have the option to mark it as completed when it's finished. Clicking on a task will toggle its completion status. If a task is pending and you click on it, it will be marked as complete by crossing the task title with a line. The app will also provide a task count, indicating the number of both pending and completed tasks. This count will give users an overview of their task list's status.



# Using this UI our user will be able to:

* Browse their tasks
Mark tasks as completed/pending without deleting them
Remove tasks
Add new tasks
Edit tasks
Mark all tasks as active/completed
Remove all completed tasks


# Convention Guide
You can access convention guide [Here](https://www.notion.so/61d7a3c9e95f49758af6decfde741d7b?v=8338a759f3ef49a1b4fb900c89f22851&p=bd414c7a550242ba9b5e6bbcbfb793f2&pm=s)



# UX/UI 

You can access link figma [Here](https://www.figma.com/file/cAA5nkSuVCOpQK4OO8hRC0/Project_Todolist?type=design&node-id=0-1&mode=design&t=P4gPQ9wEokki21pZ-0)



# Tech Stack
* Figma
* Draw IO
* React
* CSS
* Git



# External Libraries :
* Font Awesome: [here](https://fontawesome.com/)
* Iconify Desgin : [here](https://iconify.design/)

# App Flow
You can access AppFlow [Here](https://app.diagrams.net/?src=about#LTodolist%20WorkFlow)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Git Flow 

### 1.Main Branch 
* The main branch stores the official release history

### 2. Develop Branch
* the develop branch serves as an integration branch for features.
* New feature and fixes are merged into this branch.
* Represents the latest state of the application with features being developed
### 3. Feature Branch
These are the feature that have in this todo app.
* `CreateTask Feature` : Create Feature will allowed you to create each of your task.
* `TaskDisplay Feature` : TaskDisplay Feature will allowed to see each task that you have created.
* `RenderTask Feature` : RenderTask Feature will render each task that you have created and display it as a list of your task
* `EditTask Feature` : This Feature will allow you to modify each task that you want to modify.
* `DeleteTask Feature` : This Feature will allow you to delete each task.
### 4. Release Branch 
* To prepare a new version of our website for release:
* Create a release branch from the develop branch.
* Perform testing, bug fixes, and any final adjustments specific to the release.
### 5. Bugfix Branch
* if the code changes made from the feature branch were rejected after a release, sprint or demo, any necessary fixes after that should be done on the bugfix branch
### 6. Hotfix Branches 
For critical bug fixes in the production codebase:
* Create a hotfix branch from the main branch.
*Fix the bug and ensure the fix is applied both to the main and develop branches.