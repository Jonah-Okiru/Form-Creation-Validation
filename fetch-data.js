// 1. Initialize the Async Function:
/*
Begin by defining an asynchronous function named fetchUserData. 
This function will contain all your code for fetching and displaying the data.
*/
async function fetchUserData(){
    /*
    2. Define the API URL:

Inside fetchUserData, declare a constant apiUrl and assign it the
 string value 'https://jsonplaceholder.typicode.com/users'.
  This URL points to the API endpoint from which you’ll fetch user data.
    */
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    // 3. Select the Data Container Element:
    // Select the HTML element where the API data will be displayed
    const dataContainer =document.getElementById('api-data');
    // 4. Fetch Data Using try-catch:
    try{
        const response = await fetch(apiUrl)
    } catch(error){
        dataContainer.innerHTML = '';
        dataContainer = 'Failed to load user data.';
        
    }
    // store in the constant named users
    const users = await response.json();
    // clearing the datacontainer(Clear the Loading Message:)
    dataContainer.innerHTML = '';
    // Create and Append User List:
    // Create a <ul> element and store it in a constant named userList.
    const userList = document.createElement('ul');
    /* Loop through the users array with forEach, and for each user, do the following:
Create a <li> element.
Set the text content of the <li> to the user’s name.
Append the <li> to userList.
After the loop, append userList to dataContainer.*/
users.forEach(function(user){
    const user1 =document.createElement('li')
    user1.textContent = user1.name;
    userList.append(user1);

})
// After the loop, append userList to dataContainer.
dataContainer.append(userList);
    


}
// Invoke fetchUserData on DOMContentLoaded:
document.addEventListener('DOMContentLoaded', function(){
    fetchUserData();
});