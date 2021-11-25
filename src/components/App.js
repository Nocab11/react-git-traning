import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";
import Error from "./main/Erorr";



function App() {




    return (
        <div className="app">
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/post/:id" element={<Main />}  />
                        <Route path="/card/:username/:reponame" element={<Card />}  />
                        <Route path="/error" element={<Error />}  />
                        <Route path="*" element={<h1 style={{ textAlign: 'center'}}>Страница отсутствует</h1>} />
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    );
}

export default App;
