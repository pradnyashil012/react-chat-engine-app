import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import './App.css';
import LoginForm from "./components/LoginForm";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="aa2601ac-382d-47ec-aa00-454fa9c4ff87"
        userName="john"
        userSecret="secret"
        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
