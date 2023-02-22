import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme = 'vs-dark';
  curve = shape.curveCardinal;
  flag = false;
  links: any = [];
  nodes: any = [];
  clusters: any = [];

  codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: `{
      "curve": "shape.curveStep",
      "view": [1000, 1000],
      "links": [
              {
                "id": "a",
                "source": "primero",
                "target": "segundo",
                "label": "https services"
              },
              {
                "id": "b",
                "source": "primero",
                "target": "tercero",
                "label": "https services"
              },
              {
                "id": "quinto",
                "source": "primero",
                "target": "cuarto",
                "label": "https services"
              },
              {
                "id": "e",
                "source": "primero",
                "target": "quinto",
                "label": "https services"
              },
              {
                "id": "f",
                "source": "primero",
                "target": "sexto",
                "label": "https services"
              },
{
                "id": "g",
                "source": "quinto",
                "target": "septimo",
                "label": "sql"
              },
{
                "id": "x",
                "source": "sexto",
                "target": "septimo",
                "label": "sql"
              },
{
                "id": "t",
                "source": "cuarto",
                "target": "septimo",
                "label": "sql"
              },
{
                "id": "xx",
                "source": "tercero",
                "target": "septimo",
                "label": "sql"
              },
{
                "id": "ge",
                "source": "segundo",
                "target": "septimo",
                "label": "sql"
              },
{
                "id": "gee",
                "source": "septimo",
                "target": "octavo",
                "label": "bus"
              }
            ],
      "nodes": 
            [
              {
                "id": "primero",
                "label": "APP"
              },
              {
                "id": "segundo",
                "label": "BFF-AUTENTICACION"
              },
              {
                "id": "tercero",
                "label": "BFF-HOME"
              },
              {
                "id": "cuarto",
                "label": "BFF-TRANSFERENCIAS"
              },
              {
                "id": "quinto",
                "label": "API-CREDITOS"
              },
              {
                "id": "sexto",
                "label": "API-MOVIMIENTOS"
              },
              {
                "id": "septimo",
                "label": "API-CONNECT"
              },
              {
                "id": "octavo",
                "label": "BBDD"
              }
            ],
      "clusters": [
        {
          "id": "bffs",
          "label": "bff services",
          "childNodeIds": ["segundo", "tercero", "cuarto"]
        },
        {
          "id": "apis",
          "label": "api services",
          "childNodeIds": ["quinto", "sexto"]
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

  ngOnInit(): void {
    this.links = this.parseJson(this.codeModel.value).links;
    this.nodes = this.parseJson(this.codeModel.value).nodes;
    this.clusters = this.parseJson(this.codeModel.value).clusters;
  }

  addElement() {
    // this.codeModel.value = [
    //   ...this.codeModel.value.links,
    //   {
    //     id: 'ddddd',
    //     source: 'ddddd',
    //     target: 'ddddd',
    //     label: 'second cdddd',
    //   },
    // ];
    this.nodes.push({
      id: 'w',
      label: 'W',
    });
    console.log('this.nodes...');
    console.log(this.nodes);
    console.log('this.nodes...');
  }

  onCodeChanged(value: any) {
    this.flag = true;
    console.log('CODE', value);
    const data = JSON.parse(value);
    console.log('data...');
    console.log(data);
    console.log('data...');

    this.links = data.links;
    this.nodes = data.nodes;
    this.clusters = data.clusters;
  }

  parseJson(arg0: any): any {
    const fff = JSON.parse(arg0);
    console.log('fff...');
    console.log(fff);
    console.log('fff...');
    return fff;
  }
}
