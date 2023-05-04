import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Cheesecake Frutas Vermelhas",
      foodPrice:20,
      foodImg:"https://cdn.pixabay.com/photo/2019/07/30/01/58/cheesecake-4371777_1280.jpg"
    },
    {
      id:2,
      foodName:"Mousse de Chocolate",
      foodPrice:25,
      foodImg:"https://images.pexels.com/photos/14326242/pexels-photo-14326242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:3,
      foodName:"Cupcake de Chocolate",
      foodPrice:15,
      foodImg:"https://images.pexels.com/photos/1775285/pexels-photo-1775285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:4,
      foodName:"Pudim de Leit",
      foodPrice:10,
      foodImg:"https://images.pexels.com/photos/11223911/pexels-photo-11223911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:5,
      foodName:"Brownie",
      foodPrice:8,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodPrice:19,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]
}
