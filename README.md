# Firebase Data Access Before Load Error

This repository demonstrates a common error in Firebase applications: attempting to access a property of a document snapshot before the data has fully loaded.  This can result in unexpected behavior, such as undefined values or application crashes.

## Bug

The `bug.js` file showcases the erroneous code. It attempts to access a field from a Firebase document without properly handling the asynchronous nature of the `get()` method.

## Solution

The `bugSolution.js` file provides the correct solution, using `.then()` to ensure the data is loaded before accessing it.

## How to Reproduce

1.  Clone this repository.
2.  Install the Firebase SDK: `npm install firebase`
3.  Configure your Firebase project.
4.  Run the `bug.js` and `bugSolution.js` files. Note the differences in output.