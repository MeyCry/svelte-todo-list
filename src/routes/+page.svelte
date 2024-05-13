<main class="container">
  <h1 class="container__title">
    Welcome to SvelteKit todo list by <a href="https://github.com/MeyCry" title="github link">@MeyCry</a>
  </h1>
  <p>
    Visit <a href="/coffee">the coffee</a> page.
  </p>
  <p>Or visit <a href="/todo-list">TODO list</a></p>
</main>

<style lang="scss">
  .container {
    width: max(50vw, 400px);
    margin: 10vh auto 6rem;
    text-align: center;
    font-family: "PT Sans", Arial, sans-serif;

    &__title {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  a,
  a:visited {
    color: #0070f3;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
    &:active {
      color: tomato;
    }
  }
</style>
