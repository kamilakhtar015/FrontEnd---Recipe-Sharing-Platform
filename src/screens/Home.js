import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Logo from '../logo.svg'
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';
import CardContainer from '../components/CardContainer';

export default function Home() {
    return (
        <><><div> <Navbar /> </div>
            {/* <div><Carousel/> </div> */}
            <div>
                <CardContainer />
            </div>
            <div>Body</div></><div> <Footer /> </div></>
    );
}


{/* <div>
                        <select className='m-2 h-100 w-100 bg-success'>
                            {
                                Array.from(Array(6), (e, i)=> {
                                    return (
                                        <option key={i+1}>{i+1}</option>
                                    )
                                })
                            }
                        </select>
                        </div> */}