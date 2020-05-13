import React, { Component } from "react";
import "./expert.scss";

export class ExpertDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      isLoading: true,
    };
  }
  async fetchDetails() {
    const options = {
      method: "GET",
      headers: {
        "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f"
      }
    };

    try {
      const response = await window.fetch(
        "https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy",
        options
      );
      const res = await response.json();
      let array = [];
      array.push(res.courseDetails);
      this.setState({
        details: array,
        isLoading: false
      });
    } catch {
      console.log("Error from fetching the data");
    }
  }

  componentDidMount() {
    this.fetchDetails();
  }

  playPause = () => {
    let myVideo = document.getElementById("video");
    if (myVideo.paused) {
      myVideo.play();
    } else myVideo.pause();
  };

  render() {
    const { isLoading, details } = this.state;
    return (
      <div className="wrapper">
        {!isLoading
          ? details.map(item => {
              return (
                <div key={item.id}>
                  <header>
                    <p>
                      {item.name} : <span>Introduction</span>
                    </p>
                  </header>
                  <div className="container">
                    <article>
                      <video onClick={this.playPause} id="video">
                        <source src={item.introVideo} type="video/mp4" />
                      </video>
                      <div className="description">
                        <h1 className="description__heading" id="title">
                          Description
                        </h1>
                        <p className="description__content">
                          {item.description}
                        </p>
                      </div>
                    </article>
                    <aside>
                      {item.modules.map(pannel => {
                        return (
                          <>
                            <div className="module">
                              <img
                                src={pannel.moduleExperts[0].profilePic}
                                className="module__profile_pic"
                                alt={pannel.moduleExperts[0].expertName}
                              />
                              <p className="module__info">
                                <span>{pannel.title}</span> :
                                <span>{pannel.name}</span>
                                <span className="duration">
                                  {pannel.durationStr}
                                </span>
                              </p>
                            </div>
                          </>
                        );
                      })}
                    </aside>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    );
  }
}
export default ExpertDetails;
