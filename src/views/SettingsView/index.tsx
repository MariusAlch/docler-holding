import React from "react";
import { Layout } from "src/lib/Layout";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

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
  return (
    <Layout>
      <Root>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="dragonwarrior432..." />
          </Form.Group>
          <Form.Group>
            <Form.Label>Interface colour</Form.Label>
            <div>
              <Form.Check name="interfaceColor" type="radio" inline label="Light" />
              <Form.Check name="interfaceColor" type="radio" inline label="Dark" />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Clock display</Form.Label>
            <div>
              <Form.Check name="clockFormat" type="radio" inline label="12 hours" />
              <Form.Check name="clockFormat" type="radio" inline label="24 hours" />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Send messages on CTRL+ENTER</Form.Label>
            <div>
              <Form.Check name="interfaceColor" type="radio" inline label="On" />
              <Form.Check name="interfaceColor" type="radio" inline label="Off" />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Control as="select">
              <option>English</option>
              <option>Lithuanian</option>
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
