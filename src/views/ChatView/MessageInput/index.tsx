import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { plainGray } from "src/lib/colors";
import { useStore } from "src/lib/Store";

const Root = styled.form`
  display: flex;
  padding: 8px;
  border-top: 1px solid ${plainGray};
`;

const StyledButton = styled(Button)`
  margin-left: 8px;
`;

export function MessageInput() {
  const { messages } = useStore();
  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: ({ content }) => {
      if (!content.trim()) return;
      messages.sendMessage(content);
      formik.setValues({ content: "" });
    },
  });

  return (
    <Root onSubmit={formik.handleSubmit}>
      <Form.Control
        name="content"
        style={{ resize: "none" }}
        as="textarea"
        onChange={formik.handleChange}
        value={formik.values.content}
      />
      <StyledButton type="submit">Send</StyledButton>
    </Root>
  );
}
