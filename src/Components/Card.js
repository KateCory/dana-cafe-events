import React from "react";

function Card() {

  const [event, setEvent] = React.useState({ topic: "", description: "", additionalInfo: "" });
  
  const [allEvents, setAllEvents] = React.useState(
    () => JSON.parse(localStorage.getItem("allEvents")) || []);

  React.useEffect(() => {
    localStorage.setItem("allEvents", JSON.stringify(allEvents))
  }, [allEvents])

  function handleChange(e) {
    const name = e.target.name; 
    const value = e.target.value;
    setEvent({ ...event, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if(event.topic && event.description && event.additionalInfo){
        const newEvent = {...event, id: new Date().getTime().toString()} 
        
        setAllEvents([...allEvents, newEvent]);
        setEvent({ topic: "", description: "", additionalInfo: "" })
     }
  };

  function deleteEvent(e, eventId) { 
    e.stopPropagation() // stop propagating that click event to the parent
 
    setAllEvents(prevEvents => prevEvents.filter(event => event.id !== eventId)) // .filter takes a callback function & whatever we return from this callback function needs to be a boolean to incicate whether the current item we're iterating over in the original array should be included in the new array or not 
    }
    


  return (
    <div>
      <h1>Create a New Event</h1>
      <form className="form">
        <input
          type="text"
          id="topic"
          name="topic"
          className="form--topic"
          value={event.topic}
          placeholder="Topic"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          id="description"
          name="description"
          className="form--description"
          value={event.description}
          placeholder="Description"
          onChange={handleChange}
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
            id="additionalInfo"
            name="additionalInfo"
            value={event.additionalInfo}
            className="form--info" 
            placeholder="Additional Info"
            onChange={handleChange}
        ></input>
        <button
            type="submit"
            onClick={handleSubmit}
            className="form--button"
        >CREATE EVENT
        </button>
      </form> 

      {allEvents.map((event) => {
          const {id, topic, description, additionalInfo} = event;
          return (
            <div className="item" key={id}>
              <h4>{topic}</h4>
              <p>{description}</p>
              <p>{additionalInfo}</p>
              <button
                type="submit" // just put submit for now 
                onClick={(e) => deleteEvent(e, event.id) } // event listener, don't get to choose what parameters we're passing
                className="delete--button"
              >Delete
              </button>
            </div>
          );
        })}

    </div>
  );
}

export default Card;

// 6:57:47 - why am I showing you this setup? I want to run handle change regardless of the input, and I would want to get those values depending on which input i'm changing 
// I would also want to effect the person

  // line 8 - setSingleEvent when there is change event, ie when someone types into input 

  // line 16 - target property returns the element where the event occurred

// line 17 - input where we are typing // retrieves the value of that element

// line 20 - dynamic object properties

// 10:43:04 - if you ever need extra parameters other than just the event in your callback function the you're probably going to pass a whole callback function here (go over)

// 11:11:17 - NanoID 