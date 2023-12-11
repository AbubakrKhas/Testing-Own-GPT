import React, { Component } from 'react';

class CurrentUser extends Component {
    state = {  } 
    render() { 
        return (
            <div className='relative flex justify-center align-middle flex-col text-center w-40 bg-gray-800 ml-5 mt-5 rounded'>
                <h3 className='text-white tracking-wide'>Abubakr Test AI</h3>
                <p className='text-white tracking-wider'>Status : 
                <select className='bg-transparent ml-3 text-green-400' name="" id="">
                <option className='bg-slate-700 text-green-400' value="on">On</option>
                <option className='bg-slate-700 text-red-500' value="off">Off</option>
                </select>
                </p>
            </div>
        );
    }
}
 
export default CurrentUser;