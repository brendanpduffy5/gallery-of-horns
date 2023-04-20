import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
    render (){
        return(
            <>
                <HornedBeast name={<h2>Unicorn</h2>} 
                imageURL={<img src="https://easydrawingguides.com/wp-content/uploads/2022/01/easy-cute-unicorn-step-by-step-drawing-tutorial-step-10.png" alt="a unicorn" title="a unicorn" />}
                description={<p>a pony with style</p>}/>

                <HornedBeast name={<h2>Bull</h2>} 
                imageURL={<img src="https://cdn.shopify.com/s/files/1/2123/8425/products/56730713-LRG_1024x1024.jpg?v=1593546938" alt="a bull" title="a bull" />}
                description={<p>an angry cow</p>}/>

                <HornedBeast name={<h2>Triceratops</h2>} 
                imageURL={<img src="https://easydrawingguides.com/wp-content/uploads/2022/04/Triceratops-step-by-step-drawing-tutorial-step-10.png" alt="a Triceratops" title="a Triceratops" />}
                description={<p>a spikey dino</p>}/>
                
            </>
        )
    }
}

export default Main