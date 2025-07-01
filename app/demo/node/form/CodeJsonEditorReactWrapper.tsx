import React, { useEffect, useState } from 'react';


import { JsonEditor, githubDarkTheme, type JsonData, type UpdateFunctionProps } from 'json-edit-react'
type ValueData = string | number | boolean;
type CollectionKey = string | number;

interface OnChangeFuncProps {
  currentData: JsonData;
  newValue: ValueData;
  currentValue: ValueData;
  name: CollectionKey;
  path: CollectionKey[];
}

export interface JsonInputProps {
  id?: string;
  value?: any;
  onChange?: (value: any) => void;
}

const JsonEditorReact: React.FC<JsonInputProps> = ({ id, value, onChange }) => {
  const [jsonValue, setJsonValue] = useState<JsonData>();
  useEffect(() => {
    setJsonValue(value)
    console.log('effect,setJsonValue(value)',value);
  }, [value])
  const handleEditorChange = ({ currentData, currentValue, newData, newValue, name, path }: UpdateFunctionProps): any => {
    if (onChange) {
      console.log('new data got', currentData, currentValue, newData, newValue, name, path);
      setJsonValue(newData as JsonData);
      onChange({ ...newData ?? {} as Object });
    }
    return newData
  };

  return (
    <div id={id}>
      <JsonEditor
        data={jsonValue}
        rootFontSize={10}
        rootName=''
        onUpdate={handleEditorChange}
      ></JsonEditor>
    </div>
  );
};

export default JsonEditorReact;