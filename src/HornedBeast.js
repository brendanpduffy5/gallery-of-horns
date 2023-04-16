import React from "react";

class HornedBeast extends React.Component{
    render(){

        // console.log(this.props)

        return(
            <>
                <p>{this.props.name}</p>
                <p>{this.props.imageURL}</p>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;
