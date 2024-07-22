import React from "react";

// In Mounting phase
// 1. Contructor is mounted.
// 2. getDerivedStateFromProps
// 3. render function
// 4. componentDidMount

class MountingPhase extends React.Component {
    constructor(){
        super();
        this.state = {
            phase: "mounting",
            method: "constructor"
        }
        // We cannot call setState in constructor because the component in not yet mounted.
        // Without mounting we cannot change the state
        // this.setState({
        //     method: "changed state in constructor"
        // });

        // this.state.method = "changed state in constructor"; This works!
        console.log("I am in constructor");
    }

    static getDerivedStateFromProps(){
        // this.setState({
        //     method: "changed state in getDerivedStateFromProps"
        // });
        console.log("I am inside getDerivedStateFromProps");
    }

    componentDidMount(){
        console.log("I am in componentDidMount");
        setTimeout(() => {
            console.log("I am in set-timeout in componentDidMount");
            this.setState({phase: "mounting", method: "componentDidMount"});
            console.log(this.state);
        }, 5000);
        // console.log("I am in componentDidMount outside of timeout");
        // this.setState({phase: "mounting", method: "componentDidMount 2"});
    }

    render(){
        // The below thing will go in infinite loop
        // Why? because render function will call once always, so if the state
        // changes during mounting phase, then again render function will get called.
        // Again state will change, then again render function gets called.
        // So in short, render function is called everytime state changes.
        // this.setState({
        //     method: "changed state in getDerivedStateFromProps"
        // });
        console.log("I am in render");
        const currentState = this.state;
        return (
            <>
                <h1>You are in {currentState.phase} Phase and currently you are in {currentState.method}</h1>
            </>
        )
    }
}

export default MountingPhase;