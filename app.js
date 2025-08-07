Vue.component("navbar-component", {
  template: `
    <header class="navbar">
      <div class="left-section">
        <button class="get-btn">Get Synapse</button>
      </div>

      <nav class="middle-section">
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">App</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Home</a></li>
        </ul>
      </nav>

      <div class="right-section logo">
        <img src="images/logo.png" alt="Logo">
      </div>
    </header>
  `,
});

Vue.component("slope-banner", {
  template: `
    <section class="slope-banner">
      <!-- Konten opsional di dalam banner -->
    </section>
  `,
});

new Vue({
  el: "#app",
});
