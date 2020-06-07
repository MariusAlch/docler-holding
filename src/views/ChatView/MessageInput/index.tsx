import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { plainGray } from "src/lib/colors";

const Root = styled.form`
  display: flex;
  padding: 8px;
  border-top: 1px solid ${plainGray};
`;

const StyledButton = styled(Button)`
  margin-left: 8px;
`;

export function MessageInput() {
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Root onSubmit={formik.handleSubmit}>
      <Form.Control
        name="message"
        style={{ resize: "none" }}
        as="textarea"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <StyledButton type="submit">Send</StyledButton>
    </Root>
  );
}
