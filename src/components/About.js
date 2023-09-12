import React from 'react'

export default function About(props) {

    let myStyle ={
        color: props.mode === "dark"?"white":"black",
        backgroundColor: props.mode === "dark"?"#313b66":"white"
    }



  return (
    <div className='container'style={{color: props.mode === "dark"?"white":"black"}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About TextChanger
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextChanger is a versatile online platform dedicated to simplifying text transformations. Our easy-to-use tools are designed for anyone looking to quickly and effortlessly modify text for various purposes.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Why TextChanger?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <p><strong>Simplicity:</strong> TextChanger is straightforward and user-friendly. No complicated processes or technical knowledge required.</p>
                    <p><strong>Instant Results:</strong> With just a few clicks, you can transform your text to meet your needs.</p>
                    <p><strong>No Sign-Up Required:</strong> You can start using TextChanger right away, no account creation or personal information needed.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                How to Get Started
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>1. Paste your text into the input box.</p>
                        <p>2. Select the transformation you want (e.g., sentence rephrasing, text formatting).</p>
                        <p>3. Click the "Transform" button.</p>
                        <p>4. Instantly view and copy your transformed text.</p>
                        TextChanger simplifies text transformations.. try it today and see how easy it is!
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
