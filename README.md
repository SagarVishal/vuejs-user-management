# user-management

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# start json server
$ json-server --watch ./data/users.json
```

1. Install dependencies using npm install
2. Copy .env.example file to .env file
3. Run npm run dev: The server will be running on http://localhost:4000
4. Run json server json-server --watch ./data/users.json
5. Open http://localhost:4000 will display list of user
6. Edit will redirect you with the user data and save will redirect to list page where changes are reflected.
7. Delete will delete the user
8. Create will open modal and save will redirect to list page with the user added.
