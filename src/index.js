import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { FirebaseProvider } from "./controller/Firebaseprovider"

ReactDOM.render(  
    <FirebaseProvider>
    <App/>
    </FirebaseProvider>,
    document.getElementById("root"))