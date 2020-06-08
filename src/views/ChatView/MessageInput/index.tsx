import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useStore } from "src/lib/Store";
import { Text } from "src/lib/Text";

const Root = styled.form`
  display: flex;
  padding: 8px;
  border-top: 1px solid ${(p) => p.theme.plainGray};
`;

const StyledButton = styled(Button)`
  margin-left: 8px;
`;

export function MessageInput() {
  const { messages, settings } = useStore();
  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: ({ content }) => {
      const trimmedMessage = content.trim();
      if (trimmedMessage === "") return;
      messages.sendMessage(trimmedMessage);
      formik.setValues({ content: "" });
    },
  });

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (settings.settings.sendOnEnter === "off") return;
    if (e.ctrlKey && e.keyCode == 13) formik.submitForm();
  }

  return (
    <Root onSubmit={formik.handleSubmit}>
      <Form.Control
        name="content"
        style={{ resize: "none" }}
        as="textarea"
        onKeyDown={handleKeyDown}
        onChange={formik.handleChange}
        value={formik.values.content}
      />
      <StyledButton type="submit">
        <Text textId="send" />
      </StyledButton>
    </Root>
  );
}
