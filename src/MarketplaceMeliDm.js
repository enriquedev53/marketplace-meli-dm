import { LitElement } from 'lit';
import { BGADPRequestGet } from './BGADPRequestGet.js';

export class MarketplaceMeliDm extends LitElement {
  static properties = {
    path: { type: Object }
  };

  constructor() {
    super();
    this.path = 'sites/MLM';
  }

  async executeRequest() {
    try {
      const response = await BGADPRequestGet(this.path);
      this.mapInformation(response);
    } catch (error) {
      
    }
  }

  mapInformation(response) {
    console.log(response); 
  }
}
