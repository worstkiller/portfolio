import React, { Component } from 'react';

class Tech extends Component {
  render() {
    return (
      <div class="columns" id="card-tech">
        <div class="column" className="Tech-title">
          <h1 class="title " className="Right-title">
            Technologies
          </h1>
          <h2 class="title title is-6" className="Right-title-sub">
            (I am hooked with)
          </h2>
        </div>
        <div class="column" className="Tech-card-container">
          <div className="Card-tech">
            <div class="column" className="Tech-subtitle">
              <h4 class="title is-4" className="Username-card">
                Android
              </h4>
            </div>
            <div class="column" className="Tech-subtitle-tags">
              <div class="tags">
                <span class="tag is-rounded is-medium  is-dark">RxJava</span>
                <span class="tag is-rounded is-medium  is-dark">LiveData</span>
                <span class="tag is-rounded is-medium  is-dark">
                  ConstraintLayout
                </span>
                <span class="tag is-rounded is-medium  is-dark">Firebase</span>
                <span class="tag is-rounded is-medium  is-dark">Room</span>
                <span class="tag is-rounded is-medium  is-dark">
                  Material Design
                </span>
                <span class="tag is-rounded is-medium  is-dark">LiveData</span>
                <span class="tag is-rounded is-medium  is-dark">ViewModel</span>
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
                <span class="tag is-rounded is-medium is-light">JetPack</span>
                <span class="tag is-rounded is-medium is-light">Retrofit</span>
                <span class="tag is-rounded is-medium is-light">Dagger2</span>
                <span class="tag is-rounded is-medium is-light">Glide</span>
                <span class="tag is-rounded is-medium is-light">Fresco</span>
                <span class="tag is-rounded is-medium is-light">Picasso</span>
                <span class="tag is-rounded is-medium is-light" is-light>
                  Facebook
                </span>
                <span class="tag is-rounded is-medium is-light">
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
                <span class="tag is-rounded is-medium is-dark">Kotlin</span>
                <span class="tag is-rounded is-medium is-dark">Java</span>
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
                <span class="tag is-rounded is-medium is-light">
                  Android Studio
                </span>
                <span class="tag is-rounded is-medium is-light">Git</span>
                <span class="tag is-rounded is-medium is-light">Postman</span>
                <span class="tag is-rounded is-medium is-light">Trello</span>
                <span class="tag is-rounded is-medium is-light">Zeplin</span>
                <span class="tag is-rounded is-medium is-light">Photoshop</span>
                <span class="tag is-rounded is-medium is-light">
                  Genymotion
                </span>
                <span class="tag is-rounded is-medium is-light">Travis CI</span>
                <span class="tag is-rounded is-medium is-light">Fabric</span>
                <span class="tag is-rounded is-medium is-light">Slack</span>
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
                <span class="tag is-rounded is-medium  is-dark">Flutter</span>
                <span class="tag is-rounded is-medium  is-dark">React Js</span>
                <span class="tag is-rounded is-medium  is-dark">Dart</span>
                <span class="tag is-rounded is-medium  is-dark">Swift</span>
                <span class="tag is-rounded is-medium  is-dark">Blogging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tech;
