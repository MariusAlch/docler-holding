import React from "react";
import { Layout } from "src/lib/Layout";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useFormik } from "formik";
import { useStore } from "src/lib/Store";

const Root = styled.div`
  max-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 16px;

  .form-label {
    font-weight: bold;
  }
`;

// TODO: handle time format settings
// TODO: handle interface colour
// TODO: handle send on CTRL + ENTER
// TODO: handle language

export function SettingsView() {
  const { settings } = useStore();

  const formik = useFormik({
    initialValues: settings.settings,
    onSubmit: (values) => {
      if (values.username.length < 5) {
        return alert("Username cannot be less than 5 letters");
      }

      settings.setSettings(values);
      alert("Settings updated!");
    },
  });

  function resetSettings() {
    settings.resetSettings();
    formik.setValues(settings.settings);
    alert("Settings were reset!");
  }

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
              <option value="EN">English</option>
              <option value="LT">Lithuanian</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button
            style={{ marginLeft: 8 }}
            variant="secondary"
            type="button"
            onClick={resetSettings}
          >
            Reset to defaults
          </Button>
        </Form>
      </Root>
    </Layout>
  );
}
