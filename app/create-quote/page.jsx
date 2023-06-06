"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateQuote = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    quote: "",
    tag: "",
  });

  const createQuote = async (e) => {
    e.preventDefault();
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      setSubmitting={setSubmitting}
    />
  );
};

export default CreateQuote;
