import React, { useState } from "react";

function Insert() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  function Create_data() {

    fetch(`http://localhost:3000/blog?Title=${Title}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {

          alert("Title already exists!");
        } else {

          let newData = { Title, Description };

          fetch('http://localhost:3000/blog', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
          })
            .then(res => res.json())
            .then(() => {
              alert('Blog Added Successfully');
            });
        }
      });
  }

  return (
    <div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" onChange={(e) => setDescription(e.target.value)} />
      <input type="button" value="submit" onClick={Create_data} />
    </div>
  );
}

export default Insert;
