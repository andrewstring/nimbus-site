import { Fragment, useState } from 'react'
import "../../css/Detail.css"


const Detail = (props) => {
    if (props.num == 1) {
        return (
            <Fragment>
                <div className="detail">
                    <h4>
                        BEHIND EACH STORY LIES A WORK OF ART
                    </h4>
                    <p>
                        We're not just a graphic design and marketing company; we're a dynamic
                        team of creative mavericks and strategic thinkers who believe in turning
                        pixels into profits!
                    </p>
                    <div className="backing-square first"></div>
                    <div className="art-surround-one"></div>
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
                <p>Logo Design</p>
                <p>Web Wonders</p>
                <p>Social Media Sorcery</p>
                <p>Digital Dominance</p>
                <p>Motion Magic</p>
                <div className="backing-square second"></div>
                <div className="art-surround-two"></div>
                <img className="art two" alt="Artwork" src="/assets/art-2.png"/>
            </div>
        </Fragment>
    )
}


export default Detail