export function getUser(req, res) {
  try {
    res.status(200).send("Got the user");
  } catch (error) {
    res.status(500).send("Could not get the user");
  }
}

export function createUser(req, res) {
  try {
    res.status(201).send("Created a user");
  } catch (error) {
    res.status(500).send("Could not create user");
  }
}

export function loginUser(req, res) {
  try {
    res.status(200).send("User logged in");
  } catch (error) {
    res.status(500).send("Could not log in");
  }
}

export function logoutUser(req, res) {
  try {
    res.status(200).send("User logged out");
  } catch (error) {
    res.status(500).send("Could not log out");
  }
}
