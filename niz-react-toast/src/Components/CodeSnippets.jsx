import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";

const CodeSnippets = ({ themeVal, posVal, type }) => {

    const [copy, setCopy] = useState(false)

    const codeSnippetOne = `import {ToastCenter} from "niz-react-toast"\n\n<ToastCenter\n   autoClose={true}\n   autoCloseDuration={5}\n   theme={"${themeVal}"}\n   position={"${posVal}"}\n/>`;

    const CodeSnippets = {
        infoCode: `import Toast from "niz-react-toast";\n\nToast.info('Info: This is a Toast.')`,
        successCode: `import Toast from "niz-react-toast";\n\nToast.success('Successfully toasted!')`,
        errorCode: `import Toast from "niz-react-toast";\n\nToast.error("This didn't work")`,
        warningCode: `import Toast from "niz-react-toast";\n\nToast.warning("There's a problem with your toast")`,
        promiseCode: `import Toast from "niz-react-toast";\n\nToast.promise(\n   promise,\n    {\n      pending: "Saving...",\n      success: "Settings saved!",\n      error: "Could not save.",\n    }\n)`,
        defaultCode: `import Toast from "niz-react-toast";\n\nToast('This is a Toast.')`,
        htmljsxCode: `import Toast from "niz-react-toast";\n\nToast(\n   <div className="customHTML">\n      <span>Custom <b>HTML/JSX</b></span>\n      <button\n\t onClick={() =>\n\t    alert("This is a HTML/JSX Toast")}\n         >\n\t alert\n      </button>\n   </div>\n)`,
    };

    const handleCode = (type) => {
        return type === "info"
            ? CodeSnippets.infoCode
            : type === "success"
            ? CodeSnippets.successCode
            : type === "error"
            ? CodeSnippets.errorCode
            : type === "warning"
            ? CodeSnippets.warningCode
            : type === "promise"
            ? CodeSnippets.promiseCode
            : type === "default"
            ? CodeSnippets.defaultCode
            : type === "default2"
            ? CodeSnippets.htmljsxCode
            : `Unknown Type`;
    };

    const codeSnippet = handleCode(type);

    const handleCodeCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 2000)
    }

    const isMob = window.innerWidth < 480 ;

    return (
        <div className="code-snippets">
            <div className="code-card">
                <div className="samplename-copy">
                    <p>App.js</p>
                    <button onClick={() => handleCodeCopy(codeSnippetOne)}><i class="material-symbols-outlined">{copy ? "check" : "content_copy"}</i>{copy ? "copied!" : "copy"}</button>
                </div>
                <Highlight theme={themes.dracula} code={codeSnippetOne} language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre style={{ ...style, padding: isMob ? "10px" : "15px", fontSize: "15px", borderRadius: "0 0 6px 6px", backgroundColor: "#0f2d48", fontFamily: "IBM Plex Mono" }}>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>

            <div className="code-card">
                <div className="samplename-copy">
                    <p>Component.jsx</p>
                    <button onClick={() => handleCodeCopy(codeSnippet)}><i class="material-symbols-outlined">{copy ? "check" : "content_copy"}</i>{copy ? "copied!" : "copy"}</button>
                </div>
                <Highlight theme={themes.dracula} code={codeSnippet} language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre style={{ ...style, padding: isMob ? "10px" : "15px", fontSize: "15px", borderRadius: "0 0 6px 6px", backgroundColor: "#0f2d48", fontFamily: "IBM Plex Mono", height: isMob ? "fit-content" : "240px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};

export default CodeSnippets;
