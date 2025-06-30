import React from 'react';


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
  console.log('render component',id,value);
  const handleEditorChange = ({currentData,currentValue,newData,newValue,name,path}:UpdateFunctionProps):any => {
    if (onChange) {
      console.log('new data got',currentData,currentValue,newData,newValue,name,path);
      onChange({...value,data:newData});
    }
    return newData
  };

  return (
    <div id={id}>
      <JsonEditor 
      data={ value || {}}
      onUpdate={handleEditorChange}
      ></JsonEditor>
    </div>
  );
};

export default JsonEditorReact;