import React, { Component } from "react";
import "./expert.scss";

export class ExpertDetails extends Component {
  constructor() {
    super();
    this.state = {
      experts: [],
      isLoading: true
    };
  }

  async fetchExpertDetails() {
    const options = {
      method: "GET",
      headers: {
        "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f"
      }
    };

    try {
      const response = await window.fetch(
        "https://stgapi.omnicuris.com/api/v3/courses/thyroid-in-pregnancy/experts",
        options
      );
      const res = await response.json();
      let array = [];
      array.push(res.expertDetails);
      this.setState({
        experts: array,
        isLoading: false
      });
    } catch {
      console.log("Error from fetching the data");
    }
  }

  componentDidMount() {
    this.fetchExpertDetails();
  }

  render() {
    const { isLoading, experts } = this.state;
    return (
      <>
        <div className="experts">
        <h1 className="description__heading" id="title">Experts Panel</h1>  
        <div className="expertsPanel">
        {!isLoading
            ? experts[0].map(item => {
                return (
                  <div className="expertsPanel__list" key={item.id}>
                    <img src={item.profilePic} alt={item.id} className="expert-pic"/>
                    <div className="expertsPanel__qualification">
                    <span>{item.title}{item.expertName}</span>
                    <span>{item.qualification}</span>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        </div>
      </>
    );
  }
}
export default ExpertDetails;
