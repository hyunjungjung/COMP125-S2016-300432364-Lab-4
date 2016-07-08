/**
 * FileName: app.js
 * 
 * @author Joanne Jung
 * @date July 8, 2016
 * 
 * StudentID: 300432364
 * @website http://comp125-s2016-300432364-lab4.azurewebsites.net
 * @description This file is the main javascript file for the web site
 * 
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";


    // User class
    var User = (function () {
        function User(userName, userPassword) {
            this.userName = userName;
            this.userPassword = userPassword;
        }
        return User;

    } ());

    // display User Infomration on Console
    function printInfo(User) {
        console.log("===============================")
        console.log("User Name : " + User.userName);
        console.log("Password : " + User.userPassword);
        console.log("===============================")
    }

    // eventhandler for Login submit event
    function formSubmit(event) {
        event.preventDefault();

        var userName = document.getElementById("userName");
        var userPassword = document.getElementById("userPassword");

        var user = new User(userName.value, userPassword.value);
        printInfo(user);
        loginForm.reset();
    }
    // add to eventhandler
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", formSubmit);


})();