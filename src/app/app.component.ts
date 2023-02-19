import { Component } from '@angular/core';
import * as shape from 'd3-shape';
export interface CodeModel {
  language: string;
  value: any;
  uri: string;

  dependencies?: Array<string>;
  schemas?: Array<{
    uri: string;
    schema: Object;
  }>;
}

const model = {
  name: 'es',
  value: 'bff-seguros',
  uri: '',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = 'vs-dark';
  curve = shape.curveStep;
  flag = false;

  codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: `{
      "curve": "shape.curveStep",
      "view": [800, 550],
      "links": [
              {
                "id": "a",
                "source": "first",
                "target": "second",
                "label": "is parent of"
              },
              {
                "id": "b",
                "source": "first",
                "target": "c1",
                "label": "custom label"
              },
              {
                "id": "d",
                "source": "first",
                "target": "c2",
                "label": "custom label"
              },
              {
                "id": "e",
                "source": "c1",
                "target": "d",
                "label": "first link"
              },
              {
                "id": "f",
                "source": "c1",
                "target": "d",
                "label": "second link"
              }
            ],
      "nodes": 
            [
              {
                "id": "first",
                "label": "seguros"
              },
              {
                "id": "second",
                "label": "B"
              },
              {
                "id": "c1",
                "label": "C1"
              },
              {
                "id": "c2",
                "label": "C2"
              },
              {
                "id": "d",
                "label": "D"
              }
            ],
      "clusters": [
        {
          "id": "third",
          "label": "Cluster nodesss",
          "childNodeIds": ["c1", "c2", "d"]
        }
      ],
      "layout": "dagreCluster"
    }`,
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChanged(value: any) {
    this.flag= true;
    console.log('CODE', value);
    this.codeModel.value = JSON.parse(this.codeModel.value).nodes;
    console.log(this.codeModel.value.nodes);
  }
}

