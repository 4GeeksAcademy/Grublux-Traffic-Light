import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
    const [glow, setGlow] = React.useState("red");

    React.useEffect(() => {
        // This will run only the first time the component renders
        
            setTimeout(changeColor, 3000);
            // This will run only right before the component unmounts
        }
    , [glow]); // <------ PLEASE NOTICE THE EMPTY ARRAY

    
    const changeColor = () => {
        if (glow == "red") {
            setGlow("green")
        }

        else if (glow =="green") {
            setGlow("yellow")
        }

        else {
            setGlow("red")
        }
    }


	return (
		<>
		<div className="col-2 bg-dark my-2 rounded">
            <div className="row bg-dark rounded d-flex justify-content-center">
                <div className="col-12 my-2 d-flex justify-content-center">
                    <button className={ glow !="red" ? 'buttonA' : 'buttonA glow' } onClick={() =>{
                        setGlow("red");
                    }}>Stop!</button></div>
                <div className="col-12 d-flex justify-content-center">
                    <button className={ glow !="yellow" ? 'buttonB' : 'buttonB glow' } onClick={() => {
                        setGlow("yellow");
                    }}>Wait</button></div>
                <div className="col-12 my-2 d-flex justify-content-center" >
                    <button className={ glow != "green" ? 'buttonC' : 'buttonC glow' } onClick={() => 
                        setGlow("green")}>Go!</button></div>
            </div>            
        </div>
		</>
	);
};

export default TrafficLight;