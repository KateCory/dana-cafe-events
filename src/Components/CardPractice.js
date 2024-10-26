import React from "react";

function Card() {
  const [topic, setTopic] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [additionalInfo, setAdditionalInfo] = React.useState("");
  const [socialEvents, setSocialEvents] = React.useState([]);

    function handleSubmit(event) { 
        event.preventDefault();
     
        if(topic && description) {
            const singleEvent = { id:new Date().getTime().toString(), topic, description, additionalInfo } // {topic: topic, description: description}
            console.log(singleEvent)
            setSocialEvents((socialEvents) => { //socialEvents is current value in state
                return [...socialEvents, singleEvent]
            });
    
            setTopic("");
            setDescription("");
            setAdditionalInfo("");
           
        } else { 
            console.log('empty values');
        }
    };

  return (
    <div>
      <h1>Create a New Event</h1>
      <form className="form">
        <input
          type="text"
          id="form--topic"
          className="form--topic"
          value={topic}
          placeholder="Topic"
          onChange={(event) => {setTopic(event.target.value)}}
        ></input>
        <input
          type="text"
          id="form--description"
          className="form--description"
          value={description}
          placeholder="Description"
          onChange={(event) => {setDescription(event.target.value)}}
        ></input>
        <input
          className="form--starts" // some logic to control input type & format, text="number" ? And how about the time?
          placeholder="dd/mm/yyyy --:-- "
        ></input>
        <input className="form--ends" placeholder="dd/mm/yyyy --:--"></input>
        <input 
            className="form--location" // link to Google maps?
            placeholder="Location">
        </input> 
        <input 
            type="text"
            id="form--addInfo"
            value={additionalInfo}
            className="form--info" 
            placeholder="Additional Info"
            onChange={(event) => {setAdditionalInfo(event.target.value)}}
        >
        </input>
        <button
            type="submit"
            onClick={handleSubmit}
            className="form--button"
        >
          CREATE EVENT
        </button>
      </form> 
      {
        socialEvents.map((event) => {
            const {id, topic, description, additionalInfo} = event
            return <div className="item" key={id}>
                <h4>{topic}</h4>
                <p>{description}</p>
                <p>{additionalInfo}</p>
            </div>
        })
      } 
    </div>
  );
}

// display the all of the social events 

export default Card;

// create static form
// making inputs dynamic - creating state and creating value props equal to state
// as soon as state changes - onChange event function to handle this
// come back to start & end date inputs and also location input
// CREATE EVENT button 
// can setup a onSubmit event listener to the form element or add onClick button




// make api call to Eventbrite

//////////////////////////

// when a component first renders, it does twice? Check that 

// event.preventDefault() - stops react refreshing the page when we press submit button

// set up state values - add two attributes in the input value, that will reference that stored value
// onChange event listener will fire the callback function each and every time we type something in the input 

// later
   // function handleChange(event) {
    // // event object? console log again
    // const { value } = event.target;
    // setTopic(value);
    // setDescription(value);
    // setAdditionalInfo(value); 
    // }

    // bug!! I thought the above wouldn't work..

// later
// npm package UUID? & import it and set up unique id