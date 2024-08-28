import React from 'react';

const Blog = () => {
  return (
    <div className='w-3/4 mx-auto my-8'>
  <p>- Difference between SQL and NoSQL</p>
    <p>- SQL stands for Structured Query Language and NoSQL
stand for Non SQL. SQL is a relational database on the other hand 
NoSQL s non-relational database. SQL has fixed or predefined schema but NoSQL 
has dynamic schema. SQL is vertically scalable, NoSQL is horizontally scalable.
    </p>
    <br />
	<p>- What is JWT, and how does it work?</p>
  <p>-JSON Web Token (JWT) is an open standard  that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. 
  When a user signs in ,the identity provider (like firebase authentication) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
  User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
Resource server then verifies the authenticity of the token using the secret salt/ public key. This is how JWT works.

  </p>
  <br />
	<p>- What is the difference between javascript and NodeJS?</p>
  <p>
    - Javascript is a programming language, NodeJs is a Javascript runtime environment.
    Javascript is used in fronted development but NodeJs is use in server side development.
    Javascript can only be run in the browsers but we can run Javascript outside the browser with the help of NodeJS.
    Javascript is capable enough to add HTML and play with the DOM on the contrary
 	Nodejs does not have capability to add HTML tags.
  </p>
  <br />
	<p>- How does NodeJS handle multiple requests at the same time?</p>
  <p>
    - When NodeJS receives multiple  requests it  places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. 
    Although it's single threaded but with the help of EventQueue NodeJs can handle multiple request at the same time.
  </p>
    </div>
  );
};

export default Blog;