import React from 'react'
import './styles.css'

const Skills = () => (
    <section class="skills">
        <div class="mySkill">JavaScript<p>JavaScript’s capabilities greatly depend on the environment it’s running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.</p></div>
        <div class="mySkill">React<p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p></div>

        <div class="mySkill">NodeJS<p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. </p></div>

        <div class="mySkill">ReactBootstrap<p>React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.</p></div>

    </section>
);

export default Skills;