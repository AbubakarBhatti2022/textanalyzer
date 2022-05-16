import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("uppercase clicked");
        setText("You have Clicked on HandleUpClicked")
    }
    const handleOnChange = (event) =>{
        console.log("onChange");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
  return (
    <div className='my-3'>
         <label style={ {fontWeight: 700, fontSize: "25px"} }> Enter text To Analyze </label>
    <div  className="form-floating ">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={handleOnChange} ></textarea>
  
 <button className="textAnalyzer btn  my-2 mx-1" onClick={handleUpClick}>UpperCase</button>
 <button className="textAnalyzer btn  my-2 mx-1" onClick={handleUpClick}>LowerCase</button>
 <button className="textAnalyzer btn  my-2 mx-1" onClick={handleUpClick}>Capitalize</button>
 <button className="textAnalyzer btn  my-2 mx-1" onClick={handleUpClick}>Clear Text</button>
 <button className="textAnalyzer btn  my-2 mx-1" onClick={handleUpClick}>Copy Text</button>
</div>

    </div>
  );
}
