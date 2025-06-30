import React, { useState, useContext } from 'react';
import FlowBuilder, {
  NodeContext,
  type INode,
  type IRegisterNode,
} from '../../../flow-builder';
import ConfigForm from './ConfigForm';
import {
  DrawerComponent,
  PopconfirmComponent,
  PopoverComponent,
} from '../../antd';

import './index.css';
import CodeMirrorForm from './CodeMirrorForm';
import { JsonEditor, githubDarkTheme, type JsonData, type UpdateFunctionProps } from 'json-edit-react'
 
const StartNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="start-node">{node.name}</div>;
};

const EndNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

const NodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`other-node ${node.configuring ? 'node-configuring' : ''} ${node.validateStatusError ? 'node-status-error' : ''
        }`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

const NodeJsonDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`other-node ${node.configuring ? 'node-configuring' : ''} ${node.validateStatusError ? 'node-status-error' : ''
        }`}
    >
      {node.data ? node.data.name : node.name}
      <JsonEditor 
        data={node.data}
        viewOnly={true}
        rootName=''
        rootFontSize={10}
      ></JsonEditor>
    </div>
  );
};

const ConditionNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`condition-node ${node.configuring ? 'node-configuring' : ''
        } ${node.validateStatusError ? 'node-status-error' : ''}`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

const JsonNode: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`condition-node ${node.configuring ? 'node-configuring' : ''
        } ${node.validateStatusError ? 'node-status-error' : ''}`}
    >
      {node.data ? JSON.stringify(node.data) : node.name}
    </div>
  );
};


const registerNodes: IRegisterNode[] = [
  {
    type: 'start',
    name: 'Start Node',
    displayComponent: StartNodeDisplay,
    isStart: true,
  },
  {
    type: 'end',
    name: 'End Node',
    displayComponent: EndNodeDisplay,
    isEnd: true,
  },
  {
    type: 'json',
    name: 'Json Node',
    displayComponent: NodeJsonDisplay,
    configComponent: CodeMirrorForm
  },
  {
    type: 'node',
    name: 'Display Node',
    displayComponent: NodeDisplay,
    configComponent: ConfigForm,
  },
  {
    type: 'condition',
    name: 'Condition Node',
    displayComponent: ConditionNodeDisplay,
    configComponent: ConfigForm,
  },
  {
    type: 'branch',
    name: 'Branch Node Condition',
    conditionNodeType: 'condition',
  },
  {
    type: 'loop',
    name: 'Loop node',
    displayComponent: NodeDisplay,
    isLoop: true,
  },
];

const defaultNodes = [
  {
    id: 'node-0d9d4733-e48c-41fd-a41f-d93cc4718d97',
    type: 'start',
    name: 'start',
    path: ['0'],
  },
  {
    id: 'node-b2ffe834-c7c2-4f29-a370-305adc03c010',
    type: 'branch',
    name: 'Branch',
    children: [
      {
        id: 'node-cf9c8f7e-26dd-446c-b3fa-b2406fc7821a',
        type: 'condition',
        name: 'Condition',
        children: [
          {
            id: 'node-f227cd08-a503-48b7-babf-b4047fc9dfa5',
            type: 'node',
            name: 'Node',
            path: ['1', 'children', '0', 'children', '0'],
          },
        ],
        path: ['1', 'children', '0'],
      },
      {
        id: 'node-9d393627-24c0-469f-818a-319d9a678707',
        type: 'condition',
        name: 'Condition',
        children: [],
        path: ['1', 'children', '1'],
      },
    ],
    path: ['1'],
  },
  {
    id: 'node-972401ca-c4db-4268-8780-5607876d8372',
    type: 'node',
    name: 'Node',
    path: ['2'],
  },
  {
    id: 'node-972401ca-c4db-4268-8780-5607876d8272',
    type: 'json',
    name: 'Json Node Test',
    data: {
      "default": [
        "krisztian.papp@qubiz.com"
      ],
      "rbm-beta": [
        "ionut.sabau@qubiz.com"
      ],
      "hayu": [
      ]
    },
    path: ['2'],
  },
  {
    id: 'node-b106675a-5148-4a2e-aa86-8e06abd692d1',
    type: 'end',
    name: 'end',
    path: ['3'],
  },
];

export const NodeForm = () => {
  const [nodes, setNodes] = useState<INode[]>(defaultNodes);

  const handleChange = (nodes: INode[]) => {
    console.log('nodes change', nodes);
    setNodes(nodes);
  };

  return (
    <>
      <FlowBuilder
        nodes={nodes}
        onChange={handleChange}
        registerNodes={registerNodes}
        historyTool
        zoomTool
        DrawerComponent={DrawerComponent}
        PopoverComponent={PopoverComponent}
        PopconfirmComponent={PopconfirmComponent}
      />

    </>
  );
};

