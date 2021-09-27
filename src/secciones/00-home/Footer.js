import React from 'react'

export const Footer = () => {
    return (
        <div className="navbar fixed-bottom text-light p-0" style={{backgroundColor: "darkorange"}}>
            <div className="container">
                <p className="m-0 ">&copy; 2021 La tierra de yhari por Laura Briones. All rights reserved.</p>
                <p className="m-0 d-none d-md-block">Made with <img className="m-1" src="https://img.icons8.com/ios/50/000000/mate.png" width="20rem"/> by MateDev</p>
            </div>
        </div>
    )
}
