import React from "react";

const Visit = () => {
    return (
        <div className="visit">
            <h2>Visit</h2>
            <div className="visit-buttons">
                <a href="https://www.npmjs.com/package/niz-react-toast" target="_blank" rel="noreferrer">
                    <button>
                        <i class="bx bxl-github"></i>GitHub
                    </button>
                </a>
                <a href="https://www.npmjs.com/package/niz-react-toast" target="_blank" rel="noreferrer">
                    <button>
                        <img style={{ borderRadius: "5px" }} height={28} width={28} src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" alt="" /> npm{" "}
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Visit;

export const Footer = () => {
    return (
        <div class="footer">
            <p className="name">
                MOHAMMED NIZAM <i class="material-symbols-outlined">check_circle</i>
            </p>
            <span>
                <p>
                    <a href="http://mohammednizam.web.app" target="_blank"  rel="noreferrer">Who made this? <i class="material-symbols-outlined">north_east</i></a>
                </p>
                
                <p>
                    <i class="bx bx-copyright copyright"></i> All Rights Reserved
                </p>
            </span>
        </div>
    );
};
