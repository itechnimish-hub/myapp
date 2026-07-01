import React, { useState } from "react";
import AdminControls from "./AdminControls";
import EditorControls from "./EditorControls";
import GuestView from "./GuestView";

export default function AdminPanel() {
  const [userRole, setUserRole] = useState("fd"); // Change this to 'admin', 'editor', or 'guest' to test different views
  // console.log(userRole);
  let controlPanel;

  if (userRole === 'admin') {
    controlPanel = <AdminControls />;
  } else if (userRole === 'editor') {
    controlPanel = <EditorControls />;
  } else {
    controlPanel = <GuestView />;
  }

  return (
    <div className="panel-container">
      <h1>Management System</h1>
      {controlPanel}
    </div>
  );
}