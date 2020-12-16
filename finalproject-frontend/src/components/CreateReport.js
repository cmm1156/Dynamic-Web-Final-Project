import React, { useState } from "react";
import axios from "axios";

function CreateReport() {
  const [submitState, setSubmitState] = useState(null);

  function submitReport(e) {
    e.preventDefault();
    const reportTitle = e.currentTarget.reportTitle.value;
    const reportText = e.currentTarget.reportText.value;

    axios
      .get(
        `http://localhost:4000/create-report?reportTitle=${reportTitle}&reportName=${reportText}&`
        // `https://vast-tor-77687.herokuapp.com/create-report?reportTitle=${reportTitle}&reportName=${reportName}&`
      )
      .then(function (response) {
        setSubmitState(true);
      })
      .catch(function (error) {
        console.warn("ERROR_CREATE_REPORT:", error);
      });

    alert("Report Submitted. Thank you");
  }

  if (submitState === false || submitState === null) {
    return (
      <div className="CreateReportInfo">
        <h1>Create Report</h1>
        <form onSubmit={(e) => submitReport(e)}>
          <label>
            Title report
            <br />
            <input type="text" name="reportTitle" placeholder="Title" />
            <br />
            Issue
            <br />
            <textarea
              type="text"
              name="reportText"
              placeholder="Write your issue"
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="CreateReportInfo">
        <h1>Thank you</h1>
        <a
          className="NewReport"
          onClick={(e) => {
            e.preventDefault();
            setSubmitState(false);
          }}
        >
          Submit Another Report
        </a>
      </div>
    );
  }
}

export default CreateReport;
