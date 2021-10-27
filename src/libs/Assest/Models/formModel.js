import moment from "moment";
import { BaseModel } from "./BaseModel";

export class formModel extends BaseModel {
  constructor() {
    super();
    this.firstName = "";
    this.lastName = "";
    this.age = "";
    this.gender = "";
    this.birthday = "";
    this.country = "";
    this.city = "";
    this.jobTitle = "";
    this.phone = "";
    this.workType = "";
    this.description = "";
    this.key = "";
  }

  // setValues(data) {
  //   try {
  //     Object.keys(data).map((key) => {
  //       switch (key) {
  //         case "birthday":
  //           this.birthday = moment(data[key]).format("YYYY/MM/DD");
  //           break;
  //         default:
  //           if (this.hasOwnProperty(key)) {
  //             if (data[key] != null) {
  //               this[key] = data[key];
  //             }
  //           }
  //           break;
  //       }
  //     });
  //   } catch (e) {
  //     console.log("setValues Error", e);
  //   }
  // }
}
