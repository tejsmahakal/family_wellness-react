import './Nav.css'

function Nav() {
    return(
        <div className="nav">
            <div className="heading">
                <h1> <span>Family Wellness</span></h1>
                <p >MASSAGE THERAPY</p>
            </div>
            <div className="anchor">
               <li ><span><a href="#">HOME</a></span></li> 
               <li> <abc><a href="#">ABOUT</a></abc></li>   
               <li> <def><a href="#">FAQ</a></def></li> 
               <li> <ghi><a href="#">SERVICES</a></ghi></li>
               <li><xyz><a href="#">CONTACT</a></xyz></li>
            </div>
            
        </div>
    );
}

export default Nav;