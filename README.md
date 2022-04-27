# API Project: Request Header Parser Microservice

An example of Request Header Parser Microservice built with NodeJS, Typescript and Express.

## Technologies used

- Node.JS
- Typescript
- Express

## How does it work

- When you request the api, a header is transmitted. The api extract the information from the header and present you back the relevant elements.

  - IP: IP address from where the call to the API was made.
  - Language: The languages the user-agent uses (not always present (curl, postman, insomnia, etc... don't include language)).
  - software: The software used to call the API.

## Example output

```json
{
  "ipaddress": "109.192.8.40",
  "language": "en-GB,en-US;q=0.9,en;q=0.8,fr-FR;q=0.7,fr;q=0.6",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.50"
}
```

## Online

- https://headerwhoami.herokuapp.com/
