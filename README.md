# WD016 Blog (frontend)

![WBS Coding School](https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_logo.svg)

## Install

- Fork project
- Clone your fork:

```bash
git clone <link-to-project>
cd <project-directory>/
npm install
```

## Environment

The app needs the following environment variables

- REACT_APP_BLOG_API=Path to your Backend API, not trailing slashes:
-- `http://localhost:5050` ✔️
-- `http://localhost:5050/` ❌

# Commands

## Start

Dev command

```bash
npm start
```

## Build

Bundles the application for production

```bash
npm run build
```

# App architecture

The app is making use of `React Router Dom` with the following routes

```jsx
<Routes>
    <Route path='/' element={<GlobalLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='posts/:id' element={<SinglePost />} />
        <Route path='secret' element={<ProtectedLayout />}>
            <Route path='create' element={<CreatePost />} />
        </Route>
    </Route>
</Routes>
```

# Requirements 📝

You are tasked with implementing authentication in order to:

- Only allow blog posts creation to authenticated users
- Reading endpoints on the post resource (all and single) are public

# Hints 💡

- You have an `authUtils` file at hand that export some useful methods, this methods are already implemented in the `Login` and `Register` components. Your task is to refactor them so they can:
-- `getUser` => return the data for an user granted you send the token in the request
-- `registerUser` => return a valid token by registering a new user
-- `loginUser` => return a valid token by signing in as an existing user
- Store the token in browser storage or as a cookie (depending on how you are returning it from the backend)
- Create relevant pieces of `state`:
-- `user` => will hold user profile
-- `token` => will hold the token
-- `loading` => boolean, will be used to provide feedback to the user as to when an action is being resolved
-- `isAuthenticated` => boolean, will be used to set when and user is "logged in", i.e. we have a valid token for said user
- If the user is authenticated, i.e. `isAuthenticated` is true, you should not be able to acces the `Login` and `Register` components (check the `Navigate` component from `React Router Dom`)
- You might want to modify the `NavBar` render logic to only display the `Login` and `Register` buttons if you are NOT "logged in"
- Persist the user "logged in" status after a full refresh of the page by verifying if there's a token present, it's a valid one and getting the user data when the app first mounts (`useEffect` will come in handy)
- Finally, verify you can create a post from the FrontEnd while logged in!

