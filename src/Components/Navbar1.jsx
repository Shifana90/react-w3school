import './Header.css'


function Navbar1() {
    return (
        <div className="navbar">
           <div className='firstpart'>
            <img src="./images/logo1.png" alt="logo" />
                    <li><a href="#tutorials" class>Tutorials</a></li>
                    <li><a href="#exercises">Exersices</a></li>
                    <li><a href="#certificates">Certificate</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><input type="text" placeholder='    Search...' /></li>

                </div>

                <div className='secondpart'>

                    <button className='buttonsec1'>Spaces</button>
                    <button className='buttonsec1'>Get Certified</button>
                   <div className="acc">
                   <button className='buttonsec2'>Sign up</button>
                   <button className='buttonsec3'>Login</button>
                   </div>

                </div>


        </div>

    )
}

export default Navbar1;

