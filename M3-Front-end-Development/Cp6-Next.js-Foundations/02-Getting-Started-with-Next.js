Getting Started with Next.js
Session Flow
Learning Objective
Introduction
Theme
Primary Goals
Getting Started with Next.js
Next.js -  A React Framework
React is a library
Next.js is a framework
React pros
State
Components
React Cons
No Router
On-page SEO is impossible
Why should you use Next.js?
Client-Side Rendering vs. Server-Side Rendering
Activity: True/False
Search Engine Optimization (SEO)
How Next.js can enhance SEO
Benefits of Server-Side Rendering for SEO
Crawling Timing with React-only Applications
Crawling and Indexing with Next.js
Setting up Next.js Project
React Essentials
Server Components
Why Server Components?
Client Components
When to use Server and Client Components?
Patterns
Moving Client Components to the Leaves
Keeping Server-Only Code out of Client Components (Poisoning)
Activity: Fill in the blanks
Summary
What did we learn?
Best Practices
Shortcomings & Challenges
Enhance your knowledge
Try it Yourself
Learning Objective
Introduction
Next.js is a popular open-source framework for building server-side rendered (SSR) React applications. It is built on top of React and Node.js, providing an opinionated structure and a set of powerful features to simplify the development of React applications.
Focus: Next.js vs React.js, SEO, Client-Side Rendering and Server-Side Rendering, Next.js project setup, and patterns
Pre-requisite: Web development, React.js
Theme
Hulu is a popular American subscription video-on-demand service. It streams various TV shows, movies, original content, and live TV channels. The company's website is built using Next.js, among other technologies. Next.js enables Hulu to implement SSR (Server-side rendering), meaning the initial page loads faster, leading to a better user experience. Search engines can also crawl the server-rendered content, improving the website's SEO. Next.js allows for efficient code splitting and client-side navigation, resulting in faster page transitions and reduced loading times. This is crucial for a media streaming platform like Hulu, where quick access to content is essential for user satisfaction. Next.js provides a structured framework with built-in features like automatic code splitting, hot module replacement, and server-side rendering. This saves development time and resources, allowing Hulu's development team to focus on building new features and improving user experience. Next.js enables Hulu to create highly interactive and responsive user interfaces. With its support for React components, the development team can build dynamic UI elements to deliver a seamless user experience across devices. Next.js helps Hulu ensure that its content is discoverable by search engines, as server-side rendering allows search engine bots to crawl and index the website's content effectively.
Primary Goals
Familiarize yourself with the advantages and disadvantages of using React as a JavaScript library for building user interfaces.
Get a clear overview of what Next.js is and what it offers as a React framework.
Learn the differences between CSR and SSR, their pros, cons, and use cases.
Understand how Next.js enables Search Engine Optimization and deals with SEO challenges for React applications.
Practice setting up a basic Next.js project from scratch.
 
Getting Started with Next.js
Next.js - A React Framework
React is a library
React is a widely-used JavaScript library designed for constructing user interfaces, commonly called the front end of an application.
This course assumes prior knowledge of React and expects learners to have an intermediate-level understanding. You do not have to be an expert, but having some foundational React experience will be important when learning Next.js.
notion image
Next.js is a framework
Next.js is an extension of the React library and is often categorized as a framework due to its specific usage patterns. It is similar to React but better.
In React, applications often rely on third-party npm packages to fulfill various functionalities. However, Next.js incorporates many of these functionalities directly into its framework. For instance, Next.js provides a built-in router, enabling the loading of specific components based on the URL. Additionally, Next.js simplifies manipulation of the <head> tag of the website, making it effortless to optimize for SEO.
notion image
React pros
State
In an application, the state is responsible for storing data, some of which may be subject to changes as the user interacts with the app. It is helpful to conceptualize state as a front-end database, minimizing the frequency of communication between the app and the back-end. Moreover, state plays a crucial role in manipulating the application's view. When a change occurs in the state, it dynamically updates the user interface, reflecting the altered information or content visible to the user.
Components
Components serve as the fundamental building blocks within a React application, and it is common for such apps to include multiple components. In essence, a component is a JavaScript function that can receive inputs, known as properties (props), and outputs a React element that defines the appearance of a specific section of the User Interface (UI).
React Cons
When it comes to working with React, there are relatively few downsides to consider. Initially, these downsides may seem non-existent when you first start using React. However, they gradually become apparent as you gain more experience with the library. Fortunately, some of these drawbacks can be mitigated by utilizing third-party npm packages.
No Router
There are a few reasons why it may not be ideal to install a router like React Router Dom. Firstly, the majority of React applications require a router, necessitating the installation of a third-party library to incorporate this functionality. Secondly, integrating the router into your app is not always straightforward. The implementation of the router can vary significantly depending on how your app is structured and built.
On-page SEO is impossible
In an upcoming lesson, the instructor will explain the reasons why websites built exclusively with React may not be search engine-friendly. However, it is worth noting that many individuals, including the speaker, have made multiple attempts to make React-only sites indexable by search engines. Despite trying various strategies, they ultimately decided to invest time in learning Next.js. To their surprise, Next.js proved to be a remarkably accessible framework. For those encountering difficulties with search engine indexing, Next.js offers an effective solution.
Why should you use Next.js?
Next.js has all the benefits of React but none of the issues that React presents. As you progress through the course, this statement will make more sense. Using Next.js also prevents you from having to install and learn multiple third-party npm packages because Next.js builds important functionalities into the framework.
Next.js is a popular choice for web development due to several compelling reasons:
Improved performance: Next.js optimizes website loading speeds through server-side rendering (SSR) and static site generation (SSG), resulting in faster initial page loads and improved SEO.
Easy setup and configuration: Next.js provides a streamlined development experience with its ready-to-use project setup, automatic routing, and zero-config option. It allows developers to focus more on building features rather than spending time on complex configurations.
Versatile framework: Next.js offers support for both server-side rendering and client-side rendering, allowing developers to choose the best rendering approach for different parts of their application. It also provides dynamic routing, API routes, and built-in CSS and Sass support.
Built-in optimizations: Next.js has built-in features like code splitting, automatic image optimization, and client-side JavaScript bundles optimization. These optimizations enhance performance, reduce bandwidth usage, and deliver a better user experience.
Great developer experience: Next.js has a rich ecosystem, extensive documentation, and an active community. It integrates well with popular frameworks and tools, making it easier for developers to collaborate and build robust web applications.
Scalability and production-ready: Next.js is designed to handle high-traffic websites and scales effortlessly. It offers features like serverless deployment, automatic static optimization, and caching strategies, making it an excellent choice for production-ready applications.
Next.js provides a powerful, efficient, and developer-friendly framework for building modern web applications with enhanced performance and scalability.
Client-Side Rendering vs. Server-Side Rendering
Client-Side Rendering
When using client-side rendering, your application's React components are built into JavaScript files that inject HTML into the client-side Document Object Model (DOM). This process occurs on the client side.
Client Handles JavaScript Processing
Client-side rendering relies on the client's CPU to handle JavaScript processing. In most cases, this is not overly intensive, and the site loads quickly. However, older or less powerful computers may struggle with the processing load.
Client Requests API Data
Client-side rendering allows JavaScript to make asynchronous requests to APIs to fetch data from databases. The dynamic HTML content of the site loads first, and then it populates with information from the database. However, API requests and responses from the client can take longer compared to server-side rendering.
Speed Considerations
Client-side rendering generally offers fast loading times. However, various factors can impact speed, including API response times, hosting provider efficiency, internet speed, and the client's CPU processing power.
Client-Side Rendering
Client-Side Rendering
Server-Side Rendering
In server-side rendering, the server generates a complete HTML document, including all the necessary data. The server performs initial processing and runs JavaScript before sending the fully rendered page to the client.
Server Handles Initial Processing
With server-side rendering, the server takes care of accessing APIs, looping through data, and executing other necessary operations. Servers are typically faster than client computers, allowing for efficient processing. Additionally, servers benefit from better internet connectivity, enabling faster API responses.
Additional Processing on the Server
Server-side rendering allows for additional processing on the server even after sending the complete document to the client. This means that you can make asynchronous API requests and update the document without requiring a page refresh. Next.js, for example, facilitates this capability.
Speed Considerations
Servers can process JavaScript and generate documents faster than clients. However, the browser may experience a slightly longer wait time when waiting for a response from the server due to the server-side rendering approach. Once the response arrives, the entire site loads instantly. This still takes less time compared to the typically speedier initial response of client-side rendering. When handled this way, elements on the page load asynchronously, taking a brief moment to complete.
Server-Side Rendering
Server-Side Rendering
Both client-side rendering and server-side rendering eventually result in a fully rendered HTML document. Server-side rendering offers the advantages of faster server processing and better internet connectivity. However, client-side rendering can still provide fast loading times, depending on various factors such as API response speed, hosting provider efficiency, internet speed, and client CPU processing power.
Activity: True/False
React is a framework used for building server-side applications.
Next.js is a standalone JavaScript library with no connection to React.
React components are fundamental building blocks in a React application and receive inputs (props) to define specific sections of the User Interface (UI).
React components are only used for static content and cannot handle dynamic data.
Next.js provides built-in optimizations like code splitting, automatic image optimization, and enhancing website performance and user experience.
Answer
False
False
True
False
True
Search Engine Optimization (SEO)
How Next.js can enhance SEO?
SEO encompasses two primary categories: on-page SEO and off-page SEO.
Next.js can assist with on-page SEO, which involves optimizing your website or application to make it search engine-friendly.
Off-page SEO, which involves activities like building backlinks and establishing a social media presence, is not directly influenced by Next.js.
Benefits of Server-Side Rendering for SEO
In the above topics, we explained the flow of information between server-side rendering and client-side rendering. This information flow significantly impacts how search engines, including Google, index your site. When your site utilizes server-side rendering, all the necessary information is provided to the browser upfront. This is crucial because search engine crawlers analyze the page during that specific moment. If the information is not readily available and your client-side rendering involves processing JavaScript and fetching data from APIs, the relevant information may load onto the page after the crawl occurs. Even a one-second delay in client-side rendering can negatively affect your on-page SEO.
Crawling Timing with React-only Applications
Your application will undergo crawling and indexing as soon as the client receives an HTML document from the server. However, with React-only applications, the initial HTML document received by the client is quite basic. It takes a short moment for the client to generate and load all the necessary information for the user to see. Unfortunately, despite having all the information available at this stage, search engine bots have already completed their crawl, completely disregarding your full HTML document.
When your application will get crawled with only React
When your application will get crawled with only React
Crawling and Indexing with Next.js
Once the client receives an HTML document from the server, the application becomes eligible for crawling and indexing. Next.js allows you to pre-load all the essential information, ensuring that search engine bots can access and analyze the complete content of your site.
                             Why Server-side Rendering is Good for SEO
                             Why Server-side Rendering is Good for SEO
Setting up Next.js Project
Install Node.js
To install Node.js, you can follow these steps:
Download Node.js: Go to the official Node.js website at https://nodejs.org and navigate to the Downloads section. Choose the version that matches your operating system (Windows, macOS, or Linux).
Choose the LTS version: It is recommended to download the LTS (Long Term Support) version for stability and long-term maintenance.
Run the installer: Once the download is complete, run the installer file you downloaded. Follow the installation wizard instructions for your operating system. You can choose the default settings or customize them according to your preferences.
Verify the installation: After the installation is complete, open a command prompt (or terminal) and type node -v. This command will display the installed Node.js version. Similarly, type npm -v to check the installed version of npm (Node Package Manager), which comes bundled with Node.js.
notion image
Install Next.js using npm
Create a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:
npx create-next-app {project-name}
Replace {project-name} with the name of your project. This will create a new directory with the same name as your project.
💡
Tips: 
When choosing a {project-name} in a Next.js project, it's important to follow these rules:
Use lowercase letters only.
Don't use spaces or special characters, except for hyphens (-).
Keep it short and descriptive.
Avoid using reserved keywords or names that might conflict with existing packages or libraries.
 
Following these rules will not only help you avoid potential conflicts with other packages or libraries but also make it easier to remember and share your project name with others.
On installation, you'll see the following prompts; choose them accordingly.
After the prompts, create-next-app will create a folder with your project name and install the required dependencies.
Change into the project directory by running the following command:
cd {project-name}
Run the Development Server
Run npm run dev to start the development server.
Visit http://localhost:3000 to view your application.
Next.js app running on http://localhost:3000
Next.js app running on http://localhost:3000
That's it! You have successfully created a new project. Happy coding! :)
Next.js Scripts
You currently find four main scripts listed in your package.json file:
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
dev: runs a development server on http://localhost:3000
build: creates a built application ready for deployment
start: starts your built Next application (must run next build first)
lint: will "lint" your Next project using the dev dependency ESLint to warn you if your written code needs to be fixed
React Essentials
Having knowledge of React's latest features, such as Server Components, is beneficial when constructing applications using Next.js. This topic will explore the differences between Server Components and Client Components, along with guidelines on when to utilize them and recommended approaches.
Server Components
Server and Client Components enable developers to create applications that combine the interactive features of client-side apps with the enhanced performance of server rendering.
Instead of React rendering your entire application on the client side, as seen in Single-Page Applications, React now offers the freedom to decide where to render components based on their intended use.
Example Website
Example Website
When breaking down the page into smaller components, you'll observe that most of these components lack interactivity and can be rendered on the server as Server Components. For smaller interactive UI elements, we can add Client Components. This approach aligns with Next.js server-first approach.
Why Server Components?
Server Components provide developers with enhanced utilization of server infrastructure. For instance, you can relocate data fetching to the server, nearer to your database, and retain substantial dependencies that used to affect the client JavaScript bundle size on the server, resulting in improved performance. With Server Components, creating a React application feels akin to PHP or Ruby on Rails but with the strength and adaptability of React's component model for templating the user interface.
Server Components bring about faster initial page loading and reduced client-side JavaScript bundle size. The client-side runtime remains consistent in size and is cacheable, unaffected by the growth of your application. Additional JavaScript is introduced only when needed for client-side interactivity through the use of Client Components.
In Next.js, the initial HTML rendering occurs on the server when a route is accessed. Subsequently, this HTML is progressively enhanced within the browser, enabling the client to take control of the application and introduce interactivity by asynchronously loading the Next.js and React client-side runtime.
Client Components
Client Components allows you to introduce client-side interactivity to your application. In Next.js, these components are pre-rendered on the server and then hydrated on the client, enabling seamless functionality and interaction in your web application.
The "use client" directive
The "use client" directive is a convention to declare a boundary between a Server and Client Component module graph.
notion image
"use client" sits between server-only and client code. It's placed at the top of a file, above imports, to define the cut-off point where it crosses the boundary from the server-only to the client part. Once "use client" is defined in a file, all other modules imported into it, including child components, are considered part of the client bundle.
notion image
Since Server Components are the default, all components are part of the Server Component module graph unless defined or imported in a module that starts with the "use client" directive.
When to use Server and Client Components?
To streamline the choice between Server and Client Components, we recommend starting with Server Components unless you encounter a specific use case that requires a Client Component.
What do you need to do?
Server Component
Client Component
Fetch data.
              ✔️
              ❌
Access backend resources (directly)
              ✔️
              ❌
Keep sensitive information on the server (access tokens, API keys, etc)
              ✔️
              ❌
Keep large dependencies on the server / Reduce client-side JavaScript
              ✔️
              ❌
Add interactivity and event listeners (onClick(), onChange(), etc)
              ❌
              ✔️
Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)
              ❌
              ✔️
Use browser-only APIs
              ❌
              ✔️
Use custom hooks that depend on state, effects, or browser-only APIs
              ❌
              ✔️
Use React Class components
              ❌
              ✔️
Patterns
Moving Client Components to the Leaves
Place Client Components at the bottom levels of your component tree whenever feasible for enhanced application performance.
For instance, consider a Layout containing both static elements (e.g., logo, links) and an interactive search bar that relies on state.
Rather than turning the entire layout into a Client Component, it is advisable to convert the interactive logic into a Client Component (e.g., <SearchBar />) while keeping the layout as a Server Component. By doing so, you can avoid sending all the component JavaScript of the layout to the client. This approach can lead to more efficient rendering and improved overall performance.
// SearchBar is a Client Component
import SearchBar from './searchbar'
// Logo is a Server Component
import Logo from './logo'
 
// Layout is a Server Component by default
export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Logo />
        <SearchBar />
      </nav>
      <main>{children}</main>
    </>
  )
}
Keeping Server-Only Code out of Client Components (Poisoning)
Since JavaScript modules can be shared between Server and Client Components, it's possible for code that was only intended to be run on the server to sneak its way into the client.
For example, take the following data-fetching function:
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
 
  return res.json()
}
At first glance, it appears that getData works on both the server and the client. But because the environment variable API_KEY is not prefixed with NEXT_PUBLIC, it's a private variable that can only be accessed on the server. Next.js replaces private environment variables with the empty string in client code to prevent leaking secure information.
As a result, even though getData() can be imported and executed on the client, it won't work as expected. And while making the variable public would make the function work on the client, it would leak sensitive information.
So, this function was written with the intention that it would only ever be executed on the server.
The "server only" package
To prevent this sort of unintended client usage of server code, we can use the server-only package to give other developers a build-time error if they ever accidentally import one of these modules into a Client Component.
To use server-only, first install the package:
npm install server-only
Then import the package into any module that contains server-only code:
import 'server-only'
 
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
 
  return res.json()
}
Now, any Client Component that imports getData() will receive a build-time error explaining that this module can only be used on the server.
The corresponding package client-only can be used to mark modules that contain client-only code – for example, code that accesses the window object.
 
Activity: Fill in the blanks
Next.js can assist with ___________ (off-page SEO/client-side rendering/on-page SEO), which involves optimizing your website or application to make it search engine-friendly.
For enhanced application performance, it is suggested to place Client Components at the __________ (top/middle/bottom) levels of your component tree whenever feasible.
In Next.js, the "use client" directive is placed at the top of a file, above imports, to define the __________ (starting point/cut-off point/transition point) where it crosses the boundary from the server-only to the client part.
Answers
on-page SEO
bottom
cut-off point
 
Summary
What did we learn?
React is a widely-used JavaScript library for building web application user interfaces (UI). This course assumes learners have an intermediate-level understanding of React.
Next.js is an extension of React, categorized as a framework, and addresses some issues of React. It includes built-in functionalities like a router and easy manipulation of the <head> tag for SEO optimization.
React offers features like state management for data handling and components as building blocks for UI, whereas it lacks built-in routing (requiring third-party libraries like React Router Dom) and may have difficulties with on-page SEO.
Client-Side Rendering relies on the client's CPU for JavaScript processing and API data fetching, while Server-Side Rendering performs initial processing on the server and sends fully rendered HTML to the client.
Next.js enhances SEO by providing server-side rendering, allowing search engine bots to crawl and index the site's complete content upon receiving the initial HTML document. This improves on-page SEO compared to React-only applications.
Moving Client Components to the Leave recommends placing Client Components at the bottom levels of the component tree for better application performance and more efficient rendering.
Keeping Server-Only Code out of Client Components (Poisoning) discusses potential issues with shared JavaScript modules between Server and Client Components and how to prevent unintended client usage of server code using the "server-only" package.
Best Practices
Organize the component tree thoughtfully, following best practices like moving Client Components to the leaves for better performance. This helps in optimizing rendering and improves overall application efficiency.
Choose SSR when SEO is critical and for improved initial page loading as it ensures better discoverability by search engines and faster time-to-content for users.
Utilize the "server-only" package to clearly mark server-only code, ensuring it doesn't get unintentionally used on the client side. This practice helps maintain the integrity and security of the application.
Regularly monitor the application's performance and leverage tools like Lighthouse or other performance analysis tools to identify and address bottlenecks. 
Stay updated with the latest documentation, community updates, and best practices to maximize Next.js's capabilities.
Shortcomings & Challenges
While Next.js provides built-in routing, React itself lacks this feature, requiring developers to rely on third-party libraries like React Router Dom. This introduces additional complexity and potential integration challenges.
In client-side rendering, the initial JavaScript processing and API data fetching occur on the client's CPU, which might lead to slower page load times and potential performance issues, especially for larger applications.
Sharing JavaScript modules between Server and Client Components can lead to unintended client usage of server-only code. This could cause security or functional issues if sensitive server-side logic gets exposed on the client side.
Enhance your Knowledge
Supercharge your knowledge by exploring the resources provided! 📚
Get Started with Next.js: https://www.freecodecamp.org/news/nextjs-tutorial/
Guide to Next.js: https://welearncode.com/beginners-guide-nextjs/
Manage SEO in Next.js: https://blog.logrocket.com/manage-seo-next-js-with-next-seo/
 
Try it Yourself
Let's solve these coding problems in the AlmaBetter IDE. Don't forget to join the AlmaBetter Community Platform to share your brilliant approaches and cheer each other on! 🚀 Happy coding! 💻😄
Task 1: Ready to level up your frontend skills? Dive into the challenge right in the VS Code IDE.
Problem
Set up a new page directory within the Next.js project's folders. Inside this directory, create an index.js file with the specified content:
function FirstPage () {
return
<div>Welcome to AlmaBetter! We are absolutely thrilled to have you on this exciting adventure of learning and growth.</div>
}
export default FirstPage;
Using inline styling, apply styles to the content inside the div. You're free to add some more content to it.
Task 2: Please share with AlmaBetter's Community Platform the styling elements you have incorporated from your studies in Module 3 to design the page. If possible, kindly include a screenshot for their reference.
