export const accordionData = [
  {
    _id: 1,
    question: "Explain the MVC architecture?",
    answer:
      "The Model-View-Controller (MVC) framework is an architectural/design pattern that separates an application into three main logical components Model, View, and Controller. Each architectural component is built to handle specific development aspects of an application. It isolates the business, logic, and presentation layer from each others",
  },
  {
    _id: 2,
    question: "What is virtual DOM in React?",
    answer:
      "React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.",
  },
  {
    _id: 3,
    question: "How do browsers read JSX?",
    answer:
      "In general, browsers are not capable of reading JSX and only can read pure JavaScript. The web browsers read JSX with the help of a transpiler. Transpilers are used to convert JSX into JavaScript. The transpiler used is called Babel",
  },
  {
    _id: 4,
    question: " What is higher-order component in React?",
    answer:
      "Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component. HOC are beneficial as they are easy to code and read. Also, helps to get rid of copying the same logic in every component.",
  },
  {
    _id: 5,
    question: " Explain one way data binding in React?",
    answer:
      "ReactJS uses one-way data binding which can be Component to View or View to Component. It is also known as one-way data flow, which means the data has one, and only one way to be transferred to other parts of the application. In essence, this means child components are not able to update the data that is coming from the parent component. It is easy to debug and less prone to errors.",
  },
  {
    _id: 6,
    question: "What is axios and how to use it in React?",
    answer:
      "Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations.This popular library is used to communicate with the backend.Axios supports the Promise API, native to JS ES6.Using Axios we make API requests in our application.Once the request is made we get the data in Return, and then we use this data in our project.",
  },
  {
    _id: 7,
    question: "What is Reconciliation in React JS?",
    answer:
      "React assesses the necessity for a real DOM update when there’s a change in a component’s props or state. This evaluation involves comparing the newly returned element with the one previously displayed. If they are not equal, React proceeds to update the DOM. This process is referred to as reconciliation.",
  },
];
