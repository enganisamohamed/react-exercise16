import { useReducer } from "react";
import { formReducer, initialState } from "./formReducer";

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <h1>Multi-Step Registration</h1>

      {/* STEP 1 */}
      {state.step === 1 && (
        <>
          <h2>Step 1: Profile</h2>

          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
          <br />

          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
          <br />

          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {/* STEP 2 */}
      {state.step === 2 && (
        <>
          <h2>Step 2: Contact</h2>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <br />

          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />
          <br />

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {/* STEP 3 */}
      {state.step === 3 && (
        <>
          <h2>Step 3: Review</h2>

          <p><b>First Name:</b> {state.firstName}</p>
          <p><b>Last Name:</b> {state.lastName}</p>
          <p><b>Email:</b> {state.email}</p>
          <p><b>Phone:</b> {state.phone}</p>

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Back
          </button>

          <button
            onClick={() => {
              alert("Registration Successful!");
              dispatch({ type: "RESET" });
            }}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;