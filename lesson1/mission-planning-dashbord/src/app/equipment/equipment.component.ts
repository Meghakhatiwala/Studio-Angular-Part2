import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: string[]=["Habitat dome","Drones","Food containers","Oxygen tanks"];
  equipmentBeingEdited: string = "";
 

  constructor() { }

  ngOnInit() {
  }

  add(Equipment: string) {

    if (this.equipments.indexOf(Equipment) > 0) {
      //Do nothing
    } else {
    this.equipments.push(Equipment);
    }
  }

  remove(equipment: string) {
    let index = this.equipments.indexOf(equipment);
    this.equipments.splice(index, 1);
  }
  
  edit(Equipment: string) {
    this.equipmentBeingEdited = Equipment;
  }
 
 save(name: string, index: number, equipments: string[]) {
   this.equipments[index] = name;
   this.equipmentBeingEdited = "";
 }


}
