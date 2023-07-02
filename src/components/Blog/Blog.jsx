import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='py-32 my-9 bg-indigo-100 rounded-md'>
                <h2 className='text-5xl font-extrabold text-center text-indigo-900'>Blogs</h2>
            </div>
            <div className='py-4 flex flex-col gap-6'>
                <div className='bg-gray-100 rounded-md p-6'>
                    <p className='text-xl font-medium mb-2'>When should you use context API?</p>
                    <p className='text-gray-700'>- The Context API is a feature of React that allows you to share data between components without having to pass props down through every level of the component tree. It's a way to manage global state in your application. Using the Context API can simplify your code and avoid the need to pass props down through multiple levels of your component tree. It can also make your code more efficient, as you don't need to re-render components that don't depend on the data being passed down.</p>
                </div>
                <div className='bg-gray-100 rounded-md p-6'>
                    <p className='text-xl font-medium mb-2'>What is a custom hook?</p>
                    <p className='text-gray-700'>- A custom hook is a function in React that uses one or more of the built-in hooks and encapsulates a specific piece of functionality or logic. Custom hooks allow you to extract reusable logic from your components and share it across your application. The name of a custom hook must start with "use" to make it clear that it is a hook and to follow the naming convention of React hooks. Custom hooks are created by combining existing hooks and logic into a reusable function. They can take arguments like regular functions and can return any value or object that a regular function can.</p>
                </div>
                <div className='bg-gray-100 rounded-md p-6'>
                    <p className='text-xl font-medium mb-2'>What is useRef?</p>
                    <p className='text-gray-700'>- useRef is a hook in React that allows you to create a mutable reference that persists across renders. It can be used to reference DOM elements, store previous values, or maintain state that doesn't trigger a re-render. Unlike state, updating a ref using the .current property does not trigger a re-render of the component. This makes useRef useful for managing mutable values that you don't want to trigger a re-render.</p>
                </div>
                <div className='bg-gray-100 rounded-md p-6'>
                    <p className='text-xl font-medium mb-2'>What is useMemo?</p>
                    <p className='text-gray-700'>- useMemo is a hook in React that allows you to optimize the performance of your application by memoizing the results of a function. Memoization is a technique used to cache the results of an expensive function, so that if the function is called again with the same arguments, the cached result is returned instead of recomputing the function. useMemo takes two arguments: the first argument is a function that returns a value, and the second argument is an array of dependencies. The function passed as the first argument will only be executed when any of the dependencies in the second argument have changed.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;