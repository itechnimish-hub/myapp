import React, { useState } from "react";
import axios from "axios";
                                                                    
function Insert() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const Create_data = async () => {
    try {
      // Check if title already exists
      const response = await axios.get(
        `http://localhost:3000/blog?Title=${Title}`
      );

      if (response.data.length > 0) {
        alert("Title already exists!");
      } else {
        const newData = { Title, Description };

        await axios.post(
          "http://localhost:3000/blog",
          newData
        );

        alert("Blog Added Successfully");

        setTitle("");
        setDescription("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <input
        type="text"

        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />

      <input
        type="text"

        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Description"
      />

      <input
        type="button"
        value="Submit"
        onClick={Create_data}
      />
    </div>
  );
}

export default Insert;