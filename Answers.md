1.  Explain the differences between `client-side routing` and `server-side routing`.
    - The difference is server side routing lets the server handle what the client is served up so when they go to a new
      url the server finds what's supposed to be at that url and refreshes the page and renders everything again even if
      some things are the same, they will be re rendered again. Client side routing is where the browser or client handles
      what changes for different urls, that way it can re-render what needs to be re rendered and leave what doesnt change
      like a navbar for example and is typically faster for that reason.
2.  What does HTTP stand for?
    - It stands for hypertext transfer protocol
3.  What does CRUD stand for?
    - It stands for Create, Read, Update and Delete
4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    - Create: Post, Read: Get, Update: Put, Delete: Delete
5.  Mention three tools we can use to make AJAX requests
    - The three I know of are the XmlHttpRequest which is a vanilla js object or function to get data but it's not promise based
      and then there is the fetch method which is newer to js and not supported on all browsers yet and it's promise based.
      finally there is what we primarily have been using and that's axios which is a 3rd party promise based library for making
      AJAX requests