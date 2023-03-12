/* # async-race-api
Api for Rolling Scopes School task "Async Race".

## Setup and Running

- Use `node 14.x` or higher.
- Clone this repo: `$ git clone https://github.com/mikhama/async-race-api.git`.
- Go to downloaded folder: `$ cd async-race-api`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm start`.
- Now you can send requests to the address: `http://127.0.0.1:3000`.

## Usage

- **Garage**
    - [Get Cars](https://github.com/mikhama/async-race-api#get-cars)
    - [Get Car](https://github.com/mikhama/async-race-api#get-car)
    - [Create Car](https://github.com/mikhama/async-race-api#create-car)
    - [Delete Car](https://github.com/mikhama/async-race-api#delete-car)
    - [Update Car](https://github.com/mikhama/async-race-api#update-car)
- **Engine**
    - [Start / Stop Car's Engine](https://github.com/mikhama/async-race-api#start--stop-cars-engine)
    - [Switch Car's Engine to Drive Mode](https://github.com/mikhama/async-race-api#switch-cars-engine-to-drive-mode)
- **Winners**
    - [Get Winners](https://github.com/mikhama/async-race-api#get-winners)
    - [Get Winner](https://github.com/mikhama/async-race-api#get-winner)
    - [Create Winner](https://github.com/mikhama/async-race-api#create-winner)
    - [Update Winner](https://github.com/mikhama/async-race-api#update-winner)

**Get Cars**
----
Returns json data about cars in a garage.

<details>

* **URL**

    /garage

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Optional:**
 
    `_page=[integer]`
  
    `_limit=[integer]`

    If `_limit` param is passed api returns a header `X-Total-Count` that countains total number of records.

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "name": "Tesla",
          "color": "#e6e6fa",
          "id": 1
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "4"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>

**Get Car**
----
Returns json data about specified car.

<details>

* **URL**

    /garage/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**
 
    `id=[integer]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "name": "Tesla",
        "color": "#e6e6fa",
        "id": 1
      }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>

**Create Car**
----
Creates a new car in a garage.

<details>

* **URL**

    /garage

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        name: string,
        color: string
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
      {
          "name": "New Red Car",
          "color": "#ff0000",
          "id": 10
      }
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>


**Delete Car**
----
Delete specified car from a garage

<details>

* **URL**

    /garage/:id

* **Method:**

    `DELETE`

* **Headers:**

    None

*  **URL Params**

    **Required:**
 
    `id=[integer]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {}
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>

**Update Car**
----
Updates attributes of specified car.

<details>

* **URL**

    /garage/:id

* **Method:**

    `PUT`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    **Required:**

    `id=[integer]`

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        name: string,
        color: string
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
          "name": "Car with new name",
          "color": "#ff00ff",
          "id": 2
      }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>

**Start / Stop Car's Engine**
----
Starts or stops engine of specified car, and returns it's actual velocity and distance.

<details>

* **URL**

    /engine

* **Method:**

    `PATCH`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Required:**
 
    `id=[integer]`
  
    `status=['started'|'stopped']`


* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "velocity": 64,
        "distance": 500000
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
      **Content:** 

      Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"

  OR

  * **Code:** 404 NOT FOUND <br />
      **Content:** 

      Car with such id was not found in the garage.

* **Notes:**

    None

</details>

**Switch Car's Engine to Drive Mode**
----
Switches engine of specified car to drive mode and finishes with success message or fails with 500 error.

<details>

* **URL**

    /engine

* **Method:**

    `PATCH`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Required:**
 
    `id=[integer]`
  
    `status=['drive']`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "success": true
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
      **Content:** 

      Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"

  OR
  
  * **Code:** 404 NOT FOUND <br />
      **Content:** 

      Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?

  OR

  * **Code:** 429 TOO MANY REQUESTS <br />
      **Content:** 

      Drive already in progress. You can't run drive for the same car twice while it's not stopped.

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 

      Car has been stopped suddenly. It's engine was broken down.

* **Notes:**

    - Before using this request you need to switch engine status to the 'started' status first.
    - Time when response will finish can be calculated using response from making engine 'started'.
    - Engine may fall randomly and at random time at the whole distance.

</details>

**Get Winners**
----
Returns json data about winners.

<details>

* **URL**

    /winners

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Optional:**
 
    `_page=[integer]`
  
    `_limit=[integer]`

    `_sort=['id'|'wins'|'time']`

    `_order=['ASC'|'DESC']`

    If `_limit` param is passed api returns a header `X-Total-Count` that countains total number of records.

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "id": 16,
          "wins": 1,
          "time": 2.92
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "4"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>

**Get Winner**
----
Returns json data about specified winner.

<details>

* **URL**

    /winners/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**
 
    `id=[integer]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
          "id": 1,
          "wins": 1,
          "time": 10
      }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>

**Create Winner**
----
Creates a new records in a winners table.

<details>

* **URL**

    /winners

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        id: number,
        wins: number,
        time: number
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
      {
        "id": 109,
        "wins": 1,
        "time": 10
      }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 

      Error: Insert failed, duplicate id

* **Notes:**

    None

</details>

**Delete Winner**
----
Delete specified car from a garage

<details>

* **URL**

    /winners/:id

* **Method:**

    `DELETE`

* **Headers:**

    None

*  **URL Params**

    **Required:**
 
    `id=[integer]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {}
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>

**Update Winner**
----
Updates attributes of specified winner.

<details>

* **URL**

    /winners/:id

* **Method:**

    `PUT`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    **Required:**

    `id=[integer]`

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        wins: number,
        time: number
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "wins": 2,
        "time": 11,
        "id": 16
      }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>
 */

// Starts or stops engine of specified car, and returns it's actual velocity and distance.

const URL = "http://127.0.0.1:3000";
const carElementAnimation = document.createElement("div");
carElementAnimation.classList.add("car-element__animation");
const engineStartBtn = document.createElement("button");
engineStartBtn.classList.add("engine-start");
const engineStopBtn = document.createElement("button");
engineStopBtn.classList.add("engine-stop");
const driveModeBtn = document.createElement("button");
driveModeBtn.classList.add("drive-mode");

carElementAnimation.append(engineStartBtn, engineStopBtn, driveModeBtn);

/* class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  async create() {
    try {
      const response = await fetch(`${URL}/garage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          color: this.color,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not create car.");
      }
      console.log(data);
      return data;
    } catch (err) {
      alert(err);
    }
  }
} */

/***********************************
 * GET CAR LIST FROM THE DATABASE *
 **********************************/

const getCarList = async () => {
  try {
    const response = await fetch(`${URL}/garage`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch car list.");
    }
    console.log(data);
    return data;
  } catch (err) {
    alert(err);
  }
};

/***********************************
 * RENDER CAR LIST *
 **********************************/

const renderCarList = async () => {
  const carList = await getCarList();
  const carListElement = document.querySelector(".car-list");
  carList.forEach((car) => {
    console.log(car);
    const carElement = document.createElement("li");
    carElement.classList.add("car-element");
    carElement.innerHTML = `
    <div class="car-element__info">
    <p class="car-element__make">${car.name}</p>
</div>
<div class="car-element__race">
    <svg style="fill:${car.color}" class="car-element__img" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000"
        enable-background="new 0 0 1000 1000" xml:space="preserve">
        <g>
            <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                <path
                    d="M2747.6,1675.8c-410.1-61.6-785.5-130.9-1251.4-233s-1370.8-331.1-1392-352.3c-19.3-19.2,30.8-413.9,94.3-743.2c73.2-367.7,207.9-766.3,277.2-808.6c15.4-9.6,554.5-19.2,687.3-11.5c30.8,1.9,48.1,21.2,65.5,75.1c65.5,202.1,236.8,423.6,419.7,541c485.2,311.9,1153.2,121.3,1413.2-400.5c38.5-77,71.2-155.9,71.2-175.2c0-27,23.1-34.6,130.9-42.4c71.2-5.8,177.1-5.8,236.8,0l105.9,7.7l-61.6,186.8c-138.6,413.9-219.5,916.4-219.5,1361.2v277.2h121.3c494.8-1.9,1118.6-115.5,1557.6-286.9c173.3-69.3,510.2-242.6,564.1-292.6c9.6-9.6-394.7-17.3-989.6-17.3H3569.7l13.5-119.4c40.4-362,177.1-872.1,277.2-1030c50.1-78.9,55.8-82.8,154-84.7c53.9,0,729.7-1.9,1497.9-1.9l1397.7-1.9l32.7,96.3c142.5,421.6,566,706.6,1003.1,671.9c155.9-11.6,327.3-61.6,440.9-130.9c182.9-111.7,371.6-344.6,435.1-537.1l32.7-94.3l132.8-1.9c73.2-1.9,240.7-1.9,373.5-1.9s288.8,0,348.5,1.9l109.7,1.9l-13.5,82.8c-5.8,44.3-38.5,132.9-71.2,198.3c-202.1,406.3-747,727.8-1521,901c-219.5,48.1-238.7,50.1-949.2,50.1h-723.9l-304.2,152.1c-546.8,273.4-1212.9,556.4-1703.9,725.8l-248.4,84.7L3664,1722C3123,1720,3009.4,1714.3,2747.6,1675.8z M4478.4,1519.8c465.9-159.8,1238-490.9,1796.3-770.1l246.4-123.2h733.5c720.1,0,739.3-1.9,956.9-50.1C8764.1,453.2,9210.8,235.7,9455.3-30c90.5-96.3,204.1-273.4,204.1-315.8c0-5.8-157.9-9.6-350.4-9.6l-352.3,1.9l-75.1,157.9c-130.9,279.2-406.2,504.4-723.9,593c-48.1,13.5-173.3,25-279.2,25c-159.8,0-219.5-9.6-342.7-52c-300.4-104-517.9-292.6-652.7-566l-78.9-159.8l-1407.4,3.9l-1405.5,5.8l-44.3,77c-25,42.4-63.5,136.7-84.7,211.8c-52,173.3-132.8,550.6-132.8,625.7v57.8h1122.4l1120.5,1.9l-86.6,77c-204.1,179.1-558.3,383.1-883.7,508.3c-200.2,75.1-560.3,169.4-810.5,209.9c-248.4,42.4-733.5,73.2-879.9,57.8l-121.3-11.6v-321.5c0-462.1,65.5-935.7,182.9-1322.7c27-86.6,48.1-163.7,48.1-169.4c0-5.8-38.5-11.5-82.8-11.5h-84.7l-80.9,163.7c-138.6,281.1-387,485.2-704.7,579.5c-136.7,40.4-437,46.2-568,9.6c-317.7-88.6-593-313.8-723.9-593l-75.1-159.8l-279.2,5.8l-277.2,3.9l-55.8,130.9C460.4-143.6,410.3,20,377.6,149C314,399.3,223.5,975,242.8,996.1c23.1,25,1120.5,288.8,1628.8,390.8c897.2,181,1057,198.3,1779,200.2l623.8,1.9L4478.4,1519.8z" />
                <path
                    d="M2593.6,1325.4c-200.2-32.7-750.9-192.5-783.6-225.3c-17.3-17.3,369.7-127.1,581.4-165.6c117.4-23.1,304.2-44.3,419.7-52l206-11.5v221.4c0,213.7-1.9,223.3-42.4,234.9C2926.6,1338.8,2670.6,1338.8,2593.6,1325.4z M2882.3,1105.9v-100.1l-148.2,13.5c-207.9,17.3-492.9,71.2-473.6,88.6c28.9,28.9,361.9,92.4,492.9,94.3l129,1.9V1105.9z" />
                <path
                    d="M1898.5,62.4c-157.9-65.5-236.8-121.3-325.4-219.5c-421.6-481.3-155.9-1224.5,479.4-1336.1c336.9-59.7,702.7,136.7,854.8,458.2c57.8,123.2,61.6,144.4,61.6,342.7c0,202.2-3.9,219.5-63.5,342.7c-82.8,165.6-217.6,300.4-383.1,383.1c-115.5,55.8-148.2,63.5-321.5,69.3C2031.4,106.7,1992.9,102.8,1898.5,62.4z M2424.1-66.6c173.3-65.5,327.3-227.2,392.8-408.2c42.3-121.3,36.6-333.1-11.6-464c-84.7-225.3-321.5-404.3-569.9-429.3c-236.8-25-485.2,96.3-621.9,302.3c-188.7,281.1-142.5,639.2,109.7,868.3C1921.6-18.5,2171.9,27.7,2424.1-66.6z" />
                <path
                    d="M1965.9-143.6c-227.2-90.5-373.5-302.3-373.5-541c0-184.8,44.3-296.5,171.3-423.6c138.6-136.7,254.1-181,452.4-167.5c504.4,32.7,731.6,639.2,373.5,995.4C2429.9-118.6,2170-62.8,1965.9-143.6z M2362.5-280.3c115.5-52,169.4-104,223.3-219.5c188.7-400.5-246.4-808.6-631.5-593c-163.6,92.4-267.6,298.4-234.9,469.8c28.9,148.3,144.4,294.6,277.2,352.3C2093-228.3,2258.6-232.2,2362.5-280.3z" />
                <path
                    d="M7633.9,77.8c-232.9-75.1-460.1-308-527.5-542.9c-50.1-171.3-30.8-406.2,46.2-569.9c240.7-516,922.2-627.7,1311.1-215.6C8843-850.2,8731.3-218.7,8240.4,23.9c-132.8,65.5-161.7,73.2-331.2,77C7784.1,104.7,7695.5,97,7633.9,77.8z M7994-30c223.3-40.4,408.2-182.9,502.5-388.9c46.2-100.1,55.8-144.4,55.8-273.4c0-317.7-190.6-568-498.7-656.5c-317.7-88.6-683.5,98.2-800.9,412c-148.2,392.8,92.4,825.9,506.3,906.8C7872.7-6.9,7868.8-6.9,7994-30z" />
                <path
                    d="M7703.3-132.1c-261.9-82.8-435.1-346.6-406.2-621.9c30.8-292.6,248.4-502.5,544.9-521.7c198.3-13.5,313.8,30.8,452.4,167.5c127.1,127.1,171.3,238.7,171.3,425.5C8465.7-295.7,8076.8-16.6,7703.3-132.1z M8071-276.5c161.7-75.1,265.7-240.7,265.7-425.5c0-319.6-331.2-535.2-637.2-413.9c-98.2,40.4-219.5,173.3-250.3,275.3c-48.1,159.8-7.7,346.6,98.2,464C7662.8-251.4,7913.1-203.3,8071-276.5z" />
                <path
                    d="M610.5-644.2c0-11.5,11.6-48.1,25-82.8c52-121.3,244.5-256.1,512.1-358.1l98.2-36.6v248.3V-625H928.2C722.2-625,610.5-632.7,610.5-644.2z M1111.1-846.4V-933l-92.4,46.2c-50.1,25-111.7,63.5-138.6,86.6l-48.1,38.5l140.5,1.9h138.6V-846.4z" />
                <path
                    d="M3248.2-856v-231h1838.6h1838.6v231v231H5086.8H3248.2V-856z M6790.7-865.6v-105.9H5086.8H3382.9v105.9v105.9h1703.9h1703.9V-865.6z" />
                <path
                    d="M8922-638.4c-7.7-5.8-13.5-109.7-13.5-231V-1087h102c248.4,0,544.9,129,752.8,329.2L9900-626.9l-483.2,1.9C9151.1-625,8927.7-630.7,8922-638.4z M9489.9-809.8c-98.2-59.7-256.1-117.5-367.7-134.8l-78.9-13.5v100.1v98.2h265.7h263.8L9489.9-809.8z" />
            </g>
        </g>
    </svg>
</div>
<div class="car-element__animation">
    <button class="btn engine-start">Start engine</button>
    <button class="btn engine-stop">Stop engine</button>
    <button class="btn drive-mode">Drive</button>
</div>
<div class="car-element-modify">
    <form class="car-element-modify__form">
        <label for="name">Change name</label>
        <input class="new-car__name" type="text" name="name" id="name">
        <label for="color">Change color</label>
        <input class="new-car__color" type="color" name="color" id="color">
        <button class="btn update-btn">Update car</button>
    </form>
    <button class="btn delete-btn">Delete car</button>
</div>
    `;
    carListElement.appendChild(carElement);
  });
};

renderCarList();

/***********************************
 * CREATE A NEW CAR *
 **********************************/

const createCar = async (name, color) => {
  const nameInput = document.querySelector(".create-name").value;
  const colorInput = document.querySelector(".create-color").value;
  console.log(nameInput, colorInput);
  const response = await fetch(`${URL}/garage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput,
      color: colorInput,
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

const createCarBtn = document.querySelector(".create-btn");
console.log(createCarBtn);
createCarBtn.addEventListener("click", createCar);

/***********************************
 * UPDATE SELECTED CAR *
 **********************************/

/* const updateInput = document.createElement("input");
updateInput.classList.add("new-car__name");
updateInput.setAttribute("type", "text");
updateInput.setAttribute("name", "name");
updateInput.setAttribute("id", "name");

const updateColor = document.createElement("input");
updateColor.classList.add("new-car__color");
updateColor.setAttribute("type", "color");
updateColor.setAttribute("name", "color");
updateColor.setAttribute("id", "color"); */

console.log(document.querySelector(".car-element"));

const updateCar = async (name, color) => {
  const updateInput = document.querySelector(".new-car__name").value;
  const updateColor = document.querySelector(".new-car__color").value;
  const id = document.querySelector(".car-element").id;
  const response = await fetch(`${URL}/garage/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: updateInput,
      color: updateColor,
    }),
  });
  const data = await response.json();
  return data;
};

const updateCarBtn = document.querySelector(".update-btn");
updateCarBtn.addEventListener("click", updateCar);

/***********************************
 * DELETE SELECTED CAR *
 **********************************/

const deleteCar = async (id) => {
  const response = await fetch(`${URL}/garage/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
  console.log(data);
};

const deleteCarBtn = document.createElement("button");
deleteCarBtn.classList.add("btn");
deleteCarBtn.classList.add("delete-btn");
deleteCarBtn.addEventListener("click", (e) => {
  console.log("deleteCarBtn clicked");
});

/* const deleteCarBtn = document.querySelector(".delete-btn");
deleteCarBtn.addEventListener("click", deleteCar()) */
