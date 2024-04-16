import React from "react";
function Form() {
  return (
    <div>
      <form>
        <h1>Informació Estudiant</h1>
        <label>Nom:</label>
        <input type="text" name="fname" />
        <br />
        <label>Cognom:</label>
        <input type="text" name="lname" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Form;