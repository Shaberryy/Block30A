import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostTitle({ posts }) {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{posts.title}</h3>
      <button
        onClick={() => {
          navigate(`/${posts.id}`);
        }}
      >
        More Info
      </button>
    </div>
  );
}
