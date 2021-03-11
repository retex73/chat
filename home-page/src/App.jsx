import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";
import Chat from 'chat/Chat';

const App = () => (
    <Container>
        <p>lorem ipsum dolor sit amet</p>
        <p>Chat</p>
        <Chat />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, modi vel. Dolores aliquam voluptates nemo, dolor debitis id iusto dignissimos harum molestias blanditiis aperiam similique, deleniti qui quasi. Neque, ipsa!
        Numquam et corrupti amet suscipit dolor at ut ea provident voluptatibus? Provident saepe nihil soluta maiores sapiente iusto quos doloremque fuga exercitationem distinctio perferendis, ad laudantium quaerat nesciunt aut non?</p>
    </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
