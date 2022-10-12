import React from 'react';

const Blog = () => {
   return (
      <div className=" flex justify-center mt-14 px-5">
         <div className="max-w-2xl space-y-8">
            {/* question 1 */}
            <div className="space-y-6 text-left">
               <h2 className="text-2xl">What is the purpose of React Router</h2>
               <p>
                  React router allow us to create single page application with navigation system allowing the user
                  navigate without reloding the browser. React router also allow the user to use the browser
                  functionality like the back button.
               </p>
            </div>
            <div className="space-y-6 text-left">
               <h2 className="text-2xl">How does Context Api works</h2>
               <p>
                  Context api is a way of react app creating global variable which can be used by components. It is
                  alternative to props drilling. React Context api returns a consumer and a provider. Provider is a
                  component which provids the state to its children. on the other hand consumer is a components which
                  uses the state
               </p>
            </div>
            <div className="space-y-6 text-left">
               <h2 className="text-2xl">What is Use Ref hooks</h2>
               <p>
                  The useFef hook allows to persist values between renders. It can be used to store a mutable value that
                  does not cause rerender when updated. It can be uset to accessed dom element directly
               </p>
            </div>
         </div>
      </div>
   );
};

export default Blog;
