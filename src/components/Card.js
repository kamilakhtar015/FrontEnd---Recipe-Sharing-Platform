import React from 'react'

export default function Card() {
  return (
    <div>
         <div className='container w-100'>
                <div className="card" style= {{"width" : "18rem", "maxHeight": "360px"}}>
                    <img className="logo.svg" src="https://source.unsplash.com/random/300×300?/chicken-fried" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick.</p>
                        
                    </div>
                </div>
            </div>

    </div>
  )
}
