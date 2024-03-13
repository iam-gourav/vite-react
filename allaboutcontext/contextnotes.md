<Appparent/> have userId data which have to send to grand grand <ChildQ/>

step1:- <AppParent> pass the userId as props to <Parent> which is child of <AppParent>

step2:- now <Parent> pass the userId as a props to <ChildA>

step3:- and now <ChildA> pass the userId to <ChildP>

This will be very complex to send data parent to it's grand children although <parent> and <ChildA>
have no need userId still we have to pass userId it's a headache when our application is very big
here context Api and redux comes to manage the state

***************************context Api*********************************    


firstly create a context folder in src folder and create a contexts.js file  and import createContext

createContext(defaultValue)
UserContext.Provider
UserContext.Consumer

createContext returns a context object.

The context object itself does not hold any information. It represents which context other components read or provide. Typically, you will use SomeContext.Provider in components above to specify the context value, and call useContext(SomeContext) in components below to read it. The context object has a few properties:

SomeContext.Provider lets you provide the context value to components.
SomeContext.Consumer is an alternative and rarely used way to read the context value.

step1:- in UserContext.js create a context

export const UserContext = createContext(defaultVlaue)

step2:- now import UserContext in App Component and wrap all components in <UserContext.provider>

step3:- where you get the userId go that component and wrap it in <UserContext.Consumer> and also impor UserContext
important :- Consumer can accept only one function inside it if you have to data then you create a function and inside it another function if we more than two data it will headache for developers

// here comes useContext hook