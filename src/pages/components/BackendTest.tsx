import React, { useEffect } from "react";

const BackendTest = () => {
  useEffect(() => {
    // Ye backend se ping karega
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(data => console.log("Backend response:", data))
      .catch(err => console.error("Backend connection error:", err));
  }, []);

  return (
    <div>
      <h1>Check Backend Connection</h1>
      <p>Open console to see backend response.</p>
    </div>
  );
};

export default BackendTest;
