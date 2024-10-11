# Deep Dive into JavaScript Project!

This project is designed to help anyone enhance their understanding of form validation, DOM manipulation, asynchronous JavaScript, and APIs. By the end, you'll have a solid foundation for building dynamic and interactive web applications.

## Project Objectives.
### Implement Form Validation:
- Understand and implement basic form validation using JavaScript.
- Ensure user inputs meet specific criteria before form submission.
### Work with the DOM:
- Use DOM manipulation to dynamically interact with HTML elements.
- Understand and utilize event listeners for form submission and input validation.
### Asynchronous JavaScript and APIs:
- Use JavaScript to fetch data asynchronously from a public API.
- Display fetched data dynamically on a webpage.
- Handle potential errors during data fetching.
### Enhance User Experience:
- Provide real-time feedback to users for form validation.
- Ensure data persists across browser sessions using local storage.
## Tasks
### 1.Form Creation and Validation (mandatory)
#### Repo Requirements:
- Create a new GitHub repository named Form-Creation-Validation.
#### HTML Structure: 
- (provided in HTML section)
#### CSS (style.css): 
- (provided in HTML section)
#### Implement Form Validation in script.js:
- Wrap your script in a DOMContentLoaded event listener.
- Select the form and feedback division using document.getElementById.
- Add an event listener for form submission and prevent default behavior.
- Retrieve user inputs (username, email, password) and trim whitespace.
- Implement validation logic (username length, email format, password length).
- Display success or error messages based on validation results.
#### Repo:
- Push your code to your Form-Creation-Validation repository.
### 2.Fetching Data from an API and Displaying It (mandatory)
#### Implement JavaScript Functionality in fetch-data.js:
- Define an async function named fetchUserData.
- Set the API URL in a constant apiUrl.
- Select the data container element using document.getElementById.
- Use try-catch to handle fetching and potential errors.
- In the try block:
    - Use await fetch to get data from apiUrl.
    - Convert response to JSON and store data in users.
    - Clear the loading message from dataContainer.
    - Create a <ul> element and store user names in <li> elements.
    - Append the user list to dataContainer.
- In the catch block:
    - Clear existing content and display an error message in dataContainer.
#### Repo:
- Push your code to your existing Form-Creation-Validation repository (or a new one if preferred).
- Create new files named fetch-data.html and fetch-data.css for the HTML and CSS of the data display section.
