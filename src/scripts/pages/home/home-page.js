import authGuard from "../../utils/auth-guard";

export default class HomePage {
  async render() {
    if (!authGuard.requireAuth()) return "";

    const user = authGuard.getCurrentUser();

    return `
      <section class="container">
        <div class="home-hero">
          <h1>Welcome, ${user?.name || "User"}!</h1>
          <p>Start sharing your stories with the world</p>
        </div>

        <div class="stories-controls">
          <div class="stories-header">
            <h2 class="stories-title">Latest Stories</h2>
          </div>
          <div class="stories-actions">
            <a href="#/add-story" class="btn btn-primary">
              + Add Story
            </a>
          </div>
        </div>

        <div class="empty-state">
          <div class="empty-state-icon">📖</div>
          <h3 class="empty-state-title">No Stories Yet</h3>
          <p class="empty-state-description">
            Be the first to share your story!
          </p>
          <a href="#/add-story" class="btn btn-primary">Create Your First Story</a>
        </div>
      </section>
    `;
  }

  async afterRender() {
    if (!authGuard.requireAuth()) return;
  }
}
