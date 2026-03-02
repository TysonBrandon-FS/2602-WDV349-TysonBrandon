# Project & Portfolio

* **Research Notes - Milestone 4**
* **Brandon Tyson**
* **Assignment Due Date: 3/1/26**

<br>

## Topic - Heroku Hosting, OAuth Verification, and Components

This document contains general notes related to getting a web app online with Heroku, learning OAuth and verification best practices, and clearing up confusion about components and what needed to be turned in for the assignments.

<br>

## Sub-Topic 1 - Heroku and Hosting

This week I did research on Heroku and hosting and it helped me with the steps of getting a web app online.

* I learned that Heroku is basically set up so you push your code and it builds and runs it for you, but you still have to follow best practices.
* Using a Procfile so the app knows exactly how to start, keeping secrets in config vars instead of hard coding them, and actually checking logs when something crashes is helpful.
* I also learned that scaling is not just random, you scale the right dyno type depending on what is slow, and you should treat staging and production seperate so you dont mix the two up.

<br>

## Sub-Topic 2 - OAuth and Verification

Then I focused on OAuth and verification because logins can be tricky.

* What I learned is OAuth is more about giving permissions safely, not just logging in, and the verification is what really helps.
* Things like using state so you know the response is actually tied to your request, using PKCE so the auth code is harder to steal, and being strict about redirect URLs are small details but they matter a lot.
* I also learned you cannot just trust any token that shows up, you have to validate it the right way and make sure it came from the provider you expect.

<br>

## Sub-Topic 3 - Components and Assignment Confusion

I was also VERY confused on components. I know what components are generally, but I was confused here by how the assignements were worded.

* This youtube video helped me.
* I was more so confused on what was need to be turned in this week.

<br>

## Reference Links

**Resource 1: Procfile (Heroku Dev Center)**  
[devcenter.heroku.com/articles/procfile](devcenter.heroku.com/articles/procfile): This helped me understand using a Procfile so the app knows exactly how to start.

**Resource 2: OAuth 2.0 Cheat Sheet (OWASP)**  
[cheatsheetseries.owasp.org/cheatsheets/OAuth2_Cheat_Sheet.html](cheatsheetseries.owasp.org/cheatsheets/OAuth2_Cheat_Sheet.html): This helped me with OAuth and verification and why details like state, PKCE, redirect URLs, and validating tokens matter.

**Resource 3: Components Video (YouTube)**  
[https://www.youtube.com/watch?v=aGvWDDPsjUM](https://www.youtube.com/watch?v=aGvWDDPsjUM): This youtube video helped me because I was confused on components and what was need to be turned in this week.

<br>

**Note:**

* It is acceptable to provide multiple links for a single sub-topic.
* Be sure to explain what resource(s) you found most helpful for the current milestone.