<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Password Manager</title>
  </head>
  <body>
    <header>
      <h1>Password Manager</h1>
    </header>
    <main>
      <form id="passwordForm">
        <label for="site">Website:</label>
        <input type="text" id="site" required />

        <label for="username">Username:</label>
        <input type="text" id="username" required />

        <label for="password">Password:</label>
        <input type="password" id="password" required />

        <button type="submit">Save Password</button>
      </form>
      <div id="passwordsList">
        <h2>Saved Passwords</h2>
        <ul id="passwords"></ul>
      </div>
    </main>
    <script src="script.js"></script>
  </body>
</html>
