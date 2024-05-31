import React from "react";


const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="h3 skills__title">Frontend Development </h3>

            <div className="skills__box"> 
                <div className="skills__group">
                    <div className="skills__data">
                    <i className='bx bxl-html5' style={{ color: '#f06529', fontSize: '1.5rem' }}></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                        </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-css3' style= {{ color: '#264de4', fontSize: '1.5rem'}} ></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                        </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-javascript' style= {{ color: '#f0db4f', fontSize: '1.5rem'}}  ></i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                        </div>
                </div>
            </div>



            <div className="skills__box"> 
                <div className="skills__group">


                <div className="skills__data">
                <i class='bx bxl-react' style={{ color:'#37afe4', fontSize: '1.5rem' }} ></i>

                        <div>
                            <h3 className="skills__name">React JS</h3>
                        </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-bootstrap' style={{ color:' #59287a', fontSize: '1.5rem' }}  ></i>

                        <div>
                            <h3 className="skills__name">BOOTSTRAP </h3>
                        </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-flutter' style={{ color:'#54c0f4', fontSize: '1.5rem' }}  ></i>

                        <div>
                            <h3 className="skills__name">FLUTTER</h3>
                        </div>
                </div>

                {/* <div className="skills__data">
                <i class='bx bxl-angular' style={{ color:'#a6120d', fontSize: '1.5rem' }}  ></i>

                        <div>
                            <h3 className="skills__name">Angular</h3>
                        </div>
                </div> */}

            </div>
            </div>


            </div>
        </div>
    )
}

export default Frontend