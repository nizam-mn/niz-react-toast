import Toast from "niz-react-toast";
import React, { useState } from "react";
import CodeSnippets from "./CodeSnippets";
import { ShinyText } from "./AnimatedComp";
import { handleIncrement } from "../Libs/firebase";

const Playground = ({ setPosition, setTheme }) => {
    const [type, setType] = useState("info"); // Default type
    const [themeVal, setThemeVal] = useState("solid"); // Default type
    const [posVal, setPosVal] = useState("top-left"); // Default type

    const handlePositionChange = (e) => {
        setPosition(e.target.value); // Update position via the prop function
        setPosVal(e.target.value);
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value); // Update theme via the prop function
        setThemeVal(e.target.value); // Update theme via the prop function
    };

    const action = () => {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    res("Settings saved!"); // Resolve with a success message
                } else {
                    rej("Could not save."); // Reject with an error message
                }
            }, 1000); // Simulate a 1-second async task
        });

        // Using Toast.promise with the simulated async task
        Toast.promise(promise, {
            pending: "Saving...", // Message shown while the task is pending
            success: "Settings saved!", // Message shown when the task resolves (success)
            error: "Could not save.", // Message shown if the task rejects (error)
        }).catch((error) => {
            // Handle any unhandled rejection explicitly
            console.error("Promise Rejection: ", error); // Optionally log the error
        });
    };

    const htmlCont = (
        <div className="customHTML">
            <span>
                Custom <b>HTML/JSX</b>{" "}
            </span>
            <button onClick={() => alert("This is a HTML/JSX Toast")}>alert</button>
        </div>
    );

    const isTab = window.innerWidth < 834 ;
    const isMob = window.innerWidth < 480 ;
    
    return (
        <div className="playground-section">
            
            <h1><ShinyText text={"ToastGround"}/></h1>
            <div className="snipet-options">
            <section style={{ width: isMob ? "-webkit-fill-available" : isTab ? "44%" : "47%" }}>
                    <div className="position-section">
                        <h2><ShinyText text={"Position"}/></h2>
                        <div className="position-options">
                            {["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"].map((pos) => (
                                <div className="option" key={pos}>
                                    <input hidden type="radio" name="position" id={pos} value={pos} onChange={handlePositionChange} />
                                    <label htmlFor={pos} style={{ backgroundColor: posVal === pos ? "#023c76" : "transparent" }}>
                                        {pos}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="theme-section">
                        <h2><ShinyText text={"Themes"}/></h2>
                        <div className="theme-options">
                            {["solid", "light-colored", "colored", "soft-glow", "dark"].map((th) => (
                                <div className="option" key={th}>
                                    <input hidden type="radio" name="theme" id={th} value={th} onChange={handleThemeChange} />
                                    <label htmlFor={th} style={{ backgroundColor: themeVal === th ? "#023c76" : "transparent" }}>
                                        {th}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="toasttype-section">
                        <h2><ShinyText text={"Toast types"}/></h2>
                        <div className="toasttype-options">
                            <button
                                onClick={() => {
                                    setType("info");
                                    Toast.info("Info: This is a toast");
                                    handleIncrement();
                                }}
                            >
                                info
                            </button>
                            <button
                                onClick={() => {
                                    setType("success");
                                    Toast.success("Successfully toasted!");
                                    handleIncrement();
                                }}
                            >
                                success
                            </button>
                            <button
                                onClick={() => {
                                    setType("error");
                                    Toast.error("This didn't work.");
                                    handleIncrement();
                                }}
                            >
                                error
                            </button>
                            <button
                                onClick={() => {
                                    setType("warning");
                                    Toast.warning("There's a problem with your toast");
                                    handleIncrement();
                                }}
                            >
                                warning
                            </button>
                            <button
                                onClick={() => {
                                    setType("promise");
                                    action();
                                    handleIncrement();
                                }}
                            >
                                promise
                            </button>
                            <button
                                onClick={() => {
                                    setType("default");
                                    Toast("Info: This is a toast");
                                    handleIncrement();
                                }}
                            >
                                default
                            </button>
                            <button
                                onClick={() => {
                                    setType("default2");
                                    Toast(htmlCont);
                                    handleIncrement();
                                }}
                            >
                                HTML/JSX
                            </button>
                        </div>
                    </div>
                </section>
                <section style={{ width: isMob ? "-webkit-fill-available" : isTab ? "56%" :"53%", height: "min-content"}}>
                    <CodeSnippets themeVal={themeVal} posVal={posVal} type={type}/>
                </section>
            </div>
        </div>
    );
};

export default Playground;
