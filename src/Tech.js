import React, { Component } from 'react';

class Tech extends Component {
  render() {
    return (
      <div class="columns" id="card-tech">
        <div class="column is-narrow" className="Portfolio-title">
          <h1 class="title " className="Right-title">
            Technologies
          </h1>
          <h2 class="title title is-6" className="Right-title-sub">
            (I am hooked with)
          </h2>
        </div>
        <div class="column" className="Tech-card-container">
          <div class="card" className="Card-tech" id="Card-tech-title">
            <div class="columns">
              <div class="column" className="Tech-subtitle">
                <h4 class="title is-4" className="Username-card">
                  Android
                </h4>
              </div>
              <div class="column" className="Tech-subtitle-tags">
                <div class="tags">
                  <span class="tag is-rounded is-medium">RxJava</span>
                  <span class="tag is-rounded is-medium">LiveData</span>
                  <span class="tag is-rounded is-medium">ConstraintLayout</span>
                  <span class="tag is-rounded is-medium">Firebase</span>
                  <span class="tag is-rounded is-medium">Room</span>
                  <span class="tag is-rounded is-medium">Material Design</span>
                  <span class="tag is-rounded is-medium">LiveData</span>
                  <span class="tag is-rounded is-medium">ViewModel</span>
                </div>
              </div>

              <div class="column" className="Tech-subtitle">
                <h4
                  class="title is-4 "
                  className="Username-card"
                  id="Title-h4-tech"
                >
                  Libs
                </h4>
              </div>
              <div class="column" className="Tech-subtitle-tags">
                <div class="tags">
                  <span class="tag is-rounded is-medium">JetPack</span>
                  <span class="tag is-rounded is-medium">Retrofit</span>
                  <span class="tag is-rounded is-medium">Dagger2</span>
                  <span class="tag is-rounded is-medium">Glide</span>
                  <span class="tag is-rounded is-medium">Fresco</span>
                  <span class="tag is-rounded is-medium">Picasso</span>
                  <span class="tag is-rounded is-medium">Facebook</span>
                  <span class="tag is-rounded is-medium">
                    Google Speech to text
                  </span>
                </div>
              </div>

              <div class="column" className="Tech-subtitle">
                <h4
                  class="title is-4 "
                  className="Username-card"
                  id="Title-h4-tech"
                >
                  Language
                </h4>
              </div>
              <div class="column" className="Tech-subtitle-tags">
                <div class="tags">
                  <span class="tag is-rounded is-medium">Kotlin</span>
                  <span class="tag is-rounded is-medium">Java</span>
                </div>
              </div>

              <div class="column" className="Tech-subtitle">
                <h4
                  class="title is-4 "
                  className="Username-card"
                  id="Title-h4-tech"
                >
                  Tools
                </h4>
              </div>
              <div class="column" className="Tech-subtitle-tags">
                <div class="tags">
                  <span class="tag is-rounded is-medium">Android Studio</span>
                  <span class="tag is-rounded is-medium">Git</span>
                  <span class="tag is-rounded is-medium">Postman</span>
                  <span class="tag is-rounded is-medium">Trello</span>
                  <span class="tag is-rounded is-medium">Zeplin</span>
                  <span class="tag is-rounded is-medium">Photoshop</span>
                  <span class="tag is-rounded is-medium">Genymotion</span>
                  <span class="tag is-rounded is-medium">Travis CI</span>
                  <span class="tag is-rounded is-medium">Fabric</span>
                </div>
              </div>

              <div class="column" className="Tech-subtitle">
                <h4
                  class="title is-4 "
                  className="Username-card"
                  id="Title-h4-tech"
                >
                  Other Tech Interests
                </h4>
              </div>
              <div class="column" className="Tech-subtitle-tags">
                <div class="tags">
                  <span class="tag is-rounded is-medium">Flutter</span>
                  <span class="tag is-rounded is-medium">React Js</span>
                  <span class="tag is-rounded is-medium">Dart</span>
                  <span class="tag is-rounded is-medium">Swift</span>
                  <span class="tag is-rounded is-medium">Blogging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tech;
