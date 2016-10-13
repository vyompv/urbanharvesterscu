# urbanharvester

Developed a full stack on MEAN(MongoDB, Express, Angular, NodeJS) for food donation to Urbanharvester.
-Separate signup and session for different types of users namely donor, receiver and transporter.
-Donor can login and add their items of food donation. An algorithm fetches receivers closest to the donor and send SMS to all the fetched receiver with a unique code for acceptance.
-On receiving SMS, the algorithm does the validation of code and accepts only a single receiver with the unique code.
-It logs all the transactions and items required for reports to trackback all activities.

Development:
Developed on MEAN stack which had the analogy of Design patterns with more secured routes.
Hosted at heroku, mongolab. Used api of Twilio, ProPublica.
Clean code which helps future groups to enhance the project.


https://goo.gl/Oibq9U -> video snap of the above urbanharvester website 
- In the video you can see two types of login, donor and admin. 
- From the donor login one can add items to be donated and search receivers based on the distance(nearby) and submit to send sms for the receivers. 
- After the signup process as donor/receiver/transporter, admin login will be able to validate the users by validating the data from https://projects.propublica.org/nonprofits/api. Admin will be able to activate/delete the users from here.

Website hosted here: http://urbanharvesterscu.herokuapp.com/
