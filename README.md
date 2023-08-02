# Instructions
The purpose of this app is to provide a way to track personal expenses in a user-friendly way. Here's how to use version 0.0.1:

The environtment variables PORT and MONGO_URI can be found in the .env file in the server folder.

1. Add Transactions: In the application's main dashboard, the list of transactions will appear on the left hand side. To add a new transaction, click on the "Add New" accordion and fill out its form with the required Description, Type, Amount and Category. Click the "Add" button to add the transaction to the list. The dashboard's graphs will update automatically to reflect the changes.
2. Delete Transactions: Click the  button of the corresponding transaction you wish to delete. The transaction will be removed and the graphs will update accordingly.
3. Main Graph (Balance): Displays balance over time. The X-axis represents the dates the transactions were created, and the Y-axis represents the transaction values.
4. Category Chart: Area chart that illustrates the frequency of transactions made in different categories. The more transactions you have in a specific category, the larger the corresponding area on the chart will be.
5. Spending History GraphShows the accumulation of expenses over time. It helps you visualize your spending patterns and identify trnds in your expenses.

# Backend
MongoDB is used as the database to store transaction data, Mongoose helps build the schemas to model the transaction documents. The application's backend API uses Express Router to allow users to interact with the database.

When an API request is made, the corresponding route in the Express Router is triggered. The controller then handles the request by interactin with the MongoDB database through the Mongoose model.

# Frontend
The user interface is developed using React, React Bootstrap, and Recharts. React Bootstrap simplifies the process of styling components, ensuring a clean and professional appearance without spending excessive time on styling.

Recharts is used for creating the line and area charts as the component library provides attractive data visualization without having to manipulate the json responses too much.

# Difficulties & Next steps
1. User System and Authentication: Originally, there were plans to implement a user system, allowing each user to have their own set of transactions. However, due to time constraints, building the models, routes, and the authentication system was not possible in the current version.
2. Redux Implementation: The original proposal for the application had personal budget and saving goals in mind, which would have needed a way to manage state of the application to handle all the different interactions. The attempt to implement both the useReducer() hook and Redux for managing application state encountered difficulties with handling POST requests for adding new transactions. For the moment, I let the form submission refresh the page instead of updating the state seamlessly and sending the toast. Implementing Redux properly would be a valuable improvement for future development and extra features.

Miguel Angel Fierro Gutierrez 

100385947

CPSC-2261-M01 - Web Technology

Summer 2023
