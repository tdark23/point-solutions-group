import React from 'react'
import "./../styles/nComponents/trust.css"

import psstudio from "./../assets/sublogos/PSStudio.png"
import psdigit from "./../assets/sublogos/psdigital.png"
import psgzik from "./../assets/sublogos/PSGZik.png"
import afrijeune from "./../assets/sublogos/Afrijeunetv.png"

function Trust() {
  return (
    <section className='trust-section'>
        <div className='container trusted-container'>
            <div className='trusted-by-container'>
                <div className='trusted-by-text'>
                    <span className='organization-span'>
                        Nos
                    </span>
                    Entreprises
                </div>
                <div className='clients-grid'>
                    <div className='trusted-by-grid-content'>
                        <div className=''>
                            <img
                                alt='trust'
                                className='client-log'
                                src={psstudio}
                            />
                        </div>
                    </div>
                    <div className='trusted-by-grid-content'>
                        <div className=''>
                            <img
                                alt='trust'
                                className='client-log'
                                src={psdigit}
                            />
                        </div>
                    </div>
                    <div className='trusted-by-grid-content'>
                        <div className=''>
                            <img
                                alt='trust'
                                className='client-log'
                                src={psgzik}
                            />
                        </div>
                    </div>
                    <div className='trusted-by-grid-content'>
                        <div className=''>
                            <img
                                alt='trust'
                                className='client-log afrijeune'
                                src={afrijeune}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trust