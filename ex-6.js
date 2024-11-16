const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    return `new car collection is : ${carCollection}`;
  } else if (carCollection.indexOf(carBrand) >= 0) {
    let index = carCollection.indexOf(carBrand);
    return (
      `${carBrand} has already existed in the ${index + 1} ` +
      "position of car collection."
    );
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.
console.log(updateCarCollection("benz")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
console.log(updateCarCollection("honda")); //toyota has already existed in the 1 position of car collection.
