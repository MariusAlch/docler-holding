import React from "react";
import { Layout } from "src/lib/Layout";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useFormik } from "formik";
import { useStore } from "src/lib/Store";
import { Text } from "src/lib/Text";

const Root = styled.div`
  max-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 16px;

  .form-label {
    font-weight: bold;
  }
`;

// TODO: handle interface colour
// TODO: translate alerts

export function SettingsView() {
  const { settings, language } = useStore();

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
            <Form.Label>
              <Text textId="username" />
            </Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              type="text"
              placeholder="dragonwarrior432..."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Text textId="interfaceColor" />
            </Form.Label>
            <div>
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.interfaceColor === "light"}
                name="interfaceColor"
                type="radio"
                inline
                value="light"
                label={language.getText("light")}
              />
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.interfaceColor === "dark"}
                name="interfaceColor"
                type="radio"
                inline
                value="dark"
                label={language.getText("dark")}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Text textId="clockDisplay" />
            </Form.Label>
            <div>
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.clockFormat === "12hours"}
                name="clockFormat"
                type="radio"
                inline
                value="12hours"
                label={language.getText("hours12")}
              />
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.clockFormat === "24hours"}
                name="clockFormat"
                type="radio"
                inline
                value="24hours"
                label={language.getText("hours24")}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Text textId="sendOnEnter" />
            </Form.Label>
            <div>
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.sendOnEnter === "on"}
                name="sendOnEnter"
                type="radio"
                inline
                value="on"
                label={language.getText("on")}
              />
              <Form.Check
                onChange={formik.handleChange}
                checked={formik.values.sendOnEnter === "off"}
                name="sendOnEnter"
                type="radio"
                inline
                value="off"
                label={language.getText("off")}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Text textId="language" />
            </Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.language}
              name="language"
              as="select"
            >
              <option value="EN">English</option>
              <option value="LT">Lietuvių</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            <Text textId="submit" />
          </Button>
          <Button
            style={{ marginLeft: 8 }}
            variant="secondary"
            type="button"
            onClick={resetSettings}
          >
            <Text textId="resetDefaults" />
          </Button>
        </Form>
      </Root>
    </Layout>
  );
}
