import React, { useContext } from 'react';
import { BuilderContext, useDrawer } from '../../../flow-builder';
import { Form, Button, Input } from 'antd';
import JsonEditor from './CodeMirrorFormControlWrapper';
import JsonEditorReact from './CodeJsonEditorReactWrapper';

const CodeMirrorForm: React.FC = () => {
  const { selectedNode: node } = useContext(BuilderContext);

  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      save?.(values);
    } catch (error) {
      const values = form.getFieldsValue();
      save?.(values, !!error);
    }
  };
 
  return (
    <div>
      <Form form={form} initialValues={{ ...node }}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="data" label="Data" rules={[{ required: true }]}>
          <JsonEditorReact value={node?.data}></JsonEditorReact>
        </Form.Item>
      </Form>
      <div>
        <Button onClick={cancel}>Cancel</Button>
        <Button type="primary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default CodeMirrorForm;
