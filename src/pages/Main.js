import React from "react";
import StepBody from "../components/StepBody/StepBody";
import "./Main.scss";

class Main extends React.Component {
  state = {
    index: 0,
    all: {},
    answers: []
  };

  componentDidMount = () => {
    fetch("../assets/input.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          all: response,
          answers: response.items
        });
      });
  };

  goToPrev = () => {
    this.setState({ index: this.state.index - 1 });
  };

  checkPass = () => {
    const { answers, index } = this.state;

    let pass = false;
    let array = answers[index].options;

    for (let i = 0; i < array.length; i++) {
      if (array[i].selected === true) {
        pass = true;
      }
    }
    return pass;
  }

  goToNext = () => {
    if(!this.checkPass()) {
      alert("값을 입력해주세요.");
      return;
    }
    this.setState({ index: this.state.index + 1 });
  };

  handleSubmit = () => {
    if(!this.checkPass()) {
      alert("값을 입력해주세요.");
      return;
    }

    const { answers, all } = this.state;

    let forSubmit = {
      id: all.formId,
      items: answers.map(el => {
        return {
          id: el.itemId,
          answer: el.options
            .filter(el => el.selected)
            .map(el => el.text)
            .join()
        };
      })
    };
    console.log('output.json', forSubmit);
    alert(JSON.stringify(forSubmit));
  };

  setItem = options => {
    const { answers, index } = this.state;

    answers[index].options = options;

    this.setState({ answers });
  };

  render() {
    const { all, index, answers } = this.state;

    return (
      <div className="background">
        <form onSubmit={e => e.preventDefault()} className="main">
          <div className="title">{all.title}</div>
          <div className="progressBar">
            <div
              className="progressStyle"
              style={{ width: `calc(100%*(${index + 1})/${answers.length})` }}
            />
          </div>
          <div>
            {answers.length > 0 && (
              <StepBody setAnswer={this.setItem} data={answers[index]} />
            )}
          </div>
          <div className="buttons">
            {index !== 0 && (
              <button className="previous" onClick={this.goToPrev}>
                이전
              </button>
            )}

            {index === answers.length - 1 ? (
              <button className="next" value="제출" onClick={this.handleSubmit}>
                제출
              </button>
            ) : (
              <button className="next" onClick={this.goToNext}>
                다음
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Main;
