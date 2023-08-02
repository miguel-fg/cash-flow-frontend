import React from "react";

// bootstrap components
import Container from "react-bootstrap/Container";
import CloseButton from "react-bootstrap/CloseButton";

export default function About() {
    return (
        <Container className="main-container">
            <h1 className="super-title">Instructions</h1>
            <p className="about-paragraph">
                The purpose of this app is to provide a way to track personal
                expenses in a user-friendly way. Here's how to use version
                0.0.1: <br />
                <br />
                The environtment variables <span className="bold">
                    PORT
                </span>{" "}
                and <span className="bold">MONGO_URI</span> can be found in the
                .env file in the server folder.
            </p>
            <ol className="about-paragraph">
                <li>
                    <span className="bold">Add Transactions</span>: In the
                    application's main dashboard, the list of transactions will
                    appear on the left hand side. To add a new transaction,
                    click on the "Add New" accordion and fill out its form with
                    the required Description, Type, Amount and Category. Click
                    the "Add" button to add the transaction to the list. The
                    dashboard's graphs will update automatically to reflect the
                    changes.
                </li>
                <li>
                    <span className="bold">Delete Transactions</span>: Click the{" "}
                    <CloseButton disabled /> button of the corresponding
                    transaction you wish to delete. The transaction will be
                    removed and the graphs will update accordingly.{" "}
                </li>
                <li>
                    <span className="bold">Main Graph (Balance)</span>: Displays
                    balance over time. The X-axis represents the dates the
                    transactions were created, and the Y-axis represents the
                    transaction values.
                </li>
                <li>
                    <span className="bold">Category Chart</span>: Area chart
                    that illustrates the frequency of transactions made in
                    different categories. The more transactions you have in a
                    specific category, the larger the corresponding area on the
                    chart will be.
                </li>
                <li>
                    <span className="bold">Spending History Graph</span>Shows
                    the accumulation of expenses over time. It helps you
                    visualize your spending patterns and identify trnds in your
                    expenses.
                </li>
            </ol>
            <h1 className="super-title">Backend</h1>
            <p className="about-paragraph">
                MongoDB is used as the database to store transaction data,
                Mongoose helps build the schemas to model the transaction
                documents. The application's backend API uses Express Router to
                allow users to interact with the database.
            </p>
            <p className="about-paragraph">
                When an API request is made, the corresponding route in the
                Express Router is triggered. The controller then handles the
                request by interactin with the MongoDB database through the
                Mongoose model.
            </p>
            <h1 className="super-title">Frontend</h1>
            <p className="about-paragraph">
                The user interface is developed using React, React Bootstrap,
                and Recharts. React Bootstrap simplifies the process of styling
                components, ensuring a clean and professional appearance without
                spending excessive time on styling.
            </p>
            <p className="about-paragraph">
                Recharts is used for creating the line and area charts as the
                component library provides attractive data visualization without
                having to manipulate the json responses too much.
            </p>
            <h1 className="super-title">Difficulties & Next steps</h1>
            <p className="about-paragraph"></p>
            <ol className="about-paragraph">
                <li>
                    <span className="bold">User System and Authentication</span>
                    : Originally, there were plans to implement a user system,
                    allowing each user to have their own set of transactions.
                    However, due to time constraints, building the models,
                    routes, and the authentication system was not possible in
                    the current version.
                </li>
                <li>
                    <span className="bold">Redux Implementation</span>: The
                    original proposal for the application had personal budget
                    and saving goals in mind, which would have needed a way to
                    manage state of the application to handle all the different
                    interactions. The attempt to implement both the useReducer()
                    hook and Redux for managing application state encountered
                    difficulties with handling POST requests for adding new
                    transactions. For the moment, I let the form submission
                    refresh the page instead of updating the state seamlessly
                    and sending the toast. Implementing Redux properly would be
                    a valuable improvement for future development and extra
                    features.
                </li>
            </ol>
            <p className="about-paragraph">
                <div>
                    Miguel Angel Fierro Gutierrez <br />
                    100385947 <br />
                    CPSC-2261-M01 - Web Technology <br />
                    Summer 2023
                </div>
            </p>
        </Container>
    );
}
