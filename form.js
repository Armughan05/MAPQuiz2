import App from "../App";

const form= () =>{
    const (formdata, setFormdata)= useState({
    title: " ",
    date: " ",
    amount: " ",
});

formdata= {Title, date, amount};

onChange= setFormdata= (e)=>
({e:title, e:amount})

}
return(
    <div>
       <div><label classNme="Title">Title</label>
        <input type='text'></input></div> 
       <div><label className="Amount">Amount</label>
        <input type='int'></input></div>


    <button>
        <label className="Add">Add Lead</label>
    </button>
    
     </div>
)

export default form;