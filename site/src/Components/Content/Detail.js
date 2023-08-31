import { Fragment, useState } from 'react'
import '../../css/Detail.css'


const Detail = (props) => {
    if (props.num == 1) {
        return (
            <Fragment>
                <div className="detail">
                    <div className="detail-content">
                        <h4>
                            BEHIND EACH STORY LIES A WORK OF ART
                        </h4>
                        <p>
                            We're not just a graphic design and marketing company; we're a dynamic
                            team of creative mavericks and strategic thinkers who believe in turning
                            pixels into profits!
                        </p>
                    </div>
                    <div className="art-surround">
                        <img className="art one" alt="Artwork" src="/assets/art-1.png"/>
                    </div>
                </div>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <div className="detail detail-flipped second">
                <div className="detail-content">
                    <h4>
                        OUR OFFERINGS
                    </h4>
                    <p>Logo Design</p>
                    <p>Web Wonders</p>
                    <p>Social Media Sorcery</p>
                    <p>Digital Dominance</p>
                    <p>Motion Magic</p>
                </div>
                <div className="art-surround">
                    <img className="art two" alt="Artwork" src="/assets/art-2.png"/>
                </div>
            </div>
        </Fragment>
    )
}


export default Detail