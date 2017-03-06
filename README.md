## Highside 2FA Demo
This repository contains the code for a 2-factor authentication coding demo using the [Highside communication platform](https://api01.highside.net/login "Highside.net"). The goal of this demo is to show how easy it is to us the platform for quickly setting up 2-factor authentication for your website. <br>
The code in this repository contains a simple web app setup including all HTLM/CSS you need. Your task is to connect the web app to the Highside platform to enable 2-factor authentication. Feel free to also check out the other features of the platform such as Text-to-Speech or Email to SMS.

#### Getting Started ####
Clone this repository into a local folder on your computer by pasting the following command into your command line
```
git clone https://github.com/douweknook/highside-2fa-demo.git
```
Next, go into the folder with `cd highside-2fa-demo` and run `npm install` to install the dependencies. After this you can start the app with `node app.js`. The app will start running on *localhost:8000*.

#### Instructions ####
Step One: Creating a project.<br>
In this step you set up your project on the platform. You can use the steps below as a guideline.
- Go to the [Highside platform](https://api01.highside.net/login "Highside.net") and sign in. You should have received your log in details already via email.
- Click on the *Build New Project* button to start a new project in the Project Builder.
- Choose the template *2FA by SMS*. You will be presented with some information about this type of project. Click *More options* and *Edit in Project Builder* to start modifying the template.
- As you can see the project is triggered by an HTTP POST request to the trigger URL. Currently, the platform expects two variables attached to the request, `to` and `from`, in the form of a JSON object. To add another variable (a name for example), type it in the *Expected JSON attributs* bar and hit Enter.
- In the last block (Send SMS) you can set the message text you want to send to the user. Feel free to change this message but make sure you include the Generated PIN variable.

Step Two: Connect your website to the project.<br>
In this step we connect the code you cloned from this repository to your project on the platform
- When the user submits the form, the entered form data should be collected on the server (i.e. in app.js). 
- Next, the server should make an HTTP POST request to the Highside platform, with the form data attached as a JSON object.
- The Highside platform will handle sending the pin code to the supplied phone number by SMS.
- If the request was successful, you should receive a pin code in the request's response. You can redirect the user to the verification page.
- After the user has entered their pin code, check if the entered code matches the one returned by the HTTP request. If so, the 2FA was successful and you can redirect the user to the success page.

#### Additional options/suggestions ####
Once you are finished with the steps above, feel free to add some additional features or play around with the other options the platform offers. Some suggestions:
- Greet the user by their name in the SMS. ('Hi ...! Your pin code is ...')
- Use Text-to-Speech to have the platform call the user and read their pin code to them. (use blocks Make Voice Call, Speak (Text-to-Speech) and Terminate Call)
- Build an app that endlessly stalks your friends with calls or texts.
![alt text](./pure_evil.png "Pure Evil")