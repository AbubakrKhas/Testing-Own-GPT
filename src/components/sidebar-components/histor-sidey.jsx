import React, { Component } from 'react';

class HistorySide extends Component {
    state = {  } 
    render() { 
        return (
            <div className="relative block bg-zinc-800 ml-5 mt-5 rounded ">
                <div >
                    <div className="text-white text-base p-5">
                        <p>Your typed history :</p>
                    </div>
                    <div className="body-history">
                        <ul className='flex flex-col gap-3 p-5 ml-5 text-sm text-white'>
                            <li>Forexample</li>
                            <li>Forexample</li>
                            <li>Forexample</li>
                            <li>Forexample</li>
                            <li>Forexample</li>
                            <li>Forexample</li>
                            <li>Forexample</li>
                        </ul>
                    </div>
                </div>


            </div>
        );
    }
}
 
export default HistorySide;