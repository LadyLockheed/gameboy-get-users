This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## To run project on localhost:

npm run dev

## Reason for building this project

This was originally made as a coding test for a job application but is now a part of my general portfolie. The criterias were:

1. A button that fetches random users from https://randomuser.me/api/
2. Show a loading indicator when the request is sent
3. Display an error message if something went wrong
4. Show user information (any format is fine) if everything went well

_"Feel free to put extra effort into the areas you enjoy working with and want to showcase. What we use daily includes React, TypeScript, and Material UI. If you enjoy working on UI and styling, focus more on the appearance and Material UI. If you prefer writing code, focus on TypeScript, logic, and perhaps even unit tests."_

I focused mainly on style in this coding test. Since I had a limited amount of time to complete the test I had to make some priorities to what include and what to exclude. Below follow some thoughs about the code in general and also what should be included in the app but is left out due to the time limit.

## Thoughts

For this project, I used React, Next.js, TypeScript, and regular CSS. I wanted to become more familiar with Next.js. I have only worked with it briefly before but found it really interesting and wanted to explore it further. I used Next.js-specific features such as layouts, pages, routing, and handling of the "not found" page.

Although I wouldn’t call myself a designer, I really enjoy creating visual elements and experimenting with CSS that I haven't used in a while.

I also took the chance to build a responsive, mobile-first app. This is something I did not get much experience with in previous jobs, so I wanted to practice it.

I can honestly not take any credit for the spinner. I found it online,
and decided to use it since it was easy to grasp how it worked and how I could tinker with it if I wanted to, and I do not want
to copy paste code without knowing what it does.

## TODO:s

Errors on console:
I have a "The resource <URL> was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally." - error in console. This will be my main priority when going forward with this project.

Organization and filestructure: I wanted to organize all the fonts and colors into a single file using CSS variables for better structure. I could also improve the structure over all.

Tests:
Every project needs tests, if I would have continued building this app tests would be a must have.

Validation: Since the free API did not provide an interface for the data structure, I created my own interface but left out some details to save time. What would have been best to use would have been a schema validation of some sort, maybe using Yup or Zod. I had to opt this out due to the time limit.

Style: There is a lot to work on. For example contrast.

Semantic html: There is room for improvement here. In my previous jobs, I didn’t have many opportunities to work with semantic HTML. However, making apps accessible is very important, and using semantic HTML is a key part of that—something I am eager to learn more about.

Error handling: I currently do not handle errors specifically based on their error codes, only in general. This can improve a lot.
