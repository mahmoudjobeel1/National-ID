
# National ID 

A simple Node.js application that provides an API endpoint for validating and extracting information from national IDs. Currently, the focus is on Egyptian national IDs (country_code=Eg). The application follows Factory design pattern and  chain-of-responsibility design pattern to handle validation and extraction tasks in a modular and extensible way.

## Installation

1- Clone the repository:
```bash
    git clone https://github.com/mahmoudjobeel1/National-ID
    cd national-id
```

2- Install dependencies:
 ```bash
    npm install 
```

3- Run the application:
``` bash
    npm run dev
```
The server will start on http://localhost:5000.






    
## Running Tests

To run tests, run the following command

```bash
  npx jest
```


## API Reference

```http
  GET /validate?${id}&{country_code}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. NationalId |
| `country_code`      | `string` | **Required**. country code .eg |





## Documentation
### Egyptian ID illustration

![Egyptian ID](https://github.com/mahmoudjobeel1/National-ID/blob/main/images/image.png?raw=true)

![Governments Code](https://github.com/mahmoudjobeel1/National-ID/blob/main/images/image%20(1).png?raw=true)

## Code design decisions:
### Factory Design Pattern:
This project employs the Factory Design Pattern to facilitate the creation of specific validators based on the country code provided. The main components involved in this pattern are the `ValidatorFactory` and the concrete validator classes, such as `EgyptianValidator`.

### Chain of Responsibility
The validation process is divided into individual handlers, each responsible for a specific aspect of validation. These handlers are linked in a chain, allowing seamless processing and propagation of validation requests.

#### Class `Handler` 
The abstract `Handler` class serves as the base for all concrete handlers. It defines a common interface for handling validation requests.

#### Method: `setNextHandler`
Sets the next handler in the chain. 

#### Method: `handle`
Abstract method to be implemented by concrete handlers. Handles the validation request and passes it to the next handler in the chain if applicable.
 




## Usage/Examples

1- Make a ```GET``` request to the ```/validate``` endpoint with the ```id``` and ```country_code``` parameters.

2- The application will validate the national ID and extract relevant information.

3- The response will include the extracted information if the ID is valid; otherwise, an appropriate error message will be provided.

#### 1- API Valid ID Example
``` http
http://localhost:5000/validate?id=29001011234567&country_code=Eg
```

#### Response
```
{
    "birth_date": "1990-01-01",
    "birth_place": "Dakahlia",
    "person_sex": "Female"
}
```

#### 2- API InValid ID Example
``` http
http://localhost:5000/validate?id=49001011234567&country_code=Eg
```

#### Response
```
Invalid National ID -> Birth Date is in the future
```
## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mahmoud-jobeel-b6095017b/)


