import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[]= ["Mars soil sample","Plant growth in habitat","Human bone density"];
  experimentsBeingEdited: string="";

  constructor() { }

  ngOnInit() {
  }
  add(Experiments: string) {
    this.experiments.push(Experiments);
  }
  remove(experiments: string) {
    let index = this.experiments.indexOf(experiments);
    this.experiments.splice(index, 1);
  }
  edit(Experiments: string) {
    this.experimentsBeingEdited = Experiments;
  }
  save(name: string, index: number, experiments: string[]) {
    this.experiments[index] = name;
    this.experimentsBeingEdited = "";
  }
 

}
