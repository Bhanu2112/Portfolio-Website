import React from 'react'
import Profile from '../assets/profile.jpg'

export default function ProfileBlob() {
    return (
        <>
            <svg viewBox="0 0 258 232" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M240.724 141.74C213.291 181.059 176.605 208.702 130.665 224.67C84.725 240.637 48.7574 227.271 22.7621 184.571C-3.23318 141.871 -6.60969 99.6528 12.6326 57.9164C31.8748 16.1801 62.013 -2.64437 103.047 1.44297C144.081 5.53031 184.144 20.1052 223.236 45.1677C262.327 70.2303 268.157 102.421 240.724 141.74Z" fill="url(#pattern0_35_24)" />
                <defs>
                    <pattern id="pattern0_35_24" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_35_24" transform="matrix(0.00173611 0 0 0.00194853 0 -0.716856)" />
                    </pattern>
                    <image id='image0_35_24' xlinkHref={Profile} />
                </defs>
            </svg>
        </>
    )
}
