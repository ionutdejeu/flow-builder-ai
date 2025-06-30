import React from 'react';


import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
 
export interface PriceValue {
  content: string;
}

export interface JsonInputProps {
  id?: string;
  value?: PriceValue;
  onChange?: (value: PriceValue) => void;
}

const JsonEditor: React.FC<JsonInputProps> = ({ id, value, onChange }) => {
  const handleEditorChange = (_editor: any, _data: any, newValue: string) => {
    if (onChange) {
      onChange({ content: newValue });
    }
  };

  return (
    <div id={id}>
      <CodeMirror
        value={value?.content || ''}
        options={{
          mode: 'json',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={handleEditorChange}
      />
    </div>
  );
};

export default JsonEditor;