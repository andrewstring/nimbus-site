import { Fragment, useState } from 'react'
import "../css/Detail.css";


const Detail = (props) => {
    if (props.num == 1) {
        return (
            <Fragment>
                <div className="detail">
                    <h4>
                        BEHIND EACH STORY LIES A WORK OF ART
                    </h4>
                    <p>
                        Our marketing and graphic designer specialists work
                        with you to capitalize upon your business narrative
                        and express an elegant and powerful message.
                    </p>
                    <div className="backing-square first"></div>
                    <img className="art one" alt="Artwork" src="/assets/art-1.png"/>
                </div>
                
            </Fragment>
        )
    }
    return (
        <Fragment>
            <div className="detail detail-right">
                <h4>
                    OUR OFFERINGS -
                </h4>
                <p>Visual Media</p>
                <p>Text Generation</p>
                <p>Asset Coordination</p>
                <div className="backing-square second"></div>
                <img className="art two" alt="Artwork" src="/assets/art-2.png"/>
            </div>
            
        </Fragment>
    )
}


export default Detail