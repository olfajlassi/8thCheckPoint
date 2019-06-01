import React, {Component} from 'react';

const  values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const AppBox= {
    float: 'left',
    textAlign: 'center'
}
const hide= {
    display: 'none'
  }

class Carre extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            val:"",
            multi : ""
        };
    }

    factorial (x) {
      let fact= 1;
      if (x==0 || x==1)
          return 1;
          
      for (let i=2; i<=x; i++)
          fact= fact*i;
      return fact;          
    }

    carre = ev => {

        let x = document.getElementById('result');
        if (x.style.display === "none") {
          x.style.display = "block";
        } 

        this.setState({
            val: ev.currentTarget.value,
            multi: this.factorial(ev.currentTarget.value)
        });
    };

  
    render(){
      return (
          <div>{
            values.map (buttonId => { 
                return(
                <div style={AppBox}>
                    <div>
                    <button key={buttonId} value={buttonId} onClick={e=>this.carre(e)}>{buttonId}</button>
                    </div>
                    
                </div>
                )
            })
          }
          <div>
            <h3 id="result" style= {hide}>Le factoriel de {this.state.val} est: {this.state.multi}</h3>
          </div>
        </div>
      )
    }
}
export default Carre;