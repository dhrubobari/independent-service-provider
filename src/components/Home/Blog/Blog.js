import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 style={{marginTop: '50px', textAlign: 'center'}}>Difference between authorization and authentication</h2>
            <p style={{backgroundColor: 'ghostwhite', padding: '10px', textAlign: 'center'}}>In simple words, authentication is the process of<br></br>verifying who someone is, whereas<br></br>authorization is the process of verifying<br></br>what specific applications, files, and<br></br>data a user has access to.</p>
            <h2 style={{marginTop: '50px', textAlign: 'center'}}>The use of firebase authentication</h2>
            <p style={{backgroundColor: 'ghostwhite', padding: '10px', textAlign: 'center'}}>You can use Firebase Authentication<br></br>to allow users to sign in to your app<br></br>using one or more sign-in methods,<br></br>including email address and password sign-in,<br></br>and federated identity providers such as Google Sign-in and Facebook Login.</p>
            <h2 style={{marginTop: '50px', textAlign: 'center'}}>What other services does firebase provide other than authentication?</h2>
            <p style={{backgroundColor: 'ghostwhite', padding: '10px', textAlign: 'center'}}>It provides developers with a variety<br></br>of tools and services to help them<br></br>develop quality apps, grow their user base,<br></br>and earn profit. It is built on Google's infrastructure.</p>
        </div>
    );
};

export default Blog;