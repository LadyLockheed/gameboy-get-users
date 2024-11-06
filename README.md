This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Criteria: 
1. En knapp som hämtar random användare från https://randomuser.me/api/ - DONE
2. Visa laddningsindikator när anropet skickats iväg - DONE
3. Visa felmeddelande om något gick fel - DONE
4. Visa info om användare (valfritt format) om allt gick bra - DONE

Lägg gärna extra energi på det som du tycker är kul att jobba med och vill visa upp. Det vi använder dagligen är React, Typescript, Material UI. Gillar du att jobba med UI och styling, fokusera mer på utseendet/Material UI. Gillar du mer att skriva kod, fokusera på Typescript, logik och kanske även enhetstester.
## 

## Thoughts:

For this project, I used React, Next.js, TypeScript, and regular CSS. I wanted to become more familiar with Next.js since that is the framework you use. I have only worked with it briefly before but found it really interesting and wanted to explore it further. I used Next.js-specific features such as layouts, pages, routing, and handling of the "not found" page.


I chose to use regular CSS even though I know you use MUI. This decision was intentional so I could take the opportunity to revisit and practice CSS. In my previous job at Allevi, we worked with MUI, and I felt that I missed out on some fundamental CSS concepts.
 Although I wouldn’t call myself a designer, I really enjoy creating visual elements and experimenting with CSS that I haven't used in a while.

I also took the chance to build a responsive, mobile-first app. This is something I did not get much experience with in previous jobs, so I wanted to practice it as well.

I can honestly not take any credit for the spinner. I found it online, 
and decided to use it since it was easy to grasp how it worked and how I could tinker with it if I wanted to, and I do not want
to copy paste code without knowing what it does. 


## TODO:s
Organization: I wanted to organize all the fonts and colors into a single file using CSS variables for better structure. However, by the time I realized I was reusing many fonts and colors, I had already invested significant time into the app and needed to scope a bit.

Tests:
Every project needs tests. However, this was not my main focus for this project.

Typescript: Since the free API did not provide an interface for the data structure, I created my own interface but left out some details to save time.

Functions: I only managed to create one small function. Typically, adding more functions would have been a great way to showcase my TypeScript skills and logic, but the app did not require any additional functions at this stage. However, we never know what future updates might bring.

Style: There is  a lot to work on. For example contrast.

Semantic html: There is room for improvement here. In my previous jobs, I didn’t have many opportunities to work with semantic HTML. However, making apps accessible is very important, and using semantic HTML is a key part of that—something I am eager to learn more about.

Error handling: I currently do not handle errors specifically based on their error codes, only in general. This can improve a lot.

File structure: The file structure could be improved. For very small projects like this, a more organized structure with folders for logic and other components may not be necessary, especially when time is limited.
