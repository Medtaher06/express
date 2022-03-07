import express from "express";

export const MiddlewarePosts = async (req, res , next) => {

    
    if (isOpen()) {
        next()

    } else {
        console.log("Content unavailable");
        res.status(400).send('Content unavailable');


    }
}

function isOpen() {

    let currentdate = new Date();
    if (currentdate.getDay() <= 5) {
        console.log('DAY TRUUUUUUE');
        if (currentdate.getHours() < 17 && currentdate.getHours() > 9) {
            console.log('Content available');
            return true;
        } else
        if (currentdate.getHours() <18 && currentdate.getHours() >= 8) {
            console.log('Content unavailable');

            return true;
        } else {
            return false;
        }
    } else {
        return false
    }
}











