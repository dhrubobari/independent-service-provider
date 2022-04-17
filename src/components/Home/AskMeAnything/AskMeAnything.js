import React from "react";
import "./AskMeAnything.css";

const AskMeAnything = () => {
  return (
    <div>
      <h3 className="text-center mt-5">Do you have any question?</h3>
      <div class="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" class="btn btn-outline-primary">
          Ask
        </button>
      </div>
    </div>
  );
};

export default AskMeAnything;
