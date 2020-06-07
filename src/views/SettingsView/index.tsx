import React from "react";
import { Layout } from "src/lib/Layout";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useFormik } from "formik";

const Root = styled.div`
  max-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 16px;

  .form-label {
    font-weight: bold;
  }
`;

export function SettingsView() {
  const formik = useFormik({
    initialValues: {
      interfaceColor: "light",
      username: "helloWorld",
      clockFormat: "12hours",
      sendOnEnter: "on",
      language: "english",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <Root>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              type="text"
              placeholder="dragonwarrior432..."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Interface colour</Form.Label>
            <div>
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.interfaceColor === "light"}
                name="interfaceColor"
                type="radio"
                inline
                value="light"
                label="Light"
              />
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.interfaceColor === "dark"}
                name="interfaceColor"
                type="radio"
                inline
                value="dark"
                label="Dark"
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Clock display</Form.Label>
            <div>
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.clockFormat === "12hours"}
                name="clockFormat"
                type="radio"
                inline
                value="12hours"
                label="12 hours"
              />
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.clockFormat === "24hours"}
                name="clockFormat"
                type="radio"
                inline
                value="24hours"
                label="24 hours"
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Send messages on CTRL+ENTER</Form.Label>
            <div>
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.sendOnEnter === "on"}
                name="sendOnEnter"
                type="radio"
                inline
                value="on"
                label="On"
              />
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.sendOnEnter === "off"}
                name="sendOnEnter"
                type="radio"
                inline
                value="off"
                label="Off"
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.language}
              name="language"
              as="select"
            >
              <option value="english">English</option>
              <option value="lithuanian">Lithuanian</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Root>
    </Layout>
  );
}
