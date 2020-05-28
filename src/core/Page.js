export class Page{
  constructor(params) {
    this.params=params||Date.now().toString()
  }

  getRoot(){
    throw new Error('method get root should be implemented')
  }

  afterRender(){

  }

  destroy(){

  }
}