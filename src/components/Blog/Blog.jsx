import React from 'react';
import PageHeader from '../PageHeader/PageHeader';

const Blog = () => {
  return (
    <div>
      <PageHeader header={'Blog'}></PageHeader>
      <div className="body">
        <h1>1.When should you use context API?</h1>
        <p>
          Ans: When we do not want to do props drilling means if we want to send
          data to different level of react components we use context Api. We can
          send data to any level of component tree without passing to lower tree
          level.
        </p>
        <h1>2.What is a custom hook?</h1>
        <p>
          Ans:Custom hooks are JavaScript function which follow the rule of
          react hooks. Custom hooks are written by the developer to re-use the
          code and develop complex logical function as need.
        </p>
        <h1>3.What is useRef?</h1>
        <p>
          Ans: useRef is a react hook which creates a mutable value. If we want
          to use a mutable value but we don't want to re-render the DOM during
          its value change we use useRef hook.
        </p>
        <h1>4.What is useMemo?</h1>
        <p>
          Ans: useMemo is a react hook which memorized the computation data but
          it only recomputes when its dependencies changes. It is only
          beneficial for complex calculation where performance issue might
          occur.
        </p>
      </div>
    </div>
  );
};

export default Blog;
