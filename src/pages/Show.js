import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const feedback = props.feedback;
  const fedback = feedback.find((p) => p._id === id);
  // state for form
  const [editForm, setEditFrom] = useState(fedback);
  const handleChange = (event) => {
    setEditFrom({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    props.updateFeedback(editForm, fedback._id);
  };

  const removeFeedback = () => {
    props.deleteFeedback(fedback._id);
    props.history.push("/Feedback");
  };
  return (
    <div className="data">
      <div className="data-mother-div">
        <div className="data-div">
          <h1>{fedback.date}</h1>
          <h2>{fedback.name}</h2>
          {fedback.role ? <h2>{fedback.role}</h2> : <h2>trainee</h2>}
          <h2>{fedback.feedback}</h2>
          <h2>{fedback.solution}</h2>
        </div>
      </div>
      <div className="edit-mother-div">
        <form className="edit-form" onSubmit={handleSubmit()}>
          <h1>Edit this feedback</h1>
          <input
            className="edit-input"
            type="text"
            name="date"
            value={editForm.date}
            onChange={handleChange}
          />
          <input
            className="edit-input"
            type="text"
            name="name"
            value={editForm.name}
            onChange={handleChange}
          />
          <input
            className="edit-input"
            type="text"
            name="role"
            value={editForm.role}
            onChange={handleChange}
          />
          <input
            className="edit-input"
            type="text"
            name="feedback"
            value={editForm.feedback}
            onChange={handleChange}
          />
          <input
            className="edit-input"
            type="text"
            name="solution"
            value={editForm.solution}
            onChange={handleChange}
          />
          <input className="edit-btn" type="submit" value="Update" />
        </form>
        <button
          id="dlt-btn"
          className="edit-btn"
          onClick={() => removeFeedback(fedback._id)}
        >
          Delete this Feedback
        </button>
      </div>
    </div>
  );
}

export default Show;
