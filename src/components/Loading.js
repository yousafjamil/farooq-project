import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className='container justify-content-center'>
            <div className='row'>
                <div className='col-lg-6 offset-lg-5   offset-md-4 col-sm-8  offset-2'>

                    <ThreeCircles
                        height={90}
                        width={90}
                        color="red"
                        outerCircleColor="blue"
                        middleCircleColor="orange"
                        innerCircleColor="red"
                    />
                </div>
            </div>
        </div>
    )
}

export default Loading