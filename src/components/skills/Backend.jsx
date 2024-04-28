import React from "react";

const Backend = () => {
    return (
        <div className="skills__content">
        <h3 className="h3 skills__title">Backend Developer</h3>

        <div className="skills__box"> 
            <div className="skills__group">


            <div className="skills__data">
            <i class='bx bxl-nodejs' style={{ color:'#42b883', fontSize: '1.5rem'}}  ></i>

                    <div>
                        <h3 className="skills__name">Node.js</h3>
                    </div>
            </div> 

                <div className="skills__data">
                <i class='bx bxl-php' style= {{ color:'#8993be', fontSize: '1.5rem'}}  ></i>

                    <div>
                        <h3 className="skills__name">PHP</h3>
                    </div>
            </div>

            <div className="skills__data">
            <i class='bx bxl-python' style= {{ color: '#628aac', fontSize: '1.5rem' }}  ></i>

                    <div>
                        <h3 className="skills__name">Phython</h3>
                    </div>
            </div>
        </div>



        <div className="skills__box"> 
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">MySQL</h3>
                    </div>
            </div>

            <div className="skills__data">
                 <i class='bx bxl-firebase' style={{ color:'#f6d469', fontSize: '1.5rem'}}  ></i>

                    <div>
                        <h3 className="skills__name">Firebase</h3>
                    </div>
            </div>

            <div className="skills__data">
            <i className='bx bxl-laravel' style={{ color: '#628aac', fontSize: '2rem' }}></i>

                    <div>
                        <h3 className="skills__name">Laravel</h3>
                    </div>
            </div>

            
        </div>
        </div>

        
        </div>
    </div>
    )
}

export default Backend