import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        console.log("🚀 Starting link generation...");
        console.log("📝 Link to shorten:", link);
        console.log("🔑 Current token:", auth ? "EXISTS" : "NO TOKEN");
        const data = await request(
          "/api/link/generate",
          "POST",
          {
            from: link,
          },
          { Authorization: `Bearer ${auth.token}` }
        );
        navigate(`/detail/${data.link._id}`);
        console.log("data.link._ud:", data.link._id);
        console.log("✅ Link generated successfully:", data.link);
      } catch (error) {
        console.log("❌ Error during link generation:", error);
      }
    }
  };

  return (
    <div className="row">
      <div className="col s8 offset-s3" style={{ paddingTop: "2rem" }}>
        <h1>Create</h1>
        <input
          //   className="yellow-input"
          value={link}
          id="link"
          type="text"
          name="link"
          onChange={(event) => setLink(event.target.value)}
          onKeyDown={pressHandler}
        />
        <label htmlFor="link">Enter a link</label>
      </div>
      <button onClick={pressHandler}>pressHandler</button>
    </div>
  );
};
