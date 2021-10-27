export class BaseModel {

  setValues(data) {
    try {
      Object.keys(data).map(key => {
        if (this.hasOwnProperty(key)) {
          if (data[key] != null) {
            (this[key] = data[key])
          }
        }
      })
    } catch (e) {
      console.log('SetValues Error', e)
    }
  }


  setVal(key, value) {
    try {
      if (this.hasOwnProperty(key)) {
        this[key] = value
      }
    } catch (e) {
      console.log('SetVal Error', e)
    }
  }


}