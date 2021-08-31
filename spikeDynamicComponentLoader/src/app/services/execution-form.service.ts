import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExecutionFormService {

  constructor() { }

  getExecutionForm(){
    return {
      "formComponents":
        [
          {
            "type":  "hello-world-one",
            "parameters": [{
              "state": "test1",
              "configuration": "test2"
              }
            ]
          },
          {
            "type":  "hello-world-two",
            "parameters": [{
              "state": "Fly Fishing is fun",
              "configuration": "I love spiking stuff"
              }
            ]
          }
        ]
    }
  }
}
