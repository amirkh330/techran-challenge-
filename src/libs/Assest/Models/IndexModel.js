import {BaseModel} from "./BaseModel";


export class IndexModel extends BaseModel {

  constructor() {
    super();
    this.id = ''
    this.image = ''
    this.name = ''
    this.address = ''
    this.rate_average = ''
    this.rate_count = ''
    this.products = []

  }

  setValues(data) {
    try {
      Object.keys(data).map(key => {
        switch (key) {
          case 'products':
            const items = []
            data[key].map(i => {
              const prModel = new ProductModel()
              prModel.setValues(i)
              items.push(prModel)
            })
            this.products = items
            break
          default:
            if (this.hasOwnProperty(key)) {
              if (data[key] != null) {
                (this[key] = data[key])
              }
            }
            break
        }
      })
    } catch (e) {
      console.log('setValues Error', e)
    }
  }
}